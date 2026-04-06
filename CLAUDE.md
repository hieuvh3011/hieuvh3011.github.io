# Portfolio — Vu Huy Hieu (Henry Vu)

Personal portfolio website for a Tech Lead / Senior Software Engineer with 8+ years of experience across fintech, healthcare, banking, and Web3.

## Project Structure

```
portfolio/
├── index.html            # Main page (Hero, About, Projects grid, Skills, Contact)
├── project-detail.html   # Individual project detail page (Context, Challenges, Solutions, Tech Stack, Result)
├── shared.css            # Global styles: CSS variables, buttons, tags, section labels, icon badges, footer, animations
├── components.js         # Shared JS: site config (SITE object), renderFooter(), renderContactCards(), renderProjectCards(), initRevealAnimations()
├── projects-data.js      # All project data as a PROJECTS array (7 projects)
├── images/               # Project screenshots, organized by project (e.g. images/thomson/)
└── CLAUDE.md             # This file
```

## Architecture

**Static site — no build tools, no framework, no bundler.** Just vanilla HTML/CSS/JS served directly.

### Data Flow

1. `projects-data.js` defines a global `PROJECTS` array. Each project object has: `id`, `platform`, `name`, `year`, `description`, `context` (client + problem), `challenges[]`, `solutions[]`, `techstack[]`, `links[]`, `result`, `screenshots[]`.
2. `components.js` defines a global `SITE` object (name, github, linkedin, email, phone) and shared render functions.
3. `index.html` calls `renderProjectCards()` which iterates `PROJECTS` and appends cards to `#projects-grid`. Each card links to `project-detail.html?id={project.id}`.
4. `project-detail.html` reads the `id` query param, finds the matching project in `PROJECTS`, and renders the full detail view.

### Styling Architecture

- **`shared.css`** — CSS variables (colors, spacing), reusable components (buttons, tags, badges, footer), animations (fadeUp, reveal, pulse). Both pages import this.
- **`index.html <style>`** — Page-specific styles: nav, hero, about, projects grid, skills, contact. All inline in `<style>` tag.
- **`project-detail.html <style>`** — Page-specific styles: detail nav, header, screenshots, context block, challenges/solutions lists, links, result card. All inline in `<style>` tag.

### Key CSS Variables (defined in shared.css :root)

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#FAFAF8` | Main background |
| `--bg-card` | `#FFFFFF` | Card backgrounds |
| `--bg-alt` | `#F3F3EE` | Alternating section background (projects) |
| `--bg-dark` | `#0F1114` | Dark sections (hero, contact, footer) |
| `--text` | `#1A1A1A` | Primary text |
| `--text-muted` | `#6B6B6B` | Secondary text |
| `--accent` | `#2563EB` | Primary accent (blue) |
| `--green` | `#16A34A` | Success/solutions color |
| `--orange` | `#EA580C` | Warning/challenges color |

### External Dependencies (loaded via CDN)

| Dependency | Purpose | Used in |
|---|---|---|
| Google Fonts — Outfit (300–800) | Primary font | Both pages |
| Google Fonts — Material Symbols Rounded (filled) | Icons throughout the UI | Both pages |
| Devicons | Technology logos in skills grid | index.html only |

### Animation System

- **`.reveal`** — Scroll-triggered fade-up animation via `IntersectionObserver` (initialized by `initRevealAnimations()` in components.js). Add class `reveal` to any element to animate it on scroll.
- **`.fade-in` + `.fade-in-{1-7}`** — CSS keyframe animations with staggered delays (used in project-detail.html for sequential section reveals on page load).
- **Hero animations** — Badge, h1, description, and CTA buttons each have their own `fadeUp` animation with staggered delays.

### Nav Behavior (index.html)

The nav switches between dark and light themes based on scroll position using `IntersectionObserver`:
- **Dark nav**: when hero section or contact section is visible.
- **Light nav**: when middle sections (about, projects, skills) are visible.
- Classes toggled: `dark-nav`/`light-nav` on nav, `dark`/`light` on logo and links.

### Skills Section (index.html)

Skills are rendered dynamically from a `SKILLS` array in inline JS. Each skill has `name`, `icon` (devicon class or null), `svg` (inline SVG for custom icons), `cat` (category), and optional `badge`.

Categories: `all`, `frontend`, `mobile`, `backend`, `database`, `tools`, `vibe`.

Filter buttons use `data-cat` attribute. Clicking a button filters and re-renders the grid.

Vibe Coding tools (Claude Code, Cursor, ChatGPT) use inline SVGs with brand colors since they don't have devicon support.

## Content / Data

### Projects (7 total, ordered newest → oldest in projects-data.js)

