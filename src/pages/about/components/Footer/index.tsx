import * as React from 'react';
import './index.less';

interface IFooterProps { }

class Footer extends React.Component<IFooterProps, never> {
    render() {
        return (
            <div className={'pp-footer'}>
                <span className={'pp-hello'}>打个招呼</span>
                <div className={'pp-content'}>
                    <div className={'pp-hope'}>
                        <div>想结交<span>新朋友</span></div>
                        <div>想做<span>有趣</span>的事情</div>
                    </div>
                    <div className={'pp-contact'}>
                        <span>如何找到我...</span>
                        <div>+8617612151221</div>
                        <div>fanghuawfh@gmail.com</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;