const fs = require("fs");
let inputText = fs.readFileSync("./2-input.txt", "utf-8");
let presents = inputText.split("\n").reduce((sum, e) => {
  let dimensions = e.split("x");
  let l = parseInt(dimensions[0]);
  let w = parseInt(dimensions[1]);
  let h = parseInt(dimensions[2]);

  let orderedDimensions = [l, w, h].sort((a,b) => a - b);

  let requiredRibbonLength =
    2 * orderedDimensions[0] + 2 * orderedDimensions[1];
  let bowLength = l * w * h;
  return sum + requiredRibbonLength + bowLength;
}, 0);

console.log(presents);
