import * as t from './actionTypes';
import { second } from '../../apis';

const fetchSecond = () => {
	return {
		type: t.FETCH_SECOND
	};
};
const fetchSecondSuccess = (payload) => {
	return {
		type: t.FETCH_SECOND_SUCCESS,
		payload
	};
};
const fetchSecondFail = (payload) => {
	return {
		type: t.FETCH_SECOND_FAIL,
		payload
	};
};

export const requestSecond = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchSecond());
		second(params)
			.then((data) => {
				dispatch(fetchSecondSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchSecondFail(error));
			});
	};
};
