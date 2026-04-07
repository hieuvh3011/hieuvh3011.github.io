/* ══════════════════════════════════════════
   Shared Components — rendered by JS
   ══════════════════════════════════════════ */

/** Escape HTML special characters to prevent XSS via innerHTML */
function escHtml(str) {
  var d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

const SITE = {
  name: 'Vu Huy Hieu (Henry Vu)',
  github: 'https://github.com/hieuvh3011',
  linkedin: 'https://www.linkedin.com/in/vu-huy-hieu-301195/',
  email: 'hieu.vh301195@gmail.com',
  phone: '+84 982 960 442',
  year: new Date().getFullYear()
};

/**
 * Initialize dark/light theme from localStorage, default to light
 */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Run immediately so there's no flash
initTheme();

/* ── Anti-copy / Anti-scrape Protection ── */
(function () {
  // Disable right-click context menu
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable keyboard shortcuts: Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      return false;
    }
  });

  // Disable drag on all elements
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });

  // Disable copy/cut
  document.addEventListener('copy', function (e) {
    e.preventDefault();
  });
  document.addEventListener('cut', function (e) {
    e.preventDefault();
  });
})();

/**
 * Render the shared footer into <footer id="site-footer"></footer>
 */
function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <p>&copy; ${SITE.year} ${SITE.name}. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="${SITE.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    </ul>
  `;
}

/**
 * Render contact cards into <div id="contact-cards"></div>
 */
function renderContactCards() {
  const el = document.getElementById('contact-cards');
  if (!el) return;
  el.innerHTML = `
    <a href="mailto:${SITE.email}" class="contact-card">
      <div class="contact-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </div>
      <div>
        <div class="contact-card-label">Email</div>
        <div class="contact-card-value">${SITE.email}</div>
      </div>
    </a>
    <a href="${SITE.github}" target="_blank" rel="noopener noreferrer" class="contact-card">
      <div class="contact-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      </div>
      <div>
        <div class="contact-card-label">GitHub</div>
        <div class="contact-card-value">hieuvh3011</div>
      </div>
    </a>
    <a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card">
      <div class="contact-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </div>
      <div>
        <div class="contact-card-label">LinkedIn</div>
        <div class="contact-card-value">vu-huy-hieu-301195</div>
      </div>
    </a>
    <a href="tel:+84982960442" class="contact-card">
      <div class="contact-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <div>
        <div class="contact-card-label">Phone</div>
        <div class="contact-card-value">${SITE.phone}</div>
      </div>
    </a>
  `;
}

/**
 * Init IntersectionObserver for .reveal elements
 */
function initRevealAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/**
 * Render project cards into <div id="projects-grid"></div>
 * @param {string} tech - filter by tech name, or 'all'
 */
function renderProjectCards(tech) {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;
  const filtered = !tech || tech === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.techstack.some(t => t.toLowerCase().includes(tech.toLowerCase())));
  grid.innerHTML = '';
  filtered.forEach(p => {
    const card = document.createElement('a');
    card.href = `project-detail.html?id=${encodeURIComponent(p.id)}`;
    card.className = 'project-card tilt-card';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.innerHTML = `
      <div class="tilt-shine"></div>
      <div class="project-meta">
        <span class="project-year">${escHtml(p.year)}</span>
        <span class="project-link"><span class="material-symbols-rounded" style="font-size:16px">open_in_new</span></span>
      </div>
      <h3>${escHtml(p.name)}</h3>
      <p>${escHtml(p.description)}</p>
      <div class="project-tags">${p.techstack.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
    `;
    grid.appendChild(card);
  });
  initTiltCards();
}

/**
 * Init project filter buttons
 */
function initProjectFilters() {
  const btns = document.querySelectorAll('#project-filters .skill-cat-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectCards(btn.dataset.tech);
    });
  });
}

/**
 * Init IntersectionObserver for .stagger-grid elements
 */
function initStaggerAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.stagger-grid').forEach(el => obs.observe(el));
}

/**
 * 3D tilt effect on .tilt-card elements
 */
function initTiltCards() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
      card.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
}

/**
 * Floating particles in hero canvas
 */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    const hero = canvas.parentElement;
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor(canvas.width * canvas.height / 12000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
  }

  function getParticleColor() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    return isDark ? '124, 115, 255' : '108, 99, 255';
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = getParticleColor();
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color}, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}
