import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from './Navigation';
import SignInPage from './SignIn.js';
import HomePage from './Home.js';
import LandingPage from './Landing.js';

import withAuthentication from './withAuthentication';
import * as routes from '../routes.js';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.HOME} component={HomePage} />
    </div>
  </Router>

export default withAuthentication(App);
