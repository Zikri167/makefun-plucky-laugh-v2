import * as fs from 'node:fs';

const LINE = "My plants unionized — apparently 'good vibes' isn't a watering schedule.";

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', LINE, 'utf8');
