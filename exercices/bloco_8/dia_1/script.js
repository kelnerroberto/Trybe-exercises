/*const wakingUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!';

const sleeping = () => 'Partiu dormir!';

const doingThings = (param) => console.log(param());

doingThings(sleeping);
*/

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