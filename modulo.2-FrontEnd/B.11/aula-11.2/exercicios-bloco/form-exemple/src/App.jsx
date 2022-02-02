import logo from './logo.svg';
import FormFieldsetOne from './Components/FormFieldsetOne'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Agora, meu formulário oficial em <code>React.jx</code>!
      </p>
    <form method="get">
      <FormFieldsetOne />
    </form>
    </header>
  </div>
  );
}

export default App;
