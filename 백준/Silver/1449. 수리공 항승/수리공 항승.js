const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split('\n');
const [N, tape] = input[0].split(' ').map(Number);
const location = input[1].split(' ').map(Number).sort((a, b) => a - b);

function HowManyTape(N, L, list) {
    let fix = 0;
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (fix < list[i]) {
            count += 1;
            fix = list[i] + L - 1;

        }
    }
    return count;
}
console.log(HowManyTape(N, tape, location));