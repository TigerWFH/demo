import * as React from 'react';
import './index.less';

export class View extends React.Component<{}, never> {
    render() {
        return <div className="view">
            {this.props.children}
        </div>
    }
}