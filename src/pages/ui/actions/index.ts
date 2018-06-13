// http
import { get, post } from '../../../common/utils/http';
import { bindActionCreators } from 'redux';
import { store } from '../../../store';
import * as business from './businessActions';

export default bindActionCreators({
	...business
}, store.dispatch);