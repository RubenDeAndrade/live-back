import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  users: [],
};

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.GET_USERS_SUCCESS : {
      return applySetUsers(state, action);
    }
    default : return state;
  }
}

export default userReducer;
