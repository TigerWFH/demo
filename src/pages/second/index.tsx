import * as React from 'react';
import { connect } from 'react-redux';
import actions from './actions/index';
import { ButtonDemo } from './components/Text';
import './index.less';

interface IProps {
}
interface IState {

}
class DemoUI extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
	}
	componentDidMount(){
		actions.requestSecond();
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

export default connect(mapStateToProps, null)(DemoUI);
