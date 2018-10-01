import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import SignInPage from './SignIn/SignIn';
import HomePage from './Home/Home';
import EventPage from './Event/Event';
import LandingPage from './Landing/Landing';

import withAuthentication from './withAuthentication';
import * as routes from '../routes.js';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.HOME} component={HomePage}>
        <Route exact path={routes.EVENT} component={EventPage} />
      </Route>
    </div>
  </Router>

export default withAuthentication(App);
