import React, { Component } from 'react';

class RadioBtn extends Component {
  render() {
    const { handleInput } = this.props;

    return (
      
      <div className='radio-btn'>
      <label htmlFor="aptoCasa" required >Qual a sua moradia?
        <label className='aptoCasa' htmlFor="apto">Apartamento:
          <input
            type="radio"
            name="aptoCasa"
            id="apto"
            value="Apartamento"
            onClick={handleInput} 
            />
        </label>
        <label className='aptoCasa' htmlFor="casa">Casa:
            <input
              type="radio"
              name="aptoCasa"
              id="casa"
              value="Casa"
              onClick={handleInput}
              />
          </label>
        </label>
        </div>
    );
  }
}

export default RadioBtn;
