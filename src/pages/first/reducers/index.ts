// actions
import * as Actions from '../actions/index';

// origin：最初在actions中处理数据，统一返回一个对象给reducer，方便处理
// now： 现在决定，处理的格式化和归一化在reducer中处理，action只需要把后台数据
//       直接返回即可，将对数据的处理统一放到reducer，可以喝initialState对应
let initialState = {
	// isBeginAjax: false,
	accountList: null,
	account: null,
	// error: null
};
export let firstReducer = (state: any = initialState, action: any = {}) => {
	switch (action.type) {
		case Actions.BEGIN_AJAX:
			return { ...state, ...{ isBeginAjax: true } };
		case Actions.ERROR_AJAX:
			return { ...state, ...{ error: action.data, isBeginAjax: false } };
		case Actions.FETCH_ACCOUNT_LIST:
			return { ...state, ...{ accountList: action.data, isBeginAjax: false } };
		case Actions.FETCH_ACCOUNT:
			return { ...state, ...{ account: action.data, isBeginAjax: false } };
		default:
			return state;
	}
}