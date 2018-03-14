import * as React from 'react';

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
            isShowTip: false
        };
    }
    render() {
        let { isShowTip } = this.state;
        let { tip } = this.props;
        return (
            <div>
                <div>
                    <span></span>
                    <span>
                        填写手机号：
                    </span>
                    <input type="number" />
                    {
                        isShowTip ?
                            <span>
                                手机格式错误
                        </span>
                            : null
                    }
                </div>
                {
                    tip ?
                        <div>
                            {tip}
                        </div> : null
                }
            </div>
        )
    }
}

export default Mobile;