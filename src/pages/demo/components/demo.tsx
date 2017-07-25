// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// component
import { Mask } from '../../../widgets/basic/mask/mask';
import { Message } from '../../../widgets/basic/message/message';
import { Modal } from '../../../widgets/modal/modal';
import { Input } from '../../../widgets/basic/input/input';

interface P {
	name: string;
	fetchT: Function;
}
interface S {
	age: number;
}

/**
 * Lifting State Up Demo
 * @param props 
 */
function BoilingVerdict(props) {
	if (+props.celsius >= 100) {
		return <p>The water would boil.</p>
	}
	else {
		return <p>The water would not boil</p>
	}
}

/**
 * convert from celsius to fahrenheit and back
 * @param fahrenheit 
 */
function toCelsius(fahrenheit) {
	return (+fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
	return (+celsius * 9 / 5) + 32;
}
const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

class TemperatureInput extends React.Component<any, any> {
	static propsType = {
		scale: React.PropTypes.number.isRequired,
		temperature: React.PropTypes.string,
		test: React.PropTypes.string.isRequired
	};
	constructor(props: any) {
		super(props);
		this.state = {
			temperature: ''
		};
	}

	handleChange = (e) => {
		this.props.onTemperatureChange(e.target.value);
	}
	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input type="text"
					value={temperature}
					onChange={this.handleChange} />
			</fieldset>
		)
	}
}

class Calculator extends React.Component<any, any>{
	constructor(props: any) {
		super(props);
		this.state = {
			temperature1: '',
			temperature2: ''
		};
	}

	_onChange1 = (value) => {
		this.setState({
			temperature1: value,
			temperature2: toFahrenheit(value)
		});
	}
	_onChange2 = (value) => {
		this.setState({
			temperature1: toCelsius(value),
			temperature2: value
		})
	}
	render() {
		return (
			<fieldset>
				<legend>
					Enter temperature in Celsius:
				</legend>
				<TemperatureInput scale="c"
					temperature={this.state.temperature1}
					onTemperatureChange={this._onChange1} />
				<TemperatureInput scale="f"
					temperature={this.state.temperature2}
					onTemperatureChange={this._onChange2} />
				<BoilingVerdict celsius={parseFloat(this.state.temperature1)} />
			</fieldset>
		)
	}
}

/**
 * Thinking in React Demo
 */
