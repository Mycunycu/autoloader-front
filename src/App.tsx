import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './views/components/home';
import { Auth } from './views/components/login';
import { Profile } from './views/components/profile';
import RegisterPage from './views/components/register';

import './app.sass';

export const App: FC = () => (
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/registration' component={RegisterPage} />
    <Route exact path='/login' component={Auth} />
    <Route exact path='/profile' component={Profile} />
  </Router>
);
