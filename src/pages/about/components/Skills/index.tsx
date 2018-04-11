import * as React from 'react';
import './index.less';


interface ISkillsProps {}

class Skills extends React.Component<ISkillsProps, never> {
    render() {
        return (
            <div className={'skillsRoot'}>
                Skills
            </div>
        )
    }
}

export default Skills;