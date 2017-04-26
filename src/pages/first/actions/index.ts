// http
import { get, post } from '../../../utils/http';

// constants
export const BEGIN_AJAX = 'BEGIN_AJAX';
export const ERROR_AJAX = 'ERROR_AJAX';
export const FETCH_ACCOUNT_LIST = 'FETCH_ACCOUNT_LIST';
export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';

export let fetchAccountList = () => {
	let action: any = {
		type: BEGIN_AJAX,
		data: {}
	};

	return (dispatch, getState) => {
		let url = '/v1/accounts';
		let options = {};
		dispatch(action);
		return get(url, options).then((res: any) => {
			action.type = FETCH_ACCOUNT_LIST;
			action.data = res.data;
			return dispatch(action);
		},
			(err) => {
				action.type = ERROR_AJAX;
				action.data = err;
				return dispatch(action);
			});
	};
};

export let fetchAccount = () => {
	let action = {
		type: BEGIN_AJAX,
		data: {}
	};
	action.type = FETCH_ACCOUNT;
	return action;
}