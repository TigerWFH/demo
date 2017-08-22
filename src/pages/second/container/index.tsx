// libs
import * as React from 'react';
import { connect } from 'react-redux';
// actions
import * as Actions from '../actions/index';
// compoenents

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

interface IProps {
	testAction?: any;
}
interface IState {

}
class Second extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
	}
	_onClick = () => {
		let { testAction } = this.props;
		testAction();
	}
	render() {
		return (
			<div className="app">
				<button onClick={this._onClick}>button</button>
				<video src="../../../common/res/videos/bk.mp4"
					width="100%"
					autoPlay
					loop
					muted>
				</video>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Second);
