import { get, post } from '../../../common/utils/http';

export const BEGIN_AJAX = 'BEGIN_AJAX';
export const ERROR_AJAX = 'ERROR_AJAX';
export const FETCH_ACCOUNT_LIST = 'FETCH_ACCOUNT_LIST';
export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';

export let fetchAccountList = () => {
	let action: any = {
		type: BEGIN_AJAX,
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