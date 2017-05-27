// libs
import { connect } from 'react-redux';
// components
import { Demo } from '../components/demo';
import { fetchT } from '../actions/index';

function mapStateToProps(state, ownProps) {
	let { demo } = state;
	return {
		...demo
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		fetchT: () => {
			dispatch(fetchT());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Demo);