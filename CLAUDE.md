# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` / `npm start` — production build and serve
- `npm run lint` — ESLint (`eslint-config-next` core-web-vitals + typescript); run `npx eslint <file>` for a single file
- No test runner and no Prettier are configured. Type-check with `npx tsc --noEmit`.

## Architecture

Next.js 16 (App Router) + React 19 + Tailwind CSS 4, all under `src/`; imports use the `@/` alias. This is a port of the original static HTML site preserved in `backup/` (`index.html`, `showcase.html`, `spark_gallery.html`, …). The site is deployed at https://thesandboxclub.vercel.app (formerly Netlify); `SITE_URL` in `src/lib/site.ts` is the single source for it, used as `metadataBase` so page canonicals are relative paths.

- **Routes** (`src/app/`): `/` (home), `/brand`, `/join`. `layout.tsx` wraps every page in `Navbar` + `Footer` and defines the three `next/font` variables (`--font-dm-serif`, `--font-dm-mono`, `--font-outfit`).
- **`/spark` and `/showcase` were removed** (too much for a club just starting); `next.config.ts` redirects them home. The project ideas now live in the home page's `IdeasSection` (`#ideas`). The old code is in git history if a real showcase comes back.
- **Content is hard-coded data in `src/lib/`**, not fetched: `ideas.ts` (starter project ideas, grouped by theme), `practical.ts` (when/where/who and `REGISTER_URL`, shared by home and `/join`), `pillars.ts`, `timeline.ts`. Add or edit content there, not in components.
- **Server/client split**: `page.tsx` files stay server components so they can export `metadata`; interactive state lives in `"use client"` components (e.g. `Navbar`, `BrandModal`).
- **Components** (`src/components/`) are flat: `Brand*` for the brand page, plus section components (`*Section.tsx`) composed by pages.
- **Theming**: design tokens are Tailwind 4 `@theme inline` variables in `src/app/globals.css` (navy/teal/orange palette, `accent-*` colours for idea themes, `font-body|serif|mono`). Use these tokens rather than raw hex values. Small teal text on light backgrounds uses `text-teal-ink` (bright `teal` fails contrast there); bright `teal` is for navy sections and decoration.
- **Icons**: structural icons come from `src/components/Icon.tsx` (outlined, `currentColor`). Emoji are used only in the project ideas.
- **Motion**: `Section` adds `.reveal` (CSS scroll-driven fade-up); all motion lives in `globals.css` behind `prefers-reduced-motion: no-preference`.

## Repo notes

- `design/posters/`, `design/wallpapers/` and `design/infographic/` hold the HTML sources for the Brand page posters, wallpapers and infographic; each has a README on how to preview and re-render them into `public/assets/`. Posters are printed, so they stay white.
- `docs/` (~200MB of posters and `.docx` files) and `backup/` are reference material, not app code — don't glob or read them. Static assets served by the app live in `public/`.
