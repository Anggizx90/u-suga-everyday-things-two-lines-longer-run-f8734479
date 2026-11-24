// Everyday Things, Two Lines, Longer Run — a two-line explanation of a traffic jam for a 10-year-old.
// Line 1 explains it in one vivid sentence built on a single analogy: a parking lot that forgot it was a road.
// Line 2 says in one sentence what the analogy maps (rows of cars standing bumper to bumper)
// and what it leaves out (nobody chose to park; every driver wants to move; the road ahead is just too full).
// Node 22 standard library only; writes one fixed string, no network, no randomness, no model call.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = [
  'A traffic jam is a parking lot that forgot it was a road.',
  'It maps the rows of cars standing bumper to bumper, but it leaves out that nobody chose to park, since every driver wants to move and the road ahead is simply too full.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
