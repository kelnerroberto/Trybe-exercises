// Botão para mudar a cor do background
const pressColorButton = document.querySelector('#add-button');

function mudaCorDeFundo(){
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'rgb(1, 16, 23)';
        document.body.style.color = 'wheat';
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
pressColorButton.addEventListener('click', mudaCorDeFundo);
mudaCorDeFundo();

// Botões para alterar o tamanho da fonte do texto
const pressPlusButton = document.querySelector('#plus-button');
const pressMinusButton = document.querySelector('#minus-button')
const getText = document.querySelector('.texto-corrido');
getText.style.fontSize = '14px';

function aumentaTexto () {
    switch(getText.style.fontSize){
        case '12px':
            getText.style.fontSize = '14px';
            break;

        case '14px':
            getText.style.fontSize = '16px';
            break;

        case '16px': 
        getText.style.fontSize = '18px';
        break;
    
        case '18px':
            getText.style.fontSize = '20px';
            break;
        
        case '20px':
            getText.style.fontSize = '22px';
            break;
    }
}
pressPlusButton.addEventListener('click',aumentaTexto);

function diminuiTexto() {
    switch(getText.style.fontSize){
        case '22px':
            getText.style.fontSize = '20px';
            break;
        
        case '20px':
            getText.style.fontSize = '18px';
            break;

        case '18px':
            getText.style.fontSize = '16px';
            break;

        case '16px':
            getText.style.fontSize = '14px';
            break;

        case '14px':
            getText.style.fontSize = '12px';
            break;
    }
}

pressMinusButton.addEventListener('click', diminuiTexto);

// Input para alterar a cor do texto
const inputOfText = document.querySelector('#phrases-input');
function changeTextColor(){
    getText.style.color = inputOfText.value;
}

inputOfText.addEventListener('keyup', changeTextColor);
