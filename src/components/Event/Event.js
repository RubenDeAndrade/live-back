import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withAuthorization from '../withAuthorization';

import * as routes from '../../routes.js';

class EventPage extends Component {
  render() {
    console.log("MA PAGE EVENT");
    console.log(this.props);

    return (
      <div>
        <h1> Event Page </h1>
      </div>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(EventPage);
