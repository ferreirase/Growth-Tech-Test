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

const GetUsersService = async () => {
  // buscando todos os usuários na API
  const allUsers = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  // filtrando os usuários por empresas que pertencem à um grupo
  const filteredUsers = allUsers.data.filter((user: User) =>
    user.company.name.includes('Group'),
  );

  return filteredUsers;
};

export default GetUsersService;
