console.log('ben');

function ben() {
    let prevNum = 1000000;
    let increaseCount = 1;
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('2021-12-01.in')
    });
    lineReader.on('line', function (line) {
        //console.log(line, prevNum);
        if (line > prevNum) {
            increaseCount++;
        } else {
            //console.log(line +" is less than "+ prevNum);
        }
        prevNum = line;

        console.log(increaseCount);
    });
    console.log(increaseCount);
    return increaseCount;
}
console.log(ben());