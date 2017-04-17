// libs
import { connect } from 'react-redux';
// components
import { First } from '../components/index';
// actions
import * as Actions from '../actions';

function mapStateToProps(state, ownProps) {
	return { ...state };
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