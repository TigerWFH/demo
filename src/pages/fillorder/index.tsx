import * as React from 'react';
import { connect } from 'react-redux';
import QualityAssurance from './components/QualityAssurance';
import Mobile from './components/Mobile';
import GoodsList from './components/GoodsList';
import Footer from './components/Footer';

import './index.less';

interface IFillOrderProps {

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
    onPhone = (phone: string) => {
        this.setState({
            phone
        });
    }
    render() {
        let tip = '温馨提示：订单支付成功后通过手机发送取药码，请凭借取药码于2小时内完成取药，过时将取消订单,订单支付成功后通过手机发送取药码，请凭借取药码于2小时内完成取药，过时将取消订单';
        let phone = '123131231220000';
        let item = {
            title: 'monkey的小屋',
            img: require('../../common/res/images/fhw3937.jpg'),
            price: '123',
            usage: '用法用量用法用量用法用量用法用量用法用量',
            amount: '12',
            skuId: '',
            spuId: ''
        };
        return <div className={'rootContainerFillOrder'}>
            <QualityAssurance />
            <Mobile disabled={false}
                mobile={phone}
                tip={tip}
                onChange={this.onPhone} />
            <GoodsList goodsList={[item, item]}/>
            <Footer amount={3}
                totalFee={200} />
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    let { fillorder } = state;
    return fillorder;
}

export default connect(mapStateToProps, null)(FillOrder);