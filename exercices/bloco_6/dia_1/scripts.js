
const stateOptions = document.getElementById('user-state');
let arrOfStates = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'];

function createStatesOption() {
    for (let index = 0; index < arrOfStates.length; index += 1) {
        let selectorOption = document.createElement('option');
        selectorOption.innerText = arrOfStates[index];
        selectorOption.value = arrOfStates[index];
        stateOptions.appendChild(selectorOption);
    }
}
createStatesOption();

const submitBtn = document.querySelector('#submit-btn');
function preventBtn(event) {
    event.preventDefault();
}

submitBtn.addEventListener('click', preventBtn);
