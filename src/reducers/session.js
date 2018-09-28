import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  authUser: null,
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});

export function authHasError(state = false, action) {
    switch (action.type) {
        case types.AUTH_HAS_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function authIsLoading(state = false, action) {
    switch (action.type) {
        case types.AUTH_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.SET_AUTH_SUCCESS : {
      return applySetAuthUser(state, action);
    }
    default : return state;
  }
}
