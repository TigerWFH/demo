import * as React from 'react';
import './index.less';

interface IFooterProps {
    amount: number;
    totalFee: number;
    isShowPyment?: boolean;
}

class Footer extends React.Component<IFooterProps, never>{
    onToPayment = () => {
        // 跳转去支付页面
    }
    render() {
        let { isShowPyment = true } = this.props;
        let amount = this.props.amount || 3;
        let totalFee = this.props.totalFee || 30.00;
        return (
            <div className={'rootContainerFooter'}>
                <span className={'amount'}>
                    {`共${amount}件，合计`}
                </span>
                <span className={'feeContainer'}>
                    <span className={'symbol'}>
                        ￥
                    </span>
                    <span className={'totalFee'}>
                        {
                            totalFee.toFixed(2)
                        }
                    </span>
                </span>
                {
                    isShowPyment ?
                        <button className={'payment'}
                            onClick={this.onToPayment}>
                            去支付
                        </button> :
                        null
                }
            </div>
        )
    }
}

export default Footer;