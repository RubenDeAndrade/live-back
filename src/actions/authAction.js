import { auth } from '../firebase';
import * as types from './actionTypes';
import * as routes from '../routes.js';

export function authHasError(bool) {
    return {
        type: types.AUTH_HAS_ERROR,
        hasError: bool
    };
}

export function authIsLoading(bool) {
    return {
        type: types.AUTH_IS_LOADING,
        isLoading: bool
    };
}

export function setAuthSuccess(userAuth) {
    return {
        type: types.SET_AUTH_SUCCESS,
        userAuth
    };
}

export function setAuth(history, email, password) {
  return (dispatch) => {
    dispatch(authIsLoading(true));
    auth.doSignInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("++++ REQUEST ++++");
        console.log(auth);
        dispatch(authIsLoading(false));
        dispatch(setAuthSuccess(auth));
        history.push(routes.HOME);
      })
      .catch((error) => {
        dispatch(authIsLoading(false));
        dispatch(authHasError(true));
      });
  }
}
