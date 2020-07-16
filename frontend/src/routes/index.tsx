import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import UserBoard from '../pages/User';

const Routes: React.FC = () => (
  // o componente Switch garante um componente por vez na tela
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/user/:userID+" component={UserBoard} />
  </Switch>
);

export default Routes;
