import { bindActionCreators } from 'redux';
import * as business from './businessActions';
import { store } from '../../../store';

export default bindActionCreators(
	{
		...business
	},
	store.dispatch
);
