---
name: port-section
description: Port a section, page or behaviour from the original static site in backup/ (index.html, showcase.html, spark_gallery.html and their .css/.js) into the Next.js app. Use when the user mentions the old site, backup/, something missing compared to the old static site, or asks to "bring over" or "port" a section.
---

# Port from the static site

The original site lives in `backup/`: `index.html` + `sandbox_website.css/.js`, `showcase.html` + `showcase.css/.js`, `spark_gallery.html` + `spark_gallery.css/.js`. Read only the relevant file(s). Never read `docs/`.

The Showcase and Spark gallery were **removed on purpose** while the club is starting out (the ideas now live in `src/lib/ideas.ts` on the home page). Don't port `showcase.html` or `spark_gallery.html` back unless the user explicitly asks for them.

## Steps

1. **Find the source.** Locate the section in the HTML, its CSS rules, and any JS that drives it. Tell the user what you found before writing code if it's more than a small section.
2. **Check it isn't already ported.** Grep `src/components/` for its heading text.
3. **Split data from markup.** Repeated items (cards, list items, timeline rows) go in `src/lib/<name>.ts` as a typed exported array (see `pillars.ts` and `timeline.ts`). The component maps over it.
4. **Write the component** in `src/components/`, following the conventions below.
5. **Compose it** into the right `src/app/**/page.tsx`.
6. **Verify** with `npx tsc --noEmit`, then use the `check-pages` skill on that route and compare against the backup HTML by eye.

## Conventions

- **Naming:** flat `src/components/`, prefixed by feature (`Brand*`) or suffixed `*Section.tsx` for home-page sections.
- **Wrapper:** use `<Section variant="white" | "bg" | "navy">` from `./Section` for full-width sections. It supplies padding and `max-w-[1200px]`.
- **Server vs client:** `page.tsx` stays a server component and exports `metadata`. Put `useState`/effects/handlers in a `"use client"` component (the section component itself, like `Navbar.tsx` or `BrandModal.tsx`). Don't add `"use client"` to a page that exports metadata.
- **Metadata** for a new route: copy `src/app/brand/page.tsx`. Use a relative canonical (`alternates: { canonical: "/route" }`); `layout.tsx` sets `metadataBase` from `SITE_URL` in `src/lib/site.ts` (https://thesandboxclub.vercel.app).
- **Colours:** convert CSS hex/rgba to theme tokens from `src/app/globals.css`, e.g. `#0d2d3e`→`navy`, `#1cc5ca`→`teal`, `#1285a4`→`teal-dark`, `#f77924`→`orange`, `#f4f7f9`→`bg`, `#4a7080`→`muted`, `#e2edf2`→`border`, `#edf1f5`→`surface2`. Only use a raw value when there is no token (e.g. a one-off rgba shadow).
- **Fonts:** `font-serif` (DM Serif, headings), `font-mono` (DM Mono, eyebrow labels), `font-body` (Outfit, default).
- **Typography idioms:** match existing sections. The eyebrow label is `font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal`, and the heading is `font-serif text-[clamp(24px,3vw,32px)] text-navy leading-[1.1]`.
- **Images:** `next/image` (`width`/`height`, or `fill` + `sizes`), never `<img>`. Assets go in `public/assets/`; run the `optimize-assets` skill on anything new.
- **JS behaviour:** rewrite vanilla DOM code as React state. Modals follow `BrandModal.tsx` (Escape closes, arrow keys navigate, focus trap, body scroll lock).
- **Links:** internal links use `next/link` with the new routes (`/brand`, not `brand.html`).
