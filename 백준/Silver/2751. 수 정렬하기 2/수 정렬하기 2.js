const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n").map(Number).slice(1);

const answer = input.sort((a, b) => a - b).join('\n');
console.log(answer);