const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split('\n');

const sum = Number(input[0].split(' ').slice(1));
let coin = input.slice(1).map(Number);

function CoinCount(coin, sum) {
    const N = coin.length;
    let count = 0;
    let rest = sum;
    for (let i = N - 1; i >= 0; i--) {
        if (rest < coin[i]) {
            continue;
        } else if (coin[i] === 1) {
            count += rest;
            break;
        } else {
            let a = parseInt(rest / coin[i]);
            count += a;
            rest -= a * coin[i];
        }
    }
    return count;
}
console.log(CoinCount(coin, sum));