import { IActionType } from '../../../common/globalConstants';
import * as t from './actionTypes';
import * as m from '../modals/uiModal';

// 获取账户列表数据
export const fetchAccountList = (payload) => {
	let action: IActionType<{}> = {
		type: t.FETCH_ACCOUNT_LIST,
		payload
	};
	return action;
};

export const fetchAccountListSuccess = (payload) => {
	let action: IActionType<{}> = {
		type: t.FETCH_ACCOUNT_LIST_SUCCESS,
		payload
	};

	return action;
}

export const fetchAccountListFail = (payload) => {
	let action: IActionType<{}> = {
		type: t.FETCH_ACCOUNT_LIST_FAIL,
		payload
	};

	return action;
}

// 获取账户信息
export const fetchAccount = (payload) => {
	let action = {
		type: t.FETCH_ACCOUNT,
		payload: {}
	};

	return action;
}

export const fetchAccountSuccess = (payload) => {
	let action = {
		type: t.FETCH_ACCOUNT_SUCCESS,
		payload: {}
	};
	
	return action;
}

export const fetchAccountFail = (payload) => {
	let action = {
		type: t.FETCH_ACCOUNT_FAIL,
		payload: {}
	};
	
	return action;
}