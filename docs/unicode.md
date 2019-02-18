# 字符集和编码方案

* `字符（符号）`Character：A，王等都是单个字符

* `字符集（符号集）`Character Set：所有字符的集合

* `代码点`，Code Point：与字符（符号）对应的整数数字，比如0对应48，a对应97，A对应65

* `代码(点)空间`，Code Space：所有代码点的集合

* `代码点平面`，Code Plane：Unicode将代码点空间均分成了17个平面，#0-#16，每一个平面容纳65536个代码点，且Unicode能编码17*65536=1114112个字符

* `重点`：Unicode规定了某个字符对应的整数，但是如何存储如何传输并没有对应的规定，这就衍生出了UTF-8，UTF-16等等实际解决方案

* 字符编码集：为每一个`字符`分配一个唯一的ID（学名为`码位`、`码点`、`Code Point`）

* 码元(code unit)：编码方案中最小字节，例如：utf8码元是8bit，utf16是16bit，utf32是32bit
    
* 编码方案：将`码位（Code Point）`转换成`字节序列`（储存或传输）的规则。

	譬如：utf-8，utf-16，utf-32

	广泛的来讲，unicode是一个标准，定义了字符集以及一系列的编码规则，即Unicode字符集和UTF-8、UTF-16、UTF-32等等编码方案……

	ansi的askii（American Standard Code for Information Interchange）字符集是使用8位表示127个字符；
	
	出现了新的符号，就继续扩展，出现了askii扩展字符集，但8位最多能表示256个字符；

	汉字更多，8位的已经无法标识，于是127之后的所有状态全部用16位来表示，扩展成GB2313，再后来扩展成GBK、GB8030。此时此刻，台湾地区出现了BIG5字符集……这些统称为DBCS（Double Byte Charecter Set），为了统一起来，让字符集通用，ISO组织制作了Unicode字符集。

	demo:

	raw binary: 0000000001000001

	askii   0和A
	
	utf-16   A

# 关于UNICODE

* 发展史

    ascii--->GB2312--->GBK--->GB18030

    ascii--->unicode(ISO和协会两个组织合并的结果)

    `Unicode`, Universal Multiple-Octet Coded Character Set, 简称为UCS

    `UCS`只是规定如何编码，并没有规定如何传输、保存这个编码，例如“汉”字的UCS编码是6C49，我可以用4个ascii数字来传输、保存这个编码；也可以用utf-8编码:3个连续的字节E6 B1 89来表示它。关键在于通信双方都要认可。UTF-8、UTF-7、UTF-16都是被广泛接受的方案。UTF-8的一个特别的好处是它与ISO-8859-1完全兼容。
    
    `UTF`是“UCS Transformation Format”的缩写。

    UTF-8以字节为编码单元，没有字节序的问题。UTF-16以两个字节为编码单元，在解释一个UTF-16文本前，首先要弄清楚每个编码单元的字节序。

* 关键点概述

    unicode编码点分为17个平面（plane），每一个平面包含65536(2^16)个码点(code point)。17个平面的代码点(码位)为U+0到U+10FFFF

    基本多文种平面(Basic Multilingual Plane, BMP)，或称第0平面(Plane 0)，是unicode中的一个编码平面，取值区间：U+0000-U+FFFF