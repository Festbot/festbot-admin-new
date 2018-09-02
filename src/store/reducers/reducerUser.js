import {SET_USER_DATA} from '../actions/actionTypes';

const initialState = {
  itemsToZerking:[]
 }

const reducer = ( state = initialState,action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				userData: action.payload,
				
			};
	}
	return state;
};

export default reducer;
