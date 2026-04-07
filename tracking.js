/**
 * Visitor Tracking — Firestore
 * Tracks: IP, geo, device, pages viewed, projects viewed, scroll depth, session duration
 */
(function () {
  // ── Privacy consent ──
  var consent = localStorage.getItem('_tracking_consent');

  function showBanner() {
    var banner = document.createElement('div');
    banner.className = 'privacy-banner';
    banner.innerHTML =
      '<p>This site collects anonymous visit data (device, location, pages viewed) to improve the experience.</p>' +
      '<div class="privacy-banner-actions">' +
      '<button class="privacy-btn-accept" id="privacy-accept">OK</button>' +
      '<button class="privacy-btn-decline" id="privacy-decline">Decline</button>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('privacy-accept').addEventListener('click', function () {
      localStorage.setItem('_tracking_consent', 'yes');
      banner.remove();
      initTracking();
    });
    document.getElementById('privacy-decline').addEventListener('click', function () {
      localStorage.setItem('_tracking_consent', 'no');
      banner.remove();
    });
  }

  if (consent === 'no') return;
  if (consent === 'yes') { initTracking(); return; }
  // No consent yet — show banner
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
  return;

  function initTracking() {

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBeNiakcD-kmgu332gP1klahbk_P05irbU",
    authDomain: "portfolio-ba9fd.firebaseapp.com",
    projectId: "portfolio-ba9fd",
    storageBucket: "portfolio-ba9fd.firebasestorage.app",
    messagingSenderId: "588308485155",
    appId: "1:588308485155:web:35c85a42a96e3a39a54d96"
  };

  firebase.initializeApp(FIREBASE_CONFIG);
  firebase.appCheck().activate('6LebWassAAAAAPZ-AqR-Z7p7ebTKdZBbEwLLqhFw', true);
  const db = firebase.firestore();

  // ── Session ID (persists across page navigations in same tab) ──
  let sessionId = sessionStorage.getItem('_sid');
  const isNewSession = !sessionId;
  if (!sessionId) {
    var arr = new Uint8Array(16);
    crypto.getRandomValues(arr);
    sessionId = Array.from(arr, function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    sessionStorage.setItem('_sid', sessionId);
  }

  const sessionRef = db.collection('sessions').doc(sessionId);
  const currentPage = location.pathname.includes('project-detail') ? 'project-detail' : 'index';
  var rawProjectId = new URLSearchParams(location.search).get('id');
  const projectId = rawProjectId && /^[a-z0-9-]{1,60}$/.test(rawProjectId) ? rawProjectId : null;

  // ── Device info ──
  const ua = navigator.userAgent;
  const device = {
    userAgent: ua,
    platform: navigator.platform,
    language: navigator.language,
    screen: screen.width + 'x' + screen.height,
    viewport: window.innerWidth + 'x' + window.innerHeight,
    isMobile: /Mobile|Android|iPhone|iPad/i.test(ua)
  };

  // ── Scroll tracking ──
  const sectionsViewed = new Set();
  let maxScrollPercent = 0;

  function initScrollTracking() {
    if (currentPage === 'index') {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) sectionsViewed.add(entry.target.id);
        });
      }, { threshold: 0.3 });

      ['hero', 'about', 'projects', 'skills', 'contact'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        var percent = Math.round((scrollTop / docHeight) * 100);
        if (percent > maxScrollPercent) maxScrollPercent = percent;
      }
    }, { passive: true });
  }

  // ── Get visitor IP + geo ──
  var GEO_APIS = [
    {
      url: 'https://ipinfo.io/json?token=',
      map: function (d) {
        return { ip: d.ip, city: d.city || '', region: d.region || '', country: d.country || '', countryCode: d.country || '', timezone: d.timezone || '', org: d.org || '' };
      }
    },
    {
      url: 'https://api.ipify.org?format=json',
      map: function (d) {
        return { ip: d.ip, city: '', region: '', country: '', countryCode: '', timezone: '', org: '' };
      }
    }
  ];

  function getGeoInfo() {
    function tryApi(index) {
      if (index >= GEO_APIS.length) return Promise.resolve({ ip: 'unknown' });
      var api = GEO_APIS[index];
      return fetch(api.url)
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          return res.json();
        })
        .then(function (data) {
          var result = api.map(data);
          if (!result.ip) throw new Error('no ip');
          return result;
        })
        .catch(function () { return tryApi(index + 1); });
    }
    return tryApi(0);
  }

  // ── Create or update session ──
  function initSession() {
    var pageEntry = {
      page: currentPage,
      projectId: projectId || null,
      time: new Date().toISOString()
    };

    if (isNewSession) {
      getGeoInfo().then(function (geo) {
        sessionRef.set({
          geo: geo,
          device: device,
          referrer: document.referrer || 'direct',
          startTime: firebase.firestore.FieldValue.serverTimestamp(),
          lastActive: firebase.firestore.FieldValue.serverTimestamp(),
          pages: [pageEntry],
          projectsViewed: projectId ? [projectId] : [],
          sectionsViewed: [],
          maxScrollPercent: 0,
          endTime: null
        });
      });
    } else {
      var update = {
        lastActive: firebase.firestore.FieldValue.serverTimestamp(),
        pages: firebase.firestore.FieldValue.arrayUnion(pageEntry)
      };
      if (projectId) {
        update.projectsViewed = firebase.firestore.FieldValue.arrayUnion(projectId);
      }
      sessionRef.set(update, { merge: true });
    }
  }

  // ── Save final state ──
  function saveExitData() {
    sessionRef.set({
      endTime: firebase.firestore.FieldValue.serverTimestamp(),
      lastActive: firebase.firestore.FieldValue.serverTimestamp(),
      sectionsViewed: Array.from(sectionsViewed),
      maxScrollPercent: maxScrollPercent
    }, { merge: true }).catch(function () {});
  }

  // ── Heartbeat: update every 30s so we know they're still active ──
  setInterval(function () {
    sessionRef.set({
      lastActive: firebase.firestore.FieldValue.serverTimestamp(),
      sectionsViewed: Array.from(sectionsViewed),
      maxScrollPercent: maxScrollPercent
    }, { merge: true }).catch(function () {});
  }, 30000);

  // ── Init ──
  initSession();
  initScrollTracking();

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') saveExitData();
  });
  window.addEventListener('beforeunload', saveExitData);

  } // end initTracking
})();
