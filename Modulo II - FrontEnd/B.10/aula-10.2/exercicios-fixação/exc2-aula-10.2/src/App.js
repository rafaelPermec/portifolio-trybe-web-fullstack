// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const bought = [
    {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    },
    {
      id: 42,
      user: "cena@gmail.com",
      product: "Razer Gaulês MousePad",
      price: {
        value: 7.77,
        currency: "dollars"
      }
    }
  ];

    return (
        <div className="App">
          <h1> Orders recently created </h1>
          {bought.map((a) => <Order order={a} />)}
        </div>
    );
  }
}

export default App;