import {
  GET_CHAR_FAILURE, 
  GET_CHAR_LOADING, 
  GET_CHAR_SUCCESS
  } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  err: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_CHAR_LOADING:
      return {
        ...state,
        fetching: true,
        err: ''
      }
      case GET_CHAR_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload,
        err: ''
      }
      case GET_CHAR_FAILURE:
      return {
        ...state,
        err: action.payload
      }

    default:
      return state;
  }
};
