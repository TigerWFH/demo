import * as React from 'react';
import { connect } from 'react-redux';
import { Audit } from './components/Audit';

import * as m from './modals/uiModal';
import * as Actions from './actions';
import './index.less';

interface IFirstProps extends m.IFirstContainer {
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

// 直接再bindactioncreators中注入了dispatch
// function mapDispatchToProps(dispatch) {
// 	return {
// 		fetchAccountList: () => {
// 			return dispatch(Actions.fetchAccountList({}));
// 		},
// 		fetchAccount: () => {
// 			return dispatch(Actions.fetchAccount({}))
// 		}
// 	}
// }

export default connect(mapStateToProps, null)(First);