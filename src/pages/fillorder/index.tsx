import * as React from 'react';
import { connect } from 'react-redux';
import Mobile from './components/Mobile';

import './index.less';

interface IFillOrder {

}
class FillOrder extends React.Component<IFillOrder, never>{
    render() {
        let tip = '温馨提示：订单支付成功后通过手机发送取药码，请凭借取药码于2小时内完成取药，过时将取消订单';
        return <div className={'rootContainerFillOrder'}>
            fillorder
            <Mobile tip={tip} />
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    let { fillorder } = state;
    return fillorder;
}

export default connect(mapStateToProps, null)(FillOrder);