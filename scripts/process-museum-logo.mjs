// Removes the solid blue background from the Museo Sol del Niño logo JPG
// and outputs a PNG with transparent background.

import sharp from "sharp";
import path from "node:path";

const inputPath = path.resolve("public/sponsors/museo-sol-del-nino.jpg");
const outputPath = path.resolve("public/sponsors/museo-sol-del-nino.png");

const img = sharp(inputPath);
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

const w = info.width;
const h = info.height;
const channels = info.channels;
const out = Buffer.alloc(w * h * 4);

let removed = 0;
for (let i = 0; i < w * h; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];

  // Sample background blue: roughly r=30, g=115, b=205 in the source.
  // Anything close to it (mostly blue, low red) is treated as background.
  const isBlue = b > 140 && r < 100 && g > 70 && g < 180 && b > r + 60 && b > g + 30;

  out[i * 4] = r;
  out[i * 4 + 1] = g;
  out[i * 4 + 2] = b;
  out[i * 4 + 3] = isBlue ? 0 : 255;

  if (isBlue) removed++;
}

const pct = ((removed / (w * h)) * 100).toFixed(1);

await sharp(out, { raw: { width: w, height: h, channels: 4 } })
  .png({ compressionLevel: 9, quality: 92 })
  .toFile(outputPath);

console.log(`removed ${pct}% of pixels (background)`);
console.log(`out: ${outputPath}`);
