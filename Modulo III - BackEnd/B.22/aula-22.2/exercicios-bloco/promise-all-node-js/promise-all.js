const fs = require('fs/promises');

const allPromises = async () => {
  const array =  ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFiles = array.map((e, index) => fs.writeFile(`./file${index + 1}.txt`, e));
  await Promise.all(createFiles);

  const allFiles = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];

  const readingFiles = allFiles.map((e) => fs.readFile(e, 'utf-8'));
  const fileContent = await Promise.all(readingFiles);
  
  const newFile = fileContent.join(' ');
  await fs.writeFile('./fileJoinAll.txt', newFile);

  console.log(fileContent);
  console.log(newFile);
}

allPromises();
