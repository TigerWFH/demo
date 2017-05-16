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





export class Demo extends React.Component<P, S>{
	refs: any;
	constructor(props: P) {
		super(props);
	}

	render() {
		let _content = <input type="text" ref="input" />
		return <div className="app" style={{ border: "1px solid red" }}>
			<button onClick={this._onMask}>Mask</button>
			<button onClick={this._onModal}>Modal</button>
			{/*<Input />*/}
			<Calculator></Calculator>
			<input type="text" defaultValue="monkey" />
			<input type="text" value="monkey" />
			<Message></Message>
			<Modal onOk={this._onOk}>
				{_content}
			</Modal>
		</div>
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