import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './views/components/home';
import { Auth } from './views/components/login';
import { Profile } from './views/components/profile';

import './app.sass';

export const App: FC = () => (
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/login' component={Auth} />
  </Router>
);
