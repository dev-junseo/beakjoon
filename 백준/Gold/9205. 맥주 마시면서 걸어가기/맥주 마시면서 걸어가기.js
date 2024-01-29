const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [t, ...input] = fs.readFileSync(filePath, "utf-8").trim().split("\n");
let count = 0;
let answer = [];
let idx = 0;
while (count < t) {
    let storeNum = parseInt(input[idx++]);
    let position = input.slice(idx, idx + storeNum + 2).map((a) => a.split(" ").map(Number));
    idx += (storeNum + 2);

    let [start, last] = [position[0], position[position.length - 1]];
    let visit = Array.from({ length: storeNum + 2 }, () => 0);
    let canMove = new Set();
    let queue = [];
    queue.push([position[0], 0]);
    canMove.add(position[0]);
    visit[0] = 1;

    while (queue.length) {
        let [node, idx] = queue.shift();

        for (let i = 0; i < position.length; i++) {
            if (idx === i) continue;
            if (!visit[i] && calcDist(node, position[i]) <= 1000) {
                visit[i] = true;
                canMove.add(position[i]);
                queue.push([position[i], i]);
            }
        }
    }
    if (canMove.has(last)) answer.push("happy");
    else answer.push("sad");
    count++;
}
function calcDist(p1, p2) {
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    return (Math.abs(x2 - x1) + Math.abs(y2 - y1));
}
console.log(answer.join("\n"));