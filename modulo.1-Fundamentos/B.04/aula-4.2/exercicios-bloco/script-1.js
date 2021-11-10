/* Aprofunde seus conhecimentos:
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */
    for (i = 0; i < numbers.length; i += 1){
        console.log(numbers[i]);
    }

/* 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i += 1){ 
    sum =  sum + numbers[i];   
  
}

console.log(sum);

/* 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i += 1){ 
    sum =  (sum + numbers[i]) ;   
}

console.log(sum / numbers.length);

/* 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i += 1){ 
    sum =  (sum + numbers[i]) ;   
}
    if (sum > 20){
        console.log('valor maior que 20');
    } else if (sum <= 20){
        console.log('valor menor ou igual a 20');
    }

/* 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (i = 0; i < numbers.length; i += 1){ 
    if (numbers[i] > maior){
        maior = numbers[i];
    }
}

 console.log(maior);

/* 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let parImpar = 0;

for (i = 0; i < numbers.length; i += 1){ 
    if (numbers[i] % 2 != 0){
        parImpar = numbers[i];
        console.log(parImpar)
    } else {
        console.log('nenhum valor impar encontrado');
    }
}

 
/* 7.Utilizando for , descubra qual o menor valor contido no array e imprima-o; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 100;

for (i = 0; i < numbers.length; i += 1){ 
    if (numbers[i] != 0 && numbers[i] < menor){
        menor = numbers[i];
    }
    
}
console.log(menor);
    
 
/* 8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */
let array = [];

for (index = 1; index <= 25; index +=1){
    array.push(index);  
}
console.log(array);
/* 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */
let array = [];
let dividido;

for (index = 1; index <= 25; index +=1){
    dividido = array.push(index);  
    dividido = dividido / 4;
    console.log(dividido);
}
