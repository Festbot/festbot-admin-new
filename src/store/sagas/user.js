import {put} from 'redux-saga/effects';
import {GET_USER_DATA_BY_ID} from '../actions/actionTypes';

export function* firstFunction(action) {
    yield console.log(action)
    //yield put(GET_USER_DATA_BY_ID)
}