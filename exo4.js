const fs = require('fs');

const text = process.argv[2];  

if (!text) {
    console.log("Usage: node exo4.js <text>");
    process.exit(1);
}

fs.writeFile('f.txt', text, (err) => {
    if (err) {
        console.log("Error writing file:", err.message);
    } else {
        console.log("The file has been saved!");
    }
});
