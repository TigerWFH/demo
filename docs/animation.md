# 伪元素，伪类，pseudo classes
[参考资料](https://www.cnblogs.com/ihardcoder/p/5294927.html)
# animation，适用所有元素包括after和before，用来指定一组或多组动画，每组之间用逗号相隔
序号|属性名|默认值|作用|值域
---|:--|:--|:--|:---
1|`animation-name:`|none|动画名称
2|`animation-duration:`|0s|动画时长，单位为秒或微妙，没有单位无效
3|`animation-timing-function:`|ease|作用于关键帧，可以有多个值|{linear,ease,ease-in,ease-in-out,ease-out,step-start,step-end}
4|`animation-delay:`|0s|动画延迟执行时长，单位为秒或微妙，没有单位无效
5|`animation-iteration-count:`|1|动画播放次数，可以使用小数，不能用负数
6|`animation-direction:`|normal|动画是否反向播放|{normal,alternate,reverse,alternate-reverse}
7|`animation-fill-mode:`|none|动画执行前，执行后，元素的状态|{none,forwards,backwards,both}
8|`animation-play-state:`|running|当前动画状态|{pause,running}
# transition，让元素在两种state之间进行过渡，可以使用伪类触发这种状态过渡
序号|属性名|默认值|作用|值域
---|:--|:--|:--|:---
1|`transition-property:`|
2|`transition-duration:`|
3|`transition-timing-function:`|
4|`transition-delay:`|