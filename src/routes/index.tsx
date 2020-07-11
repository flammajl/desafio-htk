import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Logged from '../pages/Logged';
import Price from '../pages/Price';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/cliente" exact component={Logged} isPrivate />
    <Route path="/cliente/solicitar" component={Price} isPrivate />
  </Switch>
);

export default Routes;
