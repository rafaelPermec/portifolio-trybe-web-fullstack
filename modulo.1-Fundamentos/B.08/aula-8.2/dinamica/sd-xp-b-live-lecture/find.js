// Aqui na trybe estamos planejando um bot que vai enviar msg para as pessoas que ainda não terminaram o projeto, o objetivo é lembrá-las do prazo e oferecer alguma ajuda, o bot só consegue enviar uma msg por vez. A msg deve ter o formato: "Olá pessoa, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?"

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

const msgbotProjeto = (array) => {
 
}

msgbotProjeto(estudantes)

// A dinâmica de pessoas estudantes ajudando outras pessoas estudantes foi muito boa e produtiva, pensando nisso estamos planejando um bot que nos ajudará a chamar mais pessoas pra ajudar nas próximas vezes, o critério que vamos usar pra isso vai ser a pessoa ter terminado 100% do projeto. Lembrando que o bot só consegue enviar uma msg por vez. A msg enviada deve seguir o seguinte padrão: "Olá pessoa, parabéns por ter finalizado 100% do projeto, o que vc acha de ajudar outras pessoas da turma a tbm entregarem o projeto?"


const msgbotPedidoAjuda = (array) => {
  
}

msgbotPedidoAjuda(estudantes)