// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const studentsGrade = [];
  let tang = grades.map((arr) => 
  arr.reduce((acc, cur) => acc + cur));
  tang = tang.map((grade) => grade / grades[0].length);
  for (let i = 0; i < students.length; i += 1){
    studentsGrade.push({
      name: students[i],
      average: tang[i],
    });
  }
  return studentsGrade;
}
console.log(studentAverage());