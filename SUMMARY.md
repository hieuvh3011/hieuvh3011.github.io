# Vu Huy Hieu (Henry Vu) — Profile Summary

## Overview

**Role:** Tech Lead & Senior Software Engineer
**Experience:** 8+ years
**Domains:** Fintech, Healthcare, Banking, Web3, E-commerce
**Location:** Vietnam
**Status:** Available for work

Full-stack developer focused on crafting clean, performant digital experiences. Led engineering teams of up to 48 people, architected super-app platforms serving millions of users. Specializes in micro-frontend architecture and super-app design — building modular, maintainable platforms where multiple teams can ship independently.

Beyond coding, focuses on engineering excellence: CI/CD pipelines, code quality standards, and mentoring engineers.

## Contact

| Channel | Info |
|---|---|
| Email | hieu.vh301195@gmail.com |
| Phone | +84 982 960 442 |
| GitHub | https://github.com/hieuvh3011 |
| LinkedIn | https://www.linkedin.com/in/vu-huy-hieu-301195/ |
| Portfolio | https://hieuvh3011.github.io |

## Stats

- **15+** projects shipped
- **10+** happy clients
- **48** largest team size led

---

## Skills

### Frontend
- React, Next.js, JavaScript, TypeScript

### Mobile
- Flutter, React Native, Dart

### Backend
- Node.js, NestJS, Spring Boot, Java

### Database
- MySQL, SQL Server

### DevOps & Tools
- AWS, Docker, Firebase, Sentry, Git

### Vibe Coding / AI Tools
- Claude Code, Cursor, ChatGPT

---

## Projects (11 total, newest → oldest)

### 1. NAB Business Lending — Core Banking Platform
- **Year:** 2025 – Present
- **Platform:** Web
- **Client:** National Australia Bank — one of Australia's "Big Four" banks
- **Role:** Frontend engineer delivering features for enterprise loan lifecycle management
- **Tech:** ReactJS, Java, Spring Boot, Node.js, TypeScript
- **Challenges:** Multi-layered enterprise banking architecture with strict compliance gates; backward-compatible changes for critical financial workflows; 12-person team under governance-heavy release process
- **Solutions:** Feature-flag-driven release strategy; comprehensive regression test suites; structured collaboration with Confluence docs, cross-team PR reviews; automated linting and type-safe domain models with two-approver policy
- **Result:** Successfully delivering frontend features for NAB's business lending platform processing full loan lifecycle under strict regulatory compliance

---

