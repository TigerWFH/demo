import * as React from 'react';
import PropTypes from 'prop-types';
import WhiteSpace from './components/WhiteSpace';
import './index.less';

export default class Css extends React.Component {
    static getDerivedStateFromProps(props, state) {
        console.log("=================>props", props);
        console.log("=================>state", state);
    }
    render() {
        return (
            <div>
                <WhiteSpace />
            </div>
        )
    }
}