const fs = require('fs').promises;

const folder = process.argv[2];
const ext = '.' + process.argv[3];
const extCount = async (folder,ext) => {
    try {
        const data = await fs.readdir(folder);
        for (let i = 0;i < data.length; i++) {
            if (data[i].includes(ext)){
                console.log(data[i]);
            }
        }
    } catch (e) {
        console.log(e);
    }
};

extCount(folder, ext);