import * as React from 'react';
import { connect } from 'react-redux';
import { Audit } from './components/Audit';

import * as m from './modals/uiModal';
import actions from './actions';
import './index.less';

interface IFirstProps extends m.IFirstContainer {
}

class First extends React.Component<IFirstProps, never>{
	constructor(props: IFirstProps) {
		super(props);
	}

	componentDidMount() {
		actions.requestAccount();
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

export default connect(mapStateToProps, null)(First);