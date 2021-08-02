const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const sum = names.reduce((acc, elemento) =>{
    for (let n of elemento) {
      if (n === 'A' || n === 'a'){
        acc += 1
      }
    }
    return acc
  }, 0)
  return sum;
}

assert.deepStrictEqual(containsA(), 20);