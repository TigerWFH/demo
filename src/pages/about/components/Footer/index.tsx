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
                        <div className={'pp-want'}>目前常驻<span>上海</span></div>
                        <div className={'pp-want'}>想结交<span>新朋友</span></div>
                        <div className={'pp-want'}>做<span>有趣</span>的事情</div>
                    </div>
                    <div className={'pp-contact'}>
                        <div className={'pp-tome'}>如何找到我...</div>
                        <div className={'pp-info'}>+8617612151221</div>
                        <div className={'pp-info'}>mrtiger666@foxmail.com</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;