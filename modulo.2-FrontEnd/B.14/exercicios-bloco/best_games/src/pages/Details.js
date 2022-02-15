import React from 'react';
import { Link } from 'react-router-dom';
import { getGame } from '../api_fake/gamesAPI';
import Loading from '../components/Loading';

class Details extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      game: {},
      loading: true,
    }
  }

  componentDidMount(){
    this.fetchGame();
  }

  fetchGame = async () => {
    const { match: { params: { id } } } = this.props;
    const game = await getGame(id)
    this.setState({game, loading: false})
  }

  render() {
    const { game: { 
    img, 
    title,
    price,
    sales, 
    description,
    release_year: releaseYear }, 
    loading } = this.state;
    return (
      <section>
        { loading ? 
          <Loading /> :         
          <div className='game-card-details'>
            <img src={ img } alt={ title } />
            <h3>{title}</h3>
            <p>{ description}</p>
            {price ? <span>Price: {price}</span> : ''}
            {sales ? <span>Sales: {sales}</span> : ''}
            <span>Release Year: {releaseYear}</span>
            <Link className="link" to="/">Voltar</Link>
          </div>
      }
      </section>
    )
  }
}

export default Details;