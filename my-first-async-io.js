const { fileURLToPath } = require('url');

var fs = require('fs').promises;
var file = process.argv[2];

const lineCount = async (file) => {
    try {
        contents = await fs.readFile(file);
        lines = contents.toString().split('\n').length - 1;
        return console.log(lines);
    } catch (e) {
        return console.log(e);
    }
};
lineCount(file);