const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const N = Number(input.shift())
const area = input.map(a => a.split(' ').map(Number));
let ds = [[0, 0, -1, 1], [-1, 1, 0, 0]];
let maxSafeZone = 0;

function dfs(i, j, h, visited) {
    for (let a = 0; a < 4; a++) {
        let mx = ds[0][a] + i;
        let my = ds[1][a] + j;
        if (my >= 0 && mx >= 0 && my < N && mx < N && !visited[mx][my]) {
            visited[mx][my] = true;
            dfs(mx, my, h, visited);
        }
    }
}

for (let h = 0; h <= 100; h++) {
    let safeZone = 0;
    const visited = [...Array(N)].map((_, x) => [...Array(N)].map((_, y) => area[x][y] <= h));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                visited[i][j] = true;
                dfs(i, j, h, visited);
                safeZone++;
            }
        }
    }
    maxSafeZone = Math.max(maxSafeZone, safeZone);
}
console.log(maxSafeZone);