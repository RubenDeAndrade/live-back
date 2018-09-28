import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;

      console.log("AUTHENTICATION");
      console.log(this.props);
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'SET_AUTH_SUCCESS', authUser}),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
