import * as React from 'react';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import localeData from '../../../mockData';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);
const language = navigator.language || (navigator.languages && navigator.languages[0]);
const lang = language.toLocaleLowerCase().split(/[_-]+/)[0];
const message = localeData[lang] || localeData[language] || localeData.zh;

interface IDemoProps { }
interface IDemoState { }

class Demo extends React.Component<IDemoProps, never> {
    render() {
        return (
            <IntlProvider locale={lang} messages={message}>
                <div>
                    <FormattedMessage id={"BackManage"}
                        defaultMessage={"我是默认文案"} />
                    <FormattedMessage id={"POSTS"}
                        defaultMessage={"我是默认文案POSTS"} />
                    <FormattedMessage id={"Posts"}
                        defaultMessage={"我是默认文案Posts"} />
                </div>
            </IntlProvider>
        )
    }
}

export default Demo;