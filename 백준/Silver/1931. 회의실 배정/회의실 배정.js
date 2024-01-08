const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n").slice(1);

let arr = []
for (let i of input) {
    arr.push(i.split(' ').map(Number));
}
arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    else return a[1] - b[1];
});
let count = 1;
let finish = arr[0][1];
for (let i = 1; i < input.length; i++) {
    if (finish <= arr[i][0]) {
        finish = arr[i][1];
        count += 1;
    }
}
console.log(count)