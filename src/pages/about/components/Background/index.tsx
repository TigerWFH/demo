import * as React from 'react';
import './index.less';

interface IBackgroundProps {
    content?: any;
}
interface IBackgroundState {
    img?: string;
}
const IMG_LIST = [
    require('./images/bg1.jpg'),
    require('./images/bg2.png'),
    require('./images/bg3.png'),
    require('./images/bg4.png')
];
const IMG_INDEX = 4;
class Background extends React.Component<IBackgroundProps, IBackgroundState> {
    timer: any;
    static defaultProps = {
        content: null
    }
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            img: ''
        };
    }
    componentWillMount() {
        let imgIndex = 0;
        this.timer = setInterval(() => {
            if (imgIndex >= IMG_INDEX || imgIndex < 0) {
                imgIndex = 0;
            }
            this.setState({
                img: IMG_LIST[imgIndex++]
            });
        }, 2000);
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    render() {
        return (
            <div className={'background'}>

                <div>
                    {
                        this.state.img ?
                            <img className={'image'}
                                src={this.state.img} /> :
                            null
                    }
                    <div className={'mask'}>
                    </div>
                </div>
                {
                    this.props.content ?
                        <div className={'content'}>
                        </div> :
                        null
                }

            </div>
        )
    }
}

export default Background;