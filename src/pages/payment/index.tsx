// libs
import * as React from 'react';
import { connect } from 'react-redux';
// css
interface IPaymentProp {

}
interface IPaymentState {

}

class Payment extends React.Component<IPaymentProp, IPaymentState>{
    constructor(props: IPaymentProp) {
        super(props);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

}

export default connect(mapStateToProps, null)(Payment);