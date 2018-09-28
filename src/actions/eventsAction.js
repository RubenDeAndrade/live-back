import { firestore } from '../firebase';
import * as types from './actionTypes';

export function eventsHaveError(bool) {
    return {
        type: types.EVENTS_HAVE_ERROR,
        hasError: bool
    };
}

export function eventsAreLoading(bool) {
    return {
        type: types.EVENTS_ARE_LOADING,
        isLoading: bool
    };
}

export function getEventsSuccess(events) {
        return {
            type: types.GET_EVENTS_SUCCESS,
            events
        };
}

export function getEvents(authUser) {
  return (dispatch) => {
      dispatch(eventsAreLoading(true));
      console.log(authUser.uid);
      firestore.onceGetEvents(authUser.uid).then((querySnapshot) => {
        var data = querySnapshot.docs.map(function(doc) {
                return doc.data();
        });
        dispatch(eventsAreLoading(false));
        dispatch(getEventsSuccess(data));
    });
  }
}
