import { bindActionCreators } from 'redux';
import * as business from './businessActions';
import * as apis from './api';
import { store } from '../../../store';

export default bindActionCreators({
    ...business,
    ...apis
}, store.dispatch);