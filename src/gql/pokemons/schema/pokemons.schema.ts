import { buildSchema } from 'graphql';

export const pokemonsSchema = buildSchema(`
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
    pokemon(pokecardNumber: ID!): Pokemon
    pokemons(amount: Int = Null, offset: Int = 0): [Pokemon!]!
    pokemonsTeam: [Pokemon!]!
  }

  type Mutation {
    addedPokemon(pokecardNumber: ID!): Pokemon
    removedPokemon(pokecardNumber: ID!): Pokemon
  }
`);
