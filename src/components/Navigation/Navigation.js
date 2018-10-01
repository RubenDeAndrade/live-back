import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../routes';

const Navigation = ({ authUser }) => {
  return (
    <div>
      { authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
      }
    </div>
  )
}

const NavigationAuth = () => {
  return (
    <div>
      <Link to={routes.LANDING}>Landing</Link> <span> | </span>
      <Link to={routes.HOME}>Home</Link> <span> | </span>
      <SignOutButton />
      <hr/>
    </div>
  )
}

const NavigationNonAuth = () => {
  return (
    <div>

      <Link to={routes.LANDING}>Landing</Link> <span> | </span>
      <Link to={routes.SIGN_IN}>Sign In</Link>
      <hr/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.authState.authUser,
});

export default connect(mapStateToProps)(Navigation);
