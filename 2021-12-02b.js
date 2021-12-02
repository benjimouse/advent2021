const fs = require('fs');

function getArray(fileName) {
    var text = fs.readFileSync(fileName, "utf-8");
    return text.split("\n");
}

function ben(inputFile) {
    const instructions = getArray(inputFile);
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for (let i = 0; i < instructions.length; i++) {
        direction = instructions[i].charAt(0);
        distance = parseInt(instructions[i].substring(instructions[i].lastIndexOf(" ") + 1));

        if ('f' === direction) {
            horizontal = horizontal + distance;
            depth = depth + (aim*distance);
        } else if ('d' === direction) {
            aim = aim + distance;
        } else if ('u' === direction) {
            aim = aim - distance;
        }
    }
    console.log(horizontal);
    console.log(depth);
    return depth * horizontal;
}

console.log(ben("./2021-12-02.in"));