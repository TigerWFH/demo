import { bindActionCreators } from 'redux';
import * as business from './businessActions';
import * as apis from './api';

export default bindActionCreators({
    ...business,
    ...apis
}, null);