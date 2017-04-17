// actions
import * as Actions from '../actions/index';

let initialState = {
	isBeginAjax: false,
	accountList: null,
	account: null,
	error: null
};
export let firstReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.BEGIN_AJAX:
			return { ...state, ...{ isBeginAjax: true } };
		case Actions.END_AJAX:
			return { ...state, ...{ isBeginAjax: false } };
		case Actions.ERROR_AJAX:
			return { ...state, ...{ error: action.data } };
		case Actions.FETCH_ACCOUNT_LIST:
			return { ...state, ...{ accountList: action.data, isBeginAjax: false } };
		case Actions.FETCH_ACCOUNT:
			return { ...state, ...{ account: action.data, isBeginAjax: false } };
		default:
			return state;
	}
}