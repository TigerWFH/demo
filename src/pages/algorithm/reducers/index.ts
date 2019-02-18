import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const algorithm = (state = { status: 'PAGE_INITIAL' }, action) => {
	switch (action.type) {
		case t.FETCH_ALGORITHM:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_INITIAL'
			};
		case t.FETCH_ALGORITHM_FAIL:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_FAIL'
			};
		case t.FETCH_ALGORITHM_SUCCESS:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_SUCCESS'
			};
		default:
			return state;
	}
};

export default combineReducers({
	algorithm
});
