import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const excuse = "Can't join. Someone has to keep this company from becoming a podcast with payroll.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true, mode: 0o755 });
writeFileSync(join(outputDirectory, 'entry.txt'), excuse, {
  encoding: 'utf8',
  mode: 0o644,
});
