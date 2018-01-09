import * as React from 'react';

// import { Button as MyButton } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


export class ButtonDemo extends React.Component<{}, never> {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton label={'Material UI'}>
                    </RaisedButton>
                    <FlatButton label={'FlatButton'}
                        primary={true}>
                    </FlatButton>
                </div>

            </MuiThemeProvider>
        )
    }
}