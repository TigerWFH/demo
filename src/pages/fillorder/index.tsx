import * as React from 'react';
import { connect } from 'react-redux';

interface IFillOrder {

}
class FillOrder extends React.Component<IFillOrder, never>{
    render() {
        return <div>
            fillorder
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    let { fillorder } = state;
    return fillorder;
}

export default connect(mapStateToProps, null)(FillOrder);