let mockData = [
	{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
	{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
	{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
	{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
	{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
function ProductRow(props: any = {}) {
	let { productList } = props;
	let elemList = productList.map((value: any, index: number) => {
		return (
			<div key={'pItem-' + index}>
				<span style={{ display: "inline-block", width: "80px", textAlign: "left" }}>
					{value.name}
				</span>
				<span style={{ display: "inline-block", width: "80px", textAlign: "right" }}>
					{value.price}
				</span>
			</div>
		)
	});
	return (
		<div style={{ marginBottom: "5px", width: "160px" }}>
			{elemList}
		</div>
	)
}
function ProductCategoryRow(props: any = {}) {
	let { category } = props;
	return (
		<div style={{ textAlign: "center", width: "160px" }}>
			{category}
		</div>
	)
}

function ProductTable(props: any = {}) {
	let { productListData } = props;
	// 产品类别
	let categories = [];
	let tmp: any = '';
	productListData.forEach((value: any) => {
		if (value.category !== tmp) {
			tmp = value.category;
			categories.push(tmp);
		}
	});
	// 根据类别，获取产品列表
	categories.forEach((value: any, index: number) => {
		categories['pl' + index] = productListData.filter((item: any) => {
			return value === item.category;
		});
	});

	let elemList = categories.map((value: any, index: number) => {
		return (
			<div key={"pCategory-" + index}>
				<ProductCategoryRow category={value} />
				<ProductRow productList={categories['pl' + index]} />
			</div>
		);
	});
	return (
		<div>
			{elemList}
		</div>
	)
}

function SearchBar(props: any = {}) {
	let { value, checked, onChange, onChecked } = props;
	function _onChange(event) {
		if (typeof onChange === 'function') {
			onChange(event);
		}
	}
	function _onChecked(event) {
		if (typeof onChecked === 'function') {
			onChecked(event);
		}
	}
	return (
		<div>
			<input type="text"
				placeholder="Search..."
				style={{ display: "block" }}
				value={value}
				onChange={_onChange} />
			<div style={{ lineHeight: "30px" }}>
				<input type="checkbox"
					value="Only show products in stock"
					checked={checked}
					onChange={_onChecked} />
				<span>Only show products in stock</span>
			</div>
		</div>
	)
}

class FilterableProductTable extends React.Component<any, any>{
	constructor(props: any) {
		super(props);
		this.state = {
			value: '',
			checked: false,
			mockData: mockData
		};
	}
	render() {
		return (
			<div>
				<SearchBar value={this.state.value}
					checked={this.state.checked}
					onChange={this._onChange}
					onChecked={this._onChecked} />
				<ProductTable productListData={this.state.mockData} />
			</div>
		)
	}
	_onChange = (event) => {
		let filterData = this._filterData(event.target.value, this.state.checked);
		this.setState({
			value: event.target.value,
			mockData: filterData
		});
	}
	_onChecked = (event) => {
		this.setState({
			checked: event.target.checked,
			mockData: this._filterData(this.state.value, event.target.checked)
		});
	}
	_filterData(value: string, isStocked = false) {
		let filterData = mockData;
		if (!value && !isStocked) {
			return filterData;
		}
		if (!value && isStocked) {
			filterData = mockData.filter((item: any) => {
				return item.stocked;
			});
			return filterData;
		}
		if (isStocked) {
			filterData = mockData.filter((item: any) => {
				if (item.name.indexOf(value) === 0 && item.stocked) {
					return true;
				}
			});
			return filterData;
		}

		filterData = mockData.filter((item: any) => {
			if (item.name.indexOf(value) === 0) {
				return true;
			}
		});

		return filterData;
	}
}

/**
 * 测试FileReader对象的功能，并过滤上传文件
 */
const fileExtensionList = ["jpg", "jpeg", "png"];
class UploadFile extends React.Component<any, any>{
	static defautProps = {
		isBinary: false  //true，采用二进制过滤；false，采用文件后缀过滤
	};
	constructor(props: any) {
		super(props);
	}
	render() {
		let { isBinary } = this.props;
		return (
			<input type="file"
				onChange={isBinary ? this._onChangeBinary : this._onChangeExtension} />
		)
	}
	_onChangeBinary = (event) => {
		console.log('change--->', event.target.files[0]);
		let fileReader = new FileReader();
		fileReader.onloadend = function (event) {
			let readData = new Uint8Array(fileReader.result);//按照8位无符号整型解析数据
			let detStr = readData.slice(0, 2).join('');//截取文件标识
			if (detStr === "13780" || detStr === "255216") {
				return alert('right image');
			}
			else {
				alert('not jpg or png');
			}
		}
		fileReader.readAsArrayBuffer(event.target.files[0]);//读入文件为二进制
	}
	_onChangeExtension = (event) => {
		let fileName = event.target.files[0].name;
		let fileExtension = fileName.split('.');
		let result = fileExtensionList.some(value => {
			return value === fileExtension[fileExtension.length - 1]
		});
		if (result) {
			alert("right image");
		}
		else {
			alert("not jpg or png");
		}
	}
}
/**
 * 测试React UI刷新：setState, props, forceUpdate
 */
interface Clock {
	time: any;
}
class Container extends React.Component<any, any>{
	timer: any;
	constructor(props: any) {
		super(props);
		this.state = {
			time: "0"
		};
	}

	componentDidMount() {
		let _time = 1;
		this.timer = setInterval(() => {
			this.setState({
				time: _time++
			})
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return (
			<div>
				<Clock time={this.state.time} />
			</div>
		)
	}
}

function Clock(props: any) {
	return (
		<div>
			{props.time}
		</div>
	)
}

export class Demo extends React.Component<P, S>{
	refs: any;
	_time: any;
	_timer: any;
	constructor(props: P) {
		super(props);
		this._time = 0;
		console.log('Demo constructor');
	}
	componentWillMount() {
		console.log('Demo componentWillMount');
	}
	componentDidMount() {
		console.log('Demo componentDidMount');
		this._timer = setInterval(() => {
			this._time += 1;
			// 从控制台可以看到this._time属性值是变化的
			// console.log("clcok props--->", this._time);
			// 调用forceUpdate函数，可以强制刷新页面
			// this.forceUpdate();
		}, 1000);
	}
	componentWillUnmount() {
		console.log('Demo componentUnMount');
		clearInterval(this._timer);
	}
	componentWillReceiveProps(props: any) {
		console.log('Demo receiveProps--->', props);
	}
	shouldComponentUpdate(props, state) {
		console.log('Demo shouldComponentUpdate');
		return true;
	}
	componentWillUpdate() {
		console.log('Demo componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('Demo componentDidUpdate');
	}
	render() {
		console.log('Demo render');
		let _content = <input type="text" ref="input" />
		return (
			<div className="app" style={{ margin: "50px auto" }}>
				<fieldset style={{ margin: "50px auto", height: "300px" }}>
					<legend>
						测试input文件上传和FileReader对象
					</legend>
					<div style={{ border: "1px solid green", padding: "10px 10px 10px 10px" }}>
						<p>二进制检测文件类别</p>
						<UploadFile isBinary={true} />
					</div>
					<div style={{ border: "1px solid red", padding: "10px 10px 10px 10px" }}>
						<p>后缀检测文件类别</p>
						<UploadFile isBinary={false} />
					</div>
				</fieldset>
				<fieldset>
					<legend>
						测试生命周期
					</legend>
					<div>
						<button onClick={this._onT3}>forceUpdate</button>
						<button onClick={this._onT2}>setState</button>
						<button onClick={this._onT1}>connect</button>
					</div>
				</fieldset>
				<fieldset style={{ margin: "50px auto" }}>
					<legend>
						Lifting State Up Demo
					</legend>
					<Calculator></Calculator>
				</fieldset>
				<fieldset style={{ margin: "50px auto" }}>
					<legend>
						Thinking in React Demo
					</legend>
					<FilterableProductTable />
				</fieldset>
				<fieldset style={{ margin: "50px auto" }}>
					<legend>
						其它测试
					</legend>
					<span>{this.props.name}</span>
					<button onClick={this._onMask}>Mask</button>
					<button onClick={this._onModal}>Modal</button>
					<input type="text" defaultValue="monkey" />
					<input type="text" value="monkey" />
					{/*<Message></Message>*/}
					<Modal onOk={this._onOk}>
						{_content}
					</Modal>
				</fieldset>
				<fieldset style={{ margin: "50px auto" }}>
					<legend>
						测试React UI刷新：setState, props, forceUpdate
					</legend>
					<div>
						<span>调用父容器的setState</span>
						<Container />
					</div>
					<div>
						<span>只修改字组件的props</span>
						<Clock time={this._time} />
					</div>
				</fieldset>
			</div>
		)
	}
	_onMask = () => {
		Mask.mountMask();
		let timer = setTimeout(() => {
			Mask.unmountMask();
		}, 5000);
	}
	_onModal = () => {
		Modal.mountModal();
	}
	_onOk = () => {
		let value = this.refs.input.value;
		console.log('value--->', value);
	}
	_onT1 = () => {
		//connect
		let { fetchT } = this.props;
		fetchT();
	}
	_onT2 = () => {
		// setState
		this.setState({
			age: 15
		});
	}
	_onT3 = () => {
		// fource
		this.forceUpdate();
	}
}