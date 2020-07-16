/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import logo from '../../assets/grow-tech.png';
import Acordeon from '../../components/Arcodeon';

import './style.css';

interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}

interface User {
  name: string;
  address: object;
  company: Company;
  email: string;
  id: number;
  phone: string;
  username: string;
  website: string;
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const UserBoard: React.FC = () => {
  const [user, setUser] = useState<User>(() => {
    const storageRepositories = localStorage.getItem('@Growtech:user');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return {};
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const storageRepositories = localStorage.getItem('@Growth:user');

    if (storageRepositories) {
      const userJson = JSON.parse(storageRepositories);

      if (isSubscribed) {
        setUser(userJson.user);
        setPosts(userJson.posts);
      }
    }

    isSubscribed = false;
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="Growth Tech" />
      </Header>

      <h2 className="companyName">{user.company?.name}</h2>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3d3d3d',
        }}
      >
        <b className="iconBack">Voltar</b>
      </Link>
      <div className="containerPosts">
        {posts.map((post: Post) => (
          <Acordeon
            title={post.title}
            post={post.body}
            user={user.name}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default UserBoard;
