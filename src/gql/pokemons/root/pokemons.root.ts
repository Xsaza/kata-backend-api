import { pokemons } from '../../../db/pokemons';
import { Pokemon } from '../../../db/pokemons.model';

function getPokemon({ pokecardNumber }: { pokecardNumber: string }): Pokemon | undefined {
  return pokemons.find((pokemon) => pokemon.pokecardNumber === pokecardNumber);
};

function getPokemons({ amount, offset }: { amount: number, offset: number }) {
  const endIndex = amount ? offset + amount : pokemons.length;

  return pokemons.slice(offset, endIndex);
}


export const pokemonsRoot = {
  pokemon: getPokemon,
  pokemons: getPokemons
};
