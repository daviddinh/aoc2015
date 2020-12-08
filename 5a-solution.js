const fs = require("fs");
const vowelsRegex = /(a|e|i|o|u)/gm;
const avoidRegex = /ab|cd|pq|xy/gm;
let inputText = fs.readFileSync("./5-input.txt", "utf-8");
let niceStrings =
  inputText
    .split("\n")
    .filter(
      (e) =>
        e.match(vowelsRegex) && e.match(vowelsRegex).length >= 3 &&
        e.split("").filter((f, i) => e.indexOf(f) == i - 1).length > 0 && 
        e.match(avoidRegex) == null)

console.log(niceStrings.length);
