import React, { Component } from 'react';
import ComboBoxUF from './ComboBoxUF';
import Input from './Input';
import RadioBtn from './RadioBtn';


class FormFieldsetOne extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this)

    this.state = { 
      nome: ''.toUpperCase(),
      email: '',
      CPF: '',
      endereço: '',
      município: '',
      aptoCasa: '',
      UF: '',
    }
  }

  handleInput({ target }) {
    const { name, value } = target;
  
    this.setState({
      [name]: value,
    })

  }

  render() {
    return (
      <fieldset className="data-flow__conteiner">
        <legend>O formulário oficial:</legend> 
          <Input
            id="nome" 
            maxLength={40}
            value={this.state.nome}
            handleInput={this.handleInput}
          />
          <Input
            id="email" 
            maxLength={50}
            value={this.state.email}
            handleInput={this.handleInput}
          />
          <Input
            id="CPF" 
            maxLength={14}
            value={this.state.CPF}
            handleInput={this.handleInput}
          />        
          <Input
            id="endereço" 
            maxLength={200}
            value={this.state.endereço}
            handleInput={this.handleInput}
          />
          <Input
            id="município" 
            maxLength={28}
            value={this.state.município}
            handleInput={this.handleInput}
          />
        <ComboBoxUF 
          handleInput={this.handleInput} 
        />
        <RadioBtn
          handleInput={this.handleInput} 
        />
      </fieldset>
    );
  }
}

export default FormFieldsetOne;
