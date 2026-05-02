// Generates the 6 cinematic hero/gallery images for the Autoshow Baja landing.
// Run: REPLICATE_API_TOKEN=r8_xxx node scripts/generate-images.mjs [name1 name2 ...]
// If names are passed, only those are regenerated. Otherwise all 6 run.

import Replicate from "replicate";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

if (!process.env.REPLICATE_API_TOKEN) {
  console.error("Missing REPLICATE_API_TOKEN.");
  process.exit(1);
}

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
const MODEL = "google/nano-banana";

const styleSuffix =
  ", shot on 35mm film, golden hour in Baja California, soft contrast, " +
  "muted earth tones, photographic grain, editorial automotive photography, " +
  "cinematic composition, no people facing camera";

const jobs = [
  {
    name: "about-suv",
    aspect_ratio: "4:5",
    prompt:
      "A modern 2026 mid-size family SUV in soft pearl white, parked at a Baja California " +
      "scenic overlook at golden hour with the desert and distant mountains behind. " +
      "Sleek contemporary design, no visible badges or logos, three-quarter front hero angle, " +
      "polished glossy paint, aspirational lifestyle automotive photography, soft warm light, " +
      "no people in frame, no dust" +
      styleSuffix,
  },
  {
    name: "concept-autoshow",
    aspect_ratio: "4:3",
    prompt:
      "An outdoor automotive showcase event in a large modern museum parking lot, " +
      "rows of brand-new contemporary cars on display under white event tents and flags, " +
      "string lights overhead, families walking around in soft silhouette, " +
      "Mexicali desert sky at golden hour, polished cars reflecting warm light, " +
      "festival but elegant atmosphere, wide cinematic shot" +
      styleSuffix,
  },
  {
    name: "concept-museo",
    aspect_ratio: "4:3",
    prompt:
      "Interior of a bright, modern, colorful interactive children's science museum, " +
      "kids in soft silhouette engaging with hands-on exhibits, large geometric architectural shapes, " +
      "vibrant playful environment, warm natural light from skylights, no faces visible, " +
      "wide angle architectural lifestyle photography, joyful but clean composition",
  },
  {
    name: "gallery-toyota",
    aspect_ratio: "3:4",
    prompt:
      "A brand-new 2026 Toyota SUV in pearl white, parked on a Baja California cliff " +
      "overlook with the Sea of Cortez visible in the background, three-quarter front angle, " +
      "spotless polished paint, glossy reflections, modern and aspirational, " +
      "TOYOTA badge subtly visible on the front grille, golden hour, no people, no dust" +
      styleSuffix,
  },
  {
    name: "hero-road",
    aspect_ratio: "16:9",
    prompt:
      "An empty curving desert highway cutting through La Rumorosa mountain pass in " +
      "Baja California at sunset, tall fan palms silhouetted against amber sky, " +
      "wide cinematic landscape, no cars in frame" +
      styleSuffix,
  },
  {
    name: "gallery-mazda",
    aspect_ratio: "4:3",
    prompt:
      "A pristine new Mazda CX-50 in soul red crystal paint, posed on a coastal road " +
      "with Baja California cliffs behind, MAZDA winged emblem clearly visible on the grille, " +
      "side three-quarter hero angle, mirror-clean paint, glossy finish, " +
      "automotive lifestyle commercial photography, soft warm side light" +
      styleSuffix,
  },
  {
    name: "gallery-polaris",
    aspect_ratio: "4:3",
    prompt:
      "A brand-new Polaris RZR side-by-side in clean factory finish, posed static on a " +
      "scenic Baja California viewpoint with cardon cactus and distant mountains, " +
      "POLARIS branding clearly readable on the bodywork, three-quarter hero angle, " +
      "no riders, no dust on bodywork, automotive product photography, golden hour" +
      styleSuffix,
  },
  {
    name: "gallery-family",
    aspect_ratio: "16:9",
    prompt:
      "Distant silhouette of a family walking between rows of contemporary parked cars " +
      "at an outdoor event in Baja California at golden hour, string lights overhead, " +
      "backlit, no faces visible, warm dust haze, festive but quiet" +
      styleSuffix,
  },
  {
    name: "texture-asphalt",
    aspect_ratio: "16:9",
    prompt:
      "Macro abstract texture of cracked sun-bleached asphalt with faded white lane paint, " +
      "tire marks, top-down view, monochrome charcoal and bone tones, dry, weathered",
  },
];

const targets = process.argv.slice(2);
const work = targets.length ? jobs.filter((j) => targets.includes(j.name)) : jobs;

const outDir = path.resolve("public/hero");
await fs.mkdir(outDir, { recursive: true });

for (const j of work) {
  process.stdout.write(`[${j.name}] generating... `);
  const t0 = Date.now();
  try {
    const output = await replicate.run(MODEL, {
      input: {
        prompt: j.prompt,
        aspect_ratio: j.aspect_ratio,
        output_format: "jpg",
      },
    });

    const url = typeof output === "string" ? output : (Array.isArray(output) ? output[0] : output?.url?.());
    const finalUrl = typeof url === "function" ? url() : url;

    if (!finalUrl) {
      console.error(`no url returned for ${j.name}:`, output);
      continue;
    }

    const res = await fetch(finalUrl);
    if (!res.ok) throw new Error(`fetch ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());

    const optimized = await sharp(buf).webp({ quality: 82, effort: 5 }).toBuffer();
    const out = path.join(outDir, `${j.name}.webp`);
    await fs.writeFile(out, optimized);

    const sizeKb = (optimized.length / 1024).toFixed(0);
    console.log(`done in ${((Date.now() - t0) / 1000).toFixed(1)}s · ${sizeKb}KB`);
  } catch (err) {
    console.error(`failed: ${err.message}`);
  }
}

console.log("all done.");
