import * as React from 'react';
import './index.less';

interface ITransform3dProps { }
interface ITransform3dState { }

class Transform3d extends React.Component<ITransform3dProps, ITransform3dState> {
    render() {
        return (
            <div className={'transform3d'}>
                <div className={'container'}>
                    <div className={'side front'}></div>
                    <div className={'side back'}></div>
                    <div className={'side left'}></div>
                    <div className={'side right'}></div>
                    <div className={'side top'}></div>
                    <div className={'side bottom'}></div>
                </div>
            </div>
        )
    }
}

export default Transform3d;