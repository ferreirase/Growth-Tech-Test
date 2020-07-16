/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { HeaderComponent } from './style';
import logo from '../../assets/grow-tech.png';

const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <img src={logo} alt="Growth Tech" />
    </HeaderComponent>
  );
};

export default Header;
