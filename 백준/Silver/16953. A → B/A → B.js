const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);
let [start, goalnum] = input;

function AtoB(goalnum) {
  let count = 1;
  while (true) {
    let goal = goalnum.toString().split("");
    if (start === goalnum) {
      return count;
    } else if (goal[goal.length - 1] === "1") {
      goal.pop();
      goalnum = Number(goal.join(""));
      count += 1;
    } else if ((goalnum % 2 === 0) & (goalnum !== 0)) {
      goalnum = goalnum / 2;
      goal = goalnum.toString().split("");
      count += 1;
    } else {
      break;
    }
  }
  return -1;
}
console.log(AtoB(goalnum));