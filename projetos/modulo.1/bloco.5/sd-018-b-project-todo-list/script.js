// Requisito 5 e 6
function criarTarefa() {
  const newLI = document.createElement('li');
  const goLI = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  if (input.value !== '') {
    goLI.appendChild(newLI).innerText = input.value;
  }
  input.value = '';
}

function enterKey(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('criar-tarefa').click();
  }
}

document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
document.getElementById('texto-tarefa').addEventListener('keyup', enterKey);

// Requisito 7 e 8
const markedLI = document.querySelector('#lista-tarefas').children;
const markedOL = document.querySelector('#lista-tarefas');

function marked(event) {
  for (let i = 0; i < markedLI.length; i += 1) {
    if (event.target === markedLI[i]) {
      markedLI[i].classList.toggle('marca-texto');
    } else {
      markedLI[i].classList.remove('marca-texto');
    }
  }
}

function chamaEvento() {
  for (let i = 0; i < markedLI.length; i += 1) {
    markedLI[i].addEventListener('click', marked);
  }
}
document.addEventListener('click', chamaEvento);

// Requisito 9
function checked(event) {
  for (let i = 0; i < markedLI.length; i += 1) {
    if (event.target === markedLI[i]) {
      markedLI[i].classList.toggle('completed');
    }
  }
}
function chamaEvento2() {
  for (let i = 0; i < markedLI.length; i += 1) {
    markedLI[i].addEventListener('dblclick', checked);
  }
}
document.addEventListener('click', chamaEvento2);

// Requisito 10
function eraseAll() {
  while (markedOL.hasChildNodes() === true) {
    markedOL.removeChild(markedOL.firstChild);
  }
}
document.getElementById('apaga-tudo').addEventListener('click', eraseAll);

// Requisito 11
function apagaFinalizados() {
  const remove = document.querySelectorAll('.completed');
  for (let i = 0; i < remove.length; i += 1) {
    markedOL.removeChild(remove[i]);
  }
}

document.querySelector('#remover-finalizados').addEventListener('click', apagaFinalizados);

/* Requito 12 */
function salvarLista() {
  const itemSalvo = markedOL.innerHTML;
  localStorage.setItem('lista', itemSalvo);
}
document.querySelector('#salvar-tarefas').addEventListener('click', salvarLista);

function retornaLista() {
  markedOL.innerHTML = localStorage.getItem('lista');
}
window.addEventListener('load', retornaLista);

/*  Requisito 13 */

function moverCima() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const irmao = document.querySelector('.marca-texto');
  if (irmao === null) {
    return alert('Selecione um item da lista');
  }
  const proximo = irmao.previousSibling;
  if (irmao === markedOL.firstChild) {
    return alert('Não passa daqui... :(');
  }
  return markedOL.insertBefore(irmao, proximo);
}

document.querySelector('#mover-cima').addEventListener('click', moverCima);

function moverBaixo() {
  const irmao = document.querySelector('.marca-texto');
  if (irmao === null) {
    return alert('Selecione um item da lista');
  }
  const anterior = irmao.nextSibling;
  if (irmao === markedOL.lastChild) {
    return alert('Não passa daqui... :(');
  }
  return markedOL.insertBefore(anterior, irmao);
}

document.querySelector('#mover-baixo').addEventListener('click', moverBaixo);

/* Requito 14 */
function apagaSelecionado() {
  const remove = document.querySelector('.marca-texto');
  markedOL.removeChild(remove);
}

document.querySelector('#remover-selecionado').addEventListener('click', apagaSelecionado);

/*  Referencias:
1. 'https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage; '
2. 'https://www.w3schools.com/jsref/prop_node_nextsibling.asp'
3. 'https://www.w3schools.com/jsref/met_node_insertbefore.asp'
4. 'https://stackoverflow.com/questions/10716986/swap-two-html-elements-and-preserve-event-listeners-on-them'
5. 'https://www.w3schools.com/jsref/prop_element_classlist.asp' */
