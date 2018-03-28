import * as React from 'react';
import './index.less';

import Background from './components/Background';

class About extends React.Component {
    render() {
        return (
            <div className={'resume'}>
                <Background />
            </div>
        )
    }
}

export default About;