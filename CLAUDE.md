# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React + Vite static website for a Lehigh University Human-Centered AI course project, **Data Center Impact on Bethlehem** — a community resource about proposed data center development in Bethlehem and the Lehigh Valley (including development discussed near Route 22). It is content-heavy and mostly pre-built as a skeleton: the structure exists, and the ongoing work is filling in real text, media, and sources (see `TODO.md`). Deployed on Vercel; every push to `main` auto-deploys.

The central question the site explores: *How can communities navigate technological development while keeping people's needs, values, and voices at the center of the process?* The goal is to **inform, not persuade** — present reliable information, document a range of community perspectives, and help residents reach their own conclusions. The site itself is the Human-Centered AI artifact: a clear, trustworthy, participatory information experience, not an app with AI bolted on.

## Editorial principles (these govern all content edits)

When writing or editing any copy in `src/content/`, these rules take priority over making the page sound compelling:

- **Separate fact from opinion.** Label personal perspectives as such. Cite a source for every factual claim and distinguish measured results from projections.
- **Local evidence vs. general research.** A proposal being discussed publicly does not mean it is approved or will be built. Do not present general/national data-center facts as established local facts; local conclusions need local evidence (planning records, meeting minutes, permits, local reporting).
- **Be transparent about uncertainty.** If a proposal's water use, energy demand, tax impact, or job numbers are unknown, say so rather than estimating confidently.
- **Don't manufacture balance, and avoid loaded language.** Weight claims by evidence quality, not by how many people hold a view. Never frame development as automatically beneficial, harmful, inevitable, or unnecessary.
- **Protect interview participants.** Respect consent, anonymity preferences, and the context a quote was given in; don't edit clips or quotes in ways that misrepresent the speaker. Identify who is speaking and in what capacity.
- **Correct errors** when new evidence changes what can responsibly be reported.

## Recommended content coverage

The guideline recommends these topic areas (combine into the existing five pages as makes sense — they are not required to be separate pages): project overview; understanding data centers (plain-language explainer); local proposals with map and timeline; community voices and interviews; potential impacts (energy, water, environment, economy, infrastructure, neighborhood quality of life, how data centers support AI/cloud, possible community benefits); community participation and future possibilities; and sources, methodology, and update log. For any map, timeline, or data visualization, label the source and date of the underlying information and don't imply certainty where only estimates exist.

## Full guideline and project-specific rules

The complete course guideline is in `docs/project-guideline.md`. Read it when working on interviews, research, new features, or anything not covered here. Key points not repeated above:

- **Label every claim's status.** When adding facts, timeline events, or proposal details, mark whether each is a *confirmed fact*, *projection*, *opinion*, or *unresolved question*, and record the source, its publication date, and the date it was last checked.
- **Proposal statuses** use these terms: proposed, under review, approved, under construction, operational. Never upgrade a status without a source.
- **Interviews:** only publish quotes, names, or clips the participant consented to. Use open-ended, non-leading framing; don't assume protesters oppose all development or supporters dismiss all concerns. Caption every clip.
- **Feature priorities:** essential = overview, local proposals, citations, interview content, impact sections, responsive and accessible design. High = timeline, interactive map, community feedback form. Optional = data visualizations, search/filtering. Prefer finishing essentials before adding optional features.
- **Feedback form:** collect only what the project needs, explain how submissions are used, and never publish identifying details without permission.
- **Accessibility:** plain language for a non-technical audience, define technical terms on first use, alt text on every image, captions on every video, and check layouts at phone width.
- **Interview transcripts** are in `docs/interviews/` (index with speaker names, roles and format in `docs/interviews/README.md`). Everyone recorded consented to being in the project. Files marked `audio-only` are people who declined video: use their words or audio only, never video or images of them. Auto-transcription misspells names, so use the spellings in the README.
- **Success** means visitors understand the issue and can tell facts from projections and opinions, not that they change their minds.

## Commands

```bash
npm install        # first time, or after a new dependency is added
npm run dev        # dev server at http://localhost:5173, hot reload
npm run build      # production build into dist/ — run this before pushing; Vercel fails the same way
npm run preview    # serve the production build locally
```

There is no test suite, linter, or typechecker configured. `npm run build` is the only correctness check.

## Architecture

**Content is fully separated from presentation.** Page components (`src/pages/`) contain layout and JSX only — no copy. All user-facing text lives in plain-data modules under `src/content/en/`, one file per page (`home.js`, `impacts.js`, `community.js`, `hcai.js`, `about.js`) plus `site.js` (title, team, nav labels, footer) and `timeline.js`. `src/content/en/index.js` aggregates them into a single default-exported object.

To change wording, data, topics, timeline events, or sources, edit the content files — not the components. Components iterate over content arrays (e.g. `Impacts.jsx` maps `impacts.topics[].points` and `.sources`), so adding an item to a content array adds it to the rendered page.

**Content flows through React context.** `src/i18n/LanguageContext.jsx` holds the active language and exposes `useContent()`, which returns `{ content, lang, setLang, available }`. Every page and component reads copy via `const { content } = useContent();`. The provider wraps the app in `src/main.jsx`.

**Internationalization is built but single-language.** Only English is wired up (`languages = { en }`). Adding Spanish is a defined procedure documented in the header comments of `LanguageContext.jsx`: copy `src/content/en` → `src/content/es`, translate each file, import and register it in `LanguageContext.jsx`, then flip `SPANISH_READY` in `src/components/LanguageSwitch.jsx`.

**Routing.** `src/App.jsx` defines five routes plus a catch-all 404. `vercel.json` rewrites all paths to `index.html` so deep links like `/impacts` work on refresh — do not remove it. `src/main.jsx` swaps `BrowserRouter` for `MemoryRouter` when `VITE_PREVIEW` is set (single-file preview build).

## Conventions that matter

- **Filename capitalization:** Vercel's filesystem is case-sensitive while macOS is not. A build that works locally can fail on deploy if an import's casing doesn't match the file (`Header.jsx` ≠ `header.jsx`). Match import casing exactly.
- **Placeholders:** Unfinished content uses `[bracketed]` text and `#` for not-yet-real links. These are intentional and tracked in `TODO.md`; removing all of them is a pre-launch step.
- Media slots render through `src/components/MediaPlaceholder.jsx`; external links/citations through `src/components/SourceLinks.jsx`.
