import React from 'react';
import PropTypes from 'prop-types';
import xImage from './x.png';
import oImage from './o.svg';
import './GameCell.css';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <div data-testid={ `cell_${id}` } className="game-cell" />
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GameCell;
