   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        */
 //Crie uma função que mude o texto na tag <p> para uma descrição de como você se 
 //vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText(text) {
   document.getElementsByTagName('p')[0].innerHTML = text;
}
changeText('Me vejo programando')

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorBg(color) {
   document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
}
changeColorBg('rgb(76,164,109)')
// Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColor(color) {
   document.getElementsByClassName('center-content')[0].style.backgroundColor = color;
}
changeColor('white')
 //Crie uma função que corrija o texto da tag <h1>.
 function correctText(rightText) {
    document.getElementsByTagName('h1')[0].innerText = rightText;
 }
 correctText('Exercício 5 - JavaScript')

 //Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
   function upperCase() {
      let variavel = document.getElementsByTagName('p');
      for (let index = 0; index < variavel.length; index += 1){
      let texto = variavel[index];
      texto.innerText = texto.innerText.toUpperCase();
      }
   }
   upperCase()
   // Crie uma função que exiba o conteúdo de todas as tags <p> no console.
       