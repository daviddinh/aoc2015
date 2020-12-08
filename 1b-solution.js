const fs = require("fs")
let inputText = fs.readFileSync("./1-input.txt", "utf-8")
let firstTimeInBasement = true
let floor = inputText.split("").reduce((sum, e, i) => {
    if (sum < 0 && firstTimeInBasement) {
        firstTimeInBasement = false
        console.log("postion for first time: ", i)
    }
    return( e == "(" ? sum + 1  : sum - 1)
}, 0)