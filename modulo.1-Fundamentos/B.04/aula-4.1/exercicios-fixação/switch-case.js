/* Você com certeza está super feliz com seus novos conhecimentos sobre JS, não é?! 🎉 Então vamos praticar mais um pouco antes de chegar na sessão de exercícios. Vamos!!!

Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .  */

let pessoaCandidata = "aprovada";

switch (pessoaCandidata){
    case "aprovada":
    console.log("Você foi aprovado(a)!");
    break;

    case "reprovada":
    console.log("Você foi reprovado(a) =(");
    break;

    case "lista":
    console.log("Você está em nossa lista de espera.")
    break;
    
    default:
    console.log("não se aplica");
} 