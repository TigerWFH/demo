import * as React from 'react';
import './index.less';

let img = require('./images/timg.jpg');

interface ISplitJointProps { }
interface ISplitJointState {
    divIndex: boolean;
}

class SplitJoint extends React.Component<ISplitJointProps, ISplitJointState> {
    img: any;
    container: any;
    timer: any;
    constructor(props) {
        super(props);
        this.state = {
            divIndex: false
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let { divIndex } = this.state;
            console.log("divIndex=", divIndex);
            this.setState({
                divIndex: !divIndex
            });
        }, 5000);

        // js实现，可以动态计算宽度和高度
        // this.img = new Image();
        // this.img.onload = () => {
        //     let width = this.img.width;
        //     let height = this.img.height;
        //     let head = document.head || document.getElementsByTagName('head')[0];
        //     let divCss = document.createElement('style');
        //     divCss.type = 'text/css';
        //     divCss.appendChild(document.createTextNode(`.divBase {position: absolute;height: 100%;width: ${0.25 * width}px;background-image: url(${this.img.src});background-repeat: no-repeat;}`));
        //     head.appendChild(divCss);
        //     let div = null;
        //     div = document.createElement('div');
        //     div.id = 'div1';
        //     div.className = 'divBase';
        //     div.style.left = `-${0.25 * width}px`;
        //     div.style.backgroundPosition = `0 0`;
        //     div.style.zIndex = 4;
        //     this.container.appendChild(div);

        //     div = document.createElement('div');
        //     div.id = 'div2';
        //     div.className = 'divBase';
        //     div.style.left = `${-0.25 * width}px`;
        //     div.style.visibility = 'hidden';
        //     div.style.backgroundPosition = `${-0.25 * width}px 0`;
        //     div.style.zIndex = 3;
        //     this.container.appendChild(div);

        //     div = document.createElement('div');
        //     div.id = 'div3';
        //     div.className = 'divBase';
        //     div.style.backgroundPosition = `${-0.50 * width}px 0`;
        //     div.style.left = `${-0.25 * width}px`;
        //     div.style.visibility = 'hidden';
        //     div.style.zIndex = 2;
        //     this.container.appendChild(div);

        //     div = document.createElement('div');
        //     div.id = 'div4';
        //     div.className = 'divBase';
        //     div.style.backgroundPosition = `${-0.75 * width}px 0`;
        //     div.style.left = `${-0.25 * width}px`;
        //     div.style.visibility = 'hidden';
        //     div.style.zIndex = 1;
        //     this.container.appendChild(div);
        //     this.timer = setTimeout(() => {
        //         for (let i = 1; i < 5; i++) {
        //             let elem = document.getElementById(`div${i}`);
        //             elem.style.visibility = 'visible';
        //             elem.style.left = `${(i - 1) * 0.25 * width}px`;
        //             elem.style.transition = `left ${i}s linear ${(4 - i) / 2}s`;
        //         }
        //         let target = document.getElementById('origin');
        //         target.style.visibility = 'hidden';
        //         target.style.left = width;
        //         target.style.transition = 'all 4s linear 0s';
        //     }, 2000);
        // }
        // this.img.src = img;
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    render() {
        let { divIndex } = this.state;
        return <div className={divIndex ? "splitJoint active" : "splitJoint"}>
            <div className='divBase div1Init'></div>
            <div className='divBase div2Init'></div>
            <div className='divBase div3Init'></div>
            <div className='divBase div4Init'></div>
            <div className='base origin'></div>
        </div>
    }
}

export default SplitJoint;
