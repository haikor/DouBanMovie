'use strict'

import type { Action } from './types';
import type { Moive } from '../types/movie';


function loadOnline(dispatch):Action{
	dispatch({type:'LOAD_ONLINE'});
	fetch('https://api.douban.com/v2/movie/in_theaters?city=福州')
      .then((response) => response.json())
      .then((responseData) => {
      		if(responseData.subjects){
      			dispatch({type:'LOAD_ONLINE_SUCCESS',movies:responseData.subjects});
      		}
      		else{
      			 dispatch({type:'LOAD_ONLINE_FAILED'});
      		}
      })
      .done();
}

module.exports = {loadOnline};
