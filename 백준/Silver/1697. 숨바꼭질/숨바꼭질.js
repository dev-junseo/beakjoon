const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, m] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

let visisted = Array(100001).fill(false);

function bfs(start, finish) {
    let queue = [[start, 0]];
    visisted[start] = true;
    while (queue.length) {
        let [node, cnt] = queue.shift();
        if (node === finish) return cnt;
        for (let dot of [node + 1, node - 1, node * 2]) {
            if (!visisted[dot] && dot >= 0 && dot <= 100000) {
                visisted[dot] = true;
                queue.push([dot, cnt + 1]);
            }
        }
    }
}
console.log(bfs(n, m));