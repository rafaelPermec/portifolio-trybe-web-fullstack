const readline = require('readline');
const fs = require('fs/promises');

const question = (message) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((res, _rej) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();
      res(answer);
    })
  })
}

const start = async () => {
  const fileName = await question(`Digite o caminho do arquivo que deseja ler: `);

  try {
    const fileVector = await fs.readFile(fileName, 'utf-8');
    console.log(fileVector);
  } catch (err) {
    console.log(`O arquivo não existe.`);
  }
}

start();