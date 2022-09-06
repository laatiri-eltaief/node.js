const fs = require('fs');
const contents = fs.readFileSync(process.argv[2], 'utf8');
const lineBreaks = contents.split('\n');

console.log(lineBreaks.length - 1);