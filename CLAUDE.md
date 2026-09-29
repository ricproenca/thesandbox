# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` / `npm start` — production build and serve
- `npm run lint` — ESLint (`eslint-config-next` core-web-vitals + typescript); run `npx eslint <file>` for a single file
- No test runner and no Prettier are configured. Type-check with `npx tsc --noEmit`.

## Architecture

Next.js 16 (App Router) + React 19 + Tailwind CSS 4, all under `src/`; imports use the `@/` alias. This is a port of the original static HTML site preserved in `backup/` (`index.html`, `showcase.html`, `spark_gallery.html`, …) — page metadata and canonical URLs still reference the old `.html` paths on `thesandboxclub.netlify.app`.

- **Routes** (`src/app/`): `/` (home), `/brand`, `/join`. `layout.tsx` wraps every page in `Navbar` + `Footer` and defines the three `next/font` variables (`--font-dm-serif`, `--font-dm-mono`, `--font-outfit`).
- **`/spark` and `/showcase` were removed** (too much for a club just starting); `next.config.ts` redirects them home. The project ideas now live in the home page's `IdeasSection` (`#ideas`). The old code is in git history if a real showcase comes back.
- **Content is hard-coded data in `src/lib/`**, not fetched: `ideas.ts` (starter project ideas, grouped by theme), `pillars.ts`, `timeline.ts`. Add or edit content there, not in components.
- **Server/client split**: `page.tsx` files stay server components so they can export `metadata`; interactive state lives in `"use client"` components (e.g. `Navbar`, `BrandModal`).
- **Components** (`src/components/`) are flat: `Brand*` for the brand page, plus section components (`*Section.tsx`) composed by pages.
- **Theming**: design tokens are Tailwind 4 `@theme inline` variables in `src/app/globals.css` (navy/teal/orange palette, `font-body|serif|mono`). Use these tokens rather than raw hex values.

## Repo notes

- `docs/` (~200MB of posters and `.docx` files) and `backup/` are reference material, not app code — don't glob or read them. Static assets served by the app live in `public/`.
