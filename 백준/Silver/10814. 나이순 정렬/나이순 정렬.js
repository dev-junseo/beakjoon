const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);

const arr = [];
for(let i = 1 ; i <= count ; i += 1 ){
  const user = input[i].split(' ');
  arr.push([Number(user[0]), user[1]]);
}

arr.sort((a, b) => a[0] - b[0]);

let result = '';
for(let j = 0 ; j < count ; j += 1){
  result += arr[j][0] + ' '+ arr[j][1] + '\n';
}

console.log(result);