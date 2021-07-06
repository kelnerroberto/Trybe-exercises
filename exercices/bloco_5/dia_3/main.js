function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const diasMes = document.querySelector('#days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  let daysMonth = dezDaysList[index];
  let dayLiItem = document.createElement('li');
  dayLiItem.innerText = daysMonth;
  dayLiItem.className = 'day'
  if (daysMonth === 24 || daysMonth === 31) {
    dayLiItem.className = 'day holiday';
  }
  if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18) {
    dayLiItem.className = 'day friday';
  }
  if (daysMonth === 25) {
    dayLiItem.className = 'day holiday friday'
  }
  diasMes.appendChild(dayLiItem);
}

//-----------------------------------------------------------------------------------------------

const dinamicButtonsBox = document.querySelector('.buttons-container');
function addButton () {
  let elementOfButton = document.createElement('button');
  elementOfButton.innerText = 'Feriados';
  elementOfButton.id = 'btn-holiday'
  dinamicButtonsBox.appendChild(elementOfButton)
}
addButton()

// -----------------------------------------------------------------------------------------------

const clickHoliday = document.getElementById('btn-holiday');
function clickEventOfButton() {
  for(let index = 0; index < document.getElementsByClassName('holiday').length; index += 1){
  let feriadosDoMes = document.getElementsByClassName('holiday')[index];
  if (feriadosDoMes.style.backgroundColor === 'green') {
    feriadosDoMes.style.backgroundColor = 'rgb(238,238,238)';
    feriadosDoMes.style.color = '#666';
  } else {
  feriadosDoMes.style.backgroundColor = 'green';
  feriadosDoMes.style.color = 'white';
  }
}
}
clickHoliday.addEventListener('click', clickEventOfButton);

//----------------------------------------------------------------------------------------

