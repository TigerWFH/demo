<!--
heuristic的翻译：探索
参考资料：https://book.douban.com/review/6849274/
-->

<!--
 reconciliation:
		a situation in which two people or groups of people become friendly again after they have argued;
		the process of making two opposite beliefs, ideas, or situations agree
		根据英文解释，此处翻译成一致化，就是使处理结果达成一致（对于react而言，就是新js对象树（虚拟dom）与旧js对象树对比，重新确定js对象树的过程）。
- -->
<!-- -
- heuristics：
	- The technical definition of heuristic is a simple procedure that helps find adequate， though often imperfect, answers to difficult questions. The word comes from the same root as eureka.
	- a method of solving problems by finding practical ways of dealing with them, learning from past experience.
	- 此处翻译成探索(性)
-  -->
## 一致化（Reconciliation）
React提供了声明式API，所以你不必每次都去详细的查询React的更新变化。这使编写程序变得更加容易多了，但是React内部的详细实现细节就变得不是那么清晰可见了。本文阐述了在确保组件更新可预测且满足高性能应用的（足够快）快速响应的前提下，React实现差异化（diffing）算法时所做的取舍。
## 动机（Motivation）
使用React时，在任何时候render()函数的作用都是一样的，即创建一个React元素树（即js对象树，虚拟DOM）。当state状态或者props属性发生更改时，render()函数会创建一个不同的新React元素树。那么React就需要知道如何根据最新的React元素树来高效的更新UI。

对于如何（根据新旧React元素树差异并）以最少的操作来更新底层DOM的算法问题，是有一些通用的解决方案。但是，但元素树中的元素个数为n时，最好算法的时间复杂度也要达到O(n^3)。

如果在React中使用这些算法，当渲染1000个元素时大概需要10亿次比较，代价实在是太高了。所以，React基于以下两个假设条件，实现了一个探索性的算法：

1. 两个不同的元素会创建出两个不同的React元素树
2. 开发者可以为子元素增加一个key属性，告诉react在render函数的反复调用中该值元素是稳定不变的。

在实践中，这两个假设在大多数应用场景中是有效的。
## 差异化算法（The Diffing Algorithm）
当比对两个React元素树时，React首相比较两个数的更元素。根据跟元素的类型采用不同的处理策略。
### 不同类型的元素（Elements Of Different Types）
任何时候，只要根元素的类型不同，React都会销毁旧的React元素树并重新创建新的React元素树。从\<a>到\<img>，或者从\<Article>到\<Comment>，或者从\<Button>到\<div>这些所有元素类型的改变都会引起React元素树的销毁和重建。

当销毁React元素树时，旧的DOM结点也会被销毁。组件的实例就会调用componentWillUnmount函数。当构建新的React元素树时，对应的新DOM结点会插入到DOM中。此时，组件实例会调用componentWillMount函数和componentDidMount函数。所有与旧的React元素树相关的状态数据都会丢失。

根元素下的所有子元素也会被卸载且与之关联的状态数据也会被销毁。例如，以下代码的比较：
```
<div>
	<Counter />
</div>
<span>
	<Counter />
</span>
```
这段代码，会销毁旧的Counter组件，并重新构建新的Counter组件。
### 相同类型的元素（DOM Elements Of The Same Type）
当比较像个同类型的React DOM元素时，React会检查两者的属性，保留相同的底层DOM结点不变，同时仅仅更新发生变化的属性。例如：
```
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```
通过对比这两个元素，React知道仅仅需要修改底层DOM结点的className属性就可以了。

当更新style这个属性时，React也知道仅仅需要更新对象中的某个属性就可以了。例如：
```
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />
```
通过对比这两个元素，React知道仅仅修改color这个样式，而不需要修改fontWeight。

处理过根DOM结点后，React会递归处理根DOM结点的子结点。
### Component Elements Of The Same Type
当组件更新时，组件实例保持不变，所以在render多次调用过程中状态数据是持续存在的。React依据新元素来更新底层组件实例的的props属性，并会调用底层组件的componentWillReceiveProps()和componentWillUpdate()函数。

接下来，调用render()函数生成新的React元素树，且React通过差异化算法递归计算出新旧React元素树的差异并更新底层DOM结构。
### 递归子结点（Recursing On Children）
默认，当递归DOM结点的子结点时，React会同时遍历两个列表的所有子结点并在子结点不同的地方生成一个变化提示。

例如，当在子结点的末尾添加新元素时，新旧树之间的转换很有效：
```
<ul>
	<li>first</li>
	<li>second</li>
</ul>
<ul>
	<li>first</li>
	<li>second</li>
	<li>third</li>
</ul>
```
React会对比两个列表中的\<li>first\</li>,\<li>second\</li>元素，然后会（在底层DOM结构中）插入\<li>third\</li>子树。

如果你的的实现很傻很天真，即在子结点的开始位置插入新结点，这样做会使React的性能变得更差。例如，下面代码中新旧React元素树的转变性能就更差一些：
```
<ul>
	<li>Duke</li>
	<li>Villanova</li>
</ul>
<ul>
	<li>Connecticut</li>
	<li>Duke</li>
	<li>Villanova</li>
</ul>
```
React会为每一个子结点生成一个变化提示（注释：此处会卸载两个旧的子结点，再生成三个新的子结点），而不是完整的保留已经存在的子结点。这种低性能操作会一起大麻烦。
### key属性（Keys）
为了解决上述的低性能问题，React支持key属性。当子结点有了key属性时，React就可以借助key属性直接对比新旧React对象树中的子结点。例如，在上述的低性能示例代码中，为子结点添加key属性，会使转换变得高效：
```
<ul>
	<li key="2015">Duke</li>
	<li key="2016">Villanova</li>
</ul>
<ul>
	<li key="2014">Connecticut</li>
	<li key="2015">Duke</li>
	<li key="2016">Villanova</li>
</ul>
```
借助key属性，React就知道了key值是'2014'的是新的子结点，key值为'2015'，'2016'的元素仅仅需要移动一下位置就可以了（不用删除重建）。

实际上，找到合适的key值并不难。你要展示的元素自身可能就带有独一无二的ID属性，所以可以使用你数据中某一项作为key值：
```
<li key={item.id}>{item.name}</li>
```
以上的业务场景不存在时（注：就是说没有item.id属性时），你可以自行添加新的ID属性或者将字组件的部分内容做哈希生成一个key值。key值只要求在子结点中具有唯一性，而不是全局唯一性。

或者使用最后的手段，使用数组中元素的索引作为key值。只要数组中的数据不重新排序，就不会出现问题，如果出现了重排序，React效率就会变慢。
## 折中方案（Tradeoffs）
重要的是要记住，一致化算法是实现细节。React可能会在每一个操作上都渲染一次整个应用；最终的结果还是一样的。我们经常改进探索性方案，以便使常见的用例更快。

在目前的实现中，你可以在子树的兄弟结点位置中移动子树，但是不能把它移动到其它的地方。否则，算法会重新渲染整个子树。

因为React依赖探索性的一致化算法，如果一致化算法的假设基础不能够满足，性能就会有损失。
1. 算法不会尝试匹配不同类型组件的子树。如果你发现两个输出非常类似的不同类型组件交替出现，你可能希望将它变为同一类型。实践中，我们还没有发现这会成为问题。
2. key属性要是不变的、可预测的、唯一的。易变的key值（像使用Math.random()函数生成的值）将会导致非常多的组件实例，而且不必要的重复创建DOM 结点行为，会导致子组件的性能下降和状态的丢失。