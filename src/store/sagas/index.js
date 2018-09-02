import {takeEvery} from 'redux-saga/effects'
import {INIT_VENUES} from '../actions/actionTypes';

import {initVenues} from './venuesSaga.js'

export function* watchVenues(){
  yield takeEvery(INIT_VENUES,initVenues)
}