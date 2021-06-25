// exercícios

/* Para funcionar os exercícios de 1 à 7 deve-se descomentar a variável "numbers" abaixo (linha 6).
Para os exercícios 8 e 9, deve-se comentar novamente a linha 6 e descomentar a partir da linha 126. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

*/

//-----------------------------------------------------------------------------------

/* 1. Para imprimir os elementos do array:

for (let i = 0; i < numbers.length; i += 1) {
    console.log (numbers[i]);
}

*/

// ------------------------------------------------------------------------------


/* 2. Para somar os elementos do array e imprimir a soma deles:


let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers [index];
}
console.log (soma);

*/

// ---------------------------------------------------------------------------------


/* 3. Para imprimir a média aritimética do array:

let soma = 0;
let divisor;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers [index];
    divisor = soma / numbers.length;
}
console.log (divisor);
*/

// -----------------------------------------------------------------------

/* 4. Para imprimir mensagens se o valor da média aritimética é maior ou menor/igual a 20:

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

/* 5. Verifica e imprime qual é o maior número do array numbers:

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

*/

// -----------------------------------------------------------------------------

/* 6. Procura se existe número ímpar no array e se existirem, quantos números.

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

//-----------------------------------------------------------------------------

/* 7. Descobre o menor número do array

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

*/

// ------------------------------------------------------------------------------------

/* 8. Cria array de 1 até 25 utilizando a propriedade for

let arrNum = [];

for (let index = 1; index < 26; index += 1) {
    arrNum.push(index);
}
console.log(arrNum);


*/

//-----------------------------------------------------------------------------------------

/* 9. Divide os elementos do array criado acima por 2.

let numDiv = [];

for (let i = 0; i < arrNum.length; i += 1) {
    numDiv.push(arrNum[i]/2);
}

console.log (numDiv);

*/