import { firestore } from '../firebase';
import * as types from './actionTypes';

export function getUsers() {
  return (dispatch) => {
      firestore.onceGetUsers().then((querySnapshot) => {
        var data = querySnapshot.docs.map(function(doc) {
                return doc.data();
        });
        dispatch(getUsersSuccess(data))})
    };
}

export function getUsersSuccess(users) {
        return {
            type: types.GET_USERS_SUCCESS,
            users
        };
}
