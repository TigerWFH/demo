import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const second = (state = {}, action) => {
	switch (action.type) {
		case t.FETCH_SECOND:
			return {
				...state,
				...action.payload,
				status: 'INITIAL'
			};
		case t.FETCH_SECOND_FAIL:
			return {
				...state,
				...action.payload,
				status: 'FAIL'
			};
		case t.FETCH_SECOND_SUCCESS:
			return {
				...state,
				...action.payload,
				status: 'SUCCESS'
			};
		default:
			return state;
	}
};

export default combineReducers({
	second
});