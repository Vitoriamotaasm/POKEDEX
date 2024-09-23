
function convertPokemonToLi(pokemon) {
    return ''
        <ol>
         <li class="pokemon ${pokemon.type}">
         <span class="number">$(pokemon.number)</span>
         <span class="name">$(pokemon.name)</span>

   <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => '<li class="type">$(type)</li>').join('')}
            </ol>

            <img src="${pokemon.sprites.other.dream_word.front_default}" 
                alt="$(pokemon.name)"/>
        </div>
    </li> 
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})