import {INIT_VENUES,SET_VENUES} from '../actions/actionTypes';


export const initVenues=()=>{
  return {
    type: INIT_VENUES
  }
}
export const setVenues=(venues)=>{
  return {
    type: SET_VENUES,
    payload: venues
  }
}