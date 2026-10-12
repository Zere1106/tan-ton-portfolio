# Tan Ton — Game Developer Portfolio

A static, single-page React + Vite portfolio. Cream paper slides, condensed poster typography, responsive layouts, and a REGNORA-focused case study. No backend is required.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally http://127.0.0.1:5173).

```bash
npm run build
npm run preview
```

The production output is `dist/`. Deploy that folder to a static host. `public/` assets are copied to the output root.

## Content and files

- `src/main.jsx`: page composition, hero, about, skills, CV and contact sections.
- `src/components/ProjectCard.jsx`: reusable project case study.
- `src/components/Elements.jsx`: buttons, contact links, section labels and decorative X marks.
- `src/data/profile.js`: name, biography, education, availability, portrait, CV and contacts.
- `src/data/projects.js`: project array, media, tech, features, challenges and project links.
- `src/data/skills.js`: four skill groups.
- `src/styles.css`: paper textures, typography, responsive layout and motion preferences.
- `public/favicon.svg`: custom TT-inspired favicon.
- `.openai/hosting.json`: Sites identity and static output directory.

## Replace placeholders

No screenshots, portrait, downloadable CV, gameplay video, builds, devlog or real contact URLs were supplied. Nothing displayed is presented as a real game screenshot, and no additional games are invented.

1. Put your portrait in `public/images/tan-ton.webp`, then set `profile.portrait` to `/images/tan-ton.webp`.
2. Put a real screenshot in `public/images/regnora-gameplay.webp`, then set REGNORA's `screenshot` to `/images/regnora-gameplay.webp`. Update `screenshotAlt` too. The media placeholder disappears automatically.
3. Put your CV in `public/Tan-Ton-CV.pdf`, then set `profile.cvUrl` to `/Tan-Ton-CV.pdf`. All three CV buttons share this value. The PDF availability note also updates automatically.
4. Set each contact's `url` and `value` in `profile.js`. For email, use `url: 'mailto:YOUR_REAL_ADDRESS'` and `value: 'YOUR_REAL_ADDRESS'`. Supply actual GitHub, Itch.io and LinkedIn URLs.
5. Set the project's `links.gameplay`, `links.build`, `links.devlog`, and optional `links.repository` to your real URLs. A local build can live in `public/downloads/`, using a path such as `/downloads/REGNORA.zip`. Remote URLs can link to release pages.
6. Keep `repositoryNote` accurate. The supplied copy describes a private repository; update it if your sharing policy changes.

Missing URLs are `null`, so buttons are visibly disabled with an availability label rather than navigating to invented destinations. External links open a new tab; navigation stays on the page. A screenshot is not required for the site to build.

## Add another game

Add an object to the `projects` array at the `// Add future games here` comment in `src/data/projects.js`. Copy the existing object's shape and replace its contents. Each game needs a unique URL-safe `id`, plus `name`, `type`, `description`, `role`, `platform`, `status`, `tech`, `screenshot`, `screenshotAlt`, `built`, `highlights`, `challenges`, `links`, and `repositoryNote`. Keep collections as arrays even when empty, and unavailable links as `null`.

The first project is featured. When the array contains more than one project, an `OTHER GAMES` section renders the remaining games using the same reusable `ProjectCard`. With REGNORA alone, the section is hidden. Keep REGNORA first if it remains the main project.

## Design and accessibility

The page uses locally bundled Barlow Condensed, DM Sans and Kalam via Fontsource, with system fallbacks. It includes a skip link, visible keyboard focus, semantic navigation, image alt text, disabled availability states and reduced-motion support. Layouts adapt to phone, tablet and desktop widths. No analytics, forms, external data services or runtime API calls are included.
