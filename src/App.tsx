import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './views/components/home';
import { Auth } from './views/components/auth';

import './app.sass';

export const App: FC = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Auth} />
  </Router>
);
