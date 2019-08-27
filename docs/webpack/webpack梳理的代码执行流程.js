/**
 * 1、校验options参数，如果报错直接抛异常
 * 2、使用WebpackOptionsDefaulter实例的process函数处理options参数
 *      2-1: 过程待补充
 * 3、创建compiler实例，let compiler = new Compiler(options.context)
 *      3-1: 调用Compiler的constructor函数
 *      3-2: 调用super即Tapable函数，创建兼容_pluginCompat = new SyncBailHook(["options"]);
 *              调用Hook函数，创建_args,taps,interceptors,call,promise,callAsync,_x等属性
 *          ===注册插件===this._pluginCompat.tap({name:"Tapable camelCase",stage: 100}, () => {})
 *          ===注册插件===this._pluginCompat.tap({name:"Tapable this.hooks",stage: 200}, () => {})
 *      3-3: 创建hooks对象属性，包含shouldEmit，done等事件属性，类型是不同的Hook
 *          ===注册插件===this._pluginCompat.tap("Compiler", () => {})
 *      3-4: 将配置参数赋给compiler.options = options
 *      3-5: 其它属性
 *      3-6: 特殊属性
 *              this.resolverFactory = new ResolverFactory()待补充
 *              this.requestShortener = new RequestShortener(context)待补充
 * 4、compiler.options = options
 * 5、创建NodeEnviromentPlugin实例
 *      5-1:  创建实例nodeEnvironment，new NodeEnvironmentPlugin({}).apply(compiler)
 *              处理Log
 *              compiler.inputFileSystem = new CachedInputFileSystem({new NodeJsInputFileSystem(), 60000})
 *              compiler.outputFileSystem = new NodeOutputFileSystem()
 *              compiler.watchFileSystem = new NodeWatchFileSystem({compiler.inputFileSystem})
 *              ==== 注册插件 ====compiler.hooks.beforeRun.tap("NodeEnvironmentPlugin",()=>{})
 * 6、根据options.plugins配置，注册配置的插件
 * 7、调用插件
 *      **** 调用插件 ****compiler.hooks.environment.call();
 *      **** 调用插件 ****compiler.hooks.afterEnvironment.call();
 * 8、处理options
 *      compiler.options = new WebpackOptionsApply().process(options, compiler);
 *      compiler.outputPath = options.output.path;
 *      compiler.recordsInputPath = options.recordsInputPath || options.records.recordsPath;
 *      compiler.recordsOutputPath = options.recordsOutputPath || options.recordsPath;
 *      compiler.name = options.name;
 *      compiler.dependencies = options.dependencies;
 *      8-1: 根据options.target注册不同的内部插件
 *           "web": === 注册插件 ===JsonpTemplatePlugin, FetchCompileWasmTemplatePlugin, FunctionModulePlugin, NodeSourcePlugin, LoaderTargetPlugin
 *           "webworker": === 注册插件 ===WebWorkerTemplatePlugin, FetchCompileWasmTemplatePlugin, FunctionModulePlugin, NodeSourcePlugin, LoaderTargetPlugin
 *           "node || async-node": === 注册插件 ===NodeTemplatePlugin, ReadFileCompileWasmTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, LoaderTargetPlugin
 *           "node-webkit": === 注册插件 ===JsonpTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, ExternalsPlugin, LoaderTargetPlugin
 *           "electron-main": === 注册插件 ===NodeTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, ExternalsPlugin, LoaderTargetPlugin
 *           "electron-renderer || electron-preload": === 注册插件 ===JsonpTemplatePlugin, NodeTemplatePlugin, FetchCompileWasmTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, ExternalsPlugin, LoaderTargetPlugin
        8-2: 如果options.output.library || options.output.libraryTarget !== "var"
             === 注册插件 ===LibraryTemplatePlugin,
        8-3: 如果配置了options.externals
             === 注册插件 ===ExternalsPlugin
        8-4: 如果options.devtool && (options.devtool.includes("sourcemap") || options.devtool.includes("source-map"))
             === 注册插件 ===EvalSourceMapDevToolPlugin(或者)SourceMapDevToolPlugin
             否者，如果options.devtools && options.devtool.includes("eval"),
             === 注册插件 ===EvalDevToolModulePlugin
        8-5: === 注册插件 ===JavascriptModulesPlugin，JsonModulesPlugin，WebAssemblyModulesPlugin，EntryOptionsPlugin***********入口点***********
        8-6: *** 调用插件 ===compiler.hooks.entryOption.call(options.context, options.entry)
        8-7: === 注册插件 ===CompatibilityPlugin，HarmonyModulesPlugin
        8-8: 如果options.amd !== false
             === 注册插件 ===AMDPlugin，RequireJsStuffPlugin
        8-9: === 注册插件 ===CommonJsPlugin，LoaderPlugin
        8-10: 如果options.node !== false
              === 注册插件 ===NodeStuffPlugin
        8-11: === 注册插件 ===CommonJsStuffPlugin，APIPlugin，ConstPlugin，UseStrictPlugin，RequireIncludePlugin，RequireEnsurePlugin，RequireContextPlugin，ImportPlugin，SystemPlugin
        8-12: 如果options.mode !== "string"
              === 注册插件 ===WarnNoModeSetPlugin
        8-13: === 注册插件 ===EnsureChunkConditionsPlugin
        8-14: 如果options.optimization.removeAvailableModules
              === 注册插件 ===RemoveParentModulesPlugin
        8-15: 如果options.optimization.removeEmptyChunks
              === 注册插件 ===RemoveEmptyChunksPlugin
        8-16: 如果options.optimization.mergeDuplicateChunks
              === 注册插件 ===MergeDuplicateChunksPlugin
        8-17: 如果options.optimization.flagIncludedChunks
              === 注册插件 ===FlagIncludedChunksPlugin
        8-18: 如果options.optimization.sideEffects
              === 注册插件 ===SideEffectsFlagPlugin
        8-19: 如果options.optimization.providedExports
              === 注册插件 ===FlagDependencyExportsPlugin
        8-20: 如果options.optimization.usedExports
              === 注册插件 ===FlagDependencyUsagePlugin
        8-21: 如果options.optimization.concatenateModules
              === 注册插件 ===ModuleConcatenationPlugin
        8-22: 如果options.optimization.splitChunks
              === 注册插件 ===SplitChunksPlugin
        8-23: 如果options.optimization.runtimeChunk
              === 注册插件 ===RuntimeChunkPlugin
        8-24: 如果options.optimization.noEmitOnErrors
              === 注册插件 ===WasmFinalizeExportsPlugin
        8-25: 处理options.optimization.moduleIds，根据moduleIds注册不同的插件
              "natural": 不做处理
              "named": === 注册插件 === NamedModulesPLugin
              "hashed": === 注册插件 === HashedModuleIdsPLugin
              "size": === 注册插件 === OccurrenceModuleOrderPlugin
              "total-size": === 注册插件 === OccurrenceModuleOrderPlugin
        8-26: 处理options.optimization.chunkIds，根据chunkIds注册不同的插件
              "natural": === 注册插件 ===NaturalChunkOrderPlugin
              "named": === 注册插件 ===OccurrenceChunkOrderPlugin，NamedChunksPlugin
              "size": === 注册插件 ===OccurrenceChunkOrderPlugin
              "total-size": === 注册插件 ===OccurrenceChunkOrderPlugin
        8-27: 如果options.optimization.nodeEnv
              === 注册插件 ===DefinePlugin
        8-28: 如果options.optimization.minimize
              === 注册插件 ===配置插件
        8-29: 如果options.performance
              === 注册插件 ===SizeLimitsPlugin
        8-30: === 注册插件 ===TemplatedPathPlugin，RecordIdsPlugin，WarnCaseSensitiveModulesPlugin
        8-31: 如果options.cache
              === 注册插件 ===CachePlugin
        8-32: 调用插件
              *** 调用插件 ***compiler.hooks.afterPlugins.call(compiler)
        8-33: compiler.resolverFactory.hooks注册不同的内部插件
        8-34: 调用插件
              *** 调用插件 ***compiler.hooks.afterResolvers.call(compiler);
    9、执行compiler.run(callback)
        9-1: *** 调用插件 ***this.hooks.beforeRun.callAsync(this, cb1)
        9-2: 执行回调cb1，*** 调用插件 ***this.hooks.run.callAsync(this, cb2);
        9-3: 执行回调cb2，调用函数this.readRecords(cb3)
                如果this.recordsInputPath不存在，执行cb3
        9-4: 执行回调cb3，调用函数this.compile(onCompiled);
                创建参数params = this.newCompilationParams();
                    params.normalModuleFactory = this.createNormalFactory()
                        normalModuleFActory = new NormalModuleFactory();
                        *** 调用插件 ***this.hooks.normalModuleFactory.call(normalModuleFactory);
                    params.contextModuleFactory = this.createContextFActory();
                        contextModuleFactory = new ContextModuleFactory(this.resolverFactory)
                        *** 调用插件 ***this.hooks.contextModuleFactory.call(contextModuleFactory);
                *** 调用插件 ***this.hooks.beforeCompile.callAsync(params, cb4);
                执行回调函数cb4，*** 调用插件 ***this.hooks.compile.call(params);
                创建compilation = this.newCompilation(params);
                    const compilation = this.createCompilation();
                        return new Compilation(this);
                            hook = {
                                  buildModule: new SyncHook(["module"]),
                                  rebuildModule: new SyncHook(["module"]),
                                  failedModule: new SyncHook(["module", "error"]),
                                  succeedModule: new SyncHook(["module"]),
                                  addEntry: new SyncHook(["entry", "name"]),
                                  failedEntry: new SyncHook(["entry", "name", "error"]),
                                  succeedEntry: new SyncHook(["entry", "name", "module"]),
                                  dependencyReference: new SyncWaterfallHook(["dependencyReference", "dependency", "module"]),
                                  finishModules: new SyncHook(["modules"]),
                                  finishRebuildingModule: new SyncHook(["module"]),
                                  unseal: new SyncHook([]),
                                  seal: new SyncHook([]),
                                  beforeChunks: new SyncHook([]),
                                  afterChunks: new SyncHook(["chunks"]),
                                  optimizeDependenciesBasic: new SyncBailHook(["modules"]),
                                  optimizeDependencies: new SyncBailHook(["modules"]),
                                  optimizeDependenciesAdvanced: new SyncBailHook(["modules"]),
                                  afterOptimizeDependencies: new SyncHook(["modules"]),
                                  optimize: new SyncHook([]),
                                  optimizeModulesBasic: new SyncBailHook(["modules"]),
                                  optimizeModules: new SyncBailHook(["modules"]),
                                  optimizeModulesAdvanced: new SyncBailHook(["modules"]),
                                  afterOptimizeModules: new SyncHook(["modules"]),
                                  ...
                            };
                            this.entries = [];
                            this.modules = [];
                            this.records = null;
                            this.assets = {};

                        *** 调用插件 ***this.hooks.thisCompilation.call(compilation, params);
                        *** 调用插件 ***this.hooks.compilation.call(compilation, params);
                *** 调用插件 ***this.hooks.make.callAsync(compilation, cb5)
                执行回调cb5，调用函数compilation.finish(cb6)
                    *** 调用插件 ***this.hooks.finishModules.callAsync(modules, cb7)
                    执行回调cb7，对modules进行处理
                执行cb6，调用函数compilation.seal(cb8)
                    *** 调用插件 ***compilation.hooks.seal.call();
                    执行好多compilation的插件
                执行cb8，*** 调用插件 ***this.hooks.afterCompile.callAsync(compilation， cb9）
                执行cb9，即执行onCompiled，*** 调用插件 ***this.hooks.shouldEmit.call(compilation)
                    如果结束，*** 调用插件 ***this.hooks.done.callAsync(stats，cb10）

 *  4、compiler.run
 *      4-1: ******调用插件****this.hooks.beforeRun.callAsync(this, cb1);
 *      4-2: 执行完事件beforeRun的监听函数，执行回调函数cb1，在cb1里会触发run事件
 *      4-3: ******调用插件****this.hooks.run.callAsync(this, cb2);
 *      4-4: 执行完事件run的监听函数，执行回调函数cb2，在cb2里调用this.readRecords(似乎是读取文件？待确定)
 *      4-5: 如果配置了this.readRecords，函数根据this.recordsInputPath(即options.recordsInputPath || options.recordsPath)使用readFile读取entry，并将读取得内容转成utf8编码的字符串，存储到this.records上
 *            否者，调用回调函数cb2
 *      4-6: cb2如果出错，就调用finalCallback函数（在compiler中这一些列出错都调用该函数，详情后讲）；
 *            否者，调用this.compile(onCompiled);
 *      4-7: 在this.compile中，*******调用插件******this.hooks.beforeCompile.callAsync(params, cb3);
 *      4-8: 执行事件beforeCompile的监听函数之后，******调用插件******this.hooks.compile.call(params);
 *      4-9: compile事件的监听函数执行之后，调用const compilation = this.newCompilation(params);
 *              新建Compilation对象，并创建属性事件buildModule, rebuildModule, failedModule, succeedModule, addEntry, failedEntry, succeedEntry, dependencyReference,
 *                  finishModules, finishRebuildingModule, unseal, seal, beforeChunks, afterChunks, optimizeDependenciesBasic, optimizeDependencies, optimizeDependenciesAdvanced,
 *                  afterOptimizeDependencies, optimize, optimizeModulesBasic, optimizeModules...
 *                  ======this._pluginCompat.tap("Compilation", ()=>{})
 *              ******调用插件******this.hooks.thisCompilation.call(compilation, params);
 *              ******调用插件******this.hooks.compilation.call(compilation, params);
 *      4-10: ******调用插件******this.hooks.make.callAsync(compilation, cb3);
 *      4-11: mak事件的监听函数执行完之后，执行回调函数cb3
 *      4-12: 执行cb3函数调用compilation.finish(cb4)
 *              ******调用插件******this(compilation).hooks.finishModules.callAsync(modules, cb5);
 *              执行完finishModules事件的监听函数，执行cb5函数
 *              cb5处理依赖报错信息，之后执行cb4
 *              执行cb4调用compilation.seal(cb6)，******调用插件******this.hooks.seal.call()
 *              for循环
 *              ******调用插件******this(compilation).hooks.optimizeDependenciesBasic.call(this.modules) || 
 *              ******调用插件******this(compilation).hooks.optimizeDependencies.call(this.modules) ||
 *              ******调用插件******this(compilation).hooks.optimizeDependenciesAdvanced.call(this.modules)
 *              {}
 * 
 *              ******调用插件******this(compilation).hooks.afterOptimizeDependencies.call(this.modules)
 *              ******调用插件******this(compilation).hooks.beforeChunks.call();
 *              ******调用插件******this(compilation).hooks.afterChunks.call(this.chunks);
 *              ******调用插件******this(compilation).hooks.optimize.call();
 *              for循环
 *              ******调用插件******this(compilation).hooks.optimizeModulesBasic.call(this.modules) || 
 *              ******调用插件******this(compilation).hooks.optimizeModules.call(this.modules) ||
 *              ******调用插件******this(compilation).hooks.optimizeModulesAdvanced.call(this.modules)
 *              {}
 *              
 *              ******调用插件******this(compilation).hooks.afterOptimizeModules.call(this.modules);
 *              for循环
 *              ******调用插件******this(compilation).hooks.optimizeChunksBasic.call(this.chunks, this.chunkGroups) || 
 *              ******调用插件******this(compilation).hooks.optimizeChunks.call(this.chunks, this.chunkGroups) ||
 *              ******调用插件******this(compilation).hooks.optimizeChunksAdvanced.call(this.chunks, this.chunkGroups)
 *              {}
 * 
 *              ******调用插件******this(compilation).hooks.afterOptimizeChunks.call(this.chunks, this.chunkGroups);
 *              ******调用插件******this(compilation).hooks.optimizeTree.callAsync(this.chunks, this.modules, cb7);
 *              执行cb7，******调用插件******this(compilation).hooks.afterOptimizeTree.call(this.chunks, this.modules)
 *              for循环
 *              ******调用插件******this(compilation).hooks.optimizeChunkModulesBasic.call(this.chunks, this.modules) || 
 *              ******调用插件******this(compilation).hooks.optimizeChunkModules.call(this.chunks, this.modules) ||
 *              ******调用插件******this(compilation).hooks.optimizeChunkModulesAdvanced.call(this.chunks, this.modules)
 *              {}
 *              ******调用插件******this(compilation).hooks.afterOptimizeChunkModules.call(this.chunks, this.modules)
 *              ******调用插件******this(compilation).hooks.shouldRecord.call()
 *              ******调用插件******this(compilation).hooks.reviveModules.call(this.modules, this.records)
 *              ******调用插件******this(compilation).hooks.optimizeModuleOrder.call(this.modules)
 *              ******调用插件******this(compilation).hooks.advancedOptimizeModuleOrder.call(this.modules)
 *              ******调用插件******this(compilation).hooks.beforeModuleIds.call(this.modules)
 *              ******调用插件******this(compilation).hooks.moduleIds.call(this.modules)
 *              ******调用插件******this(compilation).hooks.optimizeModuleIds.call(this.modules)
 *              ******调用插件******this(compilation).hooks.afterOptimizeModuleIds.call(this.modules)
 *              ******调用插件******this(compilation).hooks.reviveChunks.call(this.chunks, this.records)
 *              ******调用插件******this(compilation).hooks.optimizeChunkOrder.call(this.chunks)
 *              ******调用插件******this(compilation).hooks.beforeChunkIds.call(this.chunks)
 *              ******调用插件******this(compilation).hooks.optimizeChunkIds.call(this.chunks)
 *              ******调用插件******this(compilation).hooks.afterOptimizeChunkIds.call(this.chunks)
 *              条件调用
 *              ******调用插件******this(compilation).hooks.recordModules.call(this.modules, this.records)
 *              ******调用插件******this(compilation).hooks.recordChunks.call(this.chunks, this.records)
 *              ******调用插件******this(compilation).hooks.beforeHash.call()
 *              ******调用插件******this(compilation).hooks.afterHash.call();
 *              条件调用
 *              ******调用插件******this(compilation).hooks.recordHash.call(this.records)
 *              ******调用插件******this(compilation).hooks.beforeModuleAssets.call()
 *              ******调用插件******this(compilation).hooks.shouldGenerateChunkAssets.call()
 *              ******调用插件******this(compilation).hooks.beforeChunkAssets.call()
 *              ******调用插件******this(compilation).hooks.additionalChunkAssets.call(this.chunks)
 *              条件调用
 *              ******调用插件******this(compilation).hooks.record.call(this, this.records)
 *              ******调用插件******this(compilation).hooks.additionalAssets.callAsync(cb8)
 *              执行cb8，******调用插件******this(compilation).hooks.afterOptimizeChunkAssets.call(this.chunks)
 *              ******调用插件******this(compilation).hooks.optimizeAssets.callAsync(this.assets, cb10)
 *              之心cb10，******调用插件******this(compilation).hooks.afterOptimizeAssets.call(this.assets);
 *              ******调用插件******this(compilation).hooks.this.hooks.needAdditionalSeal.call()
 *              根据条件，判断是否调用seal函数（这是个递归）
 *              ******调用插件******this(compilation).hooks.this.hooks.afterSeal.callAsync(callback);
 *              执行cb7，******调用插件******this.hooks.afterCompile.callAsync(compilation, cb11)
 *              执行cb11，调用onCompiled(err, compilation)
 *              
 *              if条件调用
 *              ******调用插件******this.hooks.shouldEmit.call(compilation)
 *              ******调用插件******this.hooks.done.callAsync(stats, cb12)
 *              else
 *              ******调用插件******this.hooks.emit.callAsync(compilation, cb12)
 *                  调用compilation.getPath(this,outPath);
 *                  调用emitFiles(err=>{}), 写资源，======调用插件======this.hooks.assetEmitted.callAsync(file, content, callback);
 *                                           出错，======调用插件======this.hooks.afterEmit.callAsync(compilation, callback);
 *              执行callback：
 *                  ======调用插件======compilation.hooks.needAdditionalPass.call()
 *                  ======调用插件======this.hooks.done.callAsync(stats, ()=>{}), 回调调用======调用插件=====this.hooks.additionalPass.callAsync(()=>{})， 回调调用======调用插件=====this.hooks.failed.call(err)
 *              
 *              
 *              
 *              
 *              
 *              
 *              
 *              
 * compiler.hooks（新事件注册监听系统）
 * compiler._pluginCompat（兼容旧事件注册监听系统）
 * 
 * 内部插件注册顺序：
 *  SyncBailHook:
 * 1、_pluginCompat:(name: "Tapable camelCase")
 * 2、_pluginCompat:(name: "Tapable this.hooks")
 * 3、_pluginCompat:(name: "Compiler")
 * 4、beforeRun: NodeEnvironmentPlugin
 * 
 * 事件触发顺序：
 * compiler.hooks.environment.call();主要是options中的plugins
 * compiler.hooks.afterEnvironment.call();主要是options中的plugins
 * compiler.hooks.entryOption.call(options.context, options.entry);
 * compiler.hooks.afterPlugins.call(compiler);
 * compiler.hooks.afterResolvers.call(compiler);
 * 
 */
