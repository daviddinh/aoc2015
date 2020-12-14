const fs = require("fs");
let inputText = fs.readFileSync("./5-input.txt", "utf-8").split("\n");
let niceStrings = inputText.filter((string) => {
  stringArray = string.split("");
  pairs = stringArray.map((e, i) => e + stringArray[i + 1]);
  // pair appears but doesn't overlap
  pairHasDuplicate =
    pairs.filter((e) => string.replace(e, "").indexOf(e) !== -1).length > 1;

  // duplicate with a letter in between
  let hasDuplicatesWithGap =
    stringArray.filter(
      (f, i) => f == stringArray[i + 2] || f == stringArray[i - 2]
    ).length > 0;

  return pairHasDuplicate && hasDuplicatesWithGap;
});

console.log(niceStrings.length);
