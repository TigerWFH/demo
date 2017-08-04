/**
 * @title:      测试FileReader对象的功能，并过滤上传文件
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:        
 * @modify Date: 2017-8-4
 */

// libs
import * as React from 'react';

const fileExtensionList = ["jpg", "jpeg", "png"];
class UploadFile extends React.Component<any, any>{
    static defautProps = {
        isBinary: false  //true，采用二进制过滤；false，采用文件后缀过滤
    };
    constructor(props: any) {
        super(props);
    }
    render() {
        let { isBinary } = this.props;
        return (
            <input type="file"
                onChange={isBinary ? this._onChangeBinary : this._onChangeExtension} />
        )
    }
    _onChangeBinary = (event) => {
        let fileReader = new FileReader();
        console.log("file--->", event.target.files[0]);
        fileReader.onloadend = function (event) {
            console.log("ArrayBuffer--->", fileReader.result);
            let readData = new Uint8Array(fileReader.result);//按照8位无符号整型解析数据
            // console.log("uint8array------>", readData);
            let detStr = readData.slice(0, 2).join('');//截取文件标识
            if (detStr === "13780" || detStr === "255216") {
                return alert('right image');
            }
            else {
                alert('not jpg or png');
            }
        }
        fileReader.readAsArrayBuffer(event.target.files[0]);//读入文件为二进制
    }
    _onChangeExtension = (event) => {
        let fileName = event.target.files[0].name;
        let fileExtension = fileName.split('.');
        let result = fileExtensionList.some(value => {
            return value === fileExtension[fileExtension.length - 1]
        });
        if (result) {
            alert("right image");
        }
        else {
            alert("not jpg or png");
        }

        let fileReader = new FileReader();
        fileReader.onloadend = (error) => {
            console.log("BinaryString--->", fileReader.result);
        }

        fileReader.readAsBinaryString(event.target.files[0]);
    }
}
function UploadFile1(props: any) {
    let { isText } = props;
    function _onChangeText(event) {
        let fileReader = new FileReader();
        fileReader.onloadend = (error) => {
            console.log("Text--->", fileReader.result);
        }

        fileReader.readAsText(event.target.files[0]);
    }
    function _onChangeDataURL(event) {
        let fileReader = new FileReader();
        fileReader.onloadend = (error) => {
            console.log("DataURL--->", fileReader.result);
        }

        fileReader.readAsDataURL(event.target.files[0]);
    }
    return (
        <div>
            <input type="file"
                onChange={isText ? _onChangeText : _onChangeDataURL} />
        </div>
    )
}

export { UploadFile, UploadFile1 };