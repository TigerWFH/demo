/**
 * @title:       Lifting State Up Demo
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:        
 * @modify Date: 2017-8-4
 */


// libs
import * as React from 'react';
import * as PropTypes from 'prop-types';
// constants
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/**
 * @desc  tip
 * @param props {object} 温度
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
 * @desc convert from celsius(摄氏度) to fahrenheit(华氏)
 * @param fahrenheit {string | number} 温度
 */
function toCelsius(fahrenheit) {
    return (+fahrenheit - 32) * 5 / 9;
}
/**
 * @desc convert from fahrenheit to celsius
 * @param celsius {number} 温度
 */
function toFahrenheit(celsius) {
    return (+celsius * 9 / 5) + 32;
}

class TemperatureInput extends React.Component<any, any> {
    static propsType = {
        scale: PropTypes.number.isRequired,
        temperature: PropTypes.string,
        test: PropTypes.string.isRequired
    };
    constructor(props: any) {
        super(props);
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

export { Calculator };