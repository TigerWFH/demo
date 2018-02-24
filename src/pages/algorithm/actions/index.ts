import { bindActionCreators } from 'redux';
import * as business from './businessActions';
import * as apis from './apis';
import {store} from '../../../store';

export default bindActionCreators({
    ...business,
    ...apis
}, store.dispatch);
