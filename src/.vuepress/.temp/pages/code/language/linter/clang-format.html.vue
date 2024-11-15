<template><div><p>clang-format 是一种代码格式化工具，可用于格式化(排版) C / C++ / Java / JavaScript / Objective-C / Protobuf / C# 的代码。它支持多种预设代码风格与自定义风格 (通过编写 <code v-pre>.clang-format</code> 文件)。</p>
<!-- more -->
<h2 id="自定义格式化" tabindex="-1"><a class="header-anchor" href="#自定义格式化"><span>自定义格式化</span></a></h2>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">clang-format</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -style=格式名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -dump-config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.clang-format`</span></span></code></pre>
</div><p>其中，格式名的取值可以为 <code v-pre>LLVM</code>, <code v-pre>Google</code>, <code v-pre>Chromium</code>, <code v-pre>Mozilla</code>, <code v-pre>Webkit</code> 中的任一种，这会将对应格式预设写入 <code v-pre>.clang-format</code> 文件。</p>
<h2 id="使用命令行" tabindex="-1"><a class="header-anchor" href="#使用命令行"><span>使用命令行</span></a></h2>
<h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h3>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">clang-format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [options] [</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">file</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ...]</span></span></code></pre>
</div><h3 id="可用选项" tabindex="-1"><a class="header-anchor" href="#可用选项"><span>可用选项</span></a></h3>
<ul>
<li>
<p><code v-pre>--Werror</code>: 将格式化警告变为错误</p>
</li>
<li>
<p><code v-pre>--Wno-error=unknown</code>: 未知的格式化选项仅产生警告。</p>
<p>这可以保持格式化启用，即使配置包含未知 (较新) 选项。</p>
</li>
<li>
<p><code v-pre>--assume-filename=&lt;string&gt;</code>: 覆盖用于确定语言的文件名。</p>
<p>通常在从 stdin 读取时，帮助 clang-fomat 获取文件名</p>
</li>
<li>
<p><code v-pre>--dry-run</code> 或 <code v-pre>-n</code>: 如果设置，实际上不进行格式更改</p>
</li>
<li>
<p><code v-pre>--dump-config</code>: 将配置选项转储到标准输出并退出, 可以与 <code v-pre>--style</code> 选项一起使用。</p>
</li>
<li>
<p><code v-pre>--fallback-style=&lt;string&gt;</code>: 设置回退的默认格式，通常在 clang-format 找不到配置文件时使用。</p>
<p>设置 <code v-pre>--fallback-style=none</code> 可以在这种情况下跳过格式化</p>
</li>
<li>
<p><code v-pre>--ferror-limit=&lt;uint&gt;</code>: 设置 clang-format 输出的最大错误数，超过将停止输出。</p>
<p>请仅与 <code v-pre>--dry-run</code> 或 <code v-pre>-n</code> 配合使用，<code v-pre>0</code> 意味着无限制</p>
</li>
<li>
<p><code v-pre>-i</code>: 替换输入文件</p>
</li>
<li>
<p><code v-pre>--length=&lt;uint&gt;</code>: 格式化指定长度范围</p>
<p>可以通过指定多个偏移和长度对来格式化几个范围。</p>
<p>当仅指定一个偏移量而没有 <code v-pre>--length</code>，clang-format 会一直格式化到文件的最后。</p>
<p>只能与一个输入文件一起使用。</p>
</li>
<li>
<p><code v-pre>--lines=&lt;string&gt;</code>: 格式为 <code v-pre>&lt;start line&gt;:&lt;end line&gt;</code></p>
<p>设置格式化行的范围(起始为第一行)，可以通过指定多个范围来格式化多行。</p>
<p>不能与 <code v-pre>--offset</code> 和 <code v-pre>--length</code> 一起使用。</p>
<p>只能与一个输入文件一起使用。</p>
</li>
<li>
<p><code v-pre>--offset=&lt;uint&gt;</code>: 格式化从此字节偏移量开始的范围。</p>
<p>可以通过指定多个范围来格式化几个偏移量和长度对。</p>
<p>只能与一个输入文件一起使用。</p>
</li>
<li>
<p><code v-pre>--output-replacements-xml</code>: 输出 XML</p>
</li>
<li>
<p><code v-pre>--sort-includes</code>: 如果设置，将覆盖包含排序行为。由 SortIncludes 样式标志确定</p>
</li>
<li>
<p><code v-pre>--style=&lt;string&gt;</code> 编码样式</p>
<p>当前支持: <code v-pre>LLVM</code>, <code v-pre>Google</code>, <code v-pre>Chromium</code>, <code v-pre>Mozilla</code>, <code v-pre>Webkit</code></p>
<p>使用 <code v-pre>--style=file</code> 从中文件加载样式配置</p>
<p>使用 <code v-pre>--style=&quot;{key:value,...}&quot;</code> 来设置特定的参数，
例如: <code v-pre>&quot;{BasedOnStyle: llvm, IndentWidth: 8}&quot;</code></p>
</li>
<li>
<p><code v-pre>--verbose</code>: 输出处理的文件列表</p>
</li>
</ul>
<h2 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code"><span>VS Code</span></a></h2>
<p>在 VS Code 中安装 C/C++ 插件以启用两者支持时会自动安装 clang-format，因此无需进行任何操作，即可在 C/C++ 文件中对代码进行格式化。</p>
<h2 id="推荐样式" tabindex="-1"><a class="header-anchor" href="#推荐样式"><span>推荐样式</span></a></h2>
<p>Mister.Duan 推荐使用 Google 预设，所以在个人与工作室的每个项目中，都会使用 Google 编码风格。</p>
<p>建议在 VS Code 中配置默认格式风格:</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "C_Cpp.clang_format_fallbackStyle"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Google"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档"><span>官方文档</span></a></h2>
<ul>
<li><a href="http://clang.llvm.org/docs/ClangFormat.html" target="_blank" rel="noopener noreferrer">地址</a> (需 VPN)</li>
</ul>
</div></template>


