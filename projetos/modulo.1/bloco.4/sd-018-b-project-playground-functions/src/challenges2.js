// Desafio 10
function techList(techArray, name) {
  let objetoDeSaida = {};
  let arrayObjetos = [];
  if (techArray.length === 0) {
    return 'Vazio!';
  } if (techArray.length > 0) {
    for (let i in techArray) {
      let num = techArray.sort();
      objetoDeSaida = {
        tech: num[i],
        name };
      arrayObjetos.push(objetoDeSaida);
    }
    return arrayObjetos;
  }
}

// Desafio 11
function numRepetido(array) {
  for (let i = 0; i < 10; i += 1) {
    let count = 0;
    for (let i2 in array) {
      if (array[i2] === i) {
        count += 1;
      }
    }
    if (count >= 3) {
      return true;
    }
  }
  return false;
}

function menorQueNove(array) {
  for (let i in array) {
    if (array[i] < 0 || array[i] > 9) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (menorQueNove(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (numRepetido(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(string) {
  let searchNumbers = /\d+/g;
  let numbers = string.match(searchNumbers);
  let toNum = numbers.map((i) => Number(i));
  let sum = toNum.reduce((acum, elem) => acum += (elem));
  if (sum === 1) {
    return '1 copo de água';
  } if (sum !== 1) {
    return `${sum} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
/*       Pesquisei e obti resultados seguindo os seguintes links:
    1. 'https://www.youtube.com/watch?v=pfkkdzeyx6U';
    2. 'https://www.w3schools.com/jsref/jsref_regexp_0-9.asp';
    3. 'https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript';
    4. 'https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript';
    5. 'https://www.w3schools.com/jsref/jsref_reduce.asp';
    6. 'https://www.w3schools.com/jsref/jsref_match.asp';
    7. 'https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380';
    8. 'https://www.codegrepper.com/code-examples/javascript/javascript+Convert+an+array+of+strings+to+numbers';
    9. 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs';
    10. 'https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/';
    11. 'O ${sum} apareceu quando rodei o debbuger do ESLint e não sei bem o que isso faz. Vou levar para a monitoria! - duvida retirada na monitoria do dia 18.10.21'
    12. 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every';
    13. 'https://www.ti-enxame.com/pt/javascript/como-contar-o-valor-duplicado-em-uma-matriz-no-javascript/1041477557/'
    14. 'https://www.w3schools.com/jsref/jsref_map.asp' */
