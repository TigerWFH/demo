import * as t from './actionTypes';
import { medicineCode } from '../../apis';

export const fetchMedicineCode = () => {
	return {
		type: t.FETCH_MEDICINE_CODE
	};
};

export const fetchMedicineCodeSuccess = (payload) => {
	return {
		type: t.FETCH_MEDICINE_CODE_SUCCESS,
		payload
	};
};

export const fetchMedicineCodeFail = (payload) => {
	return {
		type: t.FETCH_MEDICINE_CODE_FAIL,
		payload
	};
};

export const requestMedicineCode = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchMedicineCode());
		medicineCode(params)
			.then((data) => {
				dispatch(fetchMedicineCodeSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchMedicineCodeFail(error));
			});
	};
};
