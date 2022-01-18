import express from 'express';

import { pokemons } from './pokemons';

const PORT = 3000;

const app = express();

app.get('/pokemons', (req, res) => {
  res.json(pokemons);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
