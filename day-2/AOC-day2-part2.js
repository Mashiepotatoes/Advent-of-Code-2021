import { readFileSync } from 'fs';

let inputString = readFileSync('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

const input = inputString.split('\n');
const dirData = input.map(dir => dir.split(' '));

let position = 0;
let depth = 0;
let aim = 0;

const moveSub = (array) => {
  array.forEach(data => {
    if (data[0] == 'forward') {
      position += parseInt(data[1], 10);
      depth += aim * parseInt(data[1], 10);
    } else if (data[0] == 'up') {
      aim -= parseInt(data[1], 10);
    } else if (data[0] == 'down') {
      aim += parseInt(data[1], 10);
    }
  })
  return position * depth;
}

// console.log(moveSub([
//   ['forward', '5'],
//   ['down', '5'],
//   ['forward', '8'],
//   ['up', '3'],
//   ['down', '8'],
//   ['forward', '2']
// ])) // => 900

console.log(moveSub(dirData));
