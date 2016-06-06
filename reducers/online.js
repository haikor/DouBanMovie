'use strict';

import type {Action} from '../actions/types';


const initialState =  {movies:[] };

function online(state = initialState, action: Action): Tab {
  if (action.type === 'LOAD_ONLINE') {
      return state;
  }
  if (action.type === 'LOAD_ONLINE_SUCCESS') {
      return {movies:action.movies};
  }
  if (action.type === 'LOAD_ONLINE_FAILED') {
      return state;
  }
  return state;
}

module.exports = online;
