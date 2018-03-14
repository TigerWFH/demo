import * as React from 'react';
import './index.less';


interface IMobileProps {
    tip?: string;
}

interface IMobileState {
    isShowTip: boolean;
}

class Mobile extends React.Component<IMobileProps, IMobileState>{
    constructor(props) {
        super(props);
        this.state = {
            isShowTip: true
        };
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
                    <input className={'mobile'} type="number" />
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