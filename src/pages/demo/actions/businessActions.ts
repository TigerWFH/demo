import * as t from './actionTypes';

export const fetchDemo = (payload) => {
    return {
        type: t.FETCH_DEMO,
        payload
    };
}

export const fetchDemoSuccess = (payload) => {
    return {
        type: t.FETCH_DEMO_SUCCESS,
        payload
    };
}

export const fetchDemoFail = (payload) => {
    return {
        type: t.FETCH_DEMO_FAIL,
        payload
    };
}