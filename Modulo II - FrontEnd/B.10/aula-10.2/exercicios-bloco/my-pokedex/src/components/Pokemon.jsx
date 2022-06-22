import FetchPokemons from './Data'
import React from 'react';

class Pokemon extends React.Component {
  pokemon = async () => {
    const pokemon = [];
    for(let i = 1; i <= 151; i += 1) {
       pokemon.push(await FetchPokemons(i))
    }
    return pokemon;
  }
  
}

export default Pokemon;