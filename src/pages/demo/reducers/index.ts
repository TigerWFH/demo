import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const demo = (state = {}, action) => {
	switch (action.type) {
		case t.FETCH_DEMO:
			return {
				...state,
				...action.payload,
				status: 0
			};
		case t.FETCH_DEMO_FAIL:
			return {
				...state,
				...action.payload,
				status: -1,
			};
		case t.FETCH_DEMO_SUCCESS:
			return {
				...state,
				...action.payload,
				status: 1
			};
		default:
			return state;
	}
}

export default combineReducers({
	demo
});