import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SignInForm from './SignInForm';
import * as routes from '../../routes.js';
import './SignIn.css';

const SignInPage = ({ history }) =>
  <div className="container">
    <h1> Se connecter </h1>
    <SignInForm history={history} />
  </div>

export default withRouter(SignInPage);
