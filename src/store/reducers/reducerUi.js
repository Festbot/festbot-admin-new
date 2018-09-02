import { UPDATE_MENU_VISIBILITY } from '../actions/actionTypes';

const initialState = {
	menuIsActive: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MENU_VISIBILITY:
			return {
				...state,
				menuIsActive: action.payload
			};
	}
	return state;
};

export default reducer;
