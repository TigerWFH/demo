import * as React from 'react';
import PropTypes from 'prop-types';
import WhiteSpace from './components/WhiteSpace';
import Other from './components/Other';
import './index.less';

export default class Css extends React.Component<{}, {name: any}> {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("=================>props", props);
        console.log("=================>state", state);
    }

    onClick = () => {
        this.setState({
            name: 'monkey'
        })
    }

    render() {
        return (
            <div>
                <WhiteSpace />
                <Other />
                <button onClick={this.onClick}>button</button>
            </div>
        )
    }
}