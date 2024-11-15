<template><div><h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h1>
<p><code v-pre>正则表达式</code>是表达文本模式的方法。</p>
<ul>
<li><code v-pre>.</code>: 匹配任何单个字符。</li>
<li><code v-pre>?</code>: 上一项是可选的，最多匹配一次。</li>
<li><code v-pre>*</code>: 前一项将被匹配零次或多次。</li>
<li><code v-pre>+</code>: 前一项将被匹配一次或多次。</li>
<li><code v-pre>{N}</code>: 上一项完全匹配 N 次。</li>
<li><code v-pre>{N，}</code>: 前一项匹配 N 次或多次。</li>
<li><code v-pre>{N，M}</code>: 前一项至少匹配 N 次，但不超过 M 次。</li>
<li><code v-pre>--</code>: 表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。</li>
<li><code v-pre>^</code>: 匹配行首的空字符串；也代表不在列表范围内的字符。</li>
<li><code v-pre>$</code>: 匹配行尾的空字符串。</li>
<li><code v-pre>\b</code>: 匹配单词边缘的空字符串。</li>
<li><code v-pre>\B</code>: 匹配空字符串，前提是它不在单词的边缘。</li>
<li><code v-pre>\&lt;</code>: 匹配单词开头的空字符串。</li>
<li><code v-pre>\&gt;</code>: 匹配单词末尾的空字符串。</li>
</ul>
<h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符"><span>元字符</span></a></h2>
<p><code v-pre>元字符</code>是表示特殊函数的字符，包括以下这些 <code v-pre>^ $ . [ ] { } - ? * + ( ) | \\</code>。除了元字符，其他字符在正则表达式中，都表示原来的含义。</p>
<ul>
<li><code v-pre>.</code> 匹配任意字符，但不含空字符</li>
<li><code v-pre>^</code> 匹配文本行开头</li>
<li><code v-pre>$</code> 匹配文本行结尾</li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '.zip'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><p>上面命令在文件中查找包含正则表达式“.zip”的文本行。注意，上面命令不会匹配 <code v-pre>zip</code> 程序，因为 <code v-pre>zip</code> 只有三个字符，而 <code v-pre>.zip</code> 要求四个字符。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '^zip'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'zip$'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><p>上面命令分别在文件列表中搜索行首，行尾以及行首和行尾同时包含字符串“zip”(例如，zip 独占一行)的匹配行。注意正则表达式‘^$’(行首和行尾之间没有字符)会匹配空行。</p>
<h2 id="方括号" tabindex="-1"><a class="header-anchor" href="#方括号"><span>方括号</span></a></h2>
<p>方括号之中的字符，表示可以任意匹配其中的一个。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '[bg]zip'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><p>上面命令匹配包含字符串“bzip”或者“gzip”的任意行。</p>
<p>注意，元字符放入方括号之中，会失去其特殊含义。但有两种情况除外，<code v-pre>^</code> 在方括号的开头，表示否定，否则只是一个普通字符，表示原义。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '[^bg]zip'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><p>上面命令匹配不以 <code v-pre>b</code> 或 <code v-pre>g</code> 开头的 <code v-pre>zip</code> 字符串。注意，上面命令不会匹配 <code v-pre>zip</code>，因为一个否定的字符集仍然要求存在一个字符。</p>
<p><code v-pre>-</code> 在方括号之中表示一个字符区域。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '^[A-Z]'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><p>上面命令匹配所有以大写字母开头的文本行。类似的，<code v-pre>^[A-Za-z0-9]</code> 表示以大写字母、小写字母、数字开头的文本行。</p>
<p>注意，连字号如果不构成一个字符区域，则表示其本来的含义。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '[-AZ]'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><p>上面命令匹配包含一个连字符，或一个大写字母“A”，或一个大写字母“Z”的文件名。</p>
<h2 id="预定义字符类" tabindex="-1"><a class="header-anchor" href="#预定义字符类"><span>预定义字符类</span></a></h2>
<p>由于 <code v-pre>locale</code> 设置不同，Shell 展开正则表达式 <code v-pre>[A-Z]</code> 时，可能不是解释为所有大写字母，而是解释为包括所有字母的字典顺序。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/sbin/[A-Z]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span></span></code></pre>
</div><p>上面命令在某些发行版里面，会返回所有大写字母或小写字母开头的文件。</p>
<p>为了避免这个问题，可以使用正则表达式的预定义字符类。</p>
<ul>
<li><code v-pre>[:alnum:]</code> 字母数字字符。在 ASCII 中，等价于: <code v-pre>[A-Za-z0-9]</code></li>
<li><code v-pre>[:word:]</code> 与 <code v-pre>[:alnum:]</code> 相同, 但增加了下划线字符。</li>
<li><code v-pre>[:alpha:]</code> 字母字符。在 ASCII 中，等价于 <code v-pre>[A-Za-z]</code></li>
<li><code v-pre>[:blank:]</code> 包含空格和 tab 字符。</li>
<li><code v-pre>[:cntrl:]</code> ASCII 的控制码。包含了 0 到 31，和 127 的 ASCII 字符。</li>
<li><code v-pre>[:digit:]</code> 数字 0 到 9</li>
<li><code v-pre>[:graph:]</code> 可视字符。在 ASCII 中，它包含 33 到 126 的字符。</li>
<li><code v-pre>[:lower:]</code> 小写字母。</li>
<li><code v-pre>[:punct:]</code> 标点符号字符。</li>
<li><code v-pre>[:print:]</code> 可打印的字符。等于 <code v-pre>[:graph:]</code> 中的所有字符，再加上空格字符。</li>
<li><code v-pre>[:space:]</code> 空白字符，包括空格，tab，回车，换行，vertical tab, 和 form feed.在 ASCII 中， 等价于 <code v-pre>[ \t\r\n\v\f]</code></li>
<li><code v-pre>[:upper:]</code> 大写字母。</li>
<li><code v-pre>[:xdigit:]</code> 用来表示十六进制数字的字符。在 ASCII 中，等价于 <code v-pre>[0-9A-Fa-f]</code></li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/sbin/[[:upper:]]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span></span></code></pre>
</div><p>上面命令返回所有大写字母开头的文件名。</p>
<h2 id="选择" tabindex="-1"><a class="header-anchor" href="#选择"><span>选择</span></a></h2>
<p><code v-pre>|</code> 表示匹配一系列字符串之中的一个。注意与方括号区分，方括号表示匹配一系列字符之中的一个。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "AAA"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'AAA|BBB'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">AAA</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "BBB"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'AAA|BBB'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">BBB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "CCC"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'AAA|BBB'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span></span></code></pre>
</div><p>上面代码中，<code v-pre>AAA|BBB</code> 表示匹配字符串 <code v-pre>AAA</code> 或者是字符串 <code v-pre>BBB</code>。<code v-pre>grep</code> 程序使用 <code v-pre>-E</code> 参数，表示按照正则表达式规则匹配。并且，这个正则表达式放在单引号之中，为的是阻止 Shell 把 <code v-pre>|</code> 解释为管道操作符。</p>
<p><code v-pre>|</code> 可以多个连用，也可以与其他正则规则结合使用。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "AAA"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'AAA|BBB|CCC'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Eh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '^(bz|gz|zip)'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dirlist</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.txt</span></span></code></pre>
</div><h2 id="量词操作符" tabindex="-1"><a class="header-anchor" href="#量词操作符"><span>量词操作符</span></a></h2>
<p>量词操作符表示一个元素被匹配的次数。</p>
<ul>
<li><code v-pre>?</code> 匹配前面的元素出现 0 次或 1 次</li>
<li><code v-pre>*</code> 匹配前面的元素出现 0 次或多次</li>
<li><code v-pre>+</code> 匹配前面的元素出现 1 次或多次</li>
<li><code v-pre>{n}</code> 匹配前面的元素出现了 <code v-pre>n</code> 次</li>
<li><code v-pre>{n,m}</code> 匹配前面的元素它至少出现了 <code v-pre>n</code> 次，但是不多于 <code v-pre>m</code> 次</li>
<li><code v-pre>{n,}</code> 匹配前面的元素至少出现了 <code v-pre>n</code> 次</li>
<li><code v-pre>{,m}</code> 匹配前面的元素，如果它出现的次数不多于 m 次。</li>
</ul>
</div></template>


