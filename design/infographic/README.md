# Infographic

Source for "The Sandbox, at a glance" on the Brand page (`public/assets/others/sandbox_infographic_v2.png`).
`infographic.html` is 1500×1000 CSS px (3:2) and reuses `../posters/poster.css`. It's white so it prints and works on slides.

It repeats content from the website, so update it when these change:

- Session steps and times: `src/lib/timeline.ts` (the bar's `flex` values are the minutes, out of 90).
- The four "getting unstuck" layers: `src/components/HowItWorksSection.tsx`.
- Day and time: `src/lib/practical.ts`.

Keep it simple: short labels, large text, three rows.

## Preview and render

Preview the same way as the posters (see `../posters/README.md`), then render at `deviceScaleFactor: 2.4` for 3600×2400:

```js
const ctx = await browser.newContext({ viewport: { width: 1500, height: 1000 }, deviceScaleFactor: 2.4 });
const page = await ctx.newPage();
await page.goto("http://127.0.0.1:3002/design/infographic/infographic.html", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/assets/others/sandbox_infographic_v2.png", clip: { x: 0, y: 0, width: 1500, height: 1000 } });
```

Then compress it: `node .claude/skills/optimize-assets/optimize.mjs public/assets/others/sandbox_infographic_v2.png`.

If you replace the image under the same file name, Next's image cache and browsers can keep showing the old one. Give a new version a new file name and update `BrandInfographic.tsx`.
