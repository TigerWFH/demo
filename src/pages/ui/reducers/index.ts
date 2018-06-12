import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const initialState = {
	home: "home",
	index: "index"
};

const second = (state = initialState, action) => {
	switch (action.type) {
		case t.FETCH_SECOND:
			console.log('我输出page second的逻辑数据=', state.home);
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
				home: action.payload.home,
				status: 'SUCCESS'
			};
		default:
			return state;
	}
};

const ui = (state = initialState, action) => {
	switch (action.type) {
		case t.FETCH_SECOND:
			console.log('我输出page ui的逻辑数据=', state.index);
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
				index: action.payload.index,
				status: 'SUCCESS'
			};
		default:
			return state;
	}
};

export default combineReducers({
	second,
	ui
});
