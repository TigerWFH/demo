import * as actions from './businessActions';

export const requestSecond = () => {
    return (dispatch, getState) => {
        dispatch(actions.fetchSecond({}));
    }
}