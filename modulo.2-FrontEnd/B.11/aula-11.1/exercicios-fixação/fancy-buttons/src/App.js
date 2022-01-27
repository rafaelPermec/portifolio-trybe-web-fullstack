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
    return (
      <div className="App">
        <button className="App-header" onClick={ () => this.calcClick('button1') } >{this.state.button1}</button>
        <button className="App-header" onClick={ () => this.calcClick('button2') } >{this.state.button2}</button>
        <button className="App-header" onClick={ () => this.calcClick('button3') } > {this.state.button3}</button>
      </div>
    );
  }
}

export default App;
