// libs
import { connect } from 'react-redux';
// actions
import * as Actions from '../actions/index';
// compoenents
import { Second } from '../components/index';

function mapStateToProps(state, ownProps) {
	let { common, second } = state;
	return { ...common, ...second };
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		testAction: () => {
			dispatch(Actions.testAction());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Second);
