const fs = require("fs")
let inputText = fs.readFileSync("./1-input.txt", "utf-8")
let floor = inputText.split("").reduce((sum, e) => e == "(" ? sum + 1 : sum - 1, 0)
console.log(floor)