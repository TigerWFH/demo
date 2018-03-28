import * as React from 'react';
import './index.less';

import Background from './components/Background';
import AnimationBg from './components/AnimationBg';

class About extends React.Component {
    render() {
        return (
            <div className={'resume'}>
                <AnimationBg />
            </div>
        )
    }
}

export default About;