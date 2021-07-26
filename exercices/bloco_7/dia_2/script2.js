const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const objectModified = (object, chave, value) => {
  object[chave] = value;
}
objectModified(lesson2, 'turno', 'manhã');

const objectKeysList = (objeto) => Object.keys(objeto);

const objectValuesList = (objeto) => Object.values(objeto);

const objectKeysCounter = (objeto) => Object.keys(objeto).length;

const allLessons = {
  lesson1, 
  lesson2, 
  lesson3,
};

//console.log(allLessons);


let studentCount = (objeto) => {
  let number1 = Object.values(objeto.lesson1)[1];
  let number2 = Object.values(objeto.lesson2)[1];
  let number3 = Object.values(objeto.lesson3)[1];
  return number1 + number2 + number3;
}
//console.log(studentCount(allLessons));


let getValueByNumber = (objeto, valor) => Object.values(objeto)[valor];

//console.log(getValueByNumber(lesson1, 0));
