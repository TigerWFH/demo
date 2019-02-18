import { IActionType } from '../../../common/globalConstants';
import * as t from './actionTypes';
import { account, accountList } from '../../apis';

// 获取账户列表数据
const fetchAccountList = () => {
	let action: IActionType<{}> = {
		type: t.FETCH_ACCOUNT_LIST,
		payload: {}
	};
	return action;
};

const fetchAccountListSuccess = (payload) => {
	let action: IActionType<{}> = {
		type: t.FETCH_ACCOUNT_LIST_SUCCESS,
		payload
	};

	return action;
};

const fetchAccountListFail = (payload) => {
	let action: IActionType<{}> = {
		type: t.FETCH_ACCOUNT_LIST_FAIL,
		payload
	};

	return action;
};

// 获取账户信息
const fetchAccount = () => {
	let action = {
		type: t.FETCH_ACCOUNT,
		payload: {}
	};

	return action;
};

const fetchAccountSuccess = (payload) => {
	let action = {
		type: t.FETCH_ACCOUNT_SUCCESS,
		payload: {}
	};

	return action;
};

const fetchAccountFail = (payload) => {
	let action = {
		type: t.FETCH_ACCOUNT_FAIL,
		payload: {}
	};

	return action;
};

export const requestAccount = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchAccount());
		account(params)
			.then((data) => {
				dispatch(fetchAccountSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchAccountFail(error));
			});
	};
};

export const requestAccountList = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchAccountList());
		accountList(params)
			.then((data) => {
				dispatch(fetchAccountListSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchAccountListFail(error));
			});
	};
};
