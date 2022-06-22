/* Exercício 1
    (for)

Utilize o for para imprimir os elementos da lista groceryList com o console.log() : */

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
};

/* Exercício 2
    (for/of)

Utilize o for/of para imprimir os elementos da lista names com o console.log() : */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
let nome;

for (nome of names) {
    console.log(nome)
};
