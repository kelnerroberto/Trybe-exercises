const musicas = [
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