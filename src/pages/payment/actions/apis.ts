import * as actions from './businessActions';
import { post, get } from '../../../common/utils/http';

// 应该为reducer提供统一的数据格式，需要在api中对业务的处理结果，网络异常等数据格式进行归一化
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
            let { payload, status } = data;
            let { msgCode, msgText } = payload;
            if (msgCode === 0 || msgCode === 250) {
                return dispatch(actions.getMedicineCodeSuccess(payload));
            }
            else {
                return dispatch(actions.getMedicineCodeFail(data));
            }
        }, (error) => {
            console.log("error===>", error);
            return dispatch(actions.getMedicineCodeFail(error));
        });
    }
}