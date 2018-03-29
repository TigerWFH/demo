import * as React from 'react';
import './index.less';

interface IComplexCubeProps { }

class ComplexCube extends React.Component<IComplexCubeProps, never> {
    render() {
        return <div className='complexCube'>
            <div className='wrapper'>
                <div className='container container1'>
                </div>
                <div className='container container2'>
                </div>
            </div>
        </div>
    }
}

export default ComplexCube;