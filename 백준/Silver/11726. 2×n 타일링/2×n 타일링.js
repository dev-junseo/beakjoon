const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();
const N = Number(input);

let arr = Array(N + 1).fill(0);

function tilling(n) {
    if (n === 1) return 1
    else if (n === 2) return 2
    else if (arr[n] !== 0) return arr[n]
    else {
        return arr[n] = (tilling(n - 1) + tilling(n - 2)) % 10007;
    }
}
console.log(tilling(N))