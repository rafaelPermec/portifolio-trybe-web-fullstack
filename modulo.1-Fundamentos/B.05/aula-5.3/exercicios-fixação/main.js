// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/* Por causa da classe '.tech' */

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let listas = document.getElementsByTagName('li');

function mudaClasse(i) {
    if (i.target == listas[0]){
    listas[0].className = 'tech';
    listas[1].className = '';
    listas[2].className = '';
    } else if (i.target === listas[1]){
    listas[1].className = 'tech';
    listas[0].className = '';
    listas[2].className = '';
    } else if (i.target === listas[2]){
    listas[2].className = 'tech';
    listas[0].className = '';
    listas[1].className = '';
    }
}
window.addEventListener('click', mudaClasse);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alteraCor(i){
    if (i.innerText !== ''){
    document.querySelector('.tech').style.backgroundColor = 'gray';  
    }
}
window.addEventListener('input', alteraCor);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function redireciona() { 
window.location.href = 'https://github.com/rafaelPermec';
}
listas[0].addEventListener('dblclick', redireciona);
listas[1].addEventListener('dblclick', redireciona);
listas[2].addEventListener('dblclick', redireciona);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function trocaCor(i) {
    document.getElementById('my-spotrybefy').style.color = '#2fc18c';
}
function voltaCor(i) {
    document.getElementById('my-spotrybefy').style.color = '';
}
document.getElementById('my-spotrybefy').addEventListener('mouseover', trocaCor);
document.getElementById('my-spotrybefy').addEventListener('mouseleave', voltaCor);