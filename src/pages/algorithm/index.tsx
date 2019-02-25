import * as React from 'react';
import { connect } from 'react-redux';

import { Input } from '../../widgets';
import {Demo} from './components/Demo';
import actions from './actions';

import './index.less';

let demo = {
	name: 'initial'
};
let i = 1;

interface IProps {
	algorithm: any
}
interface IState {}
const word = '\\u73b0\\u91d1';
class AlgorithmUI extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	componentDidMount() {
		actions.requestAlgorithm({});
		actions.requestGetingRecipe({});
		let i = 0;
		console.log("props===>", this.props);
	}

	render() {
		const {algorithm = {}} = this.props;
		console.log(`第${i++}次`, algorithm);
		let code = '\u73b0\u91d1';
		return <div className="mm">
		{
			`被转义了:${word}`
		}
		<div>
			{
				`正常使用unicode码：${code}`
			}
			<Demo code={code} demo={demo}/>
		</div>
		</div>;
	}
}

function mapStateToProps(state, ownProps) {
	const { algorithm } = state;

	return algorithm;
}

export default connect(mapStateToProps)(AlgorithmUI);
