'use strict';

import type {Action} from '../actions/types';


export type Tab =
    'online'
  | 'cinema'
  | 'mymoive'
  ;

  export type tabState = {
    tab:Tab
  }

const initialState: tabState =  {tab:'online' };

function navigate(state: tabState = initialState, action: Action): Tab {
  if (action.type === 'SWITCH_TAB') {
      return {tab:action.tabName};
  }
  return state;
}

module.exports = navigate;
