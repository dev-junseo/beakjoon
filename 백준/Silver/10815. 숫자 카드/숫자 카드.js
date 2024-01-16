const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const mycard = input[1].split(' ').map(Number).sort((a, b) => a - b);
const compare = input[3].split(' ').map(Number);
let result = [];

function binery_search(key) {
    let low = 0;
    let high = mycard.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (mycard[mid] === key) {
            return 1;
        } else if (mycard[mid] > key) {
            high = mid - 1;
        } else if (mycard[mid] < key) {
            low = mid + 1;
        }
    }
    return 0;
}
for (let i = 0; i < compare.length; i++) {
    if (binery_search(compare[i]) === 1) {
        result.push("1");
    } else result.push(0);
}
console.log(result.join(' '))