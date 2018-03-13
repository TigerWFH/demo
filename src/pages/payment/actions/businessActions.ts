import * as t from './actionTypes';

export const getMedicineCode = () => {
    return {
        type: t.GET_MEDICINE_CODE
    }
}

export const getMedicineCodeSuccess = (payload) => {
    return {
        type: t.GET_MEDICINE_CODE_SUCCESS,
        payload
    }
}

export const getMedicineCodeFail = (payload) => {
    return {
        type: t.GET_MEDICINE_CODE_FAIL,
        payload
    }
}