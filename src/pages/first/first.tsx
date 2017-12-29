// libs
import * as React from 'react';
import { connect } from 'react-redux';
import './first.less';
import * as Actions from './actions/firstActions';

import { Audit } from './components/Audit';
import * as types from './constants/firstTypes';

interface IFirstProps extends types.IFirstContainer {
	// actions
	fetchAccountList: () => void;
	fetchAccount: () => void;
}

interface IFirstState { }

class First extends React.Component<IFirstProps, IFirstState>{

	constructor(props: IFirstProps) {
		super(props);
	}

	componentDidMount() {
		let { fetchAccount } = this.props;
		if (typeof fetchAccount === "function") {
			fetchAccount();
		}
	}

	render() {
		let { auditData, infoData, tableData } = this.props;
		return (
			<div className="first wfh">
				<Audit auditData={auditData}
					infoData={infoData}>
					{"audit"}
				</Audit>
				first page
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let { first } = state;
	return { ...first }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchAccountList: () => {
			return dispatch(Actions.fetchAccountList());
		},
		fetchAccount: () => {
			return dispatch(Actions.fetchAccount())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(First);