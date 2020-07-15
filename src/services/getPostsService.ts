/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */

import axios from 'axios';

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

const GetPostsService = async () => {
  // buscando todos os posts na API
  const responsePosts = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return responsePosts.data;
};

export default GetPostsService;
