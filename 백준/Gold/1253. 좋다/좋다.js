const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n").slice(1);
const num = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
let count = 0;

function binery_search(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        let sum = arr[low] + arr[high];
        if (sum === key) {
            return true;
        } else if (sum < key) {
            low += 1;
        } else {
            high -= 1;
        }
    }
    return false;
}

for (let i = 0; i < num.length; i++) {
    let sum = num[i];
    let newNumArr = num.slice(0, i).concat(num.slice(i + 1));
    if (binery_search(newNumArr, sum)) {
        count += 1;
    }
}
console.log(count);