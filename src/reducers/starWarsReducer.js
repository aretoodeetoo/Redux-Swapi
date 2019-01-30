import {
  GET_CHAR_FAILURE, 
  GET_CHAR_LOADING, 
  GET_CHAR_SUCCESS
  } from "../actions";

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    default:
      return state;
  }
};
