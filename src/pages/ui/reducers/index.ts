import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const initialState = {
	home: "home",
	index: "index"
};

const second = (state = initialState, action) => {
	switch (action.type) {
		case t.FETCH_SECOND:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_INITIAL'
			};
		case t.FETCH_SECOND_FAIL:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_FAIL'
			};
		case t.FETCH_SECOND_SUCCESS:
			return {
				...state,
				home: action.payload.home,
				status: 'REQUEST_SUCCESS'
			};
		default:
			return state;
	}
};

const ui = (state = initialState, action) => {
	switch (action.type) {
		case t.FETCH_SECOND:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_INITIAL'
			};
		case t.FETCH_SECOND_FAIL:
			return {
				...state,
				...action.payload,
				status: 'REQUEST_FAIL'
			};
		case t.FETCH_SECOND_SUCCESS:
			return {
				...state,
				index: action.payload.index,
				status: 'REQUEST_SUCCESS'
			};
		default:
			return state;
	}
};

export default combineReducers({
	second,
	ui
});
