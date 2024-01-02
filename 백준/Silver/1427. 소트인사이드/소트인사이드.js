const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("");

const arr = input.sort((a, b) => b - a);
console.log(Number(arr.join('')));