'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

// the only function we need to write
function dataFinder(data) {
    let find = function (minRange, maxRange, value) {
        let isRangeValid = minRange <= maxRange && minRange<data.length && maxRange < data.length;
        if(!isRangeValid) throw new Error("Invalid range");
        let slices = data.slice(minRange, maxRange+1);
        return !!slices.filter((slice)=> slice == value).length;
    }
    return find;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const data = readLine().trim().split(' ');
    const finalData = data.map(val => parseInt(val));
    const join = dataFinder(finalData);
    try {
        const inputs = readLine().trim().split(' ');
        const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
        ws.write(result.toString());
    } catch(e) {
        ws.write(`${e}`);
    }
    ws.end();
}
