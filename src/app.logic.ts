import fs from 'fs';
import { join } from 'path';
import { args } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = args;

let outputMessage = '';
//const base = 5;
const headerMessage = `
===========================================
                Tabla del ${base}
===========================================\n
`;

for (let i = 0; i < limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage;

const outputPath = `outputs`;

if (showTable) {
    console.log(outputMessage);
}

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(join(`${outputPath}/tabla-${base}.txt`), outputMessage);