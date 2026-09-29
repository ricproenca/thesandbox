# Wallpapers

Source for the desktop wallpapers on the Brand page (`public/assets/wallpapers/`).

Wallpapers are **artwork, not posters**: almost no text. The only words are the small corner
elements in `wallpaper.css`: the logo with "The Sandbox" (top right), the QR code with
"Scan to join" (bottom right, `public/assets/posters/qrcode.png`) and a faint
"Please don't turn off the PC" for the club computers. Keep the left edge clear for desktop
icons and the bottom for the taskbar.

| File | Output |
|---|---|
| `wallpaper-cubes.html` | `wallpaper_cubes.png` ("Cube orbit"), 1920×1080 at 2× |
| `wallpaper-blocks.html` | `wallpaper_blocks.png` ("Building blocks"), 1920×1080 at 2× |
| `wallpaper-ideas.html` | `wallpaper_ideas_v2.jpg` ("Where ideas take shape"), 2400×1792 at 1× |

The block pile in `wallpaper-blocks.html` sits on a true isometric grid (cube width 150, so steps
of 75 across and 43.1 down per grid cell, 86.2 up per level), drawn back to front. Recompute
positions rather than nudging them by eye, or the faces won't line up.

"Where ideas take shape" is older AI artwork: `source/wallpaper_ideas_original.jpg` is kept
untouched, and `wallpaper-ideas.html` only overlays the QR code on it, inside the 16:9 area so it
survives "Fill" on widescreen monitors. Save it as JPEG (`type: "jpeg", quality: 90`).

## Preview and render

Preview the same way as the posters (see `../posters/README.md`), then render:

```js
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
for (const name of ["cubes", "blocks"]) {
  await page.goto(`http://127.0.0.1:3002/design/wallpapers/wallpaper-${name}.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/assets/wallpapers/wallpaper_${name}.png`, clip: { x: 0, y: 0, width: 1920, height: 1080 } });
}
```

When you re-render, give the file a new name (e.g. `_v2`) and update `BrandWallpapers.tsx`:
an image replaced under the same name keeps showing the old version from caches.

Then compress: `node .claude/skills/optimize-assets/optimize.mjs public/assets/wallpapers`.
