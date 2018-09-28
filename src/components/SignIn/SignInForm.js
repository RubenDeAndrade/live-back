import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../../actions/authAction';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    this.props.initAuth(history, email, password);
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    if (this.props.hasError) {
        return <p> Desole ! Une erreur est survenue </p>;
    }

    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <form className="formStyle" onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

      </form>
    );
  }

}

const mapStateToProps = (state) => ({
  authState: state.authState.authUser,
  hasError: state.authHasError,
  isLoading: state.authIsLoading
});

const mapDispatchToProps = (dispatch) => ({
  initAuth: (history, email, password) => dispatch(setAuth(history, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
