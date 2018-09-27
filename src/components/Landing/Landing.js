import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../routes';
import './Landing.css';

const LandingPage = () =>
  <div className="container">
    <h1 className="landingTitle"> Bienvenue sur notre back office </h1>
    <Link className="signInButton" to={routes.SIGN_IN}> Connectez-vous !</Link>
  </div>

export default LandingPage;
