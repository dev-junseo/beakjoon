const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [F, S, G, U, D] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);
let visisted = Array(F + 1).fill(false);

function bfs(start, end, up, down, max) {
    const impossible = 'use the stairs'
    let queue = [[start, 0]];
    visisted[start] = true;
    while (queue.length) {
        let [node, cnt] = queue.shift();
        if (node === end) return cnt;
        for (let stair of [node + up, node - down]) {
            if (!visisted[stair] && stair >= 1 && stair <= max) {
                visisted[stair] = true;
                queue.push([stair, cnt + 1]);
            }
        }
    }
    return impossible;
}
console.log(bfs(S, G, U, D, F));