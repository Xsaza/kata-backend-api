import { pokemons } from '../../../db/pokemons';
import { pokemonsTeam } from '../../../db/pokemons-team';
import { Pokemon } from '../../../db/pokemons.model';

function getPokemon({ pokecardNumber }: { pokecardNumber: string }): Pokemon | undefined {
  return pokemons.find((pokemon) => pokemon.pokecardNumber === pokecardNumber);
};

function getPokemons({ amount, offset }: { amount: number, offset: number }): Pokemon[] {
  const endIndex = amount ? offset + amount : pokemons.length;

  return pokemons.slice(offset, endIndex);
}

function getPokemonsTeam(): Pokemon[] {
  return pokemonsTeam;
}

function addPokemon({ pokecardNumber }: { pokecardNumber: string }): Pokemon | undefined {
  const pokemonToAdd = pokemons.find(pokemon => pokemon.pokecardNumber === pokecardNumber);

  if (!pokemonToAdd) { return }

  const totalPoints = pokemonsTeam.reduce((points, pokemon) => points + pokemon.points, 0);

  if (totalPoints + pokemonToAdd.points > 200) { return }

  if (pokemonsTeam.includes(pokemonToAdd)) { return }

  pokemonsTeam.push(pokemonToAdd)

  return pokemonToAdd;
}

function removePokemon({ pokecardNumber }: { pokecardNumber: string }): Pokemon | undefined {
  const pokemonIndexToRemove = pokemonsTeam.findIndex(pokemon => pokemon.pokecardNumber === pokecardNumber);
  if (pokemonIndexToRemove === -1) { return }

  const [removedPokemon] = pokemonsTeam.splice(pokemonIndexToRemove, 1);

  return removedPokemon;
}


export const pokemonsRoot = {
  pokemon: getPokemon,
  pokemons: getPokemons,
  pokemonsTeam: getPokemonsTeam,
  addedPokemon: addPokemon,
  removedPokemon: removePokemon,
};
