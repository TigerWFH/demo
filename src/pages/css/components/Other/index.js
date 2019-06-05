import * as React from 'react';

class Other extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log('other===>', nextProps);
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("Other=================>props", props);
    //     console.log("Other=================>state", state);
    // }
    
    render() {
        return 'other';
    }
}

export default Other;