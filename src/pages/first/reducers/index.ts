import * as t from '../actions/actionTypes';
import * as m from '../modals/uiModal';
import { combineReducers } from 'redux';

let initialState: m.IFirstContainer = {
	tableData: {},
	auditData: {},
	infoData: {}
};

const accountList = (state: m.IFirstContainer = initialState, action: any = {}) => {
	switch (action.type) {
		case t.FETCH_ACCOUNT_LIST:
			return { ...state, ...{ isBeginAjax: true } };
		case t.FETCH_ACCOUNT_LIST_FAIL:
			return { ...state, ...{ error: action.data, isBeginAjax: false } };
		case t.FETCH_ACCOUNT_LIST_SUCCESS:
			let tableData: m.ITable = {
				pageSize: 10,
				pageNo: 1,
				totalCount: 0,
				fineTicketList: []
			};
			return { ...state, tableData };
		default:
			return state;
	}
}

const account = (state = {}, action) => {
	switch (action.type) {
		case t.FETCH_ACCOUNT:
			return {};
		case t.FETCH_ACCOUNT_FAIL:
			return {};
		case t.FETCH_ACCOUNT_SUCCESS:
			return {};
		default:
			return state;
	}
}

export default combineReducers({
	account,
	accountList
});