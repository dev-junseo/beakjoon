const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const ds = [
    [-1, 1, 0, 0, 0, 0],
    [0, 0, -1, 1, 0, 0],
    [0, 0, 0, 0, -1, 1],
];
const [M, N, H] = input.shift().split(" ").map(Number);
let visited = [...Array(H)].map((e) =>
    [...Array(N)].map((e) => Array(M).fill(false))
);
let count = M * N * H;
let z = 0;
let answer;

let queue = [];
for (let i = 0; i < input.length; i++) {
    let box = input[i].split(" ").map(Number);
    box.forEach((tomato, pos) => {
        if (tomato === 1) {
            queue.push([i % N, pos, z, 0]);
            visited[z][i % N][pos] = true;
            count--;
        } else if (tomato === -1) {
            visited[z][i % N][pos] = true;
            count--;
        }
    });
    if ((i + 1) % N === 0) ++z;
}

let index = 0;
while (queue.length !== index) {
    const [x, y, z, pos] = queue[index];
    for (let i = 0; i < 6; i++) {
        const xPos = x + ds[0][i];
        const yPos = y + ds[1][i];
        const zPos = z + ds[2][i];

        if (xPos < 0 || yPos < 0 || zPos < 0 || xPos >= N || yPos >= M || zPos >= H)
            continue;
        if (!visited[zPos][xPos][yPos]) {
            visited[zPos][xPos][yPos] = true;
            queue.push([xPos, yPos, zPos, pos + 1]);
            count--;
        }
    }

    index++;
    answer = pos;
}

console.log(count ? -1 : answer);