import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  render() {
    const { gameBoard } = this.state;
    return <GameBoard gameState={ gameBoard } />;
  }
}

export default TicTacToe;
