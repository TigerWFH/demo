/*此文件存放后台的数据模型和api，与redux中的action解耦*/
import { get, post } from '../../../common/utils/http';

export const getAccout = () => {
    return get("");
}
