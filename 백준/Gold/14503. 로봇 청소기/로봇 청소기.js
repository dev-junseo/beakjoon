const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const ds = [[-1, 0, 1, 0], [0, 1, 0, -1]];
const [N, M] = input.shift().split(" ").map(Number);
const [startX, startY, d] = input.shift().split(" ").map(Number);
const graph = input.map((v) => v.split(" ").map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));

const maxDs = ds[0].length;
function getPositivePosition(num) {
    if (num < 0) {
        return (num + maxDs);
    } else {
        return num;
    }
};

let count = 0;
const queue = [[startX, startY, d]];
while (queue.length) {
    let [x, y, dir] = queue.shift();
    if (!graph[x][y] && !visited[x][y]) {
        count++;
        visited[x][y] = true;
    }
    for (let i = 0; i < 4; i++) {
        dir = getPositivePosition(--dir);
        const nx = x + ds[0][dir];
        const ny = y + ds[1][dir];
        if (!graph[nx][ny] && !visited[nx][ny]) {
            queue.push([nx, ny, dir]);
            break;
        }
        if (i === 3) {
            const backDir = getPositivePosition(dir - 2);
            const bx = x + ds[0][backDir];
            const by = y + ds[1][backDir];
            if (!graph[bx][by]) {
                queue.push([bx, by, dir]);
                break;
            }
        }
    }
}
console.log(count);