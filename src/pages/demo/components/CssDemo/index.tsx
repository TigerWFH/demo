import * as React from 'react';
import "./index.less";

const demoIsHideMap = new Map([
    ["demo1", true],
    ["demo2", false],
    ["demo3", true],
    ["demo4", true],
    ["demo5", true],
]);
interface IProps { }
interface IState { }
class CssDemo extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{ display: demoIsHideMap.get("demo1") && "none" }}>
                    <h1>对文本的控制</h1>
                    <div className="text-first">
                        <h3 style={{ textAlign: "center" }}>
                            不限定宽高，自动折行
                        </h3>
                        <span className="first-span">
                            我是span，不限定宽高，会自动换行适应文本的长度；
                            我是span，不限定宽高，会自动换行适应文本的长度；
                        </span>
                        <div className="first-div">
                            我是div，不限定宽高，会自动换行适应文本的长度；
                            我是div，不限定宽高，会自动换行适应文本的长度；
                            我是div，不限定宽高，会自动换行适应文本的长度；
                            我是div，不限定宽高，会自动换行适应文本的长度；
                        </div>
                    </div>
                    <div className="text-second">
                        <h3 style={{ textAlign: "center" }}>
                            限定宽高
                        </h3>
                        <span className="second-span">
                            inline元素，width无效，自动折行。
                            我是span，限定宽高，会自动换行适应文本的长度；
                            我是span，限定宽高，会自动换行适应文本的长度；
                        </span>
                        <div className="second-div second-div-1">
                            block元素，只限定宽度，自动撑满高度；
                            限定宽高，文本会溢出block元素。
                            overflow可以处理溢出内容。
                        </div>
                        <div className="second-div second-div-2">
                            block元素，只限定宽度，自动撑满高度；
                            限定宽高，文本会溢出block元素。
                            white-space控制是否折行,
                            overflow可以处理溢出内容。
                        </div>
                        <div className="second-div second-div-3">
                            text-overflow必须配合white-space和overflow使用。
                            white-space控制是否折行,
                            overflow可以处理溢出内容。
                        </div>

                    </div>
                </div>
                <div style={{ display: demoIsHideMap.get("demo2") && "none" }}>
                    <div>
                        <h3>Demo1</h3>
                        <div className="dcdf-wrapper">
                            <span className="dcdf-span">
                                fontsize gt lineheight
                            </span>
                            <div className="dcdf-div">
                                i am div
                            </div>
                            <div>
                                <h3>UI呈现描述：</h3>
                                <p>
                                    由于font-size大于line-height,造成span高度高于line box高度，
                                    进而溢出line box，遮挡了前后block-level element
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Demo2</h3>
                        <div className="dcdf-wrapper">
                            <span className="dcdf-span"
                                style={{ lineHeight: "30px" }}>
                                fontsize equal lineheight
                            </span>
                            <div className="dcdf-div">
                                i am div
                            </div>
                            <h3>UI呈现描述：</h3>
                            <p>
                                由于font-size等于line-height,但是span高度仍然高于line box高度，
                                    进而溢出line box，遮挡了前后block-level element，说明font-size并不是
                                    字体在html中呈现的尺寸大小，这个大小需要更具font-size换算，其中font-size大小
                                    指em-square的大小，而字体大小在html呈现的大小这是由字体的ascender和descender之和
                                    计算的，后续将会详细解析这块内容。
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3>Demo3</h3>
                        <div className="dcdf-wrapper">
                            <span className="dcdf-span"
                                style={{ lineHeight: "0px" }}>
                                lineheight=0
                            </span>
                            <div className="dcdf-div">
                                i am div
                            </div>
                            <h3>UI呈现描述：</h3>
                            <p>
                                此处line-height的大小为0，但是div并没有沾满整个容器，很可能line box的高度是基于line-height
                                    和non-replaced inline element的最大值计算而来，如果完全由line-height决定，则div元素应该占满容器。
                                    其实，mdn也有说明，line-height用作计算（而不是决定）line box的高度
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3>Demo4</h3>
                        <div className="dcdf-wrapper">
                            <span className="dcdf-span"
                                style={{ lineHeight: "40px" }}>
                                lineheight=40
                            </span>
                            <div className="dcdf-div">
                                接近font-size=30的当前字体在html呈现的高度：ascender+descender高度，所以span元素没有溢出
                                i am div
                            </div>
                            <h3>UI呈现描述：</h3>
                            <p>
                                此处line-height的大小为0，但是div并没有沾满整个容器，很可能line box的高度是基于line-height
                                    和non-replaced inline element的最大值计算而来，如果完全由line-height决定，则div元素应该占满容器。
                                    其实，mdn也有说明，line-height用作计算（而不是决定）line box的高度
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3>Demo5Mac平台数据</h3>
                        <div className="dcdf-wrapper">
                            <div className="dcdf-div"
                                style={{
                                    height: "100px",
                                    fontSize: "100px",
                                    fontFamily: "Microsoft Sans Serif"
                                }}>
                                <span style={{
                                    border: "1px solid red"
                                }}>
                                    SansSerif中文
                                {/* font-size: 100px;
                                height: 100px;
                                Ascent:1638;
                                Descent: 410;
                                em-size: 20448; */}
                                </span>
                            </div>
                            <div className="dcdf-div"
                                style={{
                                    height: "132px",
                                    fontSize: "100px",
                                    fontFamily: "MicrosoftYaHei"
                                }}>
                                <span style={{
                                    border: "1px solid red"
                                }}>
                                    YaHei加上line-gap，符合
                                {/* font-size: 100px;
                                height: 100px;
                                line-height: 100/2048*(2167+536+9)=132    
                                Ascent:1638;
                                Descent: 410;
                                em-size: 2048; */}
                                </span>
                            </div>
                            <div className="dcdf-div"
                                style={{
                                    height: "100px",
                                    lineHeight: "100px",
                                    fontSize: "100px",
                                    fontFamily: "Simsun",
                                }}
                            >
                                <span style={{
                                    border: "1px solid red"
                                }}>
                                    Simsun中文不加line-gap符合
                                {/* font-size: 100px;
                                line-height: 100/256 * (256+36)=114 
                                height: 100px;
                                Ascent:220;
                                Descent: 36;
                                em-size: 256; */}
                                </span>
                            </div>
                            <span style={{
                                border: "1px solid red",
                                fontSize: "100px",
                                fontFamily: "Simsun",
                                lineHeight: "114px"
                            }}>
                                Simsun中文只有span
                                {/* font-size: 100px;
                                line-height: 100/256 * (256+36)=114 
                                height: 100px;
                                Ascent:220;
                                Descent: 36;
                                em-size: 256; */}
                            </span>
                            <div style={{
                                border: "1px solid yellow"
                            }}>
                                陪衬
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Demo6Windows平台数据</h3>
                        <div className="dcdf-wrapper">
                            <div className="dcdf-div"
                                style={{
                                    height: "100px",
                                    fontSize: "100px",
                                    fontFamily: "Microsoft Sans Serif"
                                }}>
                                <span style={{
                                    border: "1px solid red"
                                }}>
                                    SansSerif中文
                                    {/* font-size: 100px;
                                    height: 100px;
                                    Ascent:1638;
                                    Descent: 410;
                                    em-size: 20448; */}
                                </span>
                            </div>
                            <div className="dcdf-div"
                                style={{
                                    height: "132px",
                                    fontSize: "100px",
                                    fontFamily: "MicrosoftYaHei"
                                }}>
                                <span style={{
                                    border: "1px solid red"
                                }}>
                                    YaHei加上line-gap，符合
                                    {/* font-size: 100px;
                                    height: 100px;
                                    line-height: 100/2048*(2167+536+9)=132    
                                    Ascent:1638;
                                    Descent: 410;
                                    em-size: 2048; */}
                                </span>
                            </div>
                            <div className="dcdf-div"
                                style={{
                                    height: "100px",
                                    lineHeight: "100px",
                                    fontSize: "100px",
                                    fontFamily: "Simsun",
                                }}
                            >
                                <span style={{
                                    border: "1px solid red"
                                }}>
                                    Simsun中文不加line-gap符合
                                    {/* font-size: 100px;
                                    line-height: 100/256 * (256+36)=114 
                                    height: 100px;
                                    Ascent:220;
                                    Descent: 36;
                                    em-size: 256; */}
                                </span>
                            </div>
                            <span style={{
                                border: "1px solid red",
                                fontSize: "100px",
                                fontFamily: "Simsun",
                                lineHeight: "114px"
                            }}>
                                Simsun中文只有span
                                    {/* font-size: 100px;
                                    line-height: 100/256 * (256+36)=114 
                                    height: 100px;
                                    Ascent:220;
                                    Descent: 36;
                                    em-size: 256; */}
                            </span><div style={{
                                border: "1px solid yellow"
                            }}>
                                陪衬
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>猜测结论:</h3>
                        <p>
                            1、line box高度依据line-height和non-replaced inline element来计算，
                                当line-height大于元素的高度（ascender+descender）时，line box高度取line-height，
                                此时不会有溢出现象。当line-height小于元素高度时，则依据non-replaced inline元素计算得出<br />
                            2、文档流中，对于non-replaced inline element会生成其所在的line box（其实就是个匿名的block-level元素）
                            进行占位，这也是为什么margin-top/margin-bottom,padding-top/padding-bottom在视觉效果上不能体现的错觉，
                            事实，给span元素加上border，加上padding-top/padding-bottom是会有视觉效果的，遮挡其相邻的block-level元素。
                            但是，对于margin我无法验证了。
                            3、字体在html呈现的尺寸和family和font-size有关。初步了解，font-size指出了字体em-square尺寸，
                            而字体在html呈现的尺寸则由ascender+descender高度(实际测试不是这样的)，所以span元素没有溢出之和决定，这两个值和em-square尺寸，
                            有某种换算关系，根据字体种类可以计算出其在html中呈现的尺寸。
                        </p>
                        <p>
                            {/* <h3>补充</h3> */}
                            general选项卡中的参数：ascent,descent,em-size,用于渲染字符；
                            os/2-->metrics选项中的参数：win ascent，win descenty用于计算area-height，
                            line gap用于计算line-height,英文计算结果符合，中文不使用该参数符合
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export { CssDemo };