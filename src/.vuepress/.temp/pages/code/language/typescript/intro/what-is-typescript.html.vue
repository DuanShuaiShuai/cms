<template><div><p>首先，我对 TypeScript 的理解如下:</p>
<p><a href="http://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> 是 JavaScript 的一个超集，主要提供了<strong>类型系统</strong>和<strong>对 ES6 的支持</strong>，它由 Microsoft 开发，代码<a href="https://github.com/Microsoft/TypeScript" target="_blank" rel="noopener noreferrer">开源于 GitHub</a> 上。</p>
<p>其次引用<a href="http://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">官网</a>的定义:</p>
<blockquote>
<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.</p>
</blockquote>
<p>翻译成中文即是:</p>
<blockquote>
<p>TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。</p>
</blockquote>
<!-- more -->
<h2 id="为什么选择-typescript" tabindex="-1"><a class="header-anchor" href="#为什么选择-typescript"><span>为什么选择 TypeScript</span></a></h2>
<p><a href="http://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript 官网</a>列举了一些优势，不过我更愿意自己总结一下:</p>
<h3 id="typescript-增加了代码的可读性和可维护性" tabindex="-1"><a class="header-anchor" href="#typescript-增加了代码的可读性和可维护性"><span>TypeScript 增加了代码的可读性和可维护性</span></a></h3>
<ul>
<li>类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了</li>
<li>可以在编译阶段就发现大部分错误，这总比在运行时候出错好</li>
<li>增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等</li>
</ul>
<h3 id="typescript-非常包容" tabindex="-1"><a class="header-anchor" href="#typescript-非常包容"><span>TypeScript 非常包容</span></a></h3>
<ul>
<li>TypeScript 是 JavaScript 的超集，<code v-pre>.js</code> 文件可以直接重命名为 <code v-pre>.ts</code> 即可</li>
<li>即使不显式的定义类型，也能够自动做出<RouteLink to="/code/language/typescript/basics/type-inference.html">类型推论</RouteLink></li>
<li>可以定义从简单到复杂的几乎一切类型</li>
<li>即使 TypeScript 编译报错，也可以生成 JavaScript 文件</li>
<li>兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取</li>
</ul>
<h3 id="typescript-拥有活跃的社区" tabindex="-1"><a class="header-anchor" href="#typescript-拥有活跃的社区"><span>TypeScript 拥有活跃的社区</span></a></h3>
<ul>
<li>大部分第三方库都有提供给 TypeScript 的类型定义文件</li>
<li>Google 开发的 Angular2 就是使用 TypeScript 编写的</li>
<li>TypeScript 拥抱了 ES6 规范，也支持部分 ESNext 草案的规范</li>
</ul>
<h3 id="typescript-的缺点" tabindex="-1"><a class="header-anchor" href="#typescript-的缺点"><span>TypeScript 的缺点</span></a></h3>
<p>任何事物都是有两面性的，我认为 TypeScript 的弊端在于:</p>
<ul>
<li>有一定的学习成本，需要理解接口(Interfaces)、泛型(Generics)、类(Classes)、枚举类型(Enums)等前端工程师可能不是很熟悉的概念</li>
<li>短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本</li>
<li>集成到构建流程需要一些工作量</li>
<li>可能和一些库结合的不是很完美</li>
</ul>
<p>大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。</p>
</div></template>


