// Temos uma lista com os dados de pessoas inscritas na nossa pagina e com base nesses dados queremos mandar algum tipo de anuncio para elas(todas tem que receber o mesmo anuncio), temos de cerveja (que pagam mais) e de chocolate, mas não podemos mandar o de cerveja para menores de 18 anos, precisamos de um algoritmo que analise um array com as idades das pessoas inscritas e nos diga qual anuncio devemos mandar.
// retorno esperado:
// "Beba Trybeer, suave como um log de erro vazio"
// ou
// "ChocoTrybe, melhor que console.log".

const arrayIdades = [23, 32, 17, 16, 34]
const arrayIdades2 = [23, 32, 27, 46, 34]

const qualComercial = (arr) => {
 
}

qualComercial(arrayIdades);
qualComercial(arrayIdades2);

// Aqui na trybe estamos planejando um bot que vai nos ajudar a planejar as mentorias e o primeiro passo é ver se teremos uma mentoria de projetos passados, pra isso precisamos checar os dados das pessoas estudantes e verificar se tem alguem que ainda não terminou o projeto, caso tenha, o bot deve nos imprimir a msg "Bora pra mentoria de projetos!" ou "Pode abrir o suco de laranja que temos 100% de aprovação!".


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
const vaiTerMentoria = (array) => {

}

vaiTerMentoria(estudantes)