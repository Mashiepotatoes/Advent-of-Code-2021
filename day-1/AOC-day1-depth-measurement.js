import { readFileSync } from 'fs';

// line-by-line parsing of txt file to get input
// insert values into an array, convert each to integer.
// create a var for state of true / false
// create counter
// iterate through the array
// check if value of the index before is lesser, if so, change state and +1, else skip
// return counter


let inputString = readFileSync('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

const input = inputString.split('\n');
const inputIntegers = input.map(value => parseInt(value, 10))

const measureDepth = (array) => {
  let counter = 0;
  const state = false;

  array.forEach((depth, index) => {
    if ((depth) > array[index - 1]) {
      state == true;
      counter += 1;
    } else {
      state == false;
    }
  })

  return counter;
}

console.log(measureDepth([100, 120, 130])) // expect 2
console.log(measureDepth([0, 120, 50, 60, 20, 10, 1, 200])) // expect 3
console.log(measureDepth(inputIntegers));
