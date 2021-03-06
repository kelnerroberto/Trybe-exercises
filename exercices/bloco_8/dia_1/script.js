const wakingUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!';

const sleeping = () => 'Partiu dormir!';

const doingThings = (param) => console.log(param());

doingThings(sleeping);


const hiredPerson = (name) => ({ nomeCompleto: name, email: `${name.replace(/\s+/g, '_')}@trybe.com`, });
// Método "string.replace()" retirado de : https://qastack.com.br/programming/5963182/how-to-remove-spaces-from-a-string-using-javascript.

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: hiredPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: hiredPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


console.log(newEmployees());


const numeroSorteado = (max) => Math.floor(Math.random() * max) + 1;
const sorteio = (number, func) => {
  if (number === func) {
    return `O número sorteado foi: ${func}. 
Parabéns, você ganhou!`;
  }
  return `O número sorteado foi: ${func}. 
Que pena, tente novamente.`;
}

console.log(sorteio(3, numeroSorteado(5)));


const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const kelnerAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers, checkIfIsCorrect) => {
  return checkIfIsCorrect();
}

const teste = checkAnswers(gabarito, kelnerAnswers, () => {
  let counter = 0;
  for (let index = 0; index < gabarito.length; index += 1){
    if (gabarito[index] === kelnerAnswers[index]){
      counter += 1;
    }
  }
  return counter;
});

console.log(teste);
