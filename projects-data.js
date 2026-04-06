const PROJECTS = [
  {
    id: 'nab-business-lending',
    platform: 'web',
    name: 'NAB Business Lending - Core Banking Platform',
    year: '2025 - Present',
    description: 'Enterprise-grade core banking platform managing the full lifecycle of business loans for National Australia Bank, supporting complex lending workflows under strict regulatory compliance.',
    context: {
      client: 'National Australia Bank (NAB) — one of Australia\'s "Big Four" banks, serving millions of business and retail customers.',
      problem: 'NAB\'s business lending operations required a modern platform to manage the full lifecycle of enterprise loans — from application intake through approval, disbursement, and servicing. The platform needed to integrate with NAB\'s core banking systems while meeting Australia\'s stringent financial regulatory and governance requirements.'
    },
    challenges: [
      'Navigating a multi-layered enterprise banking architecture with strict compliance gates, where every frontend change must pass regulatory review before reaching production',
      'Implementing backward-compatible frontend changes for critical financial workflows without disrupting ongoing loan processing — any regression could block millions in lending operations',
      'Coordinating frontend delivery with backend engineers, QA, and business stakeholders across a 12-person team under a governance-heavy release process with limited deployment windows',
      'Maintaining consistent engineering quality in a large codebase with complex domain logic, where financial calculation errors could have significant business and compliance consequences'
    ],
    solutions: [
      'Adopted a feature-flag-driven release strategy with staged rollouts, allowing new UI changes to be tested in isolation behind compliance-approved gates before full production deployment',
      'Built comprehensive regression test suites covering critical lending workflows with snapshot testing and contract tests, ensuring backward compatibility across every release cycle',
      'Established a structured collaboration workflow with shared Confluence documentation, cross-team PR reviews, and pre-release sign-off checklists — reducing release cycle friction while maintaining compliance',
      'Enforced strict coding standards through automated linting, type-safe domain models, and mandatory code review with a minimum two-approver policy — catching financial logic errors before they reach QA'
    ],
    techstack: ['ReactJS', 'Java', 'Spring Boot', 'TypeScript'],
    links: [],
    result: 'Successfully delivering frontend features for NAB\'s business lending platform, supporting complex enterprise loan workflows used by bank staff across Australia. The platform processes the full loan lifecycle under strict regulatory compliance, serving as a critical tool for NAB\'s business banking operations.',
    screenshots: []
  },
  {
    id: 'thomson-touch',
    platform: 'mobile',
    name: 'Thomson Touch - Healthcare Super App',
    year: '2023 - 2025',
    description: 'Super-app healthcare platform including a patient mobile application and internal hospital management system, serving Thomson Medical Center in Singapore.',
    context: {
      client: 'Thomson Medical PTE LTD — a leading private healthcare group in Singapore.',
      problem: 'Thomson Medical needed a unified digital platform to modernize patient engagement. Patients had to call or visit the hospital for appointments, admission, and payments. Internal staff relied on fragmented legacy tools for hospital operations. The goal was to build a super-app that consolidates multiple healthcare services into a single platform for both patients and medical staff.'
    },
    challenges: [
      'Designing a scalable super-app architecture that allows multiple independent mini-apps (appointment, admission, payment, etc.) to coexist within a single shell without tight coupling',
      'Integrating Adyen payment gateway under strict PCI-DSS compliance requirements while supporting multiple payment methods across Singapore regulations',
      'Managing complex state synchronization between the Flutter mobile app and the Next.js hospital management system when both platforms operate on shared patient data',
      'Establishing consistent frontend engineering standards, CI/CD pipelines, and Git workflows across a 35-person team with varying experience levels to ensure code quality at scale'
    ],
    solutions: [
      'Architected a micro-frontend-inspired super-app structure where each mini-app is independently deployable with its own lifecycle, communicating through a shared event bus and dependency injection — enabling parallel team development without merge conflicts',
      'Implemented a tokenized payment flow with Adyen Drop-in SDK, isolating sensitive card data from the app layer and using webhook-based confirmation to guarantee transaction integrity under PCI-DSS',
      'Built a centralized data layer with repository pattern and real-time sync via WebSocket, ensuring both Flutter and Next.js clients reflect the same patient state with optimistic UI updates and server reconciliation',
      'Established a comprehensive engineering playbook including branching strategy, PR review checklist, linting rules, and automated CI checks — reducing production bugs by enforcing quality gates before merge'
    ],
    techstack: ['Flutter', 'Next.js', 'Dart', 'TypeScript', 'Adyen', 'Firebase', 'AWS'],
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.thomsonmedical.thomsontouch' },
      { label: 'iOS App', url: 'https://apps.apple.com/vn/app/thomson-touch/id6736971996' }
    ],
    result: 'Successfully launched on both iOS and Android app stores. The platform consolidated multiple healthcare services into a single super-app, enabling patients to book appointments, manage admissions, and make payments digitally. The hospital management system streamlined internal operations for medical staff across Thomson Medical Center.',
    screenshots: [
      { src: 'images/thomson/thomson_01.jpg', caption: 'Thomson Touch app screenshot 1' },
      { src: 'images/thomson/thomson_02.jpg', caption: 'Thomson Touch app screenshot 2' },
      { src: 'images/thomson/thomson_03.jpg', caption: 'Thomson Touch app screenshot 3' },
      { src: 'images/thomson/thomson_04.jpg', caption: 'Thomson Touch app screenshot 4' },
      { src: 'images/thomson/thomson_05.jpg', caption: 'Thomson Touch app screenshot 5' },
      { src: 'images/thomson/thomson_06.jpg', caption: 'Thomson Touch app screenshot 6' },
      { src: 'images/thomson/thomson_07.jpg', caption: 'Thomson Touch app screenshot 7' }
    ]
  },
  {
    id: 'vietcombank-onboarding',
    platform: 'tablet',
    name: 'Vietcombank Onboarding Application',
    year: '2022 - 2023',
    description: 'Tablet application that digitized traditional paper-based banking processes into fully digital workflows for Vietcombank — one of the largest state-owned banks in Vietnam.',
    context: {
      client: 'Vietcombank (Joint Stock Commercial Bank for Foreign Trade of Vietnam) — one of Vietnam\'s "Big 4" state-owned banks.',
      problem: 'Vietcombank\'s branch operations relied heavily on paper forms for account opening, card issuance, and compliance checks (FATCA, AML). This created long customer wait times, high error rates from manual data entry, and audit difficulties. The bank needed a tablet-based solution for tellers to digitize these workflows while integrating with hardware devices like citizen ID card readers.'
    },
    challenges: [
      'Integrating physical hardware (citizen ID card reader via NFC/contact chip) with a Flutter mobile application — requiring platform channel modules for low-level device communication on both Android and iOS',
      'Implementing complex multi-step financial workflows (account creation, FATCA/AML compliance, card issuance) with strict validation rules that vary by product type, customer segment, and regulatory requirements',
      'Ensuring offline capability for tablet apps used in bank branches with unreliable network — tellers must be able to continue serving customers even during network outages',
      'Coordinating parallel development across a 48-person team building interconnected banking workflows, where changes in one flow often had cascading effects on others'
    ],
    solutions: [
      'Developed custom Flutter platform channels (Kotlin/Swift) to interface with the ID card reader SDK, abstracting hardware communication behind a unified Dart API that handles connection lifecycle, data parsing, and error recovery',
      'Built a dynamic form engine driven by JSON schema configuration, where each banking product defines its own validation rules, field dependencies, and submission flow — enabling rapid product onboarding without code changes',
      'Implemented an offline-first architecture with local SQLite storage, request queuing, and automatic sync with conflict detection when connectivity resumes — ensuring zero data loss during network interruptions',
      'Established a modular architecture separating shared components, workflow-specific modules, and integration layers, with clear ownership boundaries per team — reducing cross-team merge conflicts significantly'
    ],
    techstack: ['Flutter', 'Spring Boot', 'Dart', 'Java', 'Kotlin', 'Swift'],
    links: [],
    result: 'Successfully deployed as an internal application to Vietcombank branches nationwide. The app digitized paper-based banking processes, significantly reducing customer wait times and manual data entry errors. Tellers could complete account opening and compliance workflows entirely on tablet, including reading citizen ID cards electronically.',
    screenshots: []
  },
  {
    id: 'mypru',
    platform: 'mobile',
    name: 'MyPru - Insurance Super App',
    year: '2022 - 2023',
    description: 'All-in-one mobile application by Prudential enabling customers to manage insurance policies, make secure payments, purchase travel insurance, and complete paperless transactions.',
    context: {
      client: 'Prudential — one of the largest life insurance companies operating across Asia and Africa.',
      problem: 'Prudential\'s customers had to visit branches or use multiple disconnected channels to manage policies, submit claims, and make payments. The company needed a single mobile super-app that consolidates all customer-facing insurance services while supporting modularization for multiple feature teams to develop independently within the same codebase.'
    },
    challenges: [
      'Designing a super-app architecture that supports multiple feature teams working independently on separate modules (policy management, payments, travel insurance) within a single Flutter codebase — without causing dependency conflicts or build-time bottlenecks',
      'Defining clear module boundaries and shared core layers in a monorepo structure, where cross-cutting concerns (authentication, analytics, networking) must be reusable without creating tight coupling between feature modules',
      'Ensuring consistent app performance and startup time as the super-app grows with new feature modules — each additional mini-app increases the binary size and initialization overhead',
      'Maintaining architectural consistency and code quality across multiple feature teams with different coding styles and varying levels of experience with Flutter'
    ],
    solutions: [
      'Architected a plugin-based super-app structure using Flutter\'s package system, where each feature module is an independent package with its own dependency graph — enabling parallel team development with isolated builds and unit tests',
      'Designed a shared core layer with dependency injection (GetIt/Injectable) providing common services (auth, API client, analytics) through abstract interfaces — allowing feature modules to consume shared capabilities without direct dependency on implementation details',
      'Implemented lazy loading and deferred module initialization, loading feature modules on-demand rather than at startup — keeping app launch time under 2 seconds even as the module count grew',
      'Established architecture decision records (ADRs), shared lint rules, and automated architecture fitness tests in CI — ensuring every PR aligns with the defined super-app patterns before merge'
    ],
    techstack: ['Flutter', '.NET', 'Dart', 'Firebase'],
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=zm.co.prudential.mypru&hl=vi' },
      { label: 'iOS App', url: 'https://apps.apple.com/vn/app/pruonline/id1401799980' }
    ],
    result: 'Successfully launched on both iOS and Android app stores as Prudential\'s primary customer-facing mobile application. The super-app enables customers to manage policies, make payments, and purchase insurance products in a unified, paperless experience.',
    screenshots: []
  },
  {
    id: 'shareable-assets',
    platform: 'mobile',
    name: 'Shareable Assets - Investment Platform',
    year: '2021 - 2023',
    description: 'Secure mobile investment platform enabling retail investors to access quality capital market products including real estate assets and investment-grade bonds — traditionally available only to institutional investors.',
    context: {
      client: 'Shareable Assets — a Singapore-based fintech startup democratizing access to institutional-grade investment products through blockchain technology.',
      problem: 'High-quality investment products like real estate assets and investment-grade bonds were traditionally accessible only to institutional or accredited investors due to high minimum investments and complex legal structures. Shareable Assets needed a mobile platform that tokenizes these assets on blockchain, enabling retail investors to participate with fractional ownership while maintaining regulatory compliance.'
    },
    challenges: [
      'Building a secure investment platform that bridges traditional finance (real estate, bonds) with blockchain-based asset tokenization — requiring both conventional financial logic and smart contract integration in a single mobile app',
      'Ensuring end-to-end security for financial transactions involving real money and tokenized assets, where vulnerabilities could result in direct financial loss for investors',
      'Setting up the entire project infrastructure from scratch — CI/CD pipelines, backend architecture, mobile app foundation, and deployment workflows — as a small team with tight deadlines',
      'Translating complex financial and blockchain concepts into an intuitive mobile UX that retail investors (non-technical users) can navigate confidently'
    ],
    solutions: [
      'Designed a dual-layer architecture where the Flutter mobile app communicates with a Node.js backend for traditional financial operations, while smart contract interactions are handled through a dedicated Web3 service layer — isolating blockchain complexity from the core app logic',
      'Implemented certificate pinning, encrypted local storage, biometric authentication, and transaction signing with hardware-backed keystores — creating multiple security layers for protecting investor assets and sensitive financial data',
      'Built a fully automated CI/CD pipeline with GitHub Actions for both mobile (Fastlane) and backend (Docker + AWS), including automated testing, code signing, and staged deployments — enabling the small team to ship reliably with minimal manual intervention',
      'Designed a step-by-step investment flow with progressive disclosure, contextual tooltips, and real-time portfolio visualization — abstracting blockchain complexity so users interact with familiar investment concepts rather than crypto terminology'
    ],
    techstack: ['Flutter', 'Solidity', 'Node.js', 'ReactJS', 'MySQL', 'AWS'],
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.bluewhale.sa' },
      { label: 'iOS App', url: 'https://apps.apple.com/vn/app/shareable-asset/id1476483122' }
    ],
    result: 'Successfully launched on both iOS and Android app stores. The platform enabled retail investors to access institutional-grade investment products including real estate assets and investment-grade bonds through fractional tokenized ownership.',
    screenshots: []
  },
  {
    id: 'probit',
    platform: 'mobile',
    name: 'Probit Global - Crypto Exchange',
    year: '2021 - 2022',
    description: 'Mobile trading application for Probit Global — a cryptocurrency exchange ranked in the top 60 by market capitalization on CoinMarketCap, supporting spot trading, futures, and wallet management.',
    context: {
      client: 'Probit Global — a South Korean cryptocurrency exchange serving global users with support for 1,000+ trading pairs.',
      problem: 'Probit had a functional web-based trading platform but lacked a competitive mobile application. Mobile trading accounts for over 70% of crypto exchange volume, and without a polished mobile app, Probit was losing users to competitors like Binance and KuCoin. The client\'s backend team maintained the trading engine, while our team was responsible for delivering the complete mobile trading experience.'
    },
    challenges: [
      'Building a real-time order book visualization that updates at high frequency (multiple updates per second) without causing UI jank or excessive battery drain on mobile devices',
      'Implementing complex split trading flows (spot buy/sell, futures with leverage) with real-time price feeds and order matching — where even small UI delays can result in users executing trades at unintended prices',
      'Ensuring data consistency between the client\'s backend trading engine and the mobile app state, especially during high-volatility market events when WebSocket connections may drop or messages arrive out of order',
      'Leading requirement alignment between our mobile team and the client\'s backend team across different time zones and technical cultures — where miscommunication on trading API contracts could cause critical financial bugs'
    ],
    solutions: [
      'Implemented a virtualized order book renderer using Flutter\'s CustomPainter with a diff-based update strategy — only re-rendering changed price levels instead of the full book, achieving smooth 60fps updates even during high-frequency market events',
      'Built a trade execution pipeline with optimistic UI updates and server-side confirmation, showing immediate visual feedback while the order processes — with automatic rollback and user notification if the backend rejects the order',
      'Designed a resilient WebSocket manager with automatic reconnection, message buffering, and sequence-based state recovery — ensuring the app recovers gracefully from connection drops and reconstructs accurate market state without requiring a full reload',
      'Established shared API contract documentation with Swagger/OpenAPI specs, bilateral integration test suites, and weekly sync meetings with the client\'s backend team — reducing API misalignment issues by 80%'
    ],
    techstack: ['Flutter', 'Dart', 'WebSocket', 'Firebase'],
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.probit.app.android2.release.global&hl=vi' },
      { label: 'iOS App', url: 'https://apps.apple.com/vn/app/probit-global-mua-btc-eth/id6444780877?l=vi' }
    ],
    result: 'Successfully launched on both iOS and Android app stores. The app provides a full-featured mobile trading experience including spot trading, futures trading, and wallet management for Probit Global\'s user base across 200+ countries.',
    screenshots: []
  },
  {
    id: 'ngan-luong-ewallet',
    platform: 'web',
    name: 'Ngan Luong E-Wallet Platform',
    year: '2018 - 2020',
    description: 'E-wallet platform supporting deposits, withdrawals, wallet transfers, and payment services within the NextTech ecosystem — one of the earliest digital payment platforms in Vietnam.',
    context: {
      client: 'NextTech Group — a major Vietnamese technology conglomerate operating across e-commerce, fintech, and logistics.',
      problem: 'NextTech needed a unified digital wallet to power financial transactions across its ecosystem of e-commerce and service platforms. Users needed to deposit, withdraw, transfer money, and pay for services seamlessly. The platform had to integrate with Vietnamese banking infrastructure and comply with State Bank of Vietnam regulations for e-wallet operators.'
    },
    challenges: [
      'Ensuring transactional consistency and preventing double-spending in a high-concurrency environment where thousands of wallet operations (deposits, withdrawals, transfers) happen simultaneously',
      'Integrating with multiple Vietnamese bank APIs that each have different authentication mechanisms, response formats, timeout behaviors, and reconciliation processes',
      'Building a responsive cross-platform experience (web + React Native mobile) that shares business logic while adapting to platform-specific UX patterns and performance constraints',
      'Handling real-time fraud detection for financial transactions while keeping the payment flow latency under acceptable thresholds for user experience'
    ],
    solutions: [
      'Implemented pessimistic locking with database-level row locks on wallet balances during transactions, combined with idempotency keys to safely handle retries — guaranteeing exactly-once processing even under concurrent load',
      'Built a bank integration abstraction layer with adapter pattern, where each bank connection implements a unified interface for transfer, status check, and reconciliation — enabling new bank integrations without modifying core payment logic',
      'Architected a shared business logic layer in JavaScript consumed by both ReactJS web and React Native mobile, with platform-specific UI layers — achieving 60% code reuse while maintaining native UX quality',
      'Deployed a rule-based fraud scoring engine running asynchronously via message queue, flagging suspicious transactions for manual review without blocking the payment flow — keeping P95 latency under 500ms'
    ],
    techstack: ['ReactJS', 'React Native', 'Spring Boot', 'SQL Server', 'Java', 'Docker'],
    links: [
      { label: 'Website', url: 'https://www.nganluong.vn/' }
    ],
    result: 'Launched successfully on web, Android, and iOS as nganluong.vn. The platform served as the financial backbone of the NextTech ecosystem, processing deposits, withdrawals, transfers, and payments for users across multiple NextTech services.',
    screenshots: []
  }
];
