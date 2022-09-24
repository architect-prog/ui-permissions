import { readFileSync, writeFileSync } from 'fs';

const filepath = './dist/index.scss';
const data = readFileSync(filepath);
writeFileSync(filepath, "@import 'override.scss';\n" + data);
