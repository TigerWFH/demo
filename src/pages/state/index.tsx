import * as React from 'react';
import { connect } from 'react-redux';

import TopLabel from './components/TopLabel';
import './index.less';

interface IStateProps {}
interface IStateState {}

class State extends React.PureComponent<IStateProps, IStateState> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="state-root">
				<TopLabel />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
export default connect(mapStateToProps, null, null)(State);
