// Aqui na Trybe estamos criando um bot que vai dar os parabéns para as pessoas que entregaram 100% dos projetos, esse bot deve imprimir uma msg do tipo: "Olá pessoa, parabéns por ter finalizado 100% do nomeDoPorjeto", para cada pessoa.


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
const mandaParabens = (array) => {
  let result = [];
  array.forEach( (e) => {
    if (e.status === 100) {
      let frase = `Olá ${e.nome}, parabéns por ter finalizado 100% do ${e.Projeto}`;
      result.push(frase);
    }
  });
  console.log(result); 
}

mandaParabens(estudantes);


// Depois de algumas ações focadas nas pessoas que ainda não tinham entregue o projeto conseguimos ter 100% de aprovação! As pessoas que ainda não tinham entregue conseguiram os 80% e precisamos atualizar nossos dados e imprimir o novo resultado.

const atualizaDados = (array) => {
  let result = [];
  array.forEach( (c) => {
    if (c.status <= 80) {
     c.status = 80;  
    }
  });
  console.log(array);
}

atualizaDados(estudantes)