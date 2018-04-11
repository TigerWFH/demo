import * as React from 'react';
import './index.less';

interface IPersonalProfileProps {}

class PersonalProfile extends React.Component<IPersonalProfileProps, never> {
    render() {
        return (
            <div className={'ppRoot'}>
                个人简介
            </div>
        )
    }
}

export default PersonalProfile;