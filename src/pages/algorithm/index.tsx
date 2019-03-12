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
				<Demo code={code} demo={demo} />
			</div>
			<div className='container'>
				<img src={require('./images/bg.jpg')} />
				<div className='label'>
				唧唧复唧唧，木兰当户织。不闻机杼声，唯闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。
				昨夜见军帖，可汗大点兵。军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄。愿为市鞍马，从此替爷征。
				锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
				日照香炉生紫烟，遥看瀑布挂前川。不知庐山真面目，自缘身在此山中。
				锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
				日照香炉生紫烟，遥看瀑布挂前川。不知庐山真面目，自缘身在此山中。
				两只黄鹂鸣翠柳，一行白鹭上青天。两岸猿声抵不住，轻舟已过万重山。
				唧唧复唧唧，木兰当户织。不闻机杼声，唯闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。
				昨夜见军帖，可汗大点兵。军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄。愿为市鞍马，从此替爷征。
				锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
				日照香炉生紫烟，遥看瀑布挂前川。不知庐山真面目，自缘身在此山中。
				锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
				日照香炉生紫烟，遥看瀑布挂前川。不知庐山真面目，自缘身在此山中。
				两只黄鹂鸣翠柳，一行白鹭上青天。两岸猿声抵不住，轻舟已过万重山。
				唧唧复唧唧，木兰当户织。不闻机杼声，唯闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。
				昨夜见军帖，可汗大点兵。军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄。愿为市鞍马，从此替爷征。
				锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
				日照香炉生紫烟，遥看瀑布挂前川。不知庐山真面目，自缘身在此山中。
				锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
				日照香炉生紫烟，遥看瀑布挂前川。不知庐山真面目，自缘身在此山中。
				两只黄鹂鸣翠柳，一行白鹭上青天。两岸猿声抵不住，轻舟已过万重山。
				</div>
			</div>
		</div>;
	}
}

function mapStateToProps(state, ownProps) {
	const { algorithm } = state;

	return algorithm;
}

export default connect(mapStateToProps)(AlgorithmUI);
