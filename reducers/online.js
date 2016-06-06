'use strict';

import type {Action} from '../actions/types';


const initialState =  {movies:[] ,loading:false};

function online(state = initialState, action: Action): Tab {
  if (action.type === 'LOAD_ONLINE') {
      return {movies:state.movies,loading:true};
  }
  if (action.type === 'LOAD_ONLINE_SUCCESS') {
      return {movies:action.movies,loading:false};
  }
  if (action.type === 'LOAD_ONLINE_FAILED') {
      return initialState;
  }
  return state;
}

module.exports = online;
