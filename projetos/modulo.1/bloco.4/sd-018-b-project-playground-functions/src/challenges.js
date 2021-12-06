/* eslint-disable complexity */
// Desafio 1
function compareTrue(bool1, bool2) {
  let compare;
  if (bool1 === true && bool2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrFrase) {
  return arrFrase[arrFrase.length - 1].concat(', ', arrFrase[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let pontos = wins + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrNum) {
  let maiorNum = Math.max(...arrNum);
  let array = [];
  for (let i = 0; i < arrNum.length; i += 1) {
    if (arrNum[i] === maiorNum) {
      array.push(maiorNum);
    }
  }
  return array.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posGatoUm = Math.abs(cat1 - mouse);
  let posGatoDois = Math.abs(cat2 - mouse);
  if (posGatoUm < posGatoDois) {
    return 'cat1';
  } if (posGatoDois < posGatoUm) {
    return 'cat2';
  } if (posGatoUm === posGatoDois) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resposta.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resposta.push('fizz');
    } else if (array[i] % 5 === 0) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(str) {
  let reversed = str.split('');
  let code = '';
  for (let i = 0; i < str.length; i += 1) {
    let letter = reversed[i];
    if (letter === 'a') {
      letter = letter.replace('a', '1');
    } else if (letter === 'e') {
      letter = letter.replace('e', '2');
    } else if (letter === 'i') {
      letter = letter.replace('i', '3');
    } else if (letter === 'o') {
      letter = letter.replace('o', '4');
    } else if (letter === 'u') {
      letter = letter.replace('u', '5');
    }
    code += letter;
  }
  return code;
}

function decode(str) {
  let reversed = str.split('');
  let code = '';
  for (let i = 0; i < str.length; i += 1) {
    let letter = reversed[i];
    if (letter === '1') {
      letter = letter.replace('1', 'a');
    } else if (letter === '2') {
      letter = letter.replace('2', 'e');
    } else if (letter === '3') {
      letter = letter.replace('3', 'i');
    } else if (letter === '4') {
      letter = letter.replace('4', 'o');
    } else if (letter === '5') {
      letter = letter.replace('5', 'u');
    }
    code += letter;
  }
  return code;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

/* Tirei alguns insights dos seguintes links:
1. 'https://pt.stackoverflow.com/questions/315456/fun%C3%A7%C3%A3o-para-checar-pal%C3%ADndromo';
2. 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array';
3. 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String';
4. 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math';
5. 'https://www.w3schools.com/js/js_objects.asp';
6. 'https://github.com/braziljs/eloquente-javascript/blob/master/chapters/02-estrutura-do-programa.md#execu%C3%A7%C3%A3o-condicional';
7. 'https://github.com/braziljs/eloquente-javascript/blob/master/chapters/03-funcoes.md';
8.'https://www.w3schools.com/jsref/jsref_obj_math.asp'
9.'Monitoria do dia 16.10.2021 ! */
