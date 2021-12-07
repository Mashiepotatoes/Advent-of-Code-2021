// iterate input, sum every 3 values, then add to a new array
// repeat part 1

import { readFileSync } from 'fs';

let inputString = readFileSync('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

const input = inputString.split('\n');
const inputIntegers = input.map(value => parseInt(value, 10))
const threesArray = [];

const measureDepth = (array) => {
  let counter = 0;

  inputIntegers.forEach((int, index) => {
    threesArray.push(int + inputIntegers[index + 1] + inputIntegers[index + 2]);
  })

  console.log(threesArray.length);

  threesArray.forEach((set, index) => {
    if ((set) > threesArray[index - 1]) {
      counter += 1;
    }
  })

  return counter;
}

console.log(measureDepth(inputIntegers));
// console.log(measureDepth([552,  589,  636,  665,  675,  670,  669]));
