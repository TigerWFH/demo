import { get, post } from '../../../common/utils/http';
import * as actions from './businessActions';

export function requestGoodsInfo(params) {
    return (dispatch, getState) => {
        dispatch(actions.getGoodsInfo());
        return get('/v1/goods', '').then((data) => {
            dispatch(actions.getGoodsInfoSuccess(data));
        }, (error) => {
            dispatch(actions.getGoodsInfoFail(error))
        });
    }
}