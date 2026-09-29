#!/usr/bin/env node
// Optimize PNGs in place (lossless), or convert opaque ones to JPEG with --jpeg.
// Usage: node optimize.mjs [--jpeg] [paths...]   (default path: public/assets)
import { readdirSync, statSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(join(process.cwd(), "package.json"));
const sharp = require("sharp"); // ships with next

const args = process.argv.slice(2);
const toJpeg = args.includes("--jpeg");
const targets = args.filter((a) => a !== "--jpeg");
if (targets.length === 0) targets.push("public/assets");

const walk = (p) =>
  statSync(p).isDirectory()
    ? readdirSync(p).flatMap((f) => walk(join(p, f)))
    : [p];

const files = targets.flatMap(walk).filter((f) => /\.png$/i.test(f));
const mb = (n) => (n / 1e6).toFixed(2) + " MB";
let before = 0;
let after = 0;

for (const file of files) {
  const orig = statSync(file).size;
  before += orig;
  const { isOpaque } = await sharp(file).stats();
  const img = isOpaque ? sharp(file).removeAlpha() : sharp(file);

  if (toJpeg) {
    if (!isOpaque) {
      console.log(`skip ${file}: has transparency, keeping PNG`);
      after += orig;
      continue;
    }
    const out = file.replace(/\.png$/i, ".jpg");
    await img.jpeg({ quality: 88, mozjpeg: true }).toFile(out);
    unlinkSync(file);
    const size = statSync(out).size;
    after += size;
    console.log(`${file} → ${out}  ${mb(orig)} → ${mb(size)}  (update references!)`);
    continue;
  }

  const buf = await img.png({ compressionLevel: 9, effort: 10 }).toBuffer();
  // Skip negligible gains so re-runs don't churn already-optimized files in git.
  const worth = buf.length < orig * 0.99;
  if (worth) writeFileSync(file, buf);
  const size = worth ? buf.length : orig;
  after += size;
  console.log(`${file}  ${mb(orig)} → ${mb(size)}`);
}

console.log(`\nTOTAL ${files.length} files  ${mb(before)} → ${mb(after)}`);
