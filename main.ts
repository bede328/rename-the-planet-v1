// Rename the Planet — one funny new name for a planet, plus the why, in one line.
// Writes the chosen line to /output/entry.txt (UTF-8, one line, under 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Jupiter is now The Bouncer, because it eats every asteroid that tries to sneak past it to Earth.";

// Guard: the entry must be exactly one line of 1-200 characters.
// Fail loudly instead of writing a malformed entry.
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single line (no newline characters)");
}
// Count Unicode code points, so one UTF-8 character counts as one
// even outside the Basic Multilingual Plane.
const ENTRY_CHARS = [...ENTRY].length;
if (ENTRY_CHARS < 1 || ENTRY_CHARS > 200) {
  throw new Error(`ENTRY must be 1-200 characters, got ${ENTRY_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
