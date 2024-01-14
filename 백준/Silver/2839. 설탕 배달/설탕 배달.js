const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath, "utf-8").trim());

function Sugar(a) {
    let count = 0;

    while (a > 0) {
        if ((a % 5) === 0) {
            a -= 5;
        }
        else {
            a -= 3
        };
        count++;
    }
    if (a === 0) {
        return count;
    } else return -1;
}
console.log(Sugar(input));