const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

// Com o asign podemos alterar inputs e outputs!
// Note a diferença:

// Object.assign(person, info, family);
// console.log(person);

const newPerson = Object.assign({}, person, info, family);
newPerson.name = 'Gilberto';
console.log(newPerson);