import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

function goodsInfo(state = { status: 'PAGE_INITIAL' }, action) {
	switch (action.type) {
		case t.FETCH_GOODS_INFO:
			return {
				...state,
				status: 'REQUEST_INITIAL'
			};
		case t.FETCH_GOODS_INFO_SUCCESS:
			let { payload = {} } = action.payload;
			let { msgCode, msgText, data } = payload;
			return {
				...state,
				goodsList: data,
				status: 'REQUEST_SUCCESS'
			};
		case t.FETCH_GOODS_INFO_FAIL:
			return {
				...state,
				status: 'REQUEST_FAIL'
			};
		default:
			return state;
	}
}

export default combineReducers({
	goodsInfo
});
