/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProgressLoader from '../../components/ProgressLoader';
// import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';
import logo from '../../assets/grow-tech.png';
import { ContainerCards } from './style';
import './style.css';

import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (users.length > 3) {
      setTest(true);
    }

    const { CancelToken } = axios;
    const source = CancelToken.source();

    const loadData = (): void => {
      try {
        axios
          .get('http://localhost:3333/users', { cancelToken: source.token })
          .then((data) => {
            setUsers(data.data);
          });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled');
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, [users]);

  return (
    <>
      <Header>
        <img src={logo} alt="Growth Tech" />
      </Header>

      <ContainerCards test={test}>
        {users.length === 0 ? (
          <ProgressLoader />
        ) : (
          users.map((user: any) => (
            <Link
              to={`/user/${user.user.id}`}
              style={{ textDecoration: 'none' }}
              key={user.user.id}
            >
              <Card
                name={user.user.name}
                company={user.user.company.name}
                onclick={() =>
                  localStorage.setItem('@Growth:user', JSON.stringify(user))
                }
              />
            </Link>
          ))
        )}
      </ContainerCards>
    </>
  );
};

export default Dashboard;

/**
 *
 */
