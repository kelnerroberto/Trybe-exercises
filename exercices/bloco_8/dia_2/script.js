/*const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
const findMusic = (id) => {
  let result = musicas.find((num) => num['id'] === id);
  return result.title;
};
//console.log(Object.values(musicas));
console.log(findMusic('31031685'));
*/
/*
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  let checkedName = arr.some((elemento) => name === elemento);
  if(checkedName === true) { return `O nome ${name} apareceu na lista!`}
  else { return `Me desculpe, mas o nome ${name} não está na nossa lista.`}
}

console.log(hasName(names, 'Ana'));
*/
/*
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element.age >= minimumAge);
}

console.log(verifyAges(people, 18));
*/

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a,b) => b.age - a.age);

console.log(people);