const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const N = Number(input.shift());
const maze = input.map((v) => v.split('').map(Number));

function bfs(x, y) {
    const queue = [[x, y]];
    const visited = {};
    visited[[x, y]] = true;
    visitedCoords[[x, y]] = true;
    let dx = [0, 0, 1, -1];
    let dy = [-1, 1, 0, 0];
    let cnt = 1;

    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            let X = queue.shift();
            for (let j = 0; j < 4; j++) {
                let nx = X[0] + dx[j];
                let ny = X[1] + dy[j];
                if ((nx >= 0 &&
                    ny >= 0 &&
                    nx < maze.length &&
                    ny < maze.length) &&
                    (maze[nx][ny] === 1) &&
                    (!visited[[nx, ny]])
                ) {
                    visited[[nx, ny]] = true;
                    visitedCoords[[nx, ny]] = true;
                    cnt++;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    return cnt;
}

const visitedCoords = {};
const answer = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (maze[i][j] === 1 && !visitedCoords[[i, j]]) answer.push(bfs(i, j));
    }
}

console.log(answer.length);
answer.sort((a, b) => a - b)
answer.forEach((item) => console.log(item));
