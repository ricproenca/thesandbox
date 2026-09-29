# Posters

Source for the A4 posters on the Brand page (`public/assets/posters/sandbox_poster_*.png`).
Each poster is a plain HTML page sized 794×1123 CSS px (A4 at 96 dpi) and shares `poster.css`.
They're printed, so keep backgrounds white and use colour for accents only.

| File | Output |
|---|---|
| `poster-build.html` | `sandbox_poster_build_v2.png` ("What will you build?" with the cube art) |
| `poster-anything.html` | `sandbox_poster_anything_v2.png` ("Build a game. Build an app. Build a robot.") |
| `poster-ideas.html` | `sandbox_poster_ideas_v2.png` (the 12 ideas; keep in sync with `src/lib/ideas.ts`) |

Session facts (Mondays 11:30–13:00, starts October, KS3 to A Level) are written into the posters, so update them here too when `src/lib/practical.ts` changes. The QR code is `public/assets/posters/qrcode.png` (links to https://thesandboxclub.vercel.app/); it is also used on the wallpapers and the infographic. Keep it on white and at least ~110 CSS px wide.

## Edit and preview

Serve the repo root so the logo path (`../../public/...`) resolves, then open a poster:

```bash
python3 -m http.server 3002 --bind 127.0.0.1
# http://127.0.0.1:3002/design/posters/poster-build.html
```

Fonts load from Google Fonts, so you need to be online.

## Render at 300 dpi

Screenshot each page at `deviceScaleFactor: 3.125`, which gives 2481×3509 px (A4 at 300 dpi). With Playwright:

```js
const ctx = await browser.newContext({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 3.125 });
const page = await ctx.newPage();
for (const name of ["build", "anything", "ideas"]) {
  await page.goto(`http://127.0.0.1:3002/design/posters/poster-${name}.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/assets/posters/sandbox_poster_${name}_v2.png`, clip: { x: 0, y: 0, width: 794, height: 1123 } });
}
```

When you re-render, bump the version in the file names (`_v2` → `_v3`) and update `BrandPosters.tsx` and `src/app/join/page.tsx`: an image replaced under the same name keeps showing the old version from caches.

Then compress them with the `optimize-assets` skill (`node .claude/skills/optimize-assets/optimize.mjs public/assets/posters`).
