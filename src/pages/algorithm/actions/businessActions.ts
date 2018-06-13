import * as t from './actionTypes';
import { algorithm } from '../../apis';

const fetchAlgorithm = () => {
	return {
		type: t.FETCH_ALGORITHM
	};
};

const fetchAlgorithmSuccess = (payload) => {
	return {
		type: t.FETCH_ALGORITHM_SUCCESS,
		payload
	};
};

const fetchAlgorithmFail = (payload) => {
	return {
		type: t.FETCH_ALGORITHM_FAIL,
		payload
	};
};

export const requestAlgorithm = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchAlgorithm());
		algorithm(params)
			.then((data) => {
				dispatch(fetchAlgorithmSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchAlgorithmFail(error));
			});
	};
};
