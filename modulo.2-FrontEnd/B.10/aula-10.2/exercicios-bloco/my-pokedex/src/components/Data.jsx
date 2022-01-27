const fetch = require('node-fetch')

const FetchPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
}

const IteratePokemon = async () => {
    const pokemon = [];
    for(let i = 1; i <= 151; i += 1) {
       pokemon.push(await FetchPokemons(i))
    }
    return pokemon
}
console.log(IteratePokemon());
