import * as Actions from '../actions/firstActions';
import * as types from '../constants/firstTypes';

let initialState: types.IFirstContainer = {
	tableData: {},
	auditData: {},
	infoData: {}
};
export let firstReducer = (state: types.IFirstContainer = initialState, action: any = {}) => {
	switch (action.type) {
		case Actions.BEGIN_AJAX:
			return { ...state, ...{ isBeginAjax: true } };
		case Actions.ERROR_AJAX:
			return { ...state, ...{ error: action.data, isBeginAjax: false } };
		case Actions.FETCH_ACCOUNT_LIST:
			let tableData: types.ITable = {
				pageSize: 10,
				pageNo: 1,
				totalCount: 0,
				fineTicketList: []
			};
			return { ...state, tableData };
		case Actions.FETCH_ACCOUNT:
			let auditData: types.IAudit = {
				appealRemark: "appealRemark"
			};
			let infoData: types.IInfo = {
				ticketId: "monkey"
			};
			return { ...state, infoData, auditData };
		default:
			return state;
	}
}