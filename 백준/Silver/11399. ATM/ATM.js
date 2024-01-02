const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
input.shift();
const numArr = input[0].split(' ').map(Number);
const newArr = numArr.sort((a, b) => a - b);
let sumNumArr = [];
let sumNum = 0

for (let i = 0; i < newArr.length; i++) {
    sumNum += newArr[i];
    sumNumArr.push(sumNum);
}
let sum = 0;
for (let i = 0; i < sumNumArr.length; i++) {
    sum += sumNumArr[i];
}
console.log(sum);