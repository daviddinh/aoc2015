const fs = require("fs");
const vowelsRegex = /(a|e|i|o|u)/gm;
const avoidRegex = /ab|cd|pq|xy/gm;
let inputText = fs.readFileSync("./5-input.txt", "utf-8").split("\n");

let niceStrings = inputText.filter(
  (e) =>
    e.match(vowelsRegex) !== null &&
    e.match(vowelsRegex).length >= 3 &&
    e.split("").filter((f, i) => f == e[i + 1] || f == e[i - 1]).length > 0 &&
    e.match(avoidRegex) === null
);

console.log(inputText.length);
console.log(niceStrings.length);
