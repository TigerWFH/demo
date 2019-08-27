执行顺序|事件|注册的监听插件|作用|备注
---|:--:|:--:|:--:|---
1|entryOption|DllPlugin,EntryOptionPlugin|
2|afterPlugins|
3|afterResolvers|
4|beforeRun|NodeEnvironmentPlugin|
5|run|
6|beforeCompile|
7|compile| | |编译
8|thisCompilation|JsonpTemplatePlugin,FetchCompileWasmTemplatePlugin<Br />NodeTemplatePlugin,ReadFileCompileWasmTemplatePlugin<Br />AggressiveMergingPlugin,AggressiveSplittingPlugin<Br />RuntimeChunkPlugin,SplitChunksPlugin<Br />EnvironmentPlugin,ExternalsPlugin<Br />LibraryTemplatePlugin,WarnNoModeSetPlugin| |
9|compilation|NodeSourcePlugin,FunctionModulePlugin<Br />JavascriptModulesPlugin,ChunkModuleIdRangePlugin<Br />EnsureChunkConditionsPlugin,FlagIncludedChunksPlugin<Br />LimitChunkCountPlugin,MergeDuplicateChunksPlugin<Br />MinChunkSizePlugin,ModuleConcatenationPlugin<Br />NaturalChunkOrderPlugin,OccurrenceOrderChunkIdsPlugin<Br />OccurrenceOrderModuleIdsPlugin,OccurrenceOrderPlugin<Br />RemoveEmptyChunksPlugin,RemoveParentModulesPlugin<Br />WasmFinalizeExportsPlugin,WebAssemblyModulesPlugin<Br />APIPlugin,AutomaticPrefetchPlugin<Br />BannerPlugin,CommonJsStuffPlugin<Br />CompatibilityPlugin,ConstPlugin<Br />DefinePlugin,DelegatedPlugin<Br />DllEntryPlugin,DllReferencePlugin<Br />DynamicEntryPlugin,EvalDevToolModulePlugin<Br />ExtendedAPIPlugin<Br />FlagDependencyExportsPlugin,FlagDependencyUsagePlugin<Br />FlagInitialModulesAsUsedPlugin,FunctionModulePlugin<Br />HashedModuleIdsPlugin,JavascriptModulesPlugin<Br />JsonModulesPlugin,LoaderOptionsPlugin<Br />LoaderTargetPlugin,MultiEntryPlugin<Br />NamedChunksPlugin,NamedModulesPlugin<Br />NodeStuffPlugin,NoEmitOnErrorsPlugin<Br />PrefetchPlugin,ProgressPlugin<Br />ProvidePlugin,RecordIdsPlugin<Br />RequireJsStuffPlugin,SourceMapDevToolPlugin<Br />TemplatedPathPlugin,UseStrictPlugin<Br />WarnCaseSensitiveModulesPlugin| |
10|make|AutomaticPrefetchPlugin,MultiEntryPlugin| |链接、打包（compilation）
11|compilation的系列事件| | |打包
12|afterCompile|
13|shouldEmit|NoEmitOnErrorsPlugin| |
14|emit|LibManifestPlugin| |
15|afterEmit|SizeLimitsPlugin|
16|done|ProgressPlugin, | |
17|additionalPass| | |
18|failed| | |
19|normalModuleFactory|SideEffectsFlagPlugin,IgnorePlugin,NormalModuleReplacementPlugin|
20|afterCompile|AutomaticPrefetchPlugin|
21|contextModuleFactory|ContextExclusionPlugin,ContextReplacementPlugin,IgnorePlugin| |
22|additionalPass|HotModuleReplacementPlugin|
23|environment| | |
24|afterEnvironment|WatchIgnorePlugin| |


