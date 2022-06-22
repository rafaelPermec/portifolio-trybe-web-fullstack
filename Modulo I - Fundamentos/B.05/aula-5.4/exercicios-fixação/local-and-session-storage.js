//Exemplos de localStorage:
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('observador:', 'Se você estiver vendo isso...');
localStorage.setItem('conclusão:', 'Pode me contratar, viu?');
console.log(localStorage.getItem('observador:'));
console.log(localStorage.getItem('conclusão:'));

//  Exemplos de sessionStorage:
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('observador:', 'Se você voltou pra cá...');
sessionStorage.setItem('conclusão:', 'É porque o contrato ta chegando aqui pra mim?');
console.log(sessionStorage.getItem('observador:'));
console.log(sessionStorage.getItem('conclusão:'));

//Exemplo de como salvar estruturas em JSON:
let organization = {
    name: "trybe",
    since: 2019
  }
  
  // objeto "storage" pode ser localStorage ou sessionStorage
  
  localStorage.setItem("trybe", JSON.stringify(organization))
  let org = JSON.parse(storage.getItem("trybe"))
  console.log(org) // { name: "trybe", since: 2019 }
  
  let classes = ["2019/set", "2019/oct"]
  localStorage.setItem("classes", JSON.stringify(classes))
  let cls = JSON.parse(storage.getItem("classes"))
  console.log(cls) // ["2019/set", "2019/oct"]