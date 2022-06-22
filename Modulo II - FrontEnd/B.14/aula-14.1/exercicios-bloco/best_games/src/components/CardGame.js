import React from 'react';
import { Link } from 'react-router-dom';

class CardGame extends React.Component {
  render() {
    const { game: { id, title, img, description } } = this.props;
    return (
      <div className='game-card'>
        <img src={ img } alt={ title } />
        <div className='game-card-content'>
          <h3>{title}</h3>
          <p className="game-card-description">{ description }</p>
          <Link className="link" to={`details/${id}`}>Ver detalhes</Link>
        </div>
      </div>
    )
  }
}

export default CardGame;