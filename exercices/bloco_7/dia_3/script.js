/*const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4,5), 9, 'A soma de 4 + 5 é igual a 9');
assert.strictEqual(sum(0,0), 0, 'A soma de 0 + 0 é igual a 0');
assert.strictEqual(sum(4, '5'), 9, 'A soma de 4 + 5 é igual a 9 e os parâmetros devem ser numbers');
*/
// implemente seus testes aqui

/*const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([ 1, 2, 3, 4 ], 3), [1, 2 ,4]);
assert.notDeepStrictEqual(myRemove([ 1, 2 , 3, 4], 3),[1, 2, 3, 4], 'Eles não devem ser estritamente iguais');
assert.notDeepStrictEqual(myRemove([1, 2 ,3 ,4], 3), [1, 2, 3 ,4], 'Não deve ser igual');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1,2,3,4]);
*/
// implemente seus testes aqui

/*
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
*/
// implemente seus testes aqui

/*
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(12), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.strictEqual(myFizzBuzz(8), 8);
assert.strictEqual(myFizzBuzz('10'), false);
*/
// implemente seus testes aqui

/*
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
*/
//assert.strictEqual(obj1, obj2);
//assert.strictEqual(obj1, obj3);
//assert.strictEqual(obj2, obj3);
//assert.deepStrictEqual(obj1,obj2); // Com o deepStrictEqual ele verifica que o obj1 e obj2 são iguais, independente da ordem das chaves no objeto.
// implemente seus testes aqui
/*
const assert = require('assert');

// escreva a função addOne aqui


function addOne(myArray) {
  let arrayToChange = [];
  for (let index = 0; index < myArray.length; index += 1){
    let sum = (myArray[index]+1);
    arrayToChange.push(sum);
  }
  return arrayToChange
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);


assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected, '1');
assert.deepStrictEqual(myArray, unchanged, '2');
*/
/*
const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(words) {
  let arrayToReturn = [];
  for (let index = 0; index < words.length; index +=1) {
    arrayToReturn.push(words[index].length);
  }
  return arrayToReturn
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
*/
/*
const assert = require('assert');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
*/
/*
const assert = require('assert');
// escreva a função findTheNeedle aqui

function findTheNeedle(words, word) {
  let count;
  for (let index = 0; index < words.length; index += 1) {
    if (words[index] === word){
      count = index;
    }
  }
  if (count === undefined) {
    count = -1;
  }
  return count
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
*/