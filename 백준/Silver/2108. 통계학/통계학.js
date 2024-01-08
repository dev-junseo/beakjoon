const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n").slice(1).map(Number);
const N = input.length;
input.sort((a, b) => a - b);
let sum = 0;
for (let i of input) {
    sum += i;
}
const avg = Math.round(sum / N);
const center = input[Math.floor(N / 2)];
const range = input[N - 1] - input[0];

let map = new Map();
let max = 1;
for (let index of input) {
    if (map.has(index)) {
        max = Math.max(max, map.get(index) + 1);
        map.set(index, map.get(index) + 1);
    }
    else {
        map.set(index, 1);
    }
}
let maxArr = [];
for (let [key, val] of map) {
    if (val === max) {
        maxArr.push(key);
    }
}
const mode = maxArr.length === 1 ? maxArr[0] : maxArr[1];
const answer = `${avg}\n` + `${center}\n` + `${mode}\n` + `${range}`;
console.log(answer);