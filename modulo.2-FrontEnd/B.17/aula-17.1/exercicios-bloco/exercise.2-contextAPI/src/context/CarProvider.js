import React, { Component } from 'react';
import CarContext from './CarContext';


class CarProvider extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: { color: 'red' },
  }

  moveCar = (car, side) => {
    this.setState({
      ...this.state,
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  }

  changeSignal = (color) => {
    this.setState({
      ...this.state,
      signal: {
        color,
      }
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    const { children } = this.props;
    return (
      <CarContext.Provider value={ context }>
        { children }
      </CarContext.Provider>
    )
  }
}

export default CarProvider;
