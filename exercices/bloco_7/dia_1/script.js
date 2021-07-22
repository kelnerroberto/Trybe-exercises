/* const testingScope = (escopo) => {
  (escopo === true) ? console.log('Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !'): console.log('Não devo ser utilizada fora meu escopo (else)');
  }
  
testingScope(false);
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compareNumbers = (a, b) => a - b;

console.log(`Os número ${oddsAndEvens.sort(compareNumbers)} se encontram ordenados de forma crescente`);