import { readFileSync } from 'fs';

// Read txt file to get input
// split string into an array, convert each to integer.
// create horizontal position variable
// create depth variable
// iterate through the array, split each element to get direction and value - this will result in an array of arrays.
// if direction = forward, HP + value of index1
// if diretion = down/up, depth +/- value of index1
// return depth x horizontal position

let inputString = readFileSync('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

const input = inputString.split('\n');
const dirData = input.map(dir => dir.split(' '));

let position = 0;
let depth = 0;

const moveSub = (array) => {
  array.forEach(data => {
    // switch(data[0]) {
    //   case 'forward':
    //     position += parseInt(data[1], 10);
    //   case 'up':
    //     depth -= parseInt(data[1], 10);
    //   case 'down':
    //     depth += parseInt(data[1], 10);
    // };

    if (data[0] == 'forward') {
      position += parseInt(data[1], 10);
    } else if (data[0] == 'up') {
      depth -= parseInt(data[1], 10);
    } else if (data[0] == 'down') {
      depth += parseInt(data[1], 10);
    }
  })
  return position * depth;
}

// console.log(moveSub([['forward', '2'], ['up', '2'], ['down', '3']])) // => 2
//

console.log(moveSub(dirData));
