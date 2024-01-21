const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const [N, M] = input.shift().split(' ').map(Number);
const maze = input.map((v) => v.split('').map(Number));

// BFS
function bfs(arr, X, Y) {
    const queue = [[0, 0, 1]];
    const [goalY, goalX] = [X - 1, Y - 1];
    const ds = [[-1, 1, 0, 0], [0, 0, 1, -1]];
    
    while (queue.length) {
        const [curY, curX, move] = queue.shift();

        if (goalY === curY && goalX === curX) return move;
        for (let i = 0; i < 4; i++) {
            const ny = curY + ds[0][i];
            const nx = curX + ds[1][i];

            if (ny >= 0 && ny < N && nx >= 0 && nx < M && arr[ny][nx]) {
                arr[ny][nx] = 0;
                queue.push([ny, nx, move + 1]);
            }
        }
    }
};

console.log(bfs(maze, N, M));