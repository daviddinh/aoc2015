const fs = require("fs");
let inputText = fs.readFileSync("./3-input.txt", "utf-8");
let directions = inputText.split("");
currentX = 10000;
currentY = 10000;

let presentsAt = [`${currentX},${currentY}`].concat(directions.map(e => {
    if (e == '>') currentX++
    if (e == '<') currentX--
    if (e == '^') currentY++
    if (e == 'v') currentY--
    return `${currentX},${currentY}`
}))
// Add the starting point just in case

console.log(new Set(presentsAt).size);
