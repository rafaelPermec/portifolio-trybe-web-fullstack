import React from 'react';
import logo from './logo.svg';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='hello__world'>
          Hello World in React, by Rafael Perdigão.
        </p>
      </header>
    </div>
    );
  }
}

export default HelloWorld;