import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameState } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, index) => (
          <GameCell id={ `gamecell-${playerId}-${index}` } key={ `gamecell-${playerId}-${index}` } />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GameBoard;
