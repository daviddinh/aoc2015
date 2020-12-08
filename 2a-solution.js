const fs = require("fs");
let inputText = fs.readFileSync("./2-input.txt", "utf-8");
let presents = inputText.split("\n").reduce((sum, e) => {
  let dimensions = e.split("x");
  let l = parseInt(dimensions[0]);
  let w = parseInt(dimensions[1]);
  let h = parseInt(dimensions[2]);
  // console.log(l, w, h)
  let requiredArea = 2 * l * w + 2 * w * h + 2 * h * l;
  let slack = Math.min(l * w, w * h, h * l);
  return sum + requiredArea + slack;
}, 0);

console.log(presents);
