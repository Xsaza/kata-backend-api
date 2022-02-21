import { pokemons } from '../../../db/pokemons';
import { pokemonTeam } from '../../../db/pokemons-team';
import { Pokemon } from '../../../db/pokemons.model';

function getPokemon({ pokecardNumber }: { pokecardNumber: string }): Pokemon | undefined {
  return pokemons.find((pokemon) => pokemon.pokecardNumber === pokecardNumber);
};

function getPokemons({ amount, offset }: { amount: number, offset: number }) {
  const endIndex = amount ? offset + amount : pokemons.length;

  return pokemons.slice(offset, endIndex);
}

function addPokemon({ pokecardNumber }: { pokecardNumber: string }) {
  const pokemonToAdd = pokemons.find(pokemon => pokemon.pokecardNumber === pokecardNumber);

  if (pokemonToAdd) { pokemons.push(pokemonToAdd) }

  return pokemonToAdd;
}


export const pokemonsRoot = {
  pokemon: getPokemon,
  pokemons: getPokemons,
  addPokemon,
};
