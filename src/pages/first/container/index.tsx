// libs
import { connect } from 'react-redux';
// components
import { First } from '../components/index';
// actions
import * as Actions from '../actions';

function mapStateToProps(state, ownProps) {
	let { common, first } = state;
	return { ...common, ...first }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchAccountList: () => {
			dispatch(Actions.fetchAccountList());
		},
		fetchAccount: () => {
			dispatch(Actions.fetchAccount());
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(First);