import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const medicineCode = (state = {}, action) => {
	let { payload = {} } = action;
	let { msgCode, msgText, data = {} } = payload;
	switch (action.type) {
		case t.FETCH_MEDICINE_CODE:
			return {
				...state,
				status: 'REQUEST_INITIAL'
			};
		case t.FETCH_MEDICINE_CODE_SUCCESS:
			return {
				...state,
				code: msgCode,
				medicineCode: data.medicineCode,
				status: 'REQUEST_SUCCESS'
			};
		case t.FETCH_MEDICINE_CODE_FAIL:
			return {
				...state,
				code: msgCode,
				status: 'REQUEST_FAIL'
			};
		default:
			return state;
	}
}

export default combineReducers({
	medicineCode
});