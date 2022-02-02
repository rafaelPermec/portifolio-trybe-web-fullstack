import React, { Component } from 'react';

class RadioBtn extends Component {
  render() {
    return (
      
      <div className='radio-btn'>
      <label htmlFor="apto-casa" required >Qual a sua moradia?
        <label className='apto-casa' htmlFor="apto">Apartamento:
          <input
            type="radio"
            name="apto-casa"
            id="apto"
            value="apto" />
        </label>
        <label className='apto-casa' htmlFor="casa">Casa:
            <input
              type="radio"
              name="apto-casa"
              id="casa"
              value="casa"/>
          </label>
        </label>
        </div>
    );
  }
}

export default RadioBtn;
