const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const people = Number(input.shift());
const [child, parent] = input.shift().split(" ").map(Number);
input.shift();
const arr = input.map((a) => a.split(" ").map(Number));

let visisted = Array(people + 1).fill(false);
let grph = [...Array(people + 1)].map((e) => []);
for (let i = 0; i < arr.length; i++) {
  let [from, to] = arr[i];
  grph[from].push(to);
  grph[to].push(from);
}
function dfs(start, target) {
  let stack = [[start, 0]];
  visisted[start] = true;

  while (stack.length) {
    let [node, cnt] = stack.pop();
    if (node === target) {
      return cnt;
    }
    for (let i of grph[node]) {
      if (!visisted[i]) {
        visisted[i] = true;
        stack.push([i, cnt + 1]);
      }
    }
  }
  return -1;
}
console.log(dfs(child, parent));