import * as React from 'react';
import './index.less';

interface IQualityAssuranceProps {
    assuranceTextList?: Array<string>;
}

class QualityAssurance extends React.Component<IQualityAssuranceProps, never> {
    static defaultProps = {
        assuranceTextList: ['平安质保', '正品低价', '假一赔十']
    }
    renderAssuranceText(assuranceTextList) {
        if (!Array.isArray(assuranceTextList)) {
            return null;
        }
        let icon = '';
        let elemList = assuranceTextList.map((text: string, index: number) => {
            let elem = <span className={'assuranceContainer'}
                key={'qa' + index}>
                <span className={'icon'}>
                ✔
                </span>
                <span className={'assurance'}>
                    {text}
                </span>
            </span>;
            return elem;
        });

        return elemList;
    }
    render() {
        let { assuranceTextList } = this.props;
        return (
            <div className={'rootContainerQualityAssurance'}>
                {
                    this.renderAssuranceText(assuranceTextList)
                }
            </div>
        )
    }
}

export default QualityAssurance;
