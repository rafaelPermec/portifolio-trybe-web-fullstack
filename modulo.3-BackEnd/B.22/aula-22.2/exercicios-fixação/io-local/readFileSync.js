const fs = require('fs');

const fileName = 'my-file.txt';

try {
  const data = fs.readFileSync(fileName, 'utf-8');
  console.log(data);
} catch (e) {
  console.error(`Erro ao ler o arquivo: ${e.path}`);
  console.log(e);
}
