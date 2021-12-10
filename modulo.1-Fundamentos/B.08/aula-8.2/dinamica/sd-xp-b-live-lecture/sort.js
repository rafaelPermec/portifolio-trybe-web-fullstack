// Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.


const estudantes = [
  {
   nome: 'Joel',
   Projeto: 'Trybewarts',
   status: 98,
 },
 {
   nome: 'Mica',
   Projeto: 'Trybewarts',
   status: 100,
 },
 {
   nome: 'Hugonardo',
   Projeto: 'Trybewarts',
   status: 97,
 },
 {
   nome: 'Aninha',
   Projeto: 'Trybewarts',
   status: 100,
 },
 {
   nome: 'Joicy',
   Projeto: 'Trybewarts',
   status: 100,
 },
 {
   nome: 'Ronald',
   Projeto: 'Trybewarts',
   status: 75,
 },
]

const ordenaArrayNome = (array) => array.sort((a, b) => a.nome > b.nome);
console.table(ordenaArrayNome(estudantes));

// Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

const ordenaArrayStatus = (array) => array.sort((a, b) => a.status > b.status);
console.table(ordenaArrayStatus(estudantes));

const object = {
  nome: 'Rafael',
  age: 31,
  city: 'BH',
};

const {nome, Projeto, status} = estudantes;
console.log(nome);

const array = ['Rafael', 'Thiago', 'Laercio', 'Douglas'];

const string = 'Hello Whole World';
const result = string.split(' ');
const [palavra, , ] = result; 
console.log(palavra);