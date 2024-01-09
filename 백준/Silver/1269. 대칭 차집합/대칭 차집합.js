const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n").slice(1);
const A = new Set(input[0].split(' ').map(Number));
const B = new Set(input[1].split(' ').map(Number));

let forward = new Set(A);
A.forEach((par) => {
    if (B.has(par)) {
        forward.delete(par);
    }
})

let reverse = new Set(B);
B.forEach((par) => {
    if (A.has(par)) {
        reverse.delete(par);
    }
})
let answer = new Set(forward);
reverse.forEach((par) => {
    answer.add(par);
})
console.log(answer.size);