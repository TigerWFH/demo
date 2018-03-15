import * as React from 'react';
import { connect } from 'react-redux';
import QualityAssurance from './components/QualityAssurance';
import Mobile from './components/Mobile';
import GoodsList from './components/GoodsList';
import Footer from './components/Footer';

import actions from './actions';

import './index.less';

interface IFillOrderProps {
    goodsInfo: any;
}

interface IFillOrderState {
    phone: string;
}

class FillOrder extends React.Component<IFillOrderProps, IFillOrderState>{
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };
    }

    componentDidMount() {
        let params = {};
        actions.requestGoodsInfo(params);
    }
    onPhone = (phone: string) => {
        this.setState({
            phone
        });
    }
    render() {
        let { goodsInfo: { goodsList = [] } } = this.props;
        let amount = 0;
        let totalFee = 0;
        goodsList.forEach(elem => {
            elem.img = require('../../common/res/images/fhw3937.jpg');
            amount += elem.amount;
            totalFee += elem.amount * elem.price;//本应该后台计算
        });
        let tip = '温馨提示：订单支付成功后通过手机发送取药码，请凭借取药码于2小时内完成取药，过时将取消订单,订单支付成功后通过手机发送取药码，请凭借取药码于2小时内完成取药，过时将取消订单';

        return <div className={'rootContainerFillOrder'}>
            <QualityAssurance />
            <Mobile tip={tip}
                onChange={this.onPhone} />
            <GoodsList goodsList={goodsList} />
            <Footer amount={amount}
                totalFee={totalFee} />
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    let { fillorder } = state;
    return fillorder;
}

export default connect(mapStateToProps, null)(FillOrder);