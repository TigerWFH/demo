import * as t from '../actions/actionTypes';
import * as m from '../modals/uiModals';
import { combineReducers } from 'redux';

let initialState: m.IFirstContainer = {
	tableData: {},
	auditData: {},
	infoData: {}
};

const accountList = (state: m.IFirstContainer = initialState, action: any = {}) => {
	switch (action.type) {
		case t.FETCH_ACCOUNT_LIST:
			return {
				...state,
				...action.payload,
				status: 0
			};
		case t.FETCH_ACCOUNT_LIST_FAIL:
			return {
				...state,
				...action.payload,
				status: -1
			};
		case t.FETCH_ACCOUNT_LIST_SUCCESS:
			let tableData: m.ITable = {
				pageSize: 10,
				pageNo: 1,
				totalCount: 0,
				fineTicketList: []
			};
			return { ...state, tableData, status: 1 };
		default:
			return state;
	}
}

const account = (state = {}, action) => {
	switch (action.type) {
		case t.FETCH_ACCOUNT:
			return {
				...action.payload,
				status: 0
			};
		case t.FETCH_ACCOUNT_FAIL:
			return {
				...action.payload,
				status: -1
			};
		case t.FETCH_ACCOUNT_SUCCESS:
			return {
				...action.payload,
				status: 1
			};
		default:
			return state;
	}
}

export default combineReducers({
	account,
	accountList
});