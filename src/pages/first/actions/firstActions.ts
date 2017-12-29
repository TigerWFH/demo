import { IActionType } from '../../../common/globalConstants';

export const BEGIN_AJAX = Symbol('BEGIN_AJAX');
export const ERROR_AJAX = Symbol('ERROR_AJAX');
export const FETCH_ACCOUNT_LIST = Symbol('FETCH_ACCOUNT_LIST');
export const FETCH_ACCOUNT = Symbol('FETCH_ACCOUNT');

// 此处的泛型应该是后台的数据模型，可以直接再此处实现
export let fetchAccountList = () => {
	let action: IActionType<{}> = {
		type: FETCH_ACCOUNT_LIST,
		payload: {}
	};
	return action;
};

export let fetchAccount = () => {
	let action = {
		type: FETCH_ACCOUNT,
		payload: {}
	};
	return action;
}