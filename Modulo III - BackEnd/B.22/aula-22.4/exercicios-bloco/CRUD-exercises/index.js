const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { getSimpsons, setSimpsons, generateCrypto } = require('./Helpers/index');
const authMiddleWare = require('./MiddleWare/index');

app.use(bodyParser.json());
app.use(authMiddleWare);

// 1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' })
});


// 2. Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.

app.post('/hello', (req, res) => {
  const { name }  = req.body;
  res.json({ message: `Hello, ${name}! Connect with me!` })
});


// 3. Crie uma rota POST /greetings 🚀
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.


app.post('/greetings', (req, res) => {
  const { name, age }  = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });

  if (age < 17) return res.status(401).json({ message: `Unauthorized. See you in ${18 - age} years!` })
});


// 4. Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  
  return res.status(202).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// 5. Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', async (_req, res) => {


  try {
    const APIdata = await getSimpsons();

    return res.status(200).json(APIdata);
  } catch (err) {
    return res.status(500).end();
  }

});

// 6. Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const APIdata = await getSimpsons();
    const simpson = APIdata.find((e) => e.id === id)
    
    if (!simpson) return res.status(404).json({ message: 'simpson not found' });

    return res.status(200).json(simpson);
  } catch (err) {
    return res.status(500).end();
  }

});

// 7. Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const data = await getSimpsons();

    const noRepeatId = data.map((e) => e.id).includes(id);

    if (noRepeatId) return res.status(409).json({ message: 'id already exists' });

    data.push({ id, name });
    await setSimpsons(data);
    
    return res.status(204).end();
  } catch (err) {
    return res.status(500).end();
  }

});

// 9.Crie uma rota POST /signup
// A rota deve receber, no body da requisição, os campos email, password, firstName e phone.
// Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' }.
// Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK, e o JSON { token: '<token-aleatorio>' }.

app.post('/singup', (req, res) => {
  try {

    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    }
    return res.status(200).json({"token": `${generateCrypto()}` });
    
  } catch (err) {

    return res.status(500).end();
  }
})


app.all('*', (req, res) => {
  return res.status(404).json({ message: `404 - Path ${req.path} not found!` })
});

app.listen(3000, () => console.log(`http://localhost:3000/`));