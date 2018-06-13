import * as t from './actionTypes';
import * as apis from '../../apis';

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
		apis
			.fetchAlgorithm(params)
			.then((data) => {
				dispatch(fetchAlgorithmSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchAlgorithmFail(error));
			});
	};
};
