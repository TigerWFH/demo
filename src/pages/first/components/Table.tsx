import * as React from 'react';

export class Table extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        console.log("table---render");
        return (
            <div>
                {
                    "table==========>"
                }
            </div>
        )
    }
}