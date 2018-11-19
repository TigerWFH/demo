import * as React from 'react';
import { connect } from 'react-redux';

import { Input } from '../../widgets';
import actions from './actions';

import './index.less';
interface IProps {}
interface IState {}
const word = '\\u73b0\\u91d1';
class AlgorithmUI extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	componentDidMount() {
		actions.requestAlgorithm({});
	}

	render() {
		return <div className="mm">
		{
			`被转义了:${word}`
		}
		<div>
			{
				'正常使用unicode码：\u73b0\u91d1'
			}
		</div>
		</div>;
	}
}

export default connect()(AlgorithmUI);
