import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  events: [],
};

const applySetEvents = (state, action) => ({
  ...state,
  events: action.events
});

export function eventsHaveError(state = false, action) {
    switch (action.type) {
        case types.EVENTS_HAVE_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function eventsAreLoading(state = false, action) {
    switch (action.type) {
        case types.EVENTS_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function events(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.GET_EVENTS_SUCCESS : {
      return applySetEvents(state, action);
    }
    default : return state;
  }
}
