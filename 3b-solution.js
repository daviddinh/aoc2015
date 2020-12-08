const fs = require("fs");
let inputText = fs.readFileSync("./3-input.txt", "utf-8");
let directions = inputText.split("");
currentSantaX = 10000;
currentSantaY = 10000;
currentRobotX = 10000;
currentRobotY = 10000;

let presentsAt = [`${currentSantaX},${currentSantaY}`].concat(directions.map((e, i) => {
    if (i % 2 == 0) {
        if (e == '>') currentSantaX++
        if (e == '<') currentSantaX--
        if (e == '^') currentSantaY++
        if (e == 'v') currentSantaY--
        return `${currentSantaX},${currentSantaY}`
    }
    if (e == '>') currentRobotX++
    if (e == '<') currentRobotX--
    if (e == '^') currentRobotY++
    if (e == 'v') currentRobotY--
    return `${currentRobotX},${currentRobotY}`
    
}))

console.log(new Set(presentsAt).size);
