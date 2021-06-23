let a = 5;
let b = 3;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

// programa 1 (retornar o maior de 2 numeros)

let numeroMaior;

if (adicao > multiplicacao) {
    numeroMaior = adicao;
}
else {
    numeroMaior = multiplicacao;
}

console.log (numeroMaior);


// programa 2 (retorna o maior de 3 números)

let maiorDeTres;

if (subtracao > divisao && subtracao > adicao) {
    maiorDeTres = subtracao;
}
else if (adicao > divisao && adicao > subtracao) {
    maiorDeTres = adicao;
}
else {
    maiorDeTres = divisao;
}

console.log (maiorDeTres);


// programa 3 (retorna positivo ou negativo)

let referencia = adicao / divisao;
let valorRetorna;

if (referencia > 0){
    valorRetorna = "positive";
}
else if (referencia < 0) {
    valorRetorna = "negative";
}
else {
    valorRetorna = "zero";
}


console.log (valorRetorna);

// programa 4 (valores internos de um triangulo)

