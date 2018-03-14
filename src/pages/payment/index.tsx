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