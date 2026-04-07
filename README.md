# Henry Vu — Portfolio

Personal portfolio website for **Vu Huy Hieu (Henry Vu)**, a Tech Lead / Senior Software Engineer with 8+ years of experience across fintech, healthcare, banking, and Web3.

## Live Preview

Open `index.html` directly in a browser — no build tools or server required.

## Tech Stack

- **HTML / CSS / JS** — vanilla, no frameworks, no bundler
- **Google Fonts** — Outfit, Material Symbols Rounded
- **Devicons** — technology logo icons

## Project Structure

```
portfolio/
├── index.html            # Main page (Hero, About, Projects, Skills, Contact)
├── project-detail.html   # Individual project detail page
├── shared.css            # Global styles and CSS variables
├── components.js         # Shared JS (config, render functions, animations)
├── projects-data.js      # All project data (PROJECTS array)
├── robots.txt            # Bot crawling rules
├── images/               # Project screenshots
└── CLAUDE.md             # AI assistant instructions
```

## Features

- Responsive design (desktop, tablet, mobile)
- Dark / Light theme toggle with localStorage persistence
- Scroll-triggered reveal animations
- Floating particle effect in hero section
- 3D tilt hover effect on cards
- Staggered card entrance animations
- Animated gradient text
- Dynamic project cards generated from data
- Skills grid with category filter tabs
- Anti-copy / anti-scrape client-side protection
- SEO-friendly semantic HTML

## Adding a New Project

Add a new object to the `PROJECTS` array in `projects-data.js`. It will automatically appear on the index page and have its own detail page at `project-detail.html?id={your-id}`.

## Contact

- Email: hieu.vh301195@gmail.com
- GitHub: [hieuvh3011](https://github.com/hieuvh3011)
- LinkedIn: [vu-huy-hieu-301195](https://www.linkedin.com/in/vu-huy-hieu-301195/)

## License

All rights reserved.
