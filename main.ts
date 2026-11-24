import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-sentence pitch for "A Day of One-Line Pitches" (u-ronigrv).
// The whole entry is this single sentence: it must convince a friend who
// has never coded to let an AI agent build their first app idea on
// make.fun, in one read, with plain words and no overpromising.
const PITCH =
  "That app idea you keep describing at dinner — tonight you can say it in plain words to an AI agent on make.fun and wake up to a first version you can tap through: no code to learn, nothing to break, your idea finally out of your head.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
