import * as React from 'react';
import { connect } from 'react-redux';

import { Input } from '../../widgets';
import actions from './actions';

import './index.less';
interface IProps {}
interface IState {}
class AlgorithmUI extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	componentDidMount() {
		actions.requestAlgorithm({});
	}

	render() {
		return <div className="mm">algorithm</div>;
	}
}

export default connect()(AlgorithmUI);
