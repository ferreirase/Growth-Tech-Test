/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import { Router } from 'express';
import GetUsersService from '../services/getUsersService';
import GetPostsService from '../services/getPostsService';

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
  const users = await GetUsersService();
  const posts = await GetPostsService();

  // filtrando posts por usuários em que as empresas pertencem à um grupo
  const usersPosts: Array<any> = users.map((user: User) => {
    return {
      user,
      posts: posts.filter((post: Post) => post.userId === user.id),
    };
  });

  return res.status(200).json(usersPosts);
});

export default usersRouter;
