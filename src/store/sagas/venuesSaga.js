import { put,call } from 'redux-saga/effects';
import { getFestivalByName } from '../../helpers/venueHelper.js';
import { setVenues } from '../actions';

export function* initVenues() {
	const venues = yield call(getFestivalByName);
	yield put(setVenues(venues));
}
