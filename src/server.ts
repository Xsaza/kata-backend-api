import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { pokemonsSchema } from './gql/pokemons/schema/pokemons.schema';
import { pokemonsRoot } from './gql/pokemons/root/pokemons.root';

const PORT = 3000;
const app = express();

app.use(cors());

app.use('/imgs', express.static(`${__dirname}/assets`));

app.use('/pokemons', graphqlHTTP({
  schema: pokemonsSchema,
  graphiql: true,
  rootValue: pokemonsRoot,
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
