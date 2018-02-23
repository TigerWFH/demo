import * as React from 'react';
import { connect } from 'react-redux';
import { Audit } from './components/Audit';

import * as types from './modals';
import * as Actions from './actions/businessActions';
import './first.less';

interface IFirstProps extends types.IFirstContainer {
	fetchAccountList: () => void;
	fetchAccount: () => void;
}

class First extends React.Component<IFirstProps, never>{

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
			<div className="first">
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
			return dispatch(Actions.fetchAccountList({}));
		},
		fetchAccount: () => {
			return dispatch(Actions.fetchAccount({}))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(First);