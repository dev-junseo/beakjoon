const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const count = Number(input[0].split(' ')[0]);
const student = input.slice(1);

let successObj = new Map();
student.forEach((par) => {
    if (successObj.has(par)) {
        successObj.delete(par);
        successObj.set(par, 1);
    } else successObj.set(par, 1);
})

let k = 0;
let answer = []
successObj.forEach((value, key) => {
    if (k < count) {
        answer.push(key)
        k++;
    }
})
console.log(answer.join('\n'));