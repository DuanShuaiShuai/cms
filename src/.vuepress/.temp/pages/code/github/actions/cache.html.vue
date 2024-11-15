<template><div><p>这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。</p>
<p>日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。</p>
<p>当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。</p>
<div class="hint-container info">
<p class="hint-container-title">缓存依赖</p>
<p>关于缓存依赖的文档，详见 <a href="https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows" target="_blank" rel="noopener noreferrer">缓存依赖项以加快工作流程</a>。</p>
</div>
<!-- more -->
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>path</span></a></h3>
<p>要缓存和还原的文件，目录和通配符模式的列表。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>支持的 glob 模式，请参见 <a href="https://github.com/actions/toolkit/tree/main/packages/glob" target="_blank" rel="noopener noreferrer">@actions/glob</a>。</p>
</div>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h3>
<p>用于保存缓存与还原缓存的的密钥</p>
<h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys"><span>restore-keys</span></a></h3>
<p>当 key 没有命中缓存是用于恢复缓存键值的有序列表</p>
<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h2>
<p><code v-pre>cache-hit</code>: 一个布尔值，表明是否找到与该键完全匹配的值</p>
<h2 id="缓存范围" tabindex="-1"><a class="header-anchor" href="#缓存范围"><span>缓存范围</span></a></h2>
<p>缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<p>Yarn:</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">actions/cache@v3</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 使用此 id 获得 `cache-hit`</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # (`steps.yarn-cache.outputs.cache-hit != 'true'`)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">yarn-cache</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restore-keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      ${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install Dependencies</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">steps.yarn-cache.outputs.cache-hit != 'true'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">yarn install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个缓存键" tabindex="-1"><a class="header-anchor" href="#创建一个缓存键"><span>创建一个缓存键</span></a></h2>
<p>缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。</p>
<p>例如，使用 <code v-pre>hashFiles</code> 功能可让您在依存关系更改时创建新的缓存。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">actions/cache@v3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">yarn-cache</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      node_modules/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">${{ runner.os }}-${{ hashFiles('**/yarn.lock') }}</span></span></code></pre>
</div><p>利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install Dependencies</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">steps.yarn-cache.outputs.cache-hit != 'true'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">yarn install</span></span></code></pre>
</div><h2 id="缓存限制" tabindex="-1"><a class="header-anchor" href="#缓存限制"><span>缓存限制</span></a></h2>
<p>一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。</p>
<h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库"><span>仓库</span></a></h2>
<p><a href="https://github.com/actions/cache" target="_blank" rel="noopener noreferrer">https://github.com/actions/cache</a></p>
</div></template>


