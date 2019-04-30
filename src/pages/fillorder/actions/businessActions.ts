import * as t from './actionTypes';
import { goodsInfo } from '../../apis';

function fetchGoodsInfo() {
	return {
		type: t.FETCH_GOODS_INFO
	};
}

function fetchGoodsInfoSuccess(payload) {
	return {
		type: t.FETCH_GOODS_INFO_SUCCESS,
		payload
	};
}

function fetchGoodsInfoFail(payload) {
	return {
		type: t.FETCH_GOODS_INFO_FAIL,
		payload
	};
}

export const requestGoodsInfo = (params) => {
	return (dispatch, getState) => {
		console.log('dispatch===>', dispatch)
		dispatch(fetchGoodsInfo());
		goodsInfo(params)
			.then((data) => {
				dispatch(fetchGoodsInfoSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchGoodsInfoFail(error));
			});
	};
};
