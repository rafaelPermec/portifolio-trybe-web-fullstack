/* 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
4 - Garanta acesso ao objeto this na função que você declarou.
5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
8 - Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
9 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer! */


import './App.css';
import React from 'react';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0,
    }
    this.calcClick = this.calcClick.bind(this);
  }
  
   calcClick(value) {
     this.setState((estadoAnterior, _props) => ({
      [value]: estadoAnterior[value] + 1,
     }))
    };

  render() {
    let className = 'App-header'
      if (this.state.button1 === 7 && 
        this.state.button2 === 7 &&
        this.state.button3 === 7) {
          className = "blue"
          console.log('Azul');
    } 
    if (this.state.button1 === 0 && 
        this.state.button2 === 0 &&
        this.state.button3 === 7) {
          className = "gold"
          console.log('Dourado');
    } 
    if (this.state.button1 === 6 && 
        this.state.button2 === 6 &&
        this.state.button3 === 6) {
          className = "red"
          console.log('Vermelho');
    } 
    if (this.state.button3 % 2 === 0) {
          className = "green"
          console.log('Verde');
    }

    return (
      <div className="App">
        <button className={className} onClick={ () => this.calcClick('button1') } >{this.state.button1}</button>
        <button className={className} onClick={ () => this.calcClick('button2') } >{this.state.button2}</button>
        <button className={className} onClick={ () => this.calcClick('button3') } > {this.state.button3}</button>
      </div>
    );
  }
}

export default App;
