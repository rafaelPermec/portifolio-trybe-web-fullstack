import React, { Component } from 'react';
import CarContext from './CarContext';

class CarProvider extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
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
