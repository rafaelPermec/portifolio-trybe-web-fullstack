import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <label htmlFor="nome"> Seu {this.props.id}:
            <input 
            style={{width:'30vw'}}
            type={this.props.id} 
            name={this.props.id} 
            id={this.props.id} 
            maxLength={this.props.maxLength}
            onChange={handleInput}
            required
            />
        </label>
    );
  }
}

export default Input;
