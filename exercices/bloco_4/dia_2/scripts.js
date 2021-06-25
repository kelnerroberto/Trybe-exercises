// exercícios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Para imprimir os elementos do array:

for (let i = 0; i < numbers.length; i += 1) {
    console.log (numbers[i]);
}

*/

// ------------------------------------------------------------------------------

/* Para somar os elementos do array e imprimir a soma deles:

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers [index];
}
console.log (soma);

*/

// ---------------------------------------------------------------------------------

/* Para imprimir a média aritimética do array:

let soma = 0;
let divisor;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers [index];
    divisor = soma / numbers.length;
}
console.log (divisor);
*/

// -----------------------------------------------------------------------

/* Para imprimir mensagens se o valor da média aritimética é maior ou menor/igual a 20:

let soma = 0;
let divisor;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers [index];
    divisor = soma / numbers.length;
}

if (divisor > 20) {
    console.log ('Valor maior que 20!')
}
else {
    console.log ('Valor menor ou igual a 20!')
}

*/

// -------------------------------------------------------------------

/* Verifica e imprime qual é o maior número do array numbers:

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

*/

// -----------------------------------------------------------------------------

/* Procura se existe número ímpar no array e se existirem, quantos números.

let oddNum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        oddNum += 1;
    }
}
if (oddNum > 0) {
    console.log(oddNum);
}
else {
    console.log('Nenhum valor ímpar encontrado')
}

*/

//---------------------------------------------------------------

/* Descobre o menor número do array

let arrayNum = [];
let menorNumero;

for (let index = 0; index < numbers.length; index += 1) {
    arrayNum.push(numbers[index]);
    for (let i = 0; i < arrayNum.length; i += 1) {
        if (arrayNum[i] < numbers[index]) {
        menorNumero = arrayNum[i];
        }
    }
}
    console.log(menorNumero);


