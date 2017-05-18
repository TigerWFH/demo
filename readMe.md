# 开始
创建目录结构

Demo

	|
	|--->src(存放源码)
	|	|
	|	|--->widgets（存放基础组建和布局组件）
	|	|	|--->basic（存放基础组建）
	|	|	|     |
	|	|	|     |--->input（input基础组件）
	|	|	|
	|	|	|
	|	|	|--->view(布局组件)
	|	|
	|	|
	|	|--->pages(存放web模块)
	|	|	|
	|	|	|--->first(模块1或页面1)
	|	|	|	|
	|	|	|	|--->actions(存放redux的actions)
	|	|	|	|
	|	|	| |--->reducers(存放redux的reducers)
	|	|	| |
	|	|	|	|--->container(存放容器组件)
	|	|	|	|
	|	|	|	|--->components(存放展示组件，数据来源只有props)
	|	|	|	|
	|	|	|	|--->types(定义常量等)
	|	|	|	|
	|	|	|	|--->index.tsx(导出first容器组件)
	|	|	|	|--->index.less(css样式)
	|	|	|
	|	|	|
	|	|	|--->second(模块2或页面2)
	|	|	|(...)
	|	|
	|	|
	|	|--->res(存放图片等资源)
	|	|
	|	|
	|	|
	|	|--->utils(一些协助项目的通用工具，比如http,getToken等)
	|
	|
	|
	|--->tools(基本上是协助开发的工具，比如数据类型转换等，可以用node跑)
	|
	|
	|--->dist(编译后部署代码)
	|--->node_modules(安装的依赖包)
	|--->(...其他一些配置文件)
# 第一步
首先安装工具，webpack和typescript

npm install webpack typescript --save-dev --registry=https://registry.npm.taobao.org
# 第二步
安装react及相关库

npm install react react-dom --save --registry=https://registry.npm.taobao.org

# 关于配置css模块化的问题
但模块化css文件时，由于typescript的类型提示编译时会报错，目前暂时去掉模块化（联系下自己对css样式的组织吧），文件中使用import css = reuiqre()语法，ts编译会报错，但是能正常运行

