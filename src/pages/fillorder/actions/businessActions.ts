import * as t from './actionTypes';

export function getGoodsInfo() {
    return {
        type: t.GET_GOODS_INFO
    }
}

export function getGoodsInfoSuccess(payload) {
    return {
        type: t.GET_GOODS_INFO_SUCCESS,
        payload
    }
}

export function getGoodsInfoFail(payload) {
    return {
        type: t.GET_GOODS_INFO_FAIL,
        payload
    }
}