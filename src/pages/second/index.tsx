import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions/index';
import { ButtonDemo } from './components/Text';
import './index.less';

interface IProps {
	testAction?: any;
}
interface IState {

}
class DemoUI extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
	}
	render() {
		return (
			<div className={'second'}>
				<fieldset>
					<legend>button对比</legend>
					<ButtonDemo></ButtonDemo>
				</fieldset>
			</div>
		)
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DemoUI);
