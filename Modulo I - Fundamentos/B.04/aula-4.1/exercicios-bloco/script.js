/* /* Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .

Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: */

let a = 55;
let b = 22; 
/* Adição (a + b) */
    console.log(a + b);
/* Subtração (a - b) */
    console.log(a - b);
/* Multiplicação (a * b) */
    console.log(a * b);
/* Divisão (a / b) */
    console.log(a / b);
/* Módulo (a % b) */
    console.log(a % b);

/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */
const one = 42;
const two = 444;

 if (one > two){
     console.log(one);
 } else {
     console.log(two);
 }

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/
const c = 42;
const d = 444;
const e = 777;

if (c > d > c){
    console.log(c);
} else if (d > c > c) {
    console.log(d);
} else {
    console.log(e)
}

/* Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
const definido = -75;
    if (definido < 0){
        console.log('negative');
    } else {
        console.log('positive');
    }

/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
const um = 45;
const dois = 45;
const tres = 90;

    if (um + dois + tres == 180){
        console.log(true);
    } else if (um + dois + tres !== 180){
        console.log(false);
    } else if (um < 0 || dois < 0|| tres < 0){
        console.log('isso não é um angulo!')
    }

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 62;
    if (nota < 50){
        console.log ('F');
    } else if ( nota >= 50 && nota < 60) {
        console.log('E');
    } else if ( nota >= 60 && nota < 70) {
        console.log('D');
    } else if ( nota >= 70 && nota < 80) {
        console.log('C');
    } else if ( nota >= 80 && nota < 90) {
        console.log('B');
    } else if ( nota >= 90 && nota < 100) {
        console.log('A');
    } else {
        console.log("ERROR");
    }

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if . */

let tres = 23;
let quatro = 45;
let cinco = 147;
    if (tres % 2 == 0 || quatro % 2 == 0 || cinco % 2 === 0){
        console.log('true');
    } else {
        console.log('false');
    }

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

Bonus: use somente um if . */

let seis = 23;
let sete = 45;
let oito = 147;
    if (seis % 2 != 0 || sete % 2 != 0 || oito % 2 !== 0){
        console.log('true');
    } else {
        console.log('false');
    }


/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    valorCustoTotal = valorCusto + impostoSobreOCusto
    lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let valorCusto = 10 ;
let imposto = 20/100;
let valorCustoTotal =  valorCusto + imposto;
let markup = 2.4;
let valorVenda = valorCustoTotal * markup;
let lucro = valorVenda - valorCustoTotal;
    console.log(parseFloat(lucro * 1000));

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    INSS (Instituto Nacional do Seguro Social)
        Salário bruto até R$ 1.556,94: alíquota de 8%
        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    IR (Imposto de Renda)
        Até R$ 1.903,98: isento de imposto de renda
        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    R$ 2.670,00: salário com INSS já deduzido;
    7.5%: alíquota de imposto de renda;
    R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?  */

const salarioBruto = 3000;
let salarioLiquido;
let impostoRenda;

    if (salarioBruto <= 1556.94){
        salarioLiquido = salarioBruto - (salarioBruto * (8/100));
    } else if (salarioBruto > 1556.65 && salarioBruto <= 2594.92) {
        salarioLiquido = salarioBruto - (salarioBruto * (9/100));
    } else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
        salarioLiquido = salarioBruto - (salarioBruto * (11/100));
    } else if (salarioBruto > 5189.82){
        salarioLiquido = salarioBruto - 570.88
    }

    if (salarioLiquido >= 1903,99 && salarioLiquido <= 2826.65){
        impostoRenda= (salarioLiquido * 0.075) - 142.8;
    } else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05){
        impostoRenda= (salarioLiquido* 0.15) - 354.8;
    } else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68){
        impostoRenda= (salarioLiquido * 0.225) - 636.13;
    } else if (salarioLiquido > 4664.68){
        impostoRenda= (salarioLiquido * 0.275) - 869,36;
    }



console.log ('Seu salário total é de R$' + parseFloat(salarioLiquido - impostoRenda));
