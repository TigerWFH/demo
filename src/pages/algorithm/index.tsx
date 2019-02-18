import * as React from 'react';
import { connect } from 'react-redux';

import { Input } from '../../widgets';
import {Demo} from './components/Demo';
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
		let code = '\u73b0\u91d1';
		return <div className="mm">
		{
			`被转义了:${word}`
		}
		<div>
			{
				`正常使用unicode码：${code}`
			}
			<Demo code={code} />
		</div>
		</div>;
	}
}

export default connect()(AlgorithmUI);
