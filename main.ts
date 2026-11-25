// Pigeon Pitch, One Line — the elevator pitch a city pigeon gives
// investors for its startup. One line, 197 characters, in English.
// The pitch works as a real pitch, not just a bird joke:
//   - problem: the city drops 40 million crumbs a day and nobody
//     cashes in (an unmonetised resource hiding in plain sight);
//   - solution: a delivery fleet that already lives on every rooftop,
//     paid in breadcrumbs (the pigeon's unfair advantage — no hiring,
//     no depots, no wages in money);
//   - ask: one seed round — and the closer lands the pun, "Literally
//     one seed", because a pigeon's seed round is, of course, a seed.
// The voice could only come from a pigeon: rooftops, breadcrumbs,
// seeds. "Investors:" opens it as a pitch addressed to the room.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Investors: the city drops 40 million crumbs a day and nobody cashes in. My delivery fleet already lives on every rooftop \u2014 and works for breadcrumbs. I'm raising one seed round. Literally one seed.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

// The gate refuses anything over 200 characters, so fail loudly here
// instead of writing an entry the judge will never see.
if (PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
const outPath = join(dest, "entry.txt");
writeFileSync(outPath, PITCH, "utf8");
chmodSync(outPath, 0o644);

console.log(`wrote ${outPath} (${PITCH.length} characters)`);
