import * as React from 'react';
import './index.less';

interface IFooterProps {

}

class Footer extends React.Component<IFooterProps, never>{
    render() {
        return (
            <div className={'rootContainerFooter'}>
                "footer"
            </div>
        )
    }
}

export default Footer;