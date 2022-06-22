const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

/* const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};
 */
const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values (indireta):
/* console.log(listSkillsValuesWithFor(student)); */

// Com Object.values (mais direta):
console.log(listSkillsValuesWithValues(student));
