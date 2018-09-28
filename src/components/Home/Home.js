import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firestore } from '../../firebase';
import { getEvents } from '../../actions/eventsAction';
import withAuthorization from '../withAuthorization';

class HomePage extends Component {
  componentDidMount() {
      const { authUser } = this.props;

      console.log("HOME did mount");
      this.props.fetchEvents(authUser);
  }

  render () {
    const { events } = this.props;

    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    }
    const listUsers = events.map((event, index) => <li key={index}> {event.name} </li>)
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
  events: state.eventsState.events,
  hasError: state.eventsHaveError,
  isLoading: state.eventsAreLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (authUser) => dispatch(getEvents(authUser)),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
