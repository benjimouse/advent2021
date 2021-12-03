const fs = require('fs');

function getArray(fileName) {
    var text = fs.readFileSync(fileName, "utf-8");
    return text.split("\n");
}

function ben(inputFile) {
    const diagnostic = getArray(inputFile);
    let gamma1, gamma2, gamma3, gamma4, gamma5, epsilon1, epsilon2, epsilon3, epsilon4, epsilon5;
    let pos = [];
    pos[1] = 0;
    pos[2] = 0;
    pos[3] = 0;
    pos[4] = 0;
    pos[5] = 0;
    const arrSize = diagnostic.length;

    for (let i = 0; i < arrSize; i++) {
        pos[1] = pos[1] + parseInt(diagnostic[i].charAt(0));
        pos[2] = pos[2] + parseInt(diagnostic[i].charAt(1));
        pos[3] = pos[3] + parseInt(diagnostic[i].charAt(2));
        pos[4] = pos[4] + parseInt(diagnostic[i].charAt(3));
        pos[5] = pos[5] + parseInt(diagnostic[i].charAt(4));
    }
    const gamma = posToBin(pos, arrSize, 'g');
    const epsilon = posToBin(pos, arrSize, 'e');
    return gamma * epsilon;
}

function posToBin(pos, arrSize, gOrE) {
    if (gOrE === 'g') {
        gamma1 = pos[1] > (arrSize / 2) ? "1" : "0";
        gamma2 = pos[2] > (arrSize / 2) ? '1' : '0';
        gamma3 = pos[3] > (arrSize / 2) ? '1' : '0';
        gamma4 = pos[4] > (arrSize / 2) ? '1' : '0';
        gamma5 = pos[5] > (arrSize / 2) ? '1' : '0';
    } else {
        gamma1 = pos[1] > (arrSize / 2) ? "0" : "1";
        gamma2 = pos[2] > (arrSize / 2) ? '0' : '1';
        gamma3 = pos[3] > (arrSize / 2) ? '0' : '1';
        gamma4 = pos[4] > (arrSize / 2) ? '0' : '1';
        gamma5 = pos[5] > (arrSize / 2) ? '0' : '1';

    }
    const gamma = parseInt(gamma1 + gamma2 + gamma3 + gamma4 + gamma5, 2);

    return gamma;
}

console.log(ben("./2021-12-03-test.in")===198?"Success":"Failure");