import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const medicineCode = (state = {}, action) => {
	let { payload } = action;
	switch (action.type) {
		case t.GET_MEDICINE_CODE:
			return {
				...state,
				status: 'INITIAL'
			};
		case t.GET_MEDICINE_CODE_SUCCESS:
			return {
				...state,
				...payload,
				status: 'SUCCESS'
			};
		case t.GET_MEDICINE_CODE_FAIL:
			return {
				...state,
				status: 'FAIL'
			};
		default:
			return state;
	}
}

export default combineReducers({
    medicineCode
});