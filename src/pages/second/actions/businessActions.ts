import * as t from './actionTypes';


export const fetchSecond = (payload) => {
    return {
        type: t.FETCH_SECOND,
        payload
    }
}

export const fetchSecondSuccess = (payload) => {
    return {
        type: t.FETCH_SECOND_SUCCESS,
        payload
    }
}

export const fetchSecondFail = (payload) => {
    return {
        type: t.FETCH_SECOND_FAIL,
        payload
    }
}