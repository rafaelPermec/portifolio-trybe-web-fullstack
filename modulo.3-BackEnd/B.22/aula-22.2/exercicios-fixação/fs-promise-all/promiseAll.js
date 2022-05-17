const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt')
]).then(([file1, file2, file3]) => {
  const fileSize = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Lidos 3 arquivos totalizando ${fileSize} bytes`);
  console.log(`${file1}\n${file2}\n${file3}`);
}).catch((e) => console.error(`Erro ao ler os arquivos:\n ${e.message}`));
