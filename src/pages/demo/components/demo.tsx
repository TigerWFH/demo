// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// component
import { Mask } from '../../../widgets/basic/mask/mask';
import { Message } from '../../../widgets/basic/message/message';
import { Modal } from '../../../widgets/modal/modal';
import { Input } from '../../../widgets/basic/input/input';

interface P { }
interface S { }

/*
	Lifting State Up Demo
*/
/*
	stateless component
	target: Test lifting state up
*/
function BoilingVerdict(props) {
	if (+props.celsius >= 100) {
		return <p>The water would boil.</p>
	}
	else {
		return <p>The water would not boil</p>
	}
}
/*
	convert from celsius to fahrenheit and back
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
	constructor(props: any) {
		super(props);
		this.state = {
			temperature: ''
		};
	}

	handleChange = (e) => {
		// this.setState({
		// 	temperature: e.target.value
		// });
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

/*
	Thinking in React Demo
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
				<span style={{ display: "inline-block", width: "80px", textAlign: "left" }}>{value.name}</span>
				<span style={{ display: "inline-block", width: "80px", textAlign: "right" }}>{value.price}</span>
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
		// if (!event.target.value) {
		// 	filterData = mockData;
		// };
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




export class Demo extends React.Component<P, S>{
	refs: any;
	constructor(props: P) {
		super(props);
	}

	render() {
		let _content = <input type="text" ref="input" />
		return (
			<div className="app" style={{ margin: "50px auto" }}>
				<fieldset style={{ margin: "50px auto" }}>
					<legend>
						Lifting State Up Demo
					</legend>
					<Calculator></Calculator>
				</fieldset>
				<fieldset>
					<legend>
						Thinking in React Demo
					</legend>
					<FilterableProductTable />
				</fieldset>
				<fieldset style={{ margin: "50px auto" }}>
					<legend>
						其它测试
					</legend>
					<button onClick={this._onMask}>Mask</button>
					<button onClick={this._onModal}>Modal</button>
					<input type="text" defaultValue="monkey" />
					<input type="text" value="monkey" />
					{/*<Message></Message>*/}
					<Modal onOk={this._onOk}>
						{_content}
					</Modal>
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
}