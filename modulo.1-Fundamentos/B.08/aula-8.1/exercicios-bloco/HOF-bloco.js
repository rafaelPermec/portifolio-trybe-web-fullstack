/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@email.com . */

const dataBase = [];

const createEmployees = (name)  => {
const lowerCaseName = name.toLowerCase().replace(/ /g, '');
  const employee = {
    nome: name,
    email: `${lowerCaseName}@xp.com`,
  };
  return employee;
};
const id = (num) => `id${num}:`;

const xpEmployees = (num, fullName) => {
  
  const employees = {
    acess : id(num),
    employee : createEmployees(fullName),
  }
  
  dataBase.push(employees)
};

xpEmployees(1, 'Rafael P M Castro');
xpEmployees(2, 'Byanca Knorst');
xpEmployees(3, 'Victor Hugo Souza');
xpEmployees(4, 'Tabata Amaral');
xpEmployees(5, 'Lucas Abreu');
xpEmployees(6, 'Kamila Hydalgo');
xpEmployees(7, 'Higor Anjos');
xpEmployees(8, 'Rhennan Zimmermann');
xpEmployees(9, 'Luciana Bischoff');
xpEmployees(10, 'Matheus Teles');

console.table(dataBase);

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Parabéns você ganhou"). */

const sorteio = () => {
let num = Math.round(Math.random() * (dataBase.length - 1));

  let nome = dataBase[num].employee.nome;
  return `Parabéns, você ganhou o sorteio, ${nome}!!`;
    
};

console.log(sorteio());


/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];