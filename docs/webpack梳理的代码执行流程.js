/**
 * 1、校验options参数
 * 2、创建compiler实例
 *      let compiler = new Compiler(options.context);
 *      2-1: 调用Compiler的constructor函数
 *      2-2: 调用super，创建兼容_pluginCompat属性（实质是SyncHook，SyncHook返回的是Hook实例），同时注册两个plugin:
 *          =========_pluginCompat:(name: "Tapable camelCase")========
 *          =========_pluginCompat:(name: "Tapable this.hooks")========
 *      2-3: 创建不同的事件对象（就是不同的Hooks，本质同_pliginCompat，最终还是Hook实例）
 *      2-4: 将配置参数赋给compiler.options = options
 * 2、创建NodeEnviromentPlugin实例
 *      2-1:  创建实例environment
 *      2-2:  调用environment.apply(compiler);
 *              compiler.infrastructureLogger = createConsoleLogger();
 *              compiler.inputFileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), 60000);
 *              compiler.outputFileSystem = new NodeOutputFileSystem();
 *              compiler.watchFileSystem = new NodeWatchFileSystem(compiler.inputFileSystem);
 *              ======compiler.hooks.before.tap("NodeEnvronmentPlugin", ()=>{})
 * 3、处理options参数，即根据options.target的配置，注册不同的内部插件
 *      3-1: compiler.options = new WebpackOptionsApply().process(options, compiler);
 *           compiler.outputPath = options.output.path;
 *           "web": =======JsonpTemplatePlugin, FetchCompileWasmTemplatePlugin, FunctionModulePlugin, NodeSourcePlugin, LoaderTargetPlugin
 *           "webworker": =======WebWorkerTemplatePlugin, FetchCompileWasmTemplatePlugin, FunctionModulePlugin, NodeSourcePlugin, LoaderTargetPlugin
 *           "node || async-node": =======NodeTemplatePlugin, ReadFileCompileWasmTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, LoaderTargetPlugin
 *           "node-webkit": ======JsonpTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, ExternalsPlugin, LoaderTargetPlugin
 *           "electron-main": =======NodeTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, ExternalsPlugin, LoaderTargetPlugin
 *           "electron-renderer || electron-preload": ======JsonpTemplatePlugin, NodeTemplatePlugin, FetchCompileWasmTemplatePlugin, FunctionModulePlugin, NodeTargetPlugin, ExternalsPlugin, LoaderTargetPlugin
             如果配置了options.output.ibrary，就注册======LibraryTemplatePlugin插件
             如果配置了options.externals，就注册=======ExternalsPlugin插件
             如果options.devtool，就注册======EvalSourceMapDevToolPlugin
                或者======SourceMapDevToolPlugin
                或者======EvalDevToolModulePlugin，JavascriptModulesPlugin，JsonModulesPlugin，WebAssemblyModulesPlugin，
                注册======EntryOptionPlugin之后，直接调用
                ******调用插件*****compiler.hooks.entryOption.call(options.context, options.entry);
                ======CompatibilityPlugin
                ======HarmonyModulesPlugin
            如果配置了options.amd,
                ======AMDPlugin, RequireJsStuffPlugin, CommonJsPlugin, LoaderPlugin,
            如果配置了options.node,
                ======NodeStuffPlugin
            ======CommonJsStuffPlugin, APIPlugin, ConstPlugin, UseStrictPlugin, RequireIncludePlugin, RequireEnsurePlugin, RequireContextPlugin, ImportPlugin, SystemPlugin,
            如果配置了options.mode,
                ======WarnNoModeSetPlugin
            ======EnsureChunkConditionsPlugin
            如果配置了options.optimization.removeAvailableModules,
                ======RemoveParentModulesPlugin
            如果配置了options.optimization.removeEmptyChunks，
                ======RemoveEmptyChunksPlugin
            如果配置了options.optimization.mergeDuplicateChunks，
                ======MergeDuplicateChunksPlugin
            如果配置了options.optimization.flagIncludedChunks，
                ======FlagIncludedChunksPlugin
            如果配置了options.optimization.sideEffects
                ======SideEffectsFlagPlugin
            如果配置了options.optimization.providedExports，
                ======FlagDependencyExportsPlugin
            如果配置了options.optimization.usedExports，
                ======FlagDependencyUsagePlugin
            如果配置了options.optimization.concatenateModules，
                ======ModuleConcatenationPlugin
            如果配置了options.optimization.splitChunks，
                ======SplitChunksPlugin
            如果配置了options.optimization.runtimeChunk，
                ======RuntimeChunkPlugin
            如果配置了options.optimization.noEmitOnErrors
                ======NoEmitOnErrorsPlugin
            如果配置了options.optimization.checkWasmTypes
                ======WasmFinalizeExportsPlugin
            根据options.optimization.moduleIds的不同值，注册不同的插件
                ======NamedModulesPlugin 或者 HashedModuleIdsPlugin 或者 OccurrenceModuleOrderPlugin 或者 OccurrenceModuleOrderPlugin
            根据options.optimization.chunkIds的不同值，注册不同的插件
                ======NaturalChunkOrderPlugin，NamedChunksPlugin 或者 OccurrenceChunkOrderPlugin 或者 OccurrenceChunkOrderPlugin
            如果配置了options.optimization.nodeEnv
                ======DefinePlugin
            如果配置了options.optimization.minimize
                ======注册配置项自定义的插件
            如果配置了options.performance，
                ======SizeLimitsPlugin
            ======TemplatedPathPlugin
            ======RecordIdsPlugin
            ======WarnCaseSensitiveModulesPlugin
            如果配置了options.cache，
                ======CachePlugin
            ******调用插件****compiler.hooks.afterPlugins.call(compiler);
            ======compiler.resolverFactory.hooks.resolveOptions.for('normal').tap('WebpackOptionsApply', ()=>{});
            ======compiler.resolverFactory.hooks.resolveOptions.for('context').tap('WebpackOptionsApply', ()=>{});
            ======compiler.resolverFactory.hooks.resolveOptions.for('loader').tap('WebpackOptionsApply', ()=>{});
            ******调用插件****compiler.hooks.afterResolvers.call(compiler);
        process: return options
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
 *              条件调用
 *              ******调用插件******this.hooks.shouldEmit.call(compilation)
 *              ******调用插件******this.hooks.done.callAsync(stats, cb12)
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
