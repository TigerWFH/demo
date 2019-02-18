// libs
import * as React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
// css
import './index.less';

interface IPaymentProp {
    status: string;
    code: number;
    medicineCode: string;
    successTip: string;
    failTip: string;
}

class Payment extends React.Component<IPaymentProp, never>{
    constructor(props: IPaymentProp) {
        super(props);
    }

    componentWillMount() {
        let params = {};
        actions.requestMedicineCode(params);
    }

    onRefreshMedicine = () => {
        let params = {
            flag: true
        };
        actions.requestMedicineCode(params);
    }

    onToDoctor = () => {
        actions.fetchMedicineCode();
    }
    onEndDiagnose = () => {

    }
    onRePurchase = () => {
        window.location.href = "/index.html#/fillorder";
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

    renderCode = (medicineCode) => {
        let codeElemList = [];
        if (typeof medicineCode === 'undefined' || medicineCode === null || typeof medicineCode !== 'string') {
            return null;
        }
        for (let i = 0; i < medicineCode.length; i++) {
            let codeElem = <span className={'codeElem'}
                key={'codeElem' + i}>
                {medicineCode[i]}
            </span>
            codeElemList.push(codeElem);
        }

        return codeElemList;
    }
    renderCodeOrFlush = (code, medicineCode) => {
        if (typeof medicineCode === 'undefined' || medicineCode === null || typeof code !== 'number') {
            return null;
        }
        let elem = <div className={'codeOrRefreshContainer'}>
            <div className={'title'}>
                取药码
            </div>
            {
                code === 0 ?
                    <div className={'codeElemContainer'}>
                        {this.renderCode(medicineCode)}
                    </div>
                    : null
            }
            {
                code === 250 ? <div className={'refresh'}
                    onClick={this.onRefreshMedicine}>
                    轻触此处刷新取药码
            </div>
                    : null
            }
        </div>;

        return elem;
    }

    renderButtons(status) {
        let elem = <div className={'buttonsContainer'}>
            {
                status === 'REQUEST_SUCCESS' ?
                    <button className={'normal'}
                        onClick={this.onToDoctor}>
                        还想问问
                    </button> :
                    null
            }
            <button className={status === 'REQUEST_SUCCESS' ?
                'active' : 'normal'}
                onClick={this.onEndDiagnose}>
                结束问诊
            </button>
            {
                status === 'REQUEST_FAIL' ?
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
        if (status === 'REQUEST_SUCCESS') {
            title = '支付成功';
            logo = require('../../common/res/images/gmcg@2x.png');
            tip = '温馨提示:SuccessXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        }
        else if (status === 'REQUEST_FAIL') {
            title = '未支付';
            logo = require('../../common/res/images/sb@2x.png');
            tip = '温馨提示:FailXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        }
        let elem = <div className={"rootContainerPayment"}>
            {this.renderTitleAndTip(title, logo, tip)}
            {
                status === 'REQUEST_SUCCESS' ? this.renderCodeOrFlush(code, medicineCode) : null
            }
            {
                this.renderButtons(status)
            }
        </div>;

        return elem;
    }


    render() {
        let { status = 'REQUEST_INITIAL', code, medicineCode } = this.props;
        return status === 'REQUEST_INITIAL' ? null : this.renderData(status, code, medicineCode)
    }
}

function mapStateToProps(state, ownProps) {
    let { payment = {} } = state;
    let { medicineCode = {} } = payment;

    return { ...medicineCode };
}

export default connect(mapStateToProps, null)(Payment);