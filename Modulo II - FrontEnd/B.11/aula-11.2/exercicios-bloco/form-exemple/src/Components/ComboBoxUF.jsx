import React, { Component } from 'react';

class ComboBoxUF extends Component {
  render() {
        const estados  = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

        const { handleInput } = this.props;

    return (
      <label className='UF' htmlFor="UF"> Seu Estado:
        <select name="UF" id="UF" onClick={handleInput} required>
          {
            estados
            .map((element) => (
            <option value={element}> {element} </option>
              ))
          }
        </select>
    </label>
    );
  }
}

export default ComboBoxUF;
