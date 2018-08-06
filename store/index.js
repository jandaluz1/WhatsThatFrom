import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
const RECEIVED_MOVIES = 'RECIEVED_MOVIES';
const RESET = 'RESET';

const receivedMovies = movies => ({
  type: RECEIVED_MOVIES,
  movies
});

export const resetState = () => ({
  type: RESET
});

export const fetchMovies = movie => async dispatch => {
  const res = await axios.get(
    `http://www.omdbapi.com/?apikey=b56a95af&t=${movie}&plot=full`
  );
  dispatch(receivedMovies(res.data));
};

const initialState = {};
const reducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_MOVIES:
      return action.movies;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
