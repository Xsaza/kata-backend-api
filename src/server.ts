import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { pokemonsSchema } from './gql/pokemons/pokemons.schema';
import { pokemonsRoot } from './gql/pokemons/pokemons.root';

import { searchSchema } from './gql/search/search.schema';
import { searchRoot } from './gql/search/search.root';

const PORT = 3000;
const app = express();

app.use(cors());

app.use('/imgs', express.static(`${__dirname}/assets`));

app.use('/pokemons', graphqlHTTP({
  schema: pokemonsSchema,
  rootValue: pokemonsRoot,
  graphiql: true,
}));

app.use('/search', graphqlHTTP({
  schema: searchSchema,
  rootValue: searchRoot,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
