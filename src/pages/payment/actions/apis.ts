import * as actions from './businessActions';
import { post, get } from '../../../common/utils/http';

export function requestMedicineCode(params) {
    return (dispatch, getState) => {
        let { flag } = params;
        if (flag) {
            delete params.flag;
        }
        else {
            dispatch(actions.getMedicineCode());
        }
        return get('/v1/medicinecode', {}).then((data: any) => {
            let { payload = {} } = data;
            let { msgCode, msgText } = payload;
            if (msgCode === 0 || msgCode === 250) {
                return dispatch(actions.getMedicineCodeSuccess(payload));
            }
            else {
                return dispatch(actions.getMedicineCodeFail(data));
            }
        }, (error) => {
            return dispatch(actions.getMedicineCodeFail(error));
        });
    }
}