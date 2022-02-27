import { pokemons } from '../../db/pokemons';
import { Pokemon, PokemonElement } from '../../db/pokemons.model';

function searchByName(pokemonName: string): Pokemon[] {
  if (!pokemonName) { return pokemons }

  return pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().match(pokemonName.toLowerCase());
  });
}

function searchByPokecard(pokecardNumber: string): Pokemon[] {
  return pokemons.filter(pokemon => {
    return pokemon.pokecardNumber.match(pokecardNumber);
  });
}

function search({ nameOrPokecard, element }: { nameOrPokecard: string, element: PokemonElement | null }) {
  let foundPokemons: Pokemon[] = [];

  if (Number(nameOrPokecard)) {
    foundPokemons = searchByPokecard(nameOrPokecard);
  } else {
    foundPokemons = searchByName(nameOrPokecard);
  }

  if (element && foundPokemons.length) {
    foundPokemons = foundPokemons.filter(pokemon => pokemon.element === element);
  }

  return foundPokemons;
}

export const searchRoot = { search };
