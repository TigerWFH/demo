import * as React from 'react';
import {connect} from 'react-redux';

import {
    IntlProvider,
    addLocaleData,
    FormattedMessage,
    FormattedDate,
    FormattedTime,
    FormattedRelative,
    FormattedNumber,
    FormattedPlural,
    FormattedHTMLMessage
} from 'react-intl';
import localeData from '../../../mockData';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);
const language = navigator.language || (navigator.languages && navigator.languages[0]);
const lang = language.toLocaleLowerCase().split(/[_-]+/)[0];
const message = localeData[lang] || localeData[language] || localeData.zh;

interface IDemoProps { }
interface IDemoState { }

const demo = 'demo';
let date = new Date();

class Demo extends React.Component<IDemoProps, never> {
    constructor(props) {
        super(props);
        console.log("I18n.props===>", this.props);
    }

    render() {
        return (
            <IntlProvider locale={lang} messages={message}>
                <div>
                    <div>
                        <FormattedMessage id={"BackManage"}
                            defaultMessage={"我是默认文案"} />
                        <br />
                        <FormattedMessage id={"POSTS1"}
                            defaultMessage={"我是默认文案POSTS1, {name}"}
                            values={{ name: demo }} />
                        <br />
                        <FormattedMessage id={"Posts"}
                            defaultMessage={"我是默认文案Posts"} />
                    </div>
                    <div>
                        {
                            `defaultTime: ${date}`
                        }
                        <br />
                        <FormattedDate value={date}
                            format={"year-month-day"}
                            year="numeric"
                            month="numeric"
                            day="numeric"/>
                        <br />
                        <FormattedDate value={date} />
                        <br />
                        <FormattedTime value={date} />
                        <br />
                        <FormattedTime value={date} />
                    </div>
                </div>
            </IntlProvider>
        )
    }
}


function mapStateToProps(state) {
    let {common} = state;
    return common;
}

export default connect(mapStateToProps)(Demo);