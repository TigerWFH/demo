import * as React from 'react';
import { connect } from 'react-redux';

import { Input } from '../../../widgets';

import './index.less';
interface IProps { }
interface IState { }
class AlgorithmUI extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="mm">
                algorithm
            </div>
        )
    }
}

export default connect()(AlgorithmUI);