const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split('').map(Number);

function isMultiple(n) {
    let sum = n.reduce((a, b) => a + b);
    if (!n.includes(0)) {
        return -1;
    }
    else if (sum % 3 !== 0) {
        return -1;
    }
    else {
        return n.sort((a, b) => b - a).join('');
    }
}
console.log(isMultiple(input));