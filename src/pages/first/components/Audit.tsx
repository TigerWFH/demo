import * as React from 'react';
import { Info } from './info';
import { IAudit, IInfo } from '../constants/firstTypes';

interface IAuditProps {
    infoData?: IInfo;
    auditData: IAudit;
}

export class Audit extends React.Component<IAuditProps, {}> {

    render() {
        let { infoData, auditData } = this.props;
        return <div>
            audit
            <Info infoData={infoData} />
        </div>
    }
}
