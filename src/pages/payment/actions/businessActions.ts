/*
api http返回对象结构
{
	status：'http通信状态(有时候业务直接反映出业务的处理结果；4XX是客户端问题；5XX是服务端问题)'
	payload: {
		msgCode: '业务处理结果代码',
		msgText: '业务处理结果描述',
		data: '业务处理结果'
	} || 'error info'
}
*/
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
			.then((response: any) => {
				// 通信成功，业务处理是否成功需要进一步判断
				let { payload } = response;
				let { msgCode } = payload;
				if (0 === msgCode) {
					dispatch(fetchMedicineCodeSuccess(payload));
				} else {
					// 业务处理异常
					const error = {
						message: '业务异常'
					};
					dispatch(fetchMedicineCodeFail(error));
				}
			})
			.catch((error) => {
				// 通信失败
				error.message = '服务器异常';
				dispatch(fetchMedicineCodeFail(error));
			});
	};
};
