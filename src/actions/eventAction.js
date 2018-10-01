import { firestore } from '../firebase';
import * as types from './actionTypes';

export function eventHaveError(bool) {
    return {
        type: types.EVENT_HAVE_ERROR,
        hasError: bool
    };
}

export function eventAreLoading(bool) {
    return {
        type: types.EVENT_ARE_LOADING,
        isLoading: bool
    };
}

export function getEventsSuccess(event) {
        return {
            type: types.GET_EVENT_SUCCESS,
            event
        };
}

export function getEvent(events, id) {
  return (dispatch) => {
      dispatch(eventAreLoading(true));
      events.find(item => item.id == id)
      console.log(authUser.uid);
      firestore.onceGetEvents(authUser.uid).then((querySnapshot) => {
        var data = querySnapshot.docs.map(function(doc) {
                return doc.data();
        });
        dispatch(eventAreLoading(false));
        dispatch(getEventsSuccess(data));
    });
  }
}
