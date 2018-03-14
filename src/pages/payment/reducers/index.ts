import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const medicineCode = (state = {}, action) => {
	let { payload = {} } = action;
	let { msgCode, msgText, data = {} } = payload;
	switch (action.type) {
		case t.GET_MEDICINE_CODE:
			return {
				...state,
				status: 'INITIAL'
			};
		case t.GET_MEDICINE_CODE_SUCCESS:
			return {
				...state,
				code: msgCode,
				medicineCode: data.medicineCode,
				status: 'SUCCESS'
			};
		case t.GET_MEDICINE_CODE_FAIL:
			return {
				...state,
				code: msgCode,
				status: 'FAIL'
			};
		default:
			return state;
	}
}

export default combineReducers({
	medicineCode
});