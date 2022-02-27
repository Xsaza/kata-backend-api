import { buildSchema } from 'graphql';

export const searchSchema = buildSchema(`
  enum PokemonElement {
    WATER
    ARCANE
    EARTH
    FIRE
  }

  type PokemonStats {
    hp: Int!
    attack: Int!
    protection: Int!
    haste: Int!
  }

  type Pokemon {
    pokecardNumber: ID!
    name: String!
    description: String!
    kind: String!
    element: PokemonElement!
    skills: [String!]!
    stats: PokemonStats!
    points: Int!
    imgUrl: String!
  }

  type Query {
    search(nameOrPokecard: String = "", element: PokemonElement = Null): [Pokemon!]
  }
`);
