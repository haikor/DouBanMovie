
'use strict';


export type Action =
    { type: 'SWICTH_TAB', tabName:string }
  | { type:'LOAD_ONLINE'}
  | { type:'LOAD_ONLINE_SUCCESS',response:string}
  | { type:'LOAD_ONLINE_FAILED'}
  | { type:'LOAD_MOVIE'}
  | { type:'LOAD_MOVIE_SUCCESS'}
  | { type:'LOAD_MOVIE_FAILED'}

  | { type:'LOAD_CINEMA'}
  | { type:'LOAD_CINEMA_SUCCESS'}
  | { type:'LOAD_CINEMA_FAILED',city:string}
  | { type:'LOAD_LOCATION'}
  | { type:'LOAD_LOCATION_SUCCESS'}
  | { type:'LOAD_LOCATION_FAILED'}


export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;