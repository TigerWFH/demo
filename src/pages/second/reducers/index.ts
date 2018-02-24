import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const second = (state = {}, action) => {
	switch (action.type) {
		case t.FETCH_SECOND:
			return {
				...state,
				...action.payload,
				status: 0
			};
		case t.FETCH_SECOND_FAIL:
			return {
				...state,
				...action.payload,
				status: -1
			};
		case t.FETCH_SECOND_SUCCESS:
			return {
				...state,
				...action.payload,
				status: 1
			};
		default:
			return state;
	}
};

export default combineReducers({
	second
});