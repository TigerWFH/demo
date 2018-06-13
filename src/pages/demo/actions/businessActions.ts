import * as t from './actionTypes';
import { demo } from '../../apis';

const fetchDemo = () => {
	return {
		type: t.FETCH_DEMO
	};
};

const fetchDemoSuccess = (payload) => {
	return {
		type: t.FETCH_DEMO_SUCCESS,
		payload
	};
};

const fetchDemoFail = (payload) => {
	return {
		type: t.FETCH_DEMO_FAIL,
		payload
	};
};

export const requestDemo = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchDemo());
		demo(params)
			.then((data) => {
				dispatch(fetchDemoSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchDemoFail(error));
			});
	};
};
