import * as React from 'react';
import { connect } from 'react-redux';

// import { Input } from 'Widgets';

interface IProps { }
interface IState { }
class AlgorithmUI extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect()(AlgorithmUI);