<template><div><p>函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。</p>
<p>而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。</p>
<p>我们首先要搞明白计算机(Computer)和计算(Compute)的概念。</p>
<p>在计算机的层次上，CPU 执行的是加减乘除的指令代码，以及各种条件判断和跳转指令，所以，汇编语言是最贴近计算机的语言。</p>
<p>而计算则指数学意义上的计算，越是抽象的计算，离计算机硬件越远。</p>
<p>对应到编程语言，就是越低级的语言，越贴近计算机，抽象程度低，执行效率高，比如 C 语言；越高级的语言，越贴近计算，抽象程度高，执行效率低，比如 Lisp 语言。</p>
<p>函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量，因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。</p>
<p>函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数!</p>
<p>Python 对函数式编程提供部分支持。由于 Python 允许使用变量，因此，Python 不是纯函数式编程语言。</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/language/python/functional-programming/high-order-function/intro.html">高阶函数介绍</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/high-order-function/map-and-reduce.html">map / reduce</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/high-order-function/filter.html">filter</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/high-order-function/sorted.html">sorted</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/return-function.html">返回函数</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/anonymous-function.html">匿名函数</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/decorator.html">装饰器</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/language/python/functional-programming/parital-function.html">偏函数</RouteLink></p>
</li>
</ul>
</div></template>


