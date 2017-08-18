# 上传文件检测文件方案分享

## `后缀检测方式`

## `二进制检测方式`
* file signature:
        in computing, a file signature is data used to identify or verify the content of a file. 
        In particular, it may refer to:
       
        File magic number:  bytes within a file used to identify the format of the file; 
                            
                            generally a short sequence of bytes (most are 2-4 bytes long) placed at the 
                           
                            beginning of the file; 
                            
                            See list of file signatures
       
        File checksum or more generally the result of an hash function over the file content: data used to 
        
        verify that the file content integrity, generally against transmission errors or malicious attacks. 
        The signature can be included at the end of the file or in a separate file.
        
        作用：   1、标识文件内容
                
                2、校验文件内容的完整性
* 常见图片格式解析

    1、PNG文件结构：| PNG文件标识 | PNG数据块 | PNG数据块……|
        
        文件标识(FileSignature): 
         
            |  十进制  |  137  80 78 71   13 10   26   10|
         
            | 十六进制 |   89   50 4E 47   0D 0A  1A   0A|

            比较前两个字节(0x89 0x50)
    
    PNG图像格式文件由一个8字节的PNG文件标识符（file signature）域和3个以上的后续数据块（IHDR、IDAT、IEDN）组成。------来自
    
    维基百科
    
    2、JPEG（JPG）文件结构： 
        
            | SOI | APPO | APPn | DQT | SOFO | DHT | SOS | EOI |

              | D8  |  E0  | E1-EF | DB | C0   |  C4 |  DA |  D9 |

        JPEG的每一个标记都是由2个字节组成，且前一个字节为固定值0xFF。比较两个字节（0xFF 0xD8），
        其它的，例如gif,bmp,svg等文件格式。
* ArrayBuffer(es6)

    ArrayBuffer对象存储固定长度的`原始二进制数据`,数据是泛型的，可能是字符串也可能是图像数据。

    ArrayBuffer是一段不透明的内存区域（不透明即指，无法直接操作的数据块，单位是byte），高效快速的访问二进制数据。

    用户是不能直接操作ArrayBuffer中的数据，你需要按照TypedArray 或 DataView对象指定的格式来解析ArrayBuffer中的数据。

* DataView：操作ArrayBuffer的另一种视图，不同的地方是每一项可以自定义大小和类型。

    跨平台的跨字节序的处理接口。

* TypedArray(类型化数组，es7)：操作ArrayBuffer的一种视图，每一项都是相同的大小和类型

    TypedArray就是下列类型中的一种。

    `Int8Array`

    `Uint8Array`    ------> new Uint8Array();将对应的数据解析成8位无符号整数。

    `Uint8ClampedArray`

    `Int16Array`

    `Uint32Array`

    `Uint32Array`

    `Float32Array`

    `Float64Array`

    demo:
    raw binary: 00000000 01000001

    askii: 0和A     Uint8Array

    utf-16: A(䄀)   Uint16Array
    ```
    // 对于单字节存储，无所谓大小端字节序
    // 对于多字节存储，数据的高位字节对应存储地址的高位地址，数组的低位字节对应存储地址的低位地址，则是小端字节序
    // 对于多字节存储，数据的高位字节对应存储地址的低位地址，数组的低位字节对应存储地址的高位地址，则是大端字节序
    let uint8 = new Uint8Array(2);//binary:01000001 00000000(65)
    uint8[0] = 0;
    uint8[1] = 65;
    let buffer = uint8.buffer;
    let uint16 = new Uint16Array(buffer);//依赖于浏览器，而浏览器是小端字节序: 100000010 00000000(16640)   
    console.log(String.fromCharCode.apply(null,uint8));//A
    console.log(String.fromCharCode.apply(null, uint16));//䄀(huo,u+4100,16640)
    ```

* FileReader（Working Draft）

    属性：

    `error`                             读取文件时发生的错误，只读

    `readyState`                        FileReader对象当前状态，只读

    `result`                            读取到的文件内容，只读

    方法：

    `abort()`                           终止读取操作

    `readAsArrayBuffer()`              result包含一个ArrayBuffer对象以表示所读取的文件内容

    `readAsBinaryString()`              result包含所读取文件的原始二进制数据解析的字符串(可以理解是字符串的二进制表示)

    `readAsDataURL()`                   result包含了一个data:URL格式的字符串以表示所读取的文件内容

    `readAsText()`                      result包含了一个字符串以表示所读取的文件内容

    事件处理程序：

    `onabort`                           当读取操作被终止时调用

    `onerror`                           当读取操作发生错误时调用

    `onload `                           当读取操作成功时调用

    `onloadend`                         当读取操作完成时调用，在onload和onerror之后调用

    `onloadstart`                       当读取操作要开始之前调用

    `onprogress`                        当读取数据过程中周期性调用

* 