| ID | Name | Year | Platform | Tech |
|---|---|---|---|---|
| `nab-business-lending` | NAB Business Lending | 2025–Present | `web` | ReactJS, Spring Boot |
| `thomson-touch` | Thomson Touch Healthcare Super App | 2023–2025 | `mobile` | Flutter, Next.js |
| `vietcombank-onboarding` | Vietcombank Onboarding App | 2022–2023 | `tablet` | Flutter, Spring Boot |
| `mypru` | MyPru Insurance Super App | 2022–2023 | `mobile` | Flutter, .NET |
| `shareable-assets` | Shareable Assets Investment Platform | 2021–2023 | `mobile` | Flutter, Solidity, Node.js |
| `probit` | Probit Global Crypto Exchange | 2021–2022 | `mobile` | Flutter |
| `ngan-luong-ewallet` | Ngan Luong E-Wallet | 2018–2020 | `web` | ReactJS, React Native, Spring Boot |

### Project Data Structure

```js
{
  id: 'string',              // URL slug, used in ?id= query param
  platform: 'string',        // 'web' | 'mobile' | 'tablet' — controls screenshot frame aspect ratio
  name: 'string',            // Display name
  year: 'string',            // e.g. '2023 - 2025'
  description: 'string',     // Short description for card and detail header
  context: {
    client: 'string',        // Who the client is
    problem: 'string'        // What problem was being solved
  },
  challenges: ['string'],    // 4 items: mix of business + technical challenges
  solutions: ['string'],     // 4 items: corresponding solutions
  techstack: ['string'],     // Technology tags
  links: [                   // External links (app stores, websites). Empty array if internal/no public link
    { label: 'string', url: 'string' }
  ],
  result: 'string',          // Project outcome
  screenshots: []            // Array of { src, caption }. Empty array = no screenshot section rendered.
}
```

### Contact Info (defined in SITE object in components.js)

| Field | Value |
|---|---|
| Email | hieu.vh301195@gmail.com |
| GitHub | https://github.com/hieuvh3011 |
| LinkedIn | https://www.linkedin.com/in/vu-huy-hieu-301195/ |
| Phone | +84 982 960 442 |

## Common Tasks

### Adding a new project

1. Add a new object to the `PROJECTS` array in `projects-data.js` following the data structure above.
2. The project will automatically appear on the index page grid and have its own detail page at `project-detail.html?id={new-id}`.

### Adding a new skill

1. Add a new object to the `SKILLS` array in the inline `<script>` of `index.html`.
2. For standard tech: use devicon class with `colored` suffix (e.g. `devicon-react-original colored`).
3. For custom icons (no devicon): set `icon: null` and provide `svg` with inline SVG markup.
4. Assign a `cat` matching one of the filter buttons, or add a new button to `.skills-categories`.

### Updating contact info

Edit the `SITE` object at the top of `components.js`. All contact cards and footer links pull from this single source.

### Adding screenshots to a project

1. Place image files under `images/{project-name}/` (e.g. `images/thomson/thomson_01.jpg`).
2. Update the project's `screenshots` array: `{ src: 'images/thomson/thomson_01.jpg', caption: 'Description' }`.
3. Set the `platform` field to control the screenshot frame:
   - `'mobile'` — portrait frame (9:19.5 aspect ratio, 300px width, centered)
   - `'tablet'` — landscape frame (16:9)
   - `'web'` — landscape frame (16:9, full width)
4. If `screenshots` is an empty array `[]`, the screenshot section is hidden entirely (suitable for internal admin apps with no public-facing UI).
5. The detail page automatically renders a screenshot gallery with thumbnail navigation when multiple images are present.

## Design Decisions

- **No build tools** — Intentionally kept as plain HTML/CSS/JS for simplicity and zero setup. No npm, no bundler.
- **No photo section** — The About section deliberately omits a personal photo. Stats cards are displayed in a single row (3 columns on desktop, 2 on mobile).
- **Platform-aware screenshots** — Screenshot frames adapt to the project's platform: portrait for mobile apps, landscape for web/tablet. Projects without screenshots (internal tools) skip the section entirely.
- **No skill bars/progress indicators** — Skills use an icon grid with category filter tabs instead of proficiency bars, following current industry best practice (proficiency percentages are considered an anti-pattern by recruiters).
- **Material Symbols Rounded (filled)** — All icons use Google's Material Symbols Rounded with `FILL@1` for a consistent filled icon style.
- **Content max-width 1100px** — All content sections are constrained to 1100px and centered with `margin: 0 auto`.
- **Dark hero + contact** — The hero and contact sections use dark backgrounds; middle sections (about, projects, skills) use light backgrounds.

## Co-Author

This portfolio was built with assistance from **Claude Code (Anthropic)**.
