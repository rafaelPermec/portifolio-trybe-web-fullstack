import logo from '../logo.svg';
import React from 'react';

class Form extends React.Component {

  constructor() {
    super();

    this.handleTextChange = this.handleTextChange.bind(this)

    this.state = {
      name: '',
      email: '',
      UF: '',
      feedback: '',
      infoValidate: false,
    }
  }

  handleFiles() {
    const fileList = this.files;
    return fileList;
  }

  handleTextChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }); 

  }
  
  render() {
    return (
      <div className="App">
        <main className="App-main">
         <section className='App-header'>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Meu primeiro formulário em <code>React.jsx</code> !
            </p>
          </section> 

          <section className="App-section">
            <form className='form'>     

              Seu nome:
              <input 
              type="text" 
              name='name' 
              value={this.state.handleTextChange} 
              onChange={this.handleTextChange} 
              />
              Seu e-mail:
              <input 
              type="email"
              name='email'
              value={this.state.handleTextChange} 
              onChange={this.handleTextChange}  
              />          
              <fieldset className='job'>
                <legend>Você quer me empregar?</legend>
                <label for="checkbox">Sim!</label>
                  <input type="checkbox" /> 
                
                <label for="checkbox">Quero!</label>
                  <input type="checkbox" /> 
                
                <label for="checkbox">Com certeza!</label>
                  <input type="checkbox" /> 
                
              </fieldset>    
              Diga qual o seu Estado! De React ou do Brasil, você decide!
              <select 
              name='UF'
              value={this.state.handleTextChange} 
              onChange={this.handleTextChange}  >
                <option 
                value="Componente">Componente</option>
                <option 
                value="Props">Props</option>
                <option 
                value="Classe">Classe</option>
                <option 
                value="MG">Minas Gerais</option>
              </select>

              <label>
              Passe o seu feeback para mim!
              <textarea 
                name="feedback" 
                value={this.state.handleTextChange} 
                onChange={this.handleTextChange}  
                placeholder='Diga o que você está pensando...'
                cols={60}
                rows={8}
                />
              </label>
              <fieldset className='fieldset'>
                <legend>Envie uma cópia de seu RG para ser cadastrado de mesário na próxima eleição!</legend>
                <input type="file" id="input" onchange={ this.files } />
              </fieldset>

              <label id='checkbox' className='checkbox'>
                As informações acima estão corretas?
                <input 
                type="checkbox" 
                name="infoValidate" 
                value={this.state.handleTextChange} 
                onChange={this.handleTextChange}  
                />
              </label>


            </form>
          </section>
          
        </main>
      </div>
    );
  }
}

export default Form;