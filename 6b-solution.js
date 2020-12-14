let inputText = require("fs")
  .readFileSync("./6-input.txt", "utf-8")
  .split("\n");

let lights = Array.from({ length: 1000 }, (e, i) =>
  Array.from({ length: 1000 }, (f, j) => 0)
);
let instructions = inputText.map((e) => {
  let instruction = e.split(" ");
  if (e.indexOf("toggle") !== -1) {
    lowerCorner = instruction[1].split(",").map((e) => parseInt(e));
    upperCorner = instruction[3].split(",").map((e) => parseInt(e));
    action = "toggle";
  } else {
    lowerCorner = instruction[2].split(",").map((e) => parseInt(e));
    upperCorner = instruction[4].split(",").map((e) => parseInt(e));
    action = instruction[1];
  }
  return {
    action,
    lowerCorner,
    upperCorner,
  };
});

instructions.map((e) => {
  if (e.action == "off") {
    for (let i = e.lowerCorner[0]; i <= e.upperCorner[0]; i++) {
      for (let j = e.lowerCorner[1]; j <= e.upperCorner[1]; j++) {
        lights[i][j] -= 1;
        if (lights[i][j] < 0) lights[i][j] = 0;
      }
    }
  }

  if (e.action == "on") {
    for (let i = e.lowerCorner[0]; i <= e.upperCorner[0]; i++) {
      for (let j = e.lowerCorner[1]; j <= e.upperCorner[1]; j++) {
        lights[i][j] += 1;
      }
    }
  }

  if (e.action == "toggle") {
    for (let i = e.lowerCorner[0]; i <= e.upperCorner[0]; i++) {
      for (let j = e.lowerCorner[1]; j <= e.upperCorner[1]; j++) {
        lights[i][j] += 2;
      }
    }
  }
});

let s = lights.reduce((sum, row) => {
  return (
    sum +
    row.reduce((rowSum, light) => {
      return rowSum + light;
    }, 0)
  );
}, 0);

console.log(s);
