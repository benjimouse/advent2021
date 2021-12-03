const fs = require('fs');

function getArray(fileName) {
    var text = fs.readFileSync(fileName, "utf-8");
    return text.split("\n");
}

function ben(inputFile) {
    const diagnostic = getArray(inputFile);
    let gamma1, gamma2, gamma3, gamma4, gamma5, epsilon1, epsilon2, epsilon3, epsilon4, epsilon5;
    let pos = [];
    const arrSize = diagnostic.length;

    for (let i = 0; i < arrSize; i++) {
        line = diagnostic[i].split('');
        for (let j = 0; j < line.length; j++) {
            pos[j] = isNaN(pos[j]) ? 0 : pos[j] + parseInt(line[j]);
        }
    }
    const gamma = posToBin(pos, arrSize, 'g');
    const epsilon = posToBin(pos, arrSize, 'e');
    return gamma * epsilon;
}

function posToBin(pos, arrSize, gOrE) {
    let bin = [];
    for (let i = 0; i < pos.length; i++) {
        if (gOrE === 'g') {
            bin[i] = pos[i] > (arrSize / 2) ? '1' : '0';
        } else {
            bin[i] = pos[i] > (arrSize / 2) ? '0' : '1';
        }
    }
    const binaryNum = bin.join('');
    const gamma = parseInt(binaryNum, 2);
    return gamma;
}

console.log(ben("./2021-12-03-test.in") === 198 ? "Success" : "Failure " + ben("./2021-12-03-test.in"));
console.log(ben('./2021-12-03.in'));