const fs = require("fs");
const { start } = require("repl");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const n = Number(input.shift())
input.shift(1);

let grph = [...Array(n + 1)].map(e => []);
for (let i = 0; i < input.length; i++) {
    let [from, to] = input[i].split(' ').map(Number);
    grph[from].push(to);
    grph[to].push(from);
}

function bfs(graph, startNode) {
    const visitid = [];
    let needVisit = [];

    needVisit.push(startNode);
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visitid.includes(node)) {
            visitid.push(node);
            let nodes = graph[node];
            needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
        }
    }
    return visitid.length - 1;
}
console.log(bfs(grph, 1))