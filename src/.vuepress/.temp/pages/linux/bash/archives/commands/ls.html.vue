<template><div><h1 id="ls" tabindex="-1"><a class="header-anchor" href="#ls"><span>ls</span></a></h1>
<p><code v-pre>ls</code> 命令用于列出当前目录里面的文件和子目录。</p>
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<ul>
<li>a: 列出隐藏文件</li>
<li>l: 以长格式列出文件</li>
<li>t: 按最后编辑日期排序，最新的最先。这在某个大目录里找出最近修改的文件列表时很有用，比如将结果导入( pipe ) head 或者 sed 10q。或许加上 -l 会效果更好。当然如果您想获取最旧的文件列表，只要加 -r 反转列表即可。</li>
<li>X: 按文件类型分类。这在多语言或多后缀的项目中特别方便，比如头文件和源文件分开，或区分开源文件和生成文件或目录。</li>
<li>v: 按照文件名里的版本号排序。</li>
<li>S: 按文件大小排序。</li>
<li>R: 递归地列举文件。这个选项和 -l 组合使用并将结果导出到 less 效果很好。</li>
</ul>
<p>可以把结果导出给类似 vim 的进程。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -XR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span></span></code></pre>
</div></div></template>


