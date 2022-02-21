export enum PokemonElement {
  WATER = 'WATER',
  ARCANE = 'ARCANE',
  EARTH = 'EARTH',
  FIRE = 'FIRE',
}

export interface Pokemon {
  pokecardNumber: string;
  name: string;
  description: string;
  kind: string;
  element: PokemonElement;
  skills: string[];
  stats: {
    hp: number;
    attack: number;
    protection: number;
    haste: number;
  },
  points: number;
  imgUrl: string;
}