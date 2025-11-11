
const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
    console.log("Usage: node ReadFile.js <filename>");
    process.exit(1);
}

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
    } else {
        console.log(data);
    }
});
