/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import { Router } from 'express';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: Company;
}

const usersRouter = Router();

usersRouter.get('/', async (_req, res) => {
  // buscando todos os usuários na API
  const allUsers = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  // filtrando os usuários por empresas que pertencem à um grupo
  const filteredUsers = allUsers.data.filter((user: User) =>
    user.company.name.includes('Group'),
  );

  // buscando todos os posts na API
  const responsePosts = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const allPosts = responsePosts.data;

  // filtrando posts por usuários em que as empresas pertencem à um grupo
  const filteredPosts: Array<any> = filteredUsers.map((user: User) => {
    return {
      user,
      posts: allPosts.filter((post: Post) => post.userId === user.id),
    };
  });

  return res.status(200).json(filteredPosts);
});

export default usersRouter;
