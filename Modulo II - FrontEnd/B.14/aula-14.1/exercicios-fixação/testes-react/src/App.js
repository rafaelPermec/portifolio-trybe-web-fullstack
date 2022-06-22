// App.js
import React, { Component } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      firstTry: false,
    };
  }

  changeEmail(value) {
      this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ firstTry: true, saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail, firstTry } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        {firstTry && <ValidEmail email={ saveEmail } />}
        
      </div>
    );
  }
}

export default App;