### 2. Vault22 — Smart Finance App
- **Year:** 2024 – 2025
- **Platform:** Mobile + Web
- **Client:** Vault22 — UAE-based fintech startup
- **Role:** Building cross-platform finance management app
- **Tech:** Flutter, ReactJS, Dart, TypeScript, Firebase
- **Challenges:** Feature parity across Flutter mobile and ReactJS web; rapid POC validation; translating complex financial concepts into intuitive UI
- **Solutions:** Shared component library and design system (40% less duplicate work); rapid POC workflow with staged deployments; progressive onboarding with contextual financial education; 2-week Agile sprints
- **Result:** Launched on iOS, Android, and web. Comprehensive personal finance tool for UAE users
- **Links:** [Android](https://play.google.com/store/apps/details?id=com.vault22.next.uae&hl=vi) | [iOS](https://apps.apple.com/vn/app/vault22-uae/id6751945237?l=vi) | [Web](https://vault22.com/)

---

### 3. Thomson Touch — Healthcare Super App
- **Year:** 2023 – 2025
- **Platform:** Mobile
- **Client:** Thomson Medical PTE LTD — leading private healthcare group in Singapore
- **Role:** Tech Lead — architected super-app, established engineering standards for 35-person team
- **Tech:** React Native, Next.js, Node.js, TypeScript, Adyen, Firebase, AWS
- **Challenges:** Scalable super-app with independent mini-apps; Adyen PCI-DSS compliant payments; state sync between React Native and Next.js; engineering standards for 35-person team
- **Solutions:** Micro-frontend-inspired super-app with shared event bus; tokenized payment flow with Adyen Drop-in SDK; centralized data layer with WebSocket real-time sync; comprehensive engineering playbook with automated CI checks
- **Result:** Launched on iOS and Android. Consolidated multiple healthcare services into a single super-app for appointment booking, admissions, and payments
- **Links:** [Android](https://play.google.com/store/apps/details?id=com.thomsonmedical.thomsontouch) | [iOS](https://apps.apple.com/vn/app/thomson-touch/id6736971996)

---

### 4. Vietcombank Onboarding Application
- **Year:** 2022 – 2023
- **Platform:** Tablet
- **Client:** Vietcombank — one of Vietnam's "Big 4" state-owned banks
- **Role:** Developed tablet app digitizing paper-based banking processes
- **Tech:** React Native, Spring Boot, JavaScript, Java, Kotlin, Swift
- **Challenges:** Hardware integration (citizen ID card reader via NFC); complex multi-step banking workflows (FATCA/AML); offline capability; sensitive customer data security
- **Solutions:** Custom React Native native modules (Kotlin/Swift) for ID card reader; dynamic form engine driven by JSON schema; offline-first with SQLite, request queuing, auto-sync; end-to-end encryption with platform-native keystores
- **Result:** Deployed to Vietcombank branches nationwide. Digitized paper-based processes, reduced wait times and data entry errors

---

### 5. MyPru — Insurance Super App
- **Year:** 2022 – 2023
- **Platform:** Mobile
- **Client:** Prudential — one of the largest life insurance companies across Asia and Africa
- **Role:** Architected super-app structure for multi-team development
- **Tech:** Flutter, .NET, Dart, Firebase
- **Challenges:** Super-app architecture for multiple independent feature teams in single Flutter codebase; shared core layers without tight coupling; app performance as modules grow; consistency across teams
- **Solutions:** Plugin-based structure with independent packages per feature; shared core with dependency injection (GetIt/Injectable); lazy loading for on-demand module initialization (< 2s launch); ADRs, shared lint rules, architecture fitness tests in CI
- **Result:** Launched on iOS and Android as Prudential's primary customer-facing app for policy management, payments, and insurance purchases
- **Links:** [Android](https://play.google.com/store/apps/details?id=zm.co.prudential.mypru&hl=vi) | [iOS](https://apps.apple.com/vn/app/pruonline/id1401799980)

---

### 6. Shareable Assets — Investment Platform
- **Year:** 2021 – 2023
- **Platform:** Mobile
- **Client:** Shareable Assets — Singapore-based fintech startup using blockchain for democratized investing
- **Role:** Set up entire project infrastructure, built secure investment platform
- **Tech:** Flutter, Solidity, Node.js, ReactJS, MySQL, AWS
- **Challenges:** Bridging traditional finance with blockchain tokenization; end-to-end security for real money transactions; full infrastructure setup from scratch; intuitive UX for retail investors
- **Solutions:** Dual-layer architecture (Node.js backend + dedicated Web3 service); certificate pinning, encrypted storage, biometric auth; fully automated CI/CD with GitHub Actions + Fastlane; step-by-step investment flow with progressive disclosure
- **Result:** Launched on iOS and Android. Enabled retail investors to access institutional-grade products through fractional tokenized ownership
- **Links:** [Android](https://play.google.com/store/apps/details?id=com.bluewhale.sa) | [iOS](https://apps.apple.com/vn/app/shareable-asset/id1476483122)

---

### 7. Probit Global — Crypto Exchange
- **Year:** 2021 – 2022
- **Platform:** Mobile
- **Client:** Probit Global — South Korean crypto exchange, top 60 on CoinMarketCap, 1000+ trading pairs
- **Role:** Led mobile development, coordinated with client's backend team
- **Tech:** Flutter, Dart, WebSocket, Firebase
- **Challenges:** Real-time order book visualization at high frequency without UI jank; split trading flows with real-time price feeds; data consistency during high-volatility events; cross-timezone client coordination
- **Solutions:** Virtualized order book with CustomPainter and diff-based updates (60fps); optimistic UI with server confirmation and auto-rollback; resilient WebSocket manager with auto-reconnection and sequence recovery; shared API contracts with Swagger/OpenAPI
- **Result:** Launched on iOS and Android. Full-featured mobile trading (spot, futures, wallet) serving 200+ countries
- **Links:** [Android](https://play.google.com/store/apps/details?id=com.probit.app.android2.release.global&hl=vi) | [iOS](https://apps.apple.com/vn/app/probit-global-mua-btc-eth/id6444780877?l=vi)

---

### 8. Travala — Blockchain Travel Booking Platform
- **Year:** 2021 – 2023
- **Platform:** Web
- **Client:** Travala — blockchain-based travel booking platform
- **Role:** Owned full technical foundation, designed architecture, mentored 18-person team
- **Tech:** Next.js, Spring Boot, Web3, TypeScript, Java, AWS
- **Challenges:** Building entire technical foundation from scratch for global scale; integrating Web3 payments alongside traditional methods; aggregating multiple travel inventory providers; mentoring 18-person team on blockchain
- **Solutions:** Modular monorepo architecture; payment abstraction layer normalizing fiat and crypto; aggregation service with adapter pattern, circuit breakers, caching (< 2s results); structured mentorship with weekly tech talks
- **Result:** Launched as a leading blockchain-powered travel booking platform supporting crypto and traditional payments
- **Links:** [Website](https://www.travala.com/)

---

### 9. Booking Care — Healthcare Platform
- **Year:** 2020 – 2023
- **Platform:** Web + Mobile
- **Client:** Booking Care — Vietnamese healthtech startup
- **Role:** Led cross-functional engineering teams across frontend, backend, and mobile
- **Tech:** ReactJS, React Native, Spring Boot, MySQL, Java, Docker, AWS
- **Challenges:** Cross-functional team leadership across 3 platforms; reliable appointment scheduling with complex availability rules; CI/CD and quality gates for multi-platform project; balanced review/feedback system
- **Solutions:** Shared API layer with BFF pattern; real-time slot management with optimistic locking; unified CI/CD with GitHub Actions; structured review system with verified appointment badges
- **Result:** Launched as bookingcare.vn, trusted healthcare booking platform in Vietnam
- **Links:** [Website](https://bookingcare.vn/)

---

### 10. MayDocSach — eCommerce Platform
- **Year:** 2020 – 2023
- **Platform:** Web
- **Client:** MayDocSach — Vietnamese e-commerce for Kindle e-readers and tablets
- **Role:** Full-stack development, tech stack selection, infrastructure setup
- **Tech:** NestJS, ReactJS, TypeScript, Docker, AWS
- **Challenges:** Tech stack selection for full eCommerce; complete order management with Vietnamese payment gateways and logistics; production infrastructure on AWS; SEO optimization for product pages
- **Solutions:** NestJS + ReactJS full-stack with TypeScript; modular order pipeline with state machine; Docker + GitHub Actions CI/CD on AWS (99.9% uptime); SSR with structured data and WebP images for SEO
- **Result:** Launched as maydocsach.vn, dedicated eCommerce platform for e-readers in Vietnam
- **Links:** [Website](https://www.maydocsach.vn/)

---

### 11. Ngan Luong E-Wallet Platform
- **Year:** 2018 – 2020
- **Platform:** Web + Mobile
- **Client:** NextTech Group — major Vietnamese technology conglomerate
- **Role:** Full-stack development across web and mobile
- **Tech:** ReactJS, React Native, Spring Boot, SQL Server, Java, Docker
- **Challenges:** Transactional consistency preventing double-spending under high concurrency; multiple Vietnamese bank API integrations; cross-platform code sharing (web + mobile); real-time fraud detection within latency budget
- **Solutions:** Pessimistic locking with idempotency keys; bank integration abstraction with adapter pattern; shared JS business logic layer (60% code reuse); async rule-based fraud scoring via message queue (P95 < 500ms)
- **Result:** Launched on web, Android, and iOS as nganluong.vn, financial backbone of NextTech ecosystem
- **Links:** [Website](https://www.nganluong.vn/)

---

## Key Strengths

- **Super-app & micro-frontend architecture** — designed and shipped super-apps for Thomson Medical, Prudential, and Vault22
- **Team leadership** — led teams from 12 to 48 engineers across multiple projects
- **Cross-platform** — built production apps with React, React Native, Flutter, Next.js, Spring Boot
- **Fintech security** — PCI-DSS compliance, payment integrations (Adyen), fraud detection, certificate pinning
- **Blockchain/Web3** — smart contracts (Solidity), tokenized assets, crypto exchange, Web3 payments
- **Engineering culture** — CI/CD pipelines, code review standards, mentoring, architecture decision records
