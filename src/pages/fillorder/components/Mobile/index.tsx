import * as React from 'react';
import './index.less';


interface IMobileProps {
    tip?: string;
    onChange?: (value: string) => void;
}

interface IMobileState {
    isShowTip: boolean;
}

class Mobile extends React.Component<IMobileProps, IMobileState>{
    constructor(props) {
        super(props);
        this.state = {
            isShowTip: false
        };
    }

    validateValue(value) {
        let rule = /^1[0-9]{10}/;
        return rule.test(value);
    }

    onChange = (target) => {
        let event = target.nativeEvent;
        let value = event.target.value;
        let { onChange } = this.props;
        if (typeof onChange === 'function') {
            onChange(value);
        }
        let result = this.validateValue(value);
        this.setState({
            isShowTip: !result
        });
    }

    render() {
        let { isShowTip } = this.state;
        let { tip } = this.props;
        return (
            <div className={'rootContainerMobile'}>
                <div className={'mobileContainer'}>
                    <span className={'flag'}>
                    </span>
                    <span className={'title'}>
                        填写手机号：
                    </span>
                    <input className={'mobile'}
                        type="phone-pad"
                        placeholder={'请输入手机号'}
                        maxLength={11}
                        onChange={this.onChange} />
                    {
                        isShowTip ?
                            <span className={'error'}>
                                *手机格式错误
                            </span>
                            : null
                    }
                </div>
                {
                    tip ?
                        <div className={'tip'}>
                            {tip}
                        </div> : null
                }
            </div>
        )
    }
}

export default Mobile;