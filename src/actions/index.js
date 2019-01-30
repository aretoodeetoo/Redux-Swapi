import axios from 'axios';

export const GET_CHAR_LOADING = 'GET_CHAR_LOADING';
export const GET_CHAR_SUCCESS = 'GET_CHAR_SUCCESS';
export const GET_CHAR_FAILURE = 'GET_CHAR_FAILURE';

export const getChar = () => dispatch => {
    dispatch({ type: GET_CHAR_LOADING });
    axios
        .get('https://swapi.co/api/people')
        .then(res => dispatch({ type: GET_CHAR_SUCCESS, payload: res.data.results }))
        .catch(err => dispatch({ type: GET_CHAR_FAILURE, payload: err }))
}

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
