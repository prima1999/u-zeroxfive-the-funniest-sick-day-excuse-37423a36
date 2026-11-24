// The Funniest Sick-Day Excuse — make.fun entry.
// One line, under 200 characters: a half-believable reason to call in sick
// with the laugh landing on the last words, typed like a real message.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, I need the day — I sneezed so hard mid-stretch this morning that I pulled something, and now I walk like a question mark.";

if ([...EXCUSE].length > 200) {
  throw new Error("Excuse must stay under 200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
