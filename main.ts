// Rename the Planet — one funny new name for a planet, plus the why, in one line.
// Writes the chosen line to /output/entry.txt (UTF-8, one line, under 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Jupiter is now The Bouncer, because it eats every asteroid that tries to sneak past it to Earth.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
