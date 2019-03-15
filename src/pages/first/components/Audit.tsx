import * as React from 'react';
import { Info } from './Info';
import { IAudit, IInfo } from '../modals/uiModals';

interface IAuditProps {
    infoData?: IInfo;
    auditData: IAudit;
    // title: string;
}

interface IAuditState {
    value: string;
}

export class Audit extends React.Component<IAuditProps, IAuditState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        console.log("Audit---render");
        let { infoData, auditData} = this.props;
        return <div>
            <input value={this.state.value}
                onChange={this.onChange} />
        </div>
    }
}
