/* Exercício 1

Obtenha o valor "Serviços" do array menu : */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menu[menuServices]);

/* Exercício 2

Procure o índice do valor "Portfólio" do array menu : */

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/* Exercício 3

Adicione o valor "Contato" no final do array menu : */

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu[menu.length - 1]);