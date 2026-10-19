// One-off: optimises the Maison's Instagram media (downloaded with gallery-dl
// into ~/Downloads/rama-insta/<shortcode>/) into public/maison.
// Usage: node scripts/import-instagram.mjs [sourceDir]
import { execFileSync } from "node:child_process";
import { mkdir, readdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const SRC = process.argv[2] ?? join(homedir(), "Downloads/rama-insta");
const OUT = new URL("../public/maison/", import.meta.url).pathname;
// Long edge: large enough for full-screen sections on retina screens
const MAX = 2880;

// [shortcode, 1-based index in the sorted post folder, destination]
const PHOTOS = [
  // Double-breasted denim suit — studio and garden shoots
  ["DcwPlbZDm3Y", 1, "campaign/tailleur-01"],
  ["DcwPlbZDm3Y", 2, "campaign/tailleur-02"],
  ["DcwPlbZDm3Y", 3, "campaign/tailleur-03"],
  ["DcwPlbZDm3Y", 4, "campaign/tailleur-04"],
  ["DcwPlbZDm3Y", 5, "campaign/tailleur-05"],
  ["DcwPlbZDm3Y", 6, "campaign/tailleur-06"],
  ["DcRbcbvDpty", 1, "campaign/tailleur-07"],
  ["DcRbcbvDpty", 2, "campaign/tailleur-08"],
  ["DcRbcbvDpty", 3, "campaign/tailleur-09"],
  // Ivory denim jacket
  ["DdmR9izjoGJ", 1, "campaign/ivoire-01"],
  ["DdmR9izjoGJ", 2, "campaign/ivoire-02"],
  ["DdmR9izjoGJ", 3, "campaign/ivoire-03"],
  // Cargo denim set and its sketch
  ["Dc5s2jsDrDK", 1, "campaign/cargo-01"],
  ["Dc5s2jsDrDK", 3, "campaign/cargo-02"],
  ["Dc5s2jsDrDK", 2, "campaign/cargo-croquis"],
  // Plaza Athénée evening, as posted by the Maison
  ["Dee3-ZuDbgN", 1, "event/01"],
  ["Dee3-ZuDbgN", 2, "event/02"],
  ...Array.from({ length: 20 }, (_, i) => ["DeM4wsmjoyc", i + 1, `event/${String(i + 3).padStart(2, "0")}`]),
];

// Close crops of the evening photos for the pieces only seen there.
// [event number or imported file, destination, [left, top, width, height] as fractions]
const CROPS = [
  [3, "crops/rama-portrait", [0.4, 0, 0.56, 0.84]],
  [6, "crops/rama-salon", [0.05, 0.08, 0.6, 0.9]],
  [18, "crops/rama-rire", [0.02, 0.02, 0.6, 0.9]],
  // event/20 is only 1320px: the same waistcoat is on a mannequin in event/08
  [8, "crops/gilet-col-volant", [0.18, 0.05, 0.24, 0.47]],
  [8, "crops/robe-gilet-mannequin", [0, 0.04, 0.4, 0.6]],
  [5, "crops/robe-longue", [0.02, 0.06, 0.5, 0.94]],
  [5, "crops/robe-volant", [0.5, 0.06, 0.5, 0.94]],
  [18, "crops/mini-robe", [0.42, 0.02, 0.58, 0.95]],
  [17, "crops/gilet-denim", [0, 0, 0.62, 0.93]],
  [19, "crops/jean-bicolore", [0, 0.45, 0.36, 0.54]],
  [19, "crops/jean-mannequin", [0, 0.08, 0.42, 0.92]],
  [22, "crops/cabaret-solo", [0.32, 0.15, 0.4, 0.6]],
  [21, "crops/cabaret-duo", [0.15, 0.12, 0.7, 0.5]],
  [21, "crops/cabaret-plumes", [0.15, 0.1, 0.34, 0.5]],
  // 16:9 stage for the full-screen cabaret curtain
  [21, "crops/cabaret-scene", [0, 0.06, 1, 0.5625]],
  // Gold details
  [3, "crops/detail-boutons", [0.55, 0.3, 0.28, 0.4]],
  [19, "crops/detail-etiquette", [0.04, 0.46, 0.22, 0.16]],
  ["campaign/tailleur-09", "crops/detail-manchette", [0.05, 0.6, 0.5, 0.38]],
  ["campaign/cargo-croquis", "crops/detail-croquis", [0.28, 0.5, 0.7, 0.3]],
];

// [shortcode, index, destination, x264 CRF] — the 93s evening film is
// compressed harder so it stays streamable
const FILMS = [
  ["DeZutzmuPI2", 1, "films/soiree", 31],
  ["DczDGiqu20i", 1, "films/denim", 27],
];

const pick = async (code, index, ext) => {
  // Index into the whole sorted folder: carousels mix photos and videos
  const file = (await readdir(join(SRC, code))).sort()[index - 1];
  if (!file?.endsWith(ext)) throw new Error(`${code} #${index} is not a ${ext}`);
  return join(SRC, code, file);
};

for (const [code, index, dest] of PHOTOS) {
  const out = join(OUT, `${dest}.jpg`);
  await mkdir(join(out, ".."), { recursive: true });
  await sharp(await pick(code, index, ".jpg"))
    .rotate()
    .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
  console.log(`✓ ${dest}.jpg`);
}

// Event photo n came from Dee3-ZuDbgN (1–2) or DeM4wsmjoyc (3–22)
const eventSource = (n) => (n <= 2 ? pick("Dee3-ZuDbgN", n, ".jpg") : pick("DeM4wsmjoyc", n - 2, ".jpg"));

for (const [n, dest, [left, top, width, height]] of CROPS) {
  const out = join(OUT, `${dest}.jpg`);
  await mkdir(join(out, ".."), { recursive: true });
  const source = typeof n === "string" ? join(OUT, `${n}.jpg`) : await eventSource(n);
  const image = sharp(source).rotate();
  const { width: w, height: h } = await image.metadata();
  await image
    .extract({
      left: Math.round(left * w),
      top: Math.round(top * h),
      width: Math.round(Math.min(width, 1 - left) * w),
      height: Math.round(Math.min(height, 1 - top) * h),
    })
    .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
  console.log(`✓ ${dest}.jpg`);
}

for (const [code, index, dest, crf] of FILMS) {
  const src = await pick(code, index, ".mp4");
  const out = join(OUT, dest);
  await mkdir(join(out, ".."), { recursive: true });
  // Silent, web-streamable H.264, at most 1080px tall
  execFileSync("ffmpeg", [
    "-v", "error", "-y", "-i", src,
    "-vf", "scale=-2:'min(1080,ih)'",
    "-c:v", "libx264", "-crf", String(crf), "-preset", "slow", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart", "-an", `${out}.mp4`,
  ]);
  execFileSync("ffmpeg", ["-v", "error", "-y", "-ss", "0.5", "-i", src, "-frames:v", "1", "-q:v", "3", `${out}.jpg`]);
  console.log(`✓ ${dest}.mp4`);
}
