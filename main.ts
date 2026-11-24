import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Ghostboss";
const EXPECTED = WORD + "\n";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, EXPECTED, "utf8");

// Validation path 1: read back and require the exact bytes.
const back = readFileSync(outPath, "utf8");
if (back !== EXPECTED) {
  throw new Error("verification failed: entry.txt bytes do not match expected content");
}

// Validation path 2: trimmed word must be the single word, 1-30 chars,
// and the file size must equal the expected UTF-8 byte length.
const trimmed = back.trim();
if (
  trimmed !== WORD ||
  trimmed.length < 1 ||
  trimmed.length > 30 ||
  /\s/.test(trimmed) ||
  statSync(outPath).size !== Buffer.byteLength(EXPECTED, "utf8")
) {
  throw new Error("verification failed: entry.txt does not contain exactly one word of 1-30 characters");
}
