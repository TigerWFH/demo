// libs
import * as React from 'react';
import { connect } from 'react-redux';
// components
import { Mask } from '../../../widgets';
// css
import './index.less';
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

interface IProps {
	fetchAccountList?: Function;
	fetchAccount?: Function;
}
interface IState { }
class First extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
	}
	_onClickList = () => {
		let { fetchAccountList } = this.props;
		fetchAccountList();
	}
	_onClick = () => {
		Mask.mountMask();
	}
	render() {
		return (
			<div className="first wfh">
				<button onClick={this._onClickList}>accountList</button>
				<button onClick={this._onClick}>acount</button>
				first page
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(First);