<template><div><h2 id="文件组成" tabindex="-1"><a class="header-anchor" href="#文件组成"><span>文件组成 <Badge text="重要" type="error" /></span></a></h2>
<p>小程序的代码由四种文件组成:</p>
<ul>
<li><code v-pre>.json</code> 后缀的 JSON 配置文件，主要用作小程序配置</li>
<li><code v-pre>.wxml</code> 后缀的 WXML 模板文件，为视图层，相当于 HTML</li>
<li><code v-pre>.wxss</code> 后缀的 WXSS 样式文件，为样式部分，相当于 CSS</li>
<li><code v-pre>.js</code> 后缀的 JS 脚本逻辑文件，为脚本部分，处理小程序逻辑与行为</li>
</ul>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构 <Badge text="重要" type="error" /></span></a></h2>
<p>小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。</p>
<p>一个小程序主体部分由三个文件组成，必须放在项目的根目录:</p>
<table>
<thead>
<tr>
<th>文件</th>
<th>必需</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>app.js</td>
<td>是</td>
<td>小程序逻辑</td>
</tr>
<tr>
<td>app.json</td>
<td>是</td>
<td>小程序公共配置</td>
</tr>
<tr>
<td>app.wxss</td>
<td>否</td>
<td>小程序公共样式表</td>
</tr>
</tbody>
</table>
<p>一个小程序页面由四个文件组成:</p>
<table>
<thead>
<tr>
<th>文件</th>
<th>必需</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>js</td>
<td>是</td>
<td>页面逻辑</td>
</tr>
<tr>
<td>wxml</td>
<td>是</td>
<td>页面结构</td>
</tr>
<tr>
<td>json</td>
<td>否</td>
<td>页面配置</td>
</tr>
<tr>
<td>wxss</td>
<td>否</td>
<td>页面样式表</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名。</p>
<p>这样开发者工具会自动将它们视作一个小程序页面的不同代码部分。</p>
</div>
<h3 id="允许上传的文件" tabindex="-1"><a class="header-anchor" href="#允许上传的文件"><span>允许上传的文件 <Badge text="不重要" type="grey" /></span></a></h3>
<p>见页脚<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<h2 id="json-配置" tabindex="-1"><a class="header-anchor" href="#json-配置"><span>JSON 配置</span></a></h2>
<p>JSON 是一种数据格式，<strong>在小程序中，JSON 负责描述小程序的静态配置，负责配置项目、小程序整体和每个页面。</strong></p>
<p>我们可以看到在项目的根目录有一个 <code v-pre>app.json</code> 和 <code v-pre>project.config.json</code>，此外在 <code v-pre>pages/logs</code> 目录下还有一个 <code v-pre>logs.json</code>。下面是它们的用途说明。</p>
<h3 id="小程序配置-app-json" tabindex="-1"><a class="header-anchor" href="#小程序配置-app-json"><span>小程序配置 app.json <Badge text="重要" type="error" /></span></a></h3>
<p>app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。QuickStart 项目里边的 app.json 配置内容如下:</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "pages"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pages/index/index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pages/logs/logs"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "window"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "backgroundTextStyle"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"light"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "navigationBarBackgroundColor"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#fff"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "navigationBarTitleText"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"WeChat"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "navigationBarTextStyle"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"black"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><ul>
<li>
<p><code v-pre>pages</code> 字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前您的小程序页面定义在哪个目录。</p>
</li>
<li>
<p><code v-pre>window</code> 字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。</p>
</li>
</ul>
<p>其他配置项可以参考文档 <RouteLink to="/code/mini-app/guide/config/app-config.html">全局配置</RouteLink>。</p>
<h3 id="页面配置-page-json" tabindex="-1"><a class="header-anchor" href="#页面配置-page-json"><span>页面配置 page.json <Badge text="简单了解" /></span></a></h3>
<p>这里的 <code v-pre>page.json</code> 其实用来表示小程序页面相关的配置。</p>
<p>如果您整个小程序的风格是蓝色调，那么您可以在 <code v-pre>app.json</code> 里边声明顶部颜色是蓝色即可。实际您可能希望小程序里边的每个页面都有不一样的色调来区分不同功能模块，<code v-pre>page.json</code> 就提供了定义每个页面的一些属性的能力。</p>
<p>配置项可以参考文档 <RouteLink to="/code/mini-app/guide/config/page-config.html">页面配置</RouteLink>。</p>
<h3 id="工具配置-project-config-json" tabindex="-1"><a class="header-anchor" href="#工具配置-project-config-json"><span>工具配置 project.config.json <Badge text="不重要" type="grey" /></span></a></h3>
<p>通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，当您换了另外一台电脑重新安装工具的时候，您还要重新配置。</p>
<p>考虑到这点，小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，您在工具上做的任何配置都会写入到这个文件，当您重新安装工具或者换电脑工作时，您只要载入同一个项目的代码包，开发者工具就自动会帮您恢复到当时您开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。</p>
<p>其他配置项细节可以参考文档 <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html" target="_blank" rel="noopener noreferrer">开发者工具的配置</a>。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>更多 JSON 相关教程，请查看 <RouteLink to="/code/language/json/">JSON 教程</RouteLink></p>
</div>
<h2 id="wxml-模板" tabindex="-1"><a class="header-anchor" href="#wxml-模板"><span>WXML 模板 <Badge text="重要" type="error" /></span></a></h2>
<p>在小程序中 WXML 充当的就是类似 HTML 的角色。打开 <code v-pre>pages/index/index.wxml</code>，您会看到以下的内容:</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"container"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userinfo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> wx:if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{!hasUserInfo && canIUse}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> 获取头像昵称 &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> wx:else></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">image</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{userInfo.avatarUrl}}"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> background-size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cover"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userinfo-nickname"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{userInfo.nickName}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"usermotto"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"user-motto"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{motto}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 HTML 非常相似，WXML 由标签、属性等等构成。但是也有很多不一样的地方，我们来一一阐述一下:</p>
<ul>
<li>
<p>自己的一套标签名称</p>
<blockquote>
<p>e.g.: 小程序把最常见的 <code v-pre>&lt;span /&gt;</code> 改成了 <code v-pre>&lt;text /&gt;</code>，<code v-pre>&lt;div /&gt;</code> 改成了 <code v-pre>&lt;view /&gt;</code></p>
</blockquote>
</li>
</ul>
<div v-pre>
<ul>
<li>多了一些 <code v-pre>wx:if</code> 这样的属性以及 <code v-pre>{{ }}</code> 这样的表达式</li>
</ul>
</div>
<p>由于小程序不允许用户进行 DOM 操作，所以小程序在编译的时候就要编译好整个的 DOM 结构。</p>
<p>小程序下通过提供动态绑定、条件渲染与循环渲染帮助您去动态改变编译好的 DOM 结构。</p>
<p>更详细的文档可以参考 <RouteLink to="/code/mini-app/guide/view/wxml.html">WXML</RouteLink> 。</p>
<h2 id="动态绑定" tabindex="-1"><a class="header-anchor" href="#动态绑定"><span>动态绑定 <Badge text="重要" type="error" /></span></a></h2>
<p>动态绑定负责把 JS 的变量映射绑定到 WXML 上，也就是说负责把逻辑层的变量显示在视图层的具体位置。</p>
<p>WXML:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{msg}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>JS 只需要管理状态即可:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Hello World"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> });</span></span></code></pre>
</div><div v-pre>
<p>通过 <code v-pre>{{ }}</code> 的语法把一个变量绑定到界面上，我们称为数据绑定。仅仅通过数据绑定还不够完整的描述状态和界面的关系，还需要 <code v-pre>if</code> / <code v-pre>else</code>, <code v-pre>for</code> 等控制能力，在小程序里边，这些控制能力都用 <code v-pre>wx:</code> 开头的属性来表达。</p>
</div>
<h2 id="wxss-样式" tabindex="-1"><a class="header-anchor" href="#wxss-样式"><span>WXSS 样式 <Badge text="重要" type="error" /></span></a></h2>
<p>WXSS 具有 CSS 大部分的特性，也做了一些扩充和修改。</p>
<ul>
<li>
<p>新增了尺寸单位。WXSS 在底层支持新的尺寸单位 rpx ，规定屏幕宽 750 rpx。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差。</p>
<p>所以 Mister.Duan 并不建议使用 rpx 单位。</p>
</div>
</li>
<li>
<p>提供了全局的样式和局部样式。</p>
<p>和前边 <code v-pre>app.json</code>, <code v-pre>page.json</code> 的概念相同，您可以写一个 <code v-pre>app.wxss</code> 作为全局样式，会作用于当前小程序的所有页面，局部页面样式 <code v-pre>page.wxss</code> 仅对当前页面生效。</p>
</li>
<li>
<p>此外 WXSS 仅支持部分 CSS 选择器</p>
</li>
</ul>
<p>更详细的文档可以参考 <RouteLink to="/code/mini-app/guide/view/wxss.html">WXSS</RouteLink>。</p>
<h2 id="js-逻辑交互" tabindex="-1"><a class="header-anchor" href="#js-逻辑交互"><span>JS 逻辑交互 <Badge text="重要" type="error" /></span></a></h2>
<p>小程序仅仅只有界面展示是不够的，还需要和用户做交互: 响应用户的点击、获取用户的位置等等。小程序通过 JS 脚本文件来处理用户的操作。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{ msg }}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"clickMe"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>点击我&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>点击 button 按钮的时候，我们希望把界面上 <code v-pre>msg</code> 显示成 <code v-pre>&quot;Hello World&quot;</code>，于是我们在 button 上声明一个属性: <code v-pre>bindtap</code> ，在 JS 文件里边声明了 <code v-pre>clickMe</code> 方法来响应这次点击操作:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  clickMe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Hello World"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><p>响应用户的操作就是这么简单，更详细的事件可以参考文档 <RouteLink to="/code/mini-app/guide/view/event.html">WXML - 事件</RouteLink> 。</p>
<p>此外您还可以在 JS 中调用小程序提供的丰富的 API，利用这些 API 可以很方便的调起微信提供的能力，例如获取用户信息、本地存储、微信支付等。在前边的 QuickStart 例子中，在 <code v-pre>pages/index/index.js</code> 就调用了 <code v-pre>wx.getUserInfo</code> 获取微信用户的头像和昵称，最后通过 <code v-pre>setData</code> 把获取到的信息显示到界面上。</p>
<p>更多 API 可以参考文档 <RouteLink to="/code/mini-app/guide/service/api/">小程序的 API</RouteLink> 。</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到: <code v-pre>.js</code>、<code v-pre>app.json</code>、<code v-pre>.wxml</code>、<code v-pre>*.wxss</code>(其中 <code v-pre>wxml</code> 和 <code v-pre>wxss</code> 文件仅针对在 <code v-pre>app.json</code> 中配置了的页面)。除此之外，只有后缀名在白名单内的文件可以被上传。具体白名单列表如下:</p>
<ul>
<li>wxs</li>
<li>png</li>
<li>jpg</li>
<li>jpeg</li>
<li>gif</li>
<li>svg</li>
<li>json</li>
<li>cer</li>
<li>mp3</li>
<li>aac</li>
<li>m4a</li>
<li>mp4</li>
<li>wav</li>
<li>ogg</li>
<li>silk</li>
</ul>
 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li>
</ol>
</section>
</div></template>


