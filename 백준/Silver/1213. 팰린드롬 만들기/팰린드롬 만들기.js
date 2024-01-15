const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("");

const getPalindrome = (input) => {
  let map = new Map();
  for (const ch of input) {
    if (map.has(ch)) map.set(ch, map.get(ch) + 1);
    else map.set(ch, 1);
  }

  table = Object.values([...map]).sort((a, b) => a[0].localeCompare(b[0]));

  let oddCount = 0;
  let oddChar = "";
  for (const [key, val] of table) {
    if (val % 2) {
      oddCount++;
      oddChar = key;
    }
  }
  if (oddCount > 1) return "I'm Sorry Hansoo";
  let firstHalf = "";

  for (let [key, val] of table) {
    let s = "";
    for (let i = 0; i < Math.floor(val / 2); i++) {
      s += key;
    }
    firstHalf += s;
  }
  const secondHalf = firstHalf.split("").reverse().join("");
  return oddCount === 1
    ? firstHalf + oddChar + secondHalf
    : firstHalf + secondHalf;
};

console.log(getPalindrome(input));
