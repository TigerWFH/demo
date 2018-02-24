import { bindActionCreators } from 'redux';
import * as apis from './apis';
import * as business from './businessActions';
import { store } from '../../../store';

export default bindActionCreators({
	...apis,
	...business
}, store.dispatch);