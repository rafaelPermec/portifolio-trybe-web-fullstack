const FetchPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
}

export default FetchPokemons;