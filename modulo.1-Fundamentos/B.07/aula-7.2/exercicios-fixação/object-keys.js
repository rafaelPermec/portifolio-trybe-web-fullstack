/* Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução. */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function keyObjects (object) {
  const array = Object.keys(object);
  console.table(Object.entries(object));
  for (index in array) {
    console.log(`${index}: ${array[index]} em um nível ${object[array[index]]}`)
  }
}
console.log('Estudante 1:');
keyObjects(student1);
console.log('Estudante 2:');
keyObjects(student2);