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
