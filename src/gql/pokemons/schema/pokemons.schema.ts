import { buildSchema } from 'graphql';

// export const userSchema = buildSchema(`
//   type User {
//     id: ID
//     name: String
//     age: Int
//     posts: [Post]
//   }

//   type Post {
//     id: ID
//     title: String
//     content: String
//   }

//   input UserInput {
//     id: ID
//     name: String!
//     age: Int!
//     posts: [PostInput]
//   }

//   input PostInput {
//     id: ID
//     title: String!
//     content: String!
//   }

//   type Query {
//     getAllUsers: [User]
//     getUser(id: ID): User
//   }

//   type Mutation {
//     createUser(input: UserInput): User
//   }
// `);

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
  }

  type Mutation {
    addPokemon(pokemon)
  }
`);
