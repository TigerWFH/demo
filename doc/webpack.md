# webpack
配置结构

    webpack
        |
        |--->entry and context(entry对象时webpack打包的入口点，context是包含入口文件的绝对路径的字符串)
        |               |
        |               |--->context(string,入口文件的绝对地址，默认值是当前工作目录)
        |               |
        |               |
        |               |--->entry(string | [string] | object{<key>:string|[string]}，应用的入口)，动态加载模块不是入口文件。`原则`：一个HTML页面一个入口。单页应用：一个入口；多页应用：多个入口。
        |               |
        |               |
        |               |--->Naming(传递string或者字符串数组，名字是main；传递对象，则chunk的名字使用key命名。)
        |               |
        |               |
        |               |--->Dynamic entry(entry:()=>'./demo'或者返回一个Promise对象)
        |
        |
        |--->output(指定了webpack如何打包资源以及打包资源的命名规则和输出路径)
        |
        |--->module(项目中不同的模块如何被webpack有效使用)
        |
        |--->resolve(指定webpack查询模块包的位置，配置模块是如何被webpack解析)
        |
        |--->plugins(自定义webpack处理流程)
        |
        |--->DevServer(配置webpack-dev-server)
        |
        |--->DevTool(控制sourcemap的生成和使用)
        |
        |--->Target(可以将代码编译成不同环境下的可运行代码)
        |
        |--->Watch and WatchOptions(实时编译)
        |
        |--->Externals(指定不打包的依赖库)
        |
        |--->Node(模拟node环境，是代码可以在其它环境运行)
        |
        |--->Performance(对打包资源设置大小提示，有助于优化提升性能)
        |
        |--->Stats(控制打包的显示信息)
        |
        |--->Other Options(webpack支持的其它配置信息)