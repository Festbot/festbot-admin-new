import {GET_USER_DATA_BY_ID} from '../actions/actionTypes';


export const getUserDataById=(data)=>{
  return {
    type: GET_USER_DATA_BY_ID,
    payload: data
  }
}