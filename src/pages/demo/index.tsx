// libs
import * as React from 'react';
import { connect } from 'react-redux';

import { Calculator } from './components/Calculator';
import { UploadFile, UploadFile1 } from './components/UploadFile';
import { Container, Clock } from './components/Clock';
import { FilterableProductTable } from './components/FilterableProductTable';
import { KeyDemoContainer } from './components/KeyDemoContainer';
import { CssDemo } from './components/CssDemo';
import { Mask } from '../../widgets';
import { Message } from '../../widgets';
import { Modal } from '../../widgets';
import { Input } from '../../widgets';
import Transform3d from './components/Transform3d';
import SplitJoint from './components/SplitJoint';
import ComplexCube from './components/ComplexCube';

import actions from './actions';
import './index.less';

const demoIsHide = new Map([
	[ 'demo1', false ],
	[ 'demo2', false ],
	[ 'demo3', false ],
	[ 'demo4', false ],
	[ 'demo5', false ],
	[ 'demo6', false ],
	[ 'demo7', false ],
	[ 'demo8', false ]
]);
function mapStateToProps(state, ownProps) {
	let { demo } = state;
	return {
		...demo
	};
}

interface P {
	name: string;
	fetchT: Function;
}
interface S {
	age: number;
}

class Demo extends React.Component<P, S> {
	refs: any;
	_time: any;
	_timer: any;
	constructor(props: P) {
		super(props);
		this._time = 0;
	}
	componentWillMount() {}
	componentDidMount() {
		actions.requestDemo({});
		this._timer = setInterval(() => {
			this._time += 1;
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this._timer);
	}
	componentWillReceiveProps(props: any) {}
	shouldComponentUpdate(props, state) {
		return true;
	}
	componentWillUpdate() {}
	componentDidUpdate() {}
	render() {
		let _content = <input type="text" ref="input" />;
		return (
			<div className={'demo'}>
				<fieldset className="fieldset-first" style={{ display: demoIsHide.get('demo1') && 'none' }}>
					<legend className="legend-first">测试input文件上传和FileReader对象</legend>
					<div style={{ border: '1px solid green', padding: '10px 10px 10px 10px', marginBottom: '5px' }}>
						<p>二进制检测文件类别:readAsArrayBuffer</p>
						<UploadFile isBinary={true} />
					</div>
					<div style={{ border: '1px solid red', padding: '10px 10px 10px 10px', marginBottom: '5px' }}>
						<p>后缀检测文件类别:readAsBinaryString</p>
						<UploadFile isBinary={false} />
					</div>
					<div style={{ border: '1px solid blue', padding: '10px 10px 10px 10px', marginBottom: '5px' }}>
						<p>readAsText</p>
						<UploadFile1 isText={true} />
					</div>
					<div style={{ border: '1px solid #dd33e8', padding: '10px 10px 10px 10px', marginBottom: '5px' }}>
						<p>readAsDataURL</p>
						<UploadFile1 isText={false} />
					</div>
				</fieldset>
				<fieldset className="fieldset-second" style={{ display: demoIsHide.get('demo2') && 'none' }}>
					<legend className="legend-second">Lifting State Up Demo</legend>
					<Calculator />
				</fieldset>
				<fieldset className="fieldset-first" style={{ display: demoIsHide.get('demo3') && 'none' }}>
					<legend className="legend-first">Thinking in React Demo</legend>
					<FilterableProductTable />
				</fieldset>
				<fieldset className="fieldset-second" style={{ display: demoIsHide.get('demo4') && 'none' }}>
					<legend className="legend-second">测试生命周期</legend>
					<div>
						<button onClick={this._onT3}>forceUpdate</button>
						<button onClick={this._onT2}>setState</button>
						<button onClick={this._onT1}>connect</button>
					</div>
				</fieldset>
				<fieldset className="fieldset-first" style={{ display: demoIsHide.get('demo5') && 'none' }}>
					<legend className="legend-first">其它测试</legend>
					<span>{this.props.name}</span>
					<button onClick={this._onMask}>Mask</button>
					<button onClick={this._onModal}>Modal</button>
					<input type="text" defaultValue="monkey" />
					<input type="text" value="monkey" onChange={() => {}} />
					{/*<Message></Message>*/}
					<Modal onOk={this._onOk}>{_content}</Modal>
				</fieldset>
				<fieldset className="fieldset-second" style={{ display: demoIsHide.get('demo6') && 'none' }}>
					<legend className="legend-second">测试React UI刷新：setState, props, forceUpdate</legend>
					<div>
						<span>调用Container的setState函数修改Container的state,并传递给Clock的props，刷新Clock UI</span>
						<Container />
					</div>
					<div>
						<span>使用Demo成员属性间接修改Clock组件的props，无法刷新Clock UI</span>
						<Clock time={this._time} />
					</div>
				</fieldset>
				<fieldset className="fieldset-first" style={{ display: demoIsHide.get('demo7') && 'none' }}>
					<legend className="legend-first">验证key对组件销毁重建</legend>
					<KeyDemoContainer />
				</fieldset>
				<fieldset
					className="fieldset-second fieldset-left"
					style={{ display: demoIsHide.get('demo8') && 'none' }}
				>
					<legend className="legend-second">文本长度控制</legend>
					<CssDemo />
				</fieldset>
				<Transform3d />
				<SplitJoint />
				<ComplexCube />
			</div>
		);
	}
	_onMask = () => {
		Mask.mountMask();
		let timer = setTimeout(() => {
			Mask.unmountMask();
		}, 5000);
	};
	_onModal = () => {
		Modal.mountModal();
	};
	_onOk = () => {
		let value = this.refs.input.value;
		console.log('value--->', value);
	};
	_onT1 = () => {};
	_onT2 = () => {
		this.setState({
			age: 15
		});
	};
	_onT3 = () => {
		this.forceUpdate();
	};
}

export default connect(mapStateToProps, null)(Demo);
