import { SET_VENUES } from '../actions/actionTypes';

const initialState = {
	venuesData: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_VENUES:
			return {
				...state,
				venuesData: action.payload
			};
	}
	return state;
};

export default reducer;
