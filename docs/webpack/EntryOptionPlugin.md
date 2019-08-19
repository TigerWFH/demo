# EntryOptionPlugin源码阅读

# [源码地址](https://github.com/webpack/webpack/blob/3b6d1495c3858d59cfdb46b2343c07f2e4c1316d/lib/EntryOptionPlugin.js)
# EntryOptionPlugin的作用
* 为compilation事件注册监听函数，并传入SingleEntryDependency和normalModuleFactory
* 为make事件注册监听函数，调用compilation.addEntry函数，传入entry参数
webpack会首先触发entryOption事件，执行相关的监听函数
```
const SingleEntryPlugin = require("./SingleEntryPlugin");
const MultiEntryPlugin = require("./MultiEntryPlugin");
const DynamicEntryPlugin = require("./DynamicEntryPlugin");

/** @typedef {import("../declarations/WebpackOptions").EntryItem} EntryItem */
/** @typedef {import("./Compiler")} Compiler */

/**
 * @param {string} context context path
 * @param {EntryItem} item entry array or single path
 * @param {string} name entry key name
 * @returns {SingleEntryPlugin | MultiEntryPlugin} returns either a single or multi entry plugin
 */
const itemToPlugin = (context, item, name) => {
	if (Array.isArray(item)) {
		return new MultiEntryPlugin(context, item, name);
	}
	return new SingleEntryPlugin(context, item, name);
};

module.exports = class EntryOptionPlugin {
	/**
	 * @param {Compiler} compiler the compiler instance one is tapping into
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.entryOption.tap("EntryOptionPlugin", (context, entry) => {
			if (typeof entry === "string" || Array.isArray(entry)) {
				itemToPlugin(context, entry, "main").apply(compiler);
			} else if (typeof entry === "object") {
				for (const name of Object.keys(entry)) {
					itemToPlugin(context, entry[name], name).apply(compiler);
				}
			} else if (typeof entry === "function") {
				new DynamicEntryPlugin(context, entry).apply(compiler);
			}
			return true;
		});
	}
};

```

# SingleEntryPlugin
# [源码地址](https://github.com/webpack/webpack/blob/3b6d1495c3858d59cfdb46b2343c07f2e4c1316d/lib/SingleEntryPlugin.js)
```
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";
const SingleEntryDependency = require("./dependencies/SingleEntryDependency");

/** @typedef {import("./Compiler")} Compiler */

class SingleEntryPlugin {
	/**
	 * An entry plugin which will handle
	 * creation of the SingleEntryDependency
	 *
	 * @param {string} context context path
	 * @param {string} entry entry path
	 * @param {string} name entry key name
	 */
	constructor(context, entry, name) {
		this.context = context;
		this.entry = entry;
		this.name = name;
	}

	/**
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			"SingleEntryPlugin",
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					SingleEntryDependency,
					normalModuleFactory
				);
			}
		);

		compiler.hooks.make.tapAsync(
			"SingleEntryPlugin",
			(compilation, callback) => {
				const { entry, name, context } = this;

				const dep = SingleEntryPlugin.createDependency(entry, name);
				compilation.addEntry(context, dep, name, callback);
			}
		);
	}

	/**
	 * @param {string} entry entry request
	 * @param {string} name entry name
	 * @returns {SingleEntryDependency} the dependency
	 */
	static createDependency(entry, name) {
		const dep = new SingleEntryDependency(entry);
		dep.loc = { name };
		return dep;
	}
}

module.exports = SingleEntryPlugin;
```

# SingleEntryDependency
# [源码地址](https://github.com/webpack/webpack/blob/3b6d1495c3858d59cfdb46b2343c07f2e4c1316d/lib/dependencies/SingleEntryDependency.js)
```
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";
const ModuleDependency = require("./ModuleDependency");

class SingleEntryDependency extends ModuleDependency {
	/**
	 * @param {string} request request path for entry
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "single entry";
	}
}

module.exports = SingleEntryDependency;
```

# ModuleDependency
# [源码地址](https://github.com/webpack/webpack/blob/3b6d1495c3858d59cfdb46b2343c07f2e4c1316d/lib/dependencies/ModuleDependency.js)
```
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";
const Dependency = require("../Dependency");

class ModuleDependency extends Dependency {
	/**
	 * @param {string} request request path which needs resolving
	 */
	constructor(request) {
		super();
		this.request = request;
		this.userRequest = request;
	}

	getResourceIdentifier() {
		return `module${this.request}`;
	}
}

module.exports = ModuleDependency;
```

# Dependency
# [源码地址](https://github.com/webpack/webpack/blob/3b6d1495c3858d59cfdb46b2343c07f2e4c1316d/lib/Dependency.js)
```
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const util = require("util");
const compareLocations = require("./compareLocations");
const DependencyReference = require("./dependencies/DependencyReference");

/** @typedef {import("./Module")} Module */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */

/**
 * @typedef {Object} DependencyTemplate
 * @property {function(Dependency, Source, RuntimeTemplate, Map<Function, DependencyTemplate>): void} apply
 */

/** @typedef {Object} SourcePosition
 *  @property {number} line
 *  @property {number=} column
 */

/** @typedef {Object} RealDependencyLocation
 *  @property {SourcePosition} start
 *  @property {SourcePosition=} end
 *  @property {number=} index
 */

/** @typedef {Object} SynteticDependencyLocation
 *  @property {string} name
 *  @property {number=} index
 */

/** @typedef {SynteticDependencyLocation|RealDependencyLocation} DependencyLocation */
class Dependency {
	constructor() {
		/** @type {Module|null} */
		this.module = null;
		// TODO remove in webpack 5
		/** @type {boolean} */
		this.weak = false;
		/** @type {boolean} */
		this.optional = false;
		/** @type {DependencyLocation} */
		this.loc = undefined;
	}

	getResourceIdentifier() {
		return null;
	}

	// Returns the referenced module and export
	getReference() {
		if (!this.module) return null;
		return new DependencyReference(this.module, true, this.weak);
	}

	// Returns the exported names
	getExports() {
		return null;
	}

	getWarnings() {
		return null;
	}

	getErrors() {
		return null;
	}

	updateHash(hash) {
		hash.update((this.module && this.module.id) + "");
	}

	disconnect() {
		this.module = null;
	}
}

// TODO remove in webpack 5
Dependency.compare = util.deprecate(
	(a, b) => compareLocations(a.loc, b.loc),
	"Dependency.compare is deprecated and will be removed in the next major version"
);

module.exports = Dependency;
```