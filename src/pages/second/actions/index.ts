// http
import { get, post } from '../../../common/utils/http';
import { bindActionCreators } from 'redux';
import { store } from '../../../store';
import * as business from './businessActions';
import * as apis from './apis';

export default bindActionCreators({
	...business,
	...apis
}, store.dispatch);