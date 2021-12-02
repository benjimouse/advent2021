const fs = require('fs');

function getArray(fileName) {
    var text = fs.readFileSync(fileName, "utf-8");
    return text.split("\n");
}

function ben(inputFile) {
    const instructions = getArray(inputFile);
    let forward = 0;
    let depth = 0;
    for (let i = 0; i < instructions.length; i++) {
        direction = instructions[i].charAt(0);
        distance = parseInt(instructions[i].substring(instructions[i].lastIndexOf(" ") + 1));

        if ('f' === direction) {
            forward = forward + distance;
        } else if ('d' === direction) {
            depth = depth + distance;
        } else if ('u' === direction) {
            depth = depth - distance;
        }
    }
    console.log(depth);
    console.log(distance);
    return depth * forward;
}

console.log(ben("./2021-12-02.in"));