import { combineReducers } from 'redux';
import { auth, authIsLoading, authHasError } from './session';
import { events, eventsAreLoading, eventsHaveError } from './event';

const rootReducer = combineReducers({
  authState: auth,
  authIsLoading,
  authHasError,
  eventsState: events,
  eventsAreLoading,
  eventsHaveError,
});

export default rootReducer;
