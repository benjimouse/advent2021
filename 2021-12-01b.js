const fs = require('fs');

function getArray(fileName) {
    var text = fs.readFileSync(fileName, "utf-8");
    return text.split("\n");
}

function ben(inputFile) {
    const depths = getArray(inputFile);
    let increaseVal = 0;
    for (let i = 3; i < depths.length; i++) {
        let currVal = parseInt(depths[i]) + parseInt(depths[i - 1]) + parseInt(depths[i - 2]);
        let prevVal = parseInt(depths[i - 1]) + parseInt(depths[i - 2]) + parseInt(depths[i - 3]);
        if (currVal > prevVal) {
            increaseVal++;
        }
    }
    return increaseVal;
}

console.log(ben("./2021-12-01.in"));