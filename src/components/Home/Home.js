import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firestore } from '../../firebase';
import { getUsers } from '../../actions/usersAction';
import withAuthorization from '../withAuthorization';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render () {
    const { users } = this.props;

    console.log(users);
    const listUsers = users.map((user) => <li> {user.name} </li>)
    return (
      <div>
        <h1> Home Page </h1>
        <p> This page is for all the signed in users. </p>
        <ul>{listUsers}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(getUsers()),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
