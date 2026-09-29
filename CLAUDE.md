# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` / `npm start` — production build and serve
- `npm run lint` — ESLint (`eslint-config-next` core-web-vitals + typescript); run `npx eslint <file>` for a single file
- No test runner and no Prettier are configured. Type-check with `npx tsc --noEmit`.

## Architecture

Next.js 16 (App Router) + React 19 + Tailwind CSS 4, all under `src/`; imports use the `@/` alias. This is a port of the original static HTML site preserved in `backup/` (`index.html`, `showcase.html`, `spark_gallery.html`, …) — page metadata and canonical URLs still reference the old `.html` paths on `thesandboxclub.netlify.app`.

- **Routes** (`src/app/`): `/` (home), `/brand`, `/join`, `/showcase`, `/spark`. `layout.tsx` wraps every page in `Navbar` + `Footer` and defines the three `next/font` variables (`--font-dm-serif`, `--font-dm-mono`, `--font-outfit`).
- **Content is hard-coded data in `src/lib/`**, not fetched: `projects.ts` (showcase), `spark.ts` (Spark gallery, the largest file), `categories.ts`, `pillars.ts`, `timeline.ts`. Add or edit content there, not in components.
- **`projects.ts` and `spark.ts` are near-duplicates** with different shapes: `Category`/`Level`/`CAT_COLORS`/`LEVEL_COLORS` are defined separately in each (Spark adds an `academic` category and language filtering). Keep the two in sync when touching shared concepts.
- **Server/client split**: `page.tsx` files stay server components so they can export `metadata`; interactive filtering/modal state lives in a `"use client"` sibling (`spark/SparkClient.tsx`) or in the client component itself (`showcase/page.tsx` is fully client, so it has no metadata export).
- **Components** (`src/components/`) are flat and prefixed by feature: `Brand*`, `Spark*`, plus section components (`*Section.tsx`) composed by pages.
- **Theming**: design tokens are Tailwind 4 `@theme inline` variables in `src/app/globals.css` (navy/teal/orange palette, `font-body|serif|mono`). Use these tokens rather than raw hex values.

## Repo notes

- `docs/` (~200MB of posters and `.docx` files) and `backup/` are reference material, not app code — don't glob or read them. Static assets served by the app live in `public/`.
