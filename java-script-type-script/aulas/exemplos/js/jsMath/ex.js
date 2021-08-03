const myNumb = Number(prompt ('Digite aqui um número'));

const numTitle = document.getElementsByClassName('numeroInicial');
const raizQ = document.getElementsByClassName('raizQ');
const isInt = document.getElementsByClassName('isInt');
const booleanNan = document.getElementsByClassName('booleanNan');
const downArred = document.getElementsByClassName('downArred');
const upArred = document.getElementsByClassName('upArred');
const floatDec = document.getElementsByClassName('floatDec');


numTitle.innerHTML = myNumb
numTitle.innerHTML = `<p>${myNumb}</p>`