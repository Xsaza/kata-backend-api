import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { pokemons } from './pokemons';
import { schema } from './schema';

const PORT = 3000;
const app = express();

interface Post {
  id: string;
  title: string;
  content: string;
}

interface User {
  id: string;
  name: string;
  age: number;
  posts: Post[];
}

const users: User[] = [
  {
    id: '0',
    name: 'Oleg',
    age: 24,
    posts: [],
  }
];


app.use(cors());

app.get('/pokemons', (req, res) => {
  res.json(pokemons);
});

app.use('/imgs', express.static(`${__dirname}/assets`));


const root = {
  getAllUsers: () => users,
  getUser: ({ id }: { id: string }): User | null => {
    return users.find(user => user.id === id) || null;
  },
  createUser: ({ input }: { input: User }): User => {
    const user: User = {
      ...input,
      id: String(users.length),
    }

    users.push(user);

    return user;
  }
};


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: root,
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
