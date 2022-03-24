import React from 'react';
import CarContext from './context/CarContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

class TrafficSignal extends React.Component{
  renderSignal = (color) => {
    if (color === 'red') return redSignal;
    if (color === 'yellow') return yellowSignal;
    if (color === 'green') return greenSignal;
    return null;
  };

    render(){
      const { signal: { color }, changeSignal } = this.context;
      return(
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={this.renderSignal(color)} alt="" />
    </div>
      );
    }
  
};

TrafficSignal.contextType = CarContext;

export default TrafficSignal;
