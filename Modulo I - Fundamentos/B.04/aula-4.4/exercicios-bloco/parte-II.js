/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function palindrome (string){
    let palim = string.split('').reverse().join('');
    console.log (string === palim);
}
palindrome('arara');
palindrome('desenvolvimento');

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */

function maiorInteiro (array){   
   console.log(array.indexOf(Math.max(...array))) 
}
maiorInteiro([2, 3, 6, 7, 10, 1]);

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function menorInteiro (array){   
    console.log(array.indexOf(Math.min(...array))) 
 }
 menorInteiro([2, 4, 6, 7, 10, 0, -3]);

/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

function maiorNome (arrayNomes){

    /* Duvida!!!!*/

}

/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function repeteNoArray() {
let array = [];

    console.log(array.length);
  }
repeteNoArray([2, 3, 2, 5, 8, 8, 8, 8, 2, 3]);

/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
 */

function somaAteN (n){
let soma = 0;
    for (let i = 0; i <= n; i += 1){
        soma = soma + i;
    }
    console.log(soma);
}
somaAteN (10);

/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false */

function verificaFimPalavra (word, end){
if (word.includes(end)){
    console.log(true);
} else if (!word.includes(end)){
    console.log(false);
}
}
verificaFimPalavra('joaofernando', 'fernan');

/* Duvida */