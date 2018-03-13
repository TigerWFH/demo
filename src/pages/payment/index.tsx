// libs
import * as React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import { getMedicineCode } from './actions/businessActions';
// css
import './index.less';

interface IPaymentProp {
    status: string;
    code: number;
    medicineCode: string;
    successTip: string;
    failTip: string;
}
interface IPaymentState {

}

class Payment extends React.Component<IPaymentProp, IPaymentState>{
    constructor(props: IPaymentProp) {
        super(props);
    }

    componentWillMount() {
        actions.requestMedicineCode({});
    }

    renderTitleAndTip(title, logo, tip) {
        let elem = <div className={'titleAndTipContainer'}>
            <span className={'titleContainer'}>
                <span className={'title'}>
                    {title}
                </span>
                <img className={'logo'}
                    src={logo} />
            </span>
            <div className={'tip'}>
                {tip}
            </div>
        </div>

        return elem;
    }

    renderCodeOrFlush = (code) => {
        let elem = null;
        if (code === 200) {
            elem = "8888";
        } else if (code === 250) {
            elem = "flush";
        }

        return elem;
    }

    renderButtons(status) {
        let elem = <div className={'buttonsContainer'}>
            {
                status === 'SUCCESS' ?
                    <button className={'normal'}>
                        还想问问
                    </button> :
                    null
            }
            <button className={status === 'SUCCESS' ?
                'active' : 'normal'}>
                结束问诊
            </button>
            {
                status === 'FAIL' ?
                    <button className={'active'}>
                        重新支付
                    </button> :
                    null
            }
        </div>

        return elem;
    }


    renderData = (status) => {
        let { code } = this.props;
        let title = status === 'SUCCESS' ? '支付成功' : '未支付';
        let logo = status === 'SUCCESS' ?
            require('../../common/res/images/gmcg@2x.png') :
            require('../../common/res/images/sb@2x.png');
        let successTip = '温馨提示:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        let elem = <div className={"rootContainer"}>
            {this.renderTitleAndTip(title, logo, successTip)}
            {
                status === 'SUCCESS' ? this.renderCodeOrFlush(code) : null
            }
            {
                this.renderButtons(status)
            }
        </div>;

        return elem;
    }

    render() {
        let { status = 'INITIAL' } = this.props;
        return status === 'INITIAL' ? null : this.renderData(status)
    }
}

function mapStateToProps(state, ownProps) {
    let { payment = {} } = state;
    let { medicineCode = {} } = payment;

    return { ...medicineCode };
}

export default connect(mapStateToProps, null)(Payment);