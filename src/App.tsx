import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Auth } from './pages/auth';

export const App: FC = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Auth} />
  </Router>
);
