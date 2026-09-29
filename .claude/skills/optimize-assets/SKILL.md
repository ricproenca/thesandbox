---
name: optimize-assets
description: Compress images in public/ before they are committed. Use when the user adds, replaces or mentions an image, poster, logo, wallpaper or other asset, when public/ is large, or when a page loads slowly because of images.
---

# Optimize image assets

Images in `public/assets/` are shown through `next/image` **and** offered as direct downloads (`<a href download>`), so the file on disk is what users download. Don't shrink dimensions, and keep formats that users expect (the Brand page promises PNG logos).

## Run

```bash
node .claude/skills/optimize-assets/optimize.mjs <files or dirs...>          # lossless PNG
node .claude/skills/optimize-assets/optimize.mjs --jpeg <files...>           # photographic → JPEG q88
```

Without arguments it scans `public/assets`. It's safe to re-run: a file is only overwritten when the result is at least 1% smaller.

What it does:
- **PNG (default):** drops the alpha channel if every pixel is opaque, then re-encodes losslessly at max compression. It's pixel-identical and usually 3–5× smaller.
- **`--jpeg`:** writes `name.jpg` (mozjpeg, quality 88, full resolution) and deletes the `.png`. Use it only for large, opaque, photographic images (wallpapers, photos). Never use it for logos, text-heavy graphics or anything with transparency (the script refuses non-opaque images).

## After `--jpeg`

The path changed, so grep `src/` for the old `.png` name and update every reference (including `download` hrefs). Then run `npx tsc --noEmit`.

## Guidelines

- Target size: under 2 MB per image. Anything over 5 MB needs a reason.
- Check a JPEG conversion visually. Crop the same region from the original and the output (sharp `.extract()`) and compare them before replacing.
- Originals remain in git history. Mention this to the user rather than keeping duplicate copies.
- Report the before → after sizes to the user.
