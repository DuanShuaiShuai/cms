<template><div><p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>
<p>选择器所选择的元素，叫做“选择器的对象”。</p>
<!-- more -->
<CodeDemo id="code-demo-7" type="normal" title="%E6%A1%88%E4%BE%8B" code="eJx1jrsOgkAQRX9lHFsFLWwQrWz9g21W2MAm+8rOghDCvzuExESN5dx7TuZO2CZrsMBS2wYoVheBufGNz6hvBII0iZMl4IPSaBSfVg77p65TW8DxdAgDV/lVOOHKAJWRRMwEGWUTZWgFXu+akorZrZMONEErXU3eqk2ZB9ZY0vVq/LK9iuO3gDusiHhzgEk4gMobHwuIqj4LNy87svf3f8SWiY/uYTq1lji/AMozXqQ=">
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/logo.svg"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"logo"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">max-width: 150px</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"paragraph"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"par"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is very handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.paragraph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">#par</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<p>在上文中，CSS 选择器选中了对应的 HTML 元素并为其应用样式规则。</p>
<h2 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器"><span>ID 选择器</span></a></h2>
<p>ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。</p>
<p>HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 <code v-pre>#</code> 来定义。</p>
<p>以下的样式规则应用于元素属性 <code v-pre>id=&quot;para1&quot;</code>:</p>
<CodeDemo id="code-demo-26" type="normal" title="ID%20%E6%A1%88%E4%BE%8B" code="eJyrVsooyc1RslKyKbDzzSwuSS3ScylNzFN4uq/j6Y7W93sabfQL7GLybAoUMlNsY5QKEosSDWOUUJRmFitkJOalFOfnpipCVCvpKCUXFwMNVQarV6iOyVNQKEmtKNFNzMlMz7NSSE7NA2q3Bgkn5+fkF1kpFKWmALm1QL21AKFXNG8=">
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan 很帅！&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"para1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">#para1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  text-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></CodeDemo>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>ID 属性不要以数字开头，数字开头的 ID 在 <code v-pre>Mozilla/Firefox</code> 浏览器中不起作用。</p>
</div>
<h2 id="class-选择器" tabindex="-1"><a class="header-anchor" href="#class-选择器"><span>Class 选择器</span></a></h2>
<p>Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。</p>
<p>Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (<code v-pre>.</code>) 显示:</p>
<p>在以下的例子中，所有拥有 <code v-pre>center</code> 类的 HTML 元素均为居中。</p>
<CodeDemo id="code-demo-52" type="normal" title="Class%20%E6%A1%88%E4%BE%8B" code="eJyrVsooyc1RslKyKbDzzSwuSS3ScylNzFN4uq/j6Y7W93sabfQL7GLybAoUknMSi4ttY5SS8nNSYpRQFGcWK2Qk5qUU5+emKmJVr5CcmgdUTYo2InUo6SglFxcD3a8Htqc6Jk9BIS0/r0S3PDUzPaPESgEkbB2TVxuTF5OnBzEUoqoktaJENzEnMz3PCuo8iDKlWgBwRWLa">
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan 很帅！&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bold"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bold center"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"center"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  text-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></CodeDemo>
<h2 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器"><span>标签选择器</span></a></h2>
<p>标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。</p>
<p>有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 确保所有浏览器的段落标签的字体大小均为16像素。*/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">16</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器"><span>属性选择器</span></a></h2>
<p>属性选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">title</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>或者根据一个有特定值的标签属性是否存在来选择:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://example.com"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="伪类与伪元素" tabindex="-1"><a class="header-anchor" href="#伪类与伪元素"><span>伪类与伪元素</span></a></h2>
<h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类"><span>伪类</span></a></h3>
<p>选择器可以包含伪类，用来样式化一个元素的特定状态。</p>
<p>例如 <code v-pre>:hover</code> 伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>其他的常见伪类还有 <code v-pre>:visited</code> <code v-pre>:active</code> <code v-pre>:focus</code> 等。</p>
<h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素"><span>伪元素</span></a></h3>
<p>选择器也可以包含伪元素，选择一个元素的某个部分而不是元素自己。</p>
<p>例如 <code v-pre>::first-line</code> 会选择一个元素(下面的情况中是 <code v-pre>&lt;p&gt;</code>)中的第一行。</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::first-line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>其他的常见伪元素还有 <code v-pre>::before</code> <code v-pre>::after</code> <code v-pre>::fist-letter</code> <code v-pre>::last-child</code> 等。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>关于全部的伪类与伪元素选择器，请见 <a href="https://www.runoob.com/cssref/css-selectors.html" target="_blank" rel="noopener noreferrer">菜鸟教程</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">MDN 伪类</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">MDN 伪元素</a>。</p>
</div>
<h2 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器"><span>通用选择器</span></a></h2>
<p>通用选择器 <code v-pre>*</code> 会选中所有元素</p>
<h2 id="选择器列表" tabindex="-1"><a class="header-anchor" href="#选择器列表"><span>选择器列表</span></a></h2>
<p>可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.tag</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">#link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h2>
<p>选择器可以通过运算符，构成更加复杂的选择器。</p>
<p>常见的运算符主要有四种:</p>
<ul>
<li>
<p>后代选择器</p>
<p>以空格分隔，用于选取某元素的后代元素</p>
</li>
<li>
<p>子元素选择器</p>
<p>以大于号 <code v-pre>&gt;</code> 分隔，只能选择作为某元素子元素的元素</p>
</li>
<li>
<p>相邻兄弟选择器</p>
<p>加号 <code v-pre>+</code> 分隔，选择紧接某元素后的另一元素。</p>
</li>
<li>
<p>通用兄弟选择器</p>
<p>波浪线 <code v-pre>~</code> 分隔，选择紧接一元素后所有的同级的另一元素</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">选择器案例</p>
<ul>
<li>
<p><code v-pre>p{ }</code>: 为所有 <strong>p</strong> 元素指定一个样式。</p>
</li>
<li>
<p><code v-pre>.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的元素指定一个样式。</p>
</li>
<li>
<p><code v-pre>.marked p{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 元素内的 <strong>p</strong> 元素指定一个样式。</p>
</li>
<li>
<p><code v-pre>p.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的 <strong>p</strong> 元素指定一个样式。</p>
</li>
</ul>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>更多高级选择器，请见 <a href="https://www.runoob.com/cssref/css-selectors.html" target="_blank" rel="noopener noreferrer">菜鸟教程</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#%E9%80%89%E6%8B%A9%E5%99%A8%E5%8F%82%E8%80%83%E8%A1%A8" target="_blank" rel="noopener noreferrer">MDN 参考表</a></p>
</div>
</div></template>


