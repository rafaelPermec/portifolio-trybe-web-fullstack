import './App.css';
import Header from './Headers';
import Content from './Contents';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
      <section className='card'>
        <Header />
      <section className='key'>
        <Content />
      </section>
        <Footer />
      </section>
    
  );
}

export default App;
