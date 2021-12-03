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

console.log(dirData);
