/* Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const object = {
  name: 'Rafael',
  age: 31,
  job: 'Chef',
};



function newKey (obj, key, value) {
  let newKey = key
  let newValue = value;
  obj[newKey] = value;
}

newKey(object, 'lastName', 'Castro');
newKey(object, 'fullName', `${object.name} ${object.lastName}`)
newKey(object, 'job', 'FullStack Developer');

console.log(object);
