const API_URL = 'https://icanhazdadjoke.com/';

const paragraphOfJoke = document.querySelector('#jokeContainer');

function append(piada) {
  paragraphOfJoke.innerHTML = piada;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke)
    .then((piada) => append(piada));
};

fetchJoke();

function generateRandomNum() {
  return Math.floor(Math.random() * 50) + 1;
}

function makePromise() {
  const myPromise = new Promise((resolve, reject) => {
    const arrayOfNumbers = [];
    for (let index = 0; index < 10; index += 1) {
    arrayOfNumbers.push(generateRandomNum());
    }
    const arrayOfNumbersSquared = arrayOfNumbers.map((el) => el ** 2)
    .reduce((accumulator, currentValue) => accumulator += currentValue, 0);
    (arrayOfNumbersSquared > 8000) ? resolve() : reject ();
  });

  myPromise
  .then((sum) => [2, 3, 5, 10].map((elemento) => sum / elemento))
  .then((sum2) => sum2.reduce((acc, curr) => acc += curr, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
  return myPromise;
}

makePromise();