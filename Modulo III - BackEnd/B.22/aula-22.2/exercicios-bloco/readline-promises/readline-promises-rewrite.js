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
  const fileName = await question(`Digite o caminho do arquivo que deseja ler: `)

  const newContent = await fs.readFile(fileName, 'utf-8')
  .catch((err) => {
    console.error(`Erro ao ler os arquivos:\n ${err}`);
    return false;
  })

  if (!fileName) return ;

  const oldWord = await question(`Qual palavra você deseja substituir? `);
  const newWord = await question(`E qual palavra de ficar em seu lugar? `);

  const newFile = newContent.replace(new RegExp(oldWord, 'g'), newWord);
  
  console.log(`Resultado da substituição:\n\n ${newFile}`);

  const path = await question(`Onde você deseja salvar o resultado? `);
  await fs.writeFile(path, newFile);
}

start();