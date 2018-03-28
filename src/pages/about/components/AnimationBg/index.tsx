import * as React from 'react';
import './index.less';

interface IAnimationBgProps {
    content?: any;
}

interface IAnimationBgState {
    imgIndex: number;
}

const IMG_ACOUNT = 4;

class AnimationBg extends React.Component<IAnimationBgProps, IAnimationBgState> {
    timer: any;
    static defaultProps = {
        content: null
    }
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            imgIndex: 1
        }
    }

    componentDidMount() {
        let imgIndex = this.state.imgIndex;
        this.timer = setInterval(() => {
            if (imgIndex > 4 || imgIndex <= 0) {
                imgIndex = 1;
            }

            this.setState({
                imgIndex: imgIndex++
            });
        }, 2000);
    }

    componentWillMount() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    renderImageList = (imgIndex) => {
        let classList = ['image1', 'image2', 'image3', 'image4'];
        classList[imgIndex - 1] = classList[imgIndex - 1] + ' active';
        let elemList = classList.map((elem, index) => {
            return <div className={elem} key={'image' + index}></div>
        });

        return elemList;
    }

    render() {
        let { imgIndex } = this.state;
        let classNameList = ['image1', 'image2', 'image3', 'image4'];
        return (
            <div className={'animationbg'}>
                <div className={'imgContainer'}>
                    <div className={'mask'}>
                    </div>
                    {
                        this.renderImageList(imgIndex)
                    }
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

export default AnimationBg;