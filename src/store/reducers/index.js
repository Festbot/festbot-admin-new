import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import ReducerUser from './reducerUser.js';
import ReducerArtists from './reducerArtists.js';
import ReducerAuth from './reducerAuth.js';
import ReducerEvents from './reducerEvents.js';
import ReducerVenues from './reducerVenues.js';
import ReducerPois from './reducerPois.js';
import ReducerUi from './reducerUi.js';



const rootReducer = combineReducers({

	form: formReducer,
	user: ReducerUser,
	artist: ReducerArtists,
	auth: ReducerAuth,
	events: ReducerEvents,
	pois: ReducerPois,
	ui: ReducerUi,
	venues: ReducerVenues,
});

export default rootReducer;