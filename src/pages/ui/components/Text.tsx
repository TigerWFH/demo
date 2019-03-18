import * as React from 'react';

// import { Button } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


export class ButtonDemo extends React.Component<{}, never> {
    render() {
        let style = {
            verticalAlign: "middle"
        };
        return (
            <div className={'text'}>
                {/* <div className={'first'}>
                    <Button >
                        {"antd"}
                    </Button>
                </div> */}
                <div className={'second'}>
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={'Material UI'}
                                style={style}>
                            </RaisedButton>
                            <FlatButton label={'FlatButton'}
                                style={style}
                                primary={true}>
                            </FlatButton>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>

        )
    }
}