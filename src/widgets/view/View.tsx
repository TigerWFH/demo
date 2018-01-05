import * as React from 'react';
import './View.less';

export class View extends React.Component<{}, never> {
    render() {
        return <div className="view">
            {this.props.children}
        </div>
    }
}