# css的命名规则
[参考资料](http://www.cnblogs.com/xiaohuochai/p/6261697.html)
* BEM(block element modifier):模块和子元素之间用两个下划线标识；元素和修饰符之间用两个中划线标识；命名过长如何处理呢？
	```
		.blockname__innerelement--active{
			display: block;
		}
	```
* NEC(网易的命名方法)：使用后代迭代器方法,首先将元素分5类--->布局(.g-)，模块(.m-)，元件(unit,.u-)，功能(.f-)，皮肤(.s-)，状态（.z-）
	```
		.m-list{
			margin:0;
			padding:0;
			}
		.m-list .item{
			margin: 1px;
		}
		.m-list .cnt{
			margin: 1px;
		}
	```
* JD(京东):采用标识层级嵌套关系的长命名。当子孙模块超过4级，考虑祖先模块内具有识别辨别性的独立缩写作为新的子孙模块
	```
		<div class="modulenamne">
			<div class="modulename_cover"></div>
			<div class="modulename_info">
				<div class="modulename_info_user">
					<div class="modulename_info_user_img">
						<img src="" alt>
						<!--miui===modulename_info_user_img-->
						<div class="miui_tit"></div>
						<div class="miui_txt"></div>
					</div>
				</div>
			</div>
		</div>
	```
* 常见的命名：
	```
		about		---关于
		account		---账户
		arrow		---箭头图标
		article		---文章
		aside		---边栏
		audio		---音频
		avatar		---头像
		bg，background	---背景
		bar		---栏（工具类）
		branding	---品牌化
		crumb,breadcrumbs---面包屑
		btn,button	---按钮
		caption		---标题，说明
		category	---分类
		chart		---图表
		clearfix	---清楚浮动
		close		---关闭
		col，column	---列
		comment		---评论
		community	---社区
		container	---容器
		content		---内容
		copyright	---版权
		current		---当前态（选中态）
		default		---默认（缺醒）
		description	---描述
		details		---详情（细节）
		disabled	---不可用
		entry		---文章，博文
		error		---错误
		even		---偶数
		fail		---失败
		feature		---专题
		fewer		---收起
		field		---输入区域
		figure		---图
		filter		---筛选
		first		---第一个
		footer		---页脚
		forum		---论坛
		gallery		---画廊
		group		---模块
		header		---页头
		help

	```
* 自用的命名规范:

	基于BEM命名：Block是指component（module，个人倾向使用component这个词），element是指组成component（module）的element（不用嵌套），modifier是指component的外观或行为，同样的块不同的样式，显示不同的外观（b_e-m:input_text-error,input_text-warning,input_text-success）。

	<strong><font style="color:green">与BEM区别的一点，允许element的嵌套，以显示层级关系</font></strong>

	使用<font style="color:red">单下划线</font>标识层级关系，当超过4层（出现超过4个下划线），使用类jd的缩写

	使用<font style="color:red">单中划线</font>标识状态关系，当超过4层（出现超过4个下划线），使用jd的缩写
	```
		<div class="monkey">
			<div class="monkey_header">
				<div class="monkey_header_nav monkey_header_nav-hover">
					<div class="monkey_header_nav_item">
						<div class="mhni_text mhni_text-active">
						</div>
						<div class="mhni_img">
						</div>
					</div>
				</div>
			</div>
			<div class="monkey_content"></div>
			<div class="monkey_footer"></div>
		</div>
	```
# js的命名规则

类命名使用<font style="color:red">帕斯卡命名法（大驼峰）</font>

变量使用<font style="color:red">小驼峰</font>
# component and module

[参考资料](http://blog.csdn.net/horkychen/article/details/45083467)
* component:强调代码的重用（web component 或者说组件是达到可复用要求的模块,将本来分离的html,js,css又糅合到一坨了）
* module:强调职责（内聚、分离）

# 腾讯云Web播放器在线直播和点播
[参考资料](https://www.qcloud.com/document/product/267/7479)

协议支持：HLS（HTTP Live Streaming），苹果的标准，兼容性较好，但是延迟大，在20-30秒左右，PC端有flash存在，相对较好。
<table>
<tr>
<td>视频协议</td>
<td>用途</td>
<td>PC浏览器</td>
<td>移动端浏览器</td>
<td>DEMO</td>
</tr>
<tr>
<td>HLS(m3u8)</td>
<td>直播（点播）</td>
<td>支持</td>
<td>支持</td>
<td>http://2157.liveplay.myqcloud.com/2157_35a.m3u8</td>
</tr>
<tr>
<td>FLV</td>
<td>直播（点播）</td>
<td>支持</td>
<td>不支持</td>
<td>http://2157.liveplay.myqcloud.com/2157_35a.flv</td>
</tr>
<tr>
<td>RTMP</td>
<td>直播</td>
<td>支持</td>
<td>不支持</td>
<td>http://2157.liveplay.myqcloud.com/2157_35a</td>
</tr>
<tr>
<td>MP4</td>
<td>点播</td>
<td>支持</td>
<td>支持</td>
<td>http://2157.liveplay.myqcloud.com/2157_35a.MP4</td>
</tr>
</table>

# 对接准备
* 引入初始化脚本
```
<script src="//imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer.js" charset="utf-8"></script>
```
* HTML里放置容器
```
<div id="id_test_video" style="width:100%;height:auto;"></div>
```
* 对接视频的播放
写js代码，拉去视频
> 1 直播视频测试
>```
> var player = new TcPlayer("id_test_video", {
>	"m3u8":"url",	//视频地址
>	"autoplay":true,	//自动播放功能
>	"coverpic":url,	//自动播放功能
>	"width":'480',	//视频分辨率
>	"height":'320',	//视频分辨率
>})
>```
> 2 PC更低延迟（利用flash）
>```
> var player = new TcPlayer("id_test_video", {
>	"m3u8":"url",	//视频地址
>	"flv":"url",	//增加了一个flv视频地址
>	"autoplay":true,	//自动播放功能
>	"coverpic":url,	//自动播放功能
>	"width":'480',	//视频分辨率
>	"height":'320',	//视频分辨率
>})
>```
* 播放器封面设置
coverpic支持传入一个对象，设置相关参数。
```
"coverpic":{"style":"stretch","src":"http://www.test.com/myimage.jpg"}
```
* 多清晰度的支持(移动端不支持)
```
var player = new TcPlayer('id_test_video', {
	"m3u8": "http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.m3u8",
	"m3u8_hd":"http://200002949.vod.myqcloud.com/200002949_b6ffc.f230.m3u8",
	"m3u8_sd":"http://200002949.vod.myqcloud.com/200002949_b6ffc.f220.m3u8",
	"autoplay":true,
	"coverpic":url
})
```
* 错误提示(wording属性)
```
var player = new TcPlayer('id_test_video', {
"m3u8"   : "http://200002949.vod.myqcloud.com/200002949_b6ffc.f0.m3u8",//请替换成实际可用的播放地址
"autoplay" : true,      //iOS下safari浏览器是不开放这个能力的
"coverpic" : "http://www.test.com/myimage.jpg",
"wording": {
    2032: "请求视频失败，请检查网络",
    2048: "请求m3u8文件失败，可能是网络错误或者跨域问题"
}
});
```
* 事件列表
error
timeupdate
load
loadedmetadata
loadeddata
progress
fullscreen
play
playing
pause
ended
seeking
seeked
resize
volumechange
