let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const bfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while(needVisit.length !==0){
    const node = needVisit.shift();
    if(!visited.includes(node)){
      visited.push(node);
      let nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
    }
  }

  return visited;
};

const dfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while(needVisit.length !==0){
    const node = needVisit.pop();
    if(!visited.includes(node)){
      visited.push(node);
      let nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
    }
  }

  return visited;
};

let [n, edge, start] = input.shift().split(' ').map(Number);
let grph = [...Array(n + 1)].map(e => []);

for(let i = 0 ; i < edge ; i++){
    let [from, to] = input[i].split(' ').map(Number);
    grph[from].push(to);
    grph[to].push(from);
}

console.log(dfs(grph, start).join(' '));
console.log(bfs(grph, start).join(' '));