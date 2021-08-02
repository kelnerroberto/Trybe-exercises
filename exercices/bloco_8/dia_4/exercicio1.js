const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, num) => {
    return acc.concat(num);
  })
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);