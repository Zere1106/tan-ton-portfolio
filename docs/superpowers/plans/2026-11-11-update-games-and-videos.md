# Update Portfolio with New Games and Inline Video Player Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Cozy Aquarium and Block Shadow to projects data, support inline YouTube gameplay playback on each project card, and update portfolio navigation.

**Architecture:** 
- Centralize YouTube URL parsing and embed conversion (handling standard watch and shorts URLs with proper aspect ratios).
- Extend `ProjectCard` with interactive inline video mode: click to play directly in-place without page departure.
- Add rich project profiles for `cozy-aquarium` and `block-shadow` in `projects.js`.
- Update `main.jsx` navigation bar and section indexes to cleanly route between all 4 games.

**Tech Stack:** React, Vite, CSS3 Flexbox/Grid, YouTube IFrame Embed API.

**Spec:** `docs/superpowers/specs/2026-11-11-update-games-and-videos-design.md`

## Global Constraints
- Preserve existing responsive styling and dark paper aesthetic.
- Zero extra npm dependencies; use native iframe and CSS.
- Fast initial page load: only load iframe when video is requested.

---

### Task 1: Update `projects.js` with New Games and Video Links
**Files:**
- Modify: `src/data/projects.js`

- [x] Add `gameplay` video URLs to `regnora` and `zen-stack`.
- [x] Add `cozy-aquarium` project object with description, badges, tech stack, screenshots, highlights, challenges, and YouTube links.
- [x] Add `block-shadow` project object with description, badges, tech stack, screenshots, highlights, challenges, and YouTube links.

### Task 2: Implement Inline Video Player in `ProjectCard` & Media Area
**Files:**
- Modify: `src/components/ProjectCard.jsx`
- Modify: `src/components/MobilePhoneTrio.jsx`
- Modify: `src/styles.css`

- [x] Add helper function to parse YouTube URLs (extract ID from `watch?v=` and `shorts/`).
- [x] Implement inline video player state (`isPlayingVideo`) in `ProjectCard`.
- [x] Add play overlay button on media and wire the "Watch Gameplay" button to toggle the player.
- [x] Add responsive styles for 16:9 landscape embeds and 9:16 portrait Shorts embeds.
- [x] Allow `MobilePhoneTrio` to render dynamically for any project passing `mobileScreenshots`.

### Task 3: Update Header Navigation and Section Layout in `main.jsx`
**Files:**
- Modify: `src/main.jsx`

- [x] Update header `<nav>` links to include REGNORA, Zen Stack, Cozy Aquarium, and Block Shadow.
- [x] Update section numbers and titles for sequential numbering across all 4 games.
- [x] Ensure smooth scrolling and anchor tags work properly.

### Task 4: Verify and Build
**Files:**
- Build check: `npm run build` in `tan-ton-portfolio`

- [x] Run Vite production build to ensure zero JSX/syntax or asset errors.
- [x] Verify responsiveness and layout integrity.
