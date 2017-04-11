# 开始
创建目录结构
Demo
	|
	|--->src(存放源码)
	|			|
	|			|--->widgets（存放基础组建和布局组件）
	|     |				|
	|			|				|--->basic（存放基础组建）
	|			|				|     |
	|			|				|     |--->input（input基础组件）
	|			|				|
	|			|				|
	|			|				|--->view(布局组件)
	|			|
	|			|
	|			|--->pages(存放web模块)
	|			|				|
	|			|				|--->first(模块1或页面1)
	|			|				|				|
	|			|				|				|--->actions(存放redux的actions)
	|			|				|				|
	|			|				|				|--->reducers(存放redux的reducers)
	|			|				|				|
	|			|				|				|--->container(存放容器组件)
	|			|				|				|
	|			|				|				|--->components(存放展示组件，数据来源只有props)
	|			|				|				|
	|			|				|				|--->types(定义常量等)
	|			|				|				|
	|			|				|				|--->index.tsx(导出first容器组件)
	|			|				|				|--->index.less(css样式)
	|			|				|
	|			|				|
	|			|				|--->second(模块2或页面2)
	|			|				|(...)
	|			|
	|			|
	|			|--->res(存放图片等资源)
	|			|
	|			|
	|			|
	|			|--->utils(一些协助项目的通用工具，比如http,getToken等)
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