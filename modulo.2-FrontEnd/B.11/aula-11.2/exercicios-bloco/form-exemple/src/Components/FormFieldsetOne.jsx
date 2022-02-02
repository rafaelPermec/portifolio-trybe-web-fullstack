import React, { Component } from 'react';
import ComboBoxUF from './ComboBoxUF';
import RadioBtn from './RadioBtn';


class FormFieldsetOne extends Component {
  
  render() {

    return (
      <fieldset className="data-flow__conteiner">
        <legend>O formulário oficial:</legend>
          <label htmlFor="nome"> Seu nome:
            <input 
            type="text" 
            name="nome" 
            id="nome" 
            maxLength={40}
            required
            />
        </label>
          <label htmlFor="email"> Seu email:
            <input 
            type="email" 
            name="email" 
            id="email" 
            maxLength={50}
            required
            />
        </label>
          <label htmlFor="CPF"> Seu CPF:
            <input 
            type="text" 
            name="CPF" 
            id="CPF" 
            maxLength={11}
            required
            />
        </label>
          <label htmlFor="end"> Seu Endereço:
            <input 
            type="text" 
            name="end" 
            id="end" 
            maxLength={200}
            required
            />
        </label>
          <label htmlFor="cidade"> Sua cidade:
            <input 
            type="text" 
            name="cidade" 
            id="cidade" 
            maxLength={28}
            required
            />
          </label>  
        <ComboBoxUF />
        <RadioBtn />
      </fieldset>
    );
  }
}

export default FormFieldsetOne;
