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

    onRefreshMedicine = () => {

    }

    onToDoctor = () => {
        actions.getMedicineCode();
    }
    onEndDiagnose = () => {

    }
    onRePurchase = () => {

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

    renderCodeOrFlush = (code, medicineCode) => {
        let elem = null;
        if (code === 200) {
            elem = <div>

            </div>;
        } else if (code === 250) {
            elem = <div onClick={this.onRefreshMedicine}>
                轻触此处刷新取药码
            </div>;
        }

        return elem;
    }

    renderButtons(status) {
        let elem = <div className={'buttonsContainer'}>
            {
                status === 'SUCCESS' ?
                    <button className={'normal'}
                        onClick={this.onToDoctor}>
                        还想问问
                    </button> :
                    null
            }
            <button className={status === 'SUCCESS' ?
                'active' : 'normal'}
                onClick={this.onEndDiagnose}>
                结束问诊
            </button>
            {
                status === 'FAIL' ?
                    <button className={'active'}
                        onClick={this.onRePurchase}>
                        重新支付
                    </button> :
                    null
            }
        </div>

        return elem;
    }

    renderData = (status, code, medicineCode) => {
        if (!status) {
            return null;
        }
        let title = '';
        let logo = '';
        let tip = '';
        if (status === 'SUCCESS') {
            title = '支付成功';
            logo = require('../../common/res/images/gmcg@2x.png');
            tip = '温馨提示:SuccessXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        }
        else if (status === 'FAIL') {
            title = '未支付';
            logo = require('../../common/res/images/sb@2x.png');
            tip = '温馨提示:FailXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        }
        let elem = <div className={"rootContainer"}>
            {this.renderTitleAndTip(title, logo, tip)}
            {
                status === 'SUCCESS' ? this.renderCodeOrFlush(code, medicineCode) : null
            }
            {
                this.renderButtons(status)
            }
        </div>;

        return elem;
    }

    render() {
        let { status = 'INITIAL', code, medicineCode } = this.props;
        return status === 'INITIAL' ? null : this.renderData(status, code, medicineCode)
    }
}

function mapStateToProps(state, ownProps) {
    let { payment = {} } = state;
    let { medicineCode = {} } = payment;

    return { ...medicineCode };
}

export default connect(mapStateToProps, null)(Payment);