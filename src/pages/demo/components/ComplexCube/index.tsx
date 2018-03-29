import * as React from 'react';
import './index.less';

interface IComplexCubeProps { }

class ComplexCube extends React.Component<IComplexCubeProps, never> {
    render() {
        return <div className='complexCube'>
        Cube
        </div>
    }
}

export default ComplexCube;