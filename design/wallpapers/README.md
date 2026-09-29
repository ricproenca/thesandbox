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
| `wallpaper-openbox.html` | `wallpaper_openbox.png` ("Open box"), 1920×1080 at 2× |
| `wallpaper-boxgrid.html` | `wallpaper_boxgrid.png` ("Box grid", the light one), 1920×1080 at 2× |

The block pile in `wallpaper-blocks.html` sits on a true isometric grid (cube width 150, so steps
of 75 across and 43.1 down per grid cell, 86.2 up per level), drawn back to front. Recompute
positions rather than nudging them by eye, or the faces won't line up.

"Open box" and "Box grid" redraw the logo's open box in SVG (the logo files are raster on white,
so they can't be placed on artwork). Both use the same unit coordinates as the cubes: front-top
corner at 0,0, opening from y -100 to 0, bottom at y 100, flaps out to about ±150. "Box grid" is
light, so it overrides the corner elements to navy text; its filled boxes must sit on the pattern's
grid points (see the comment in the file).

## Preview and render

Preview the same way as the posters (see `../posters/README.md`), then render:

```js
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
for (const name of ["cubes", "blocks", "openbox", "boxgrid"]) {
  await page.goto(`http://127.0.0.1:3002/design/wallpapers/wallpaper-${name}.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/assets/wallpapers/wallpaper_${name}.png`, clip: { x: 0, y: 0, width: 1920, height: 1080 } });
}
```

When you re-render, give the file a new name (e.g. `_v2`) and update `BrandWallpapers.tsx`:
an image replaced under the same name keeps showing the old version from caches.

Then compress: `node .claude/skills/optimize-assets/optimize.mjs public/assets/wallpapers`.
