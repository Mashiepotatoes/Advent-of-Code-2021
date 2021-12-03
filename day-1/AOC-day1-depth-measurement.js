import { readFileSync } from 'fs';

// Read txt file to get input
// split string into an array, convert each to integer.
// create counter
// iterate through the array
// check if value of the index before is lesser, if so, counter +1
// return counter


let inputString = readFileSync('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

const input = inputString.split('\n');
const inputIntegers = input.map(value => parseInt(value, 10))

const measureDepth = (array) => {
  let counter = 0;

  array.forEach((depth, index) => {
    if ((depth) > array[index - 1]) {
      counter += 1;
    }
  })

  return counter;
}

console.log(measureDepth([100, 120, 130])) // expect 2
console.log(measureDepth([0, 120, 50, 60, 20, 10, 1, 200])) // expect 3
console.log(measureDepth(inputIntegers));
