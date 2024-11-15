<template><div><p>在小程序中所有页面的路由全部由框架进行管理。</p>
<!-- more -->
<h2 id="页面栈" tabindex="-1"><a class="header-anchor" href="#页面栈"><span>页面栈 <Badge text="重要" type="error" /></span></a></h2>
<p>框架以栈的形式维护了当前的所有页面。当发生路由切换的时候，页面栈的表现如下:</p>
<table>
<thead>
<tr>
<th>路由方式</th>
<th>页面栈表现</th>
</tr>
</thead>
<tbody>
<tr>
<td>初始化</td>
<td>新页面入栈</td>
</tr>
<tr>
<td>打开新页面</td>
<td>新页面入栈</td>
</tr>
<tr>
<td>页面重定向</td>
<td>当前页面出栈，新页面入栈</td>
</tr>
<tr>
<td>页面返回</td>
<td>页面不断出栈，直到目标返回页</td>
</tr>
<tr>
<td>Tab 切换</td>
<td>页面全部出栈，只留下新的 Tab 页面</td>
</tr>
<tr>
<td>重加载</td>
<td>页面全部出栈，只留下新的页面</td>
</tr>
</tbody>
</table>
<p>开发者可以使用 <code v-pre>getCurrentPages()</code> 函数获取当前页面栈。</p>
<h2 id="路由方式" tabindex="-1"><a class="header-anchor" href="#路由方式"><span>路由方式 <Badge text="重要" type="error" /></span></a></h2>
<p>对于路由的触发方式以及页面生命周期函数如下:</p>
<p>| 路由方式   | 触发时机                                                                        | 路由前页面           | 路由后页面     |
| ---------- | ------------------------------------------------------------------------------- | -------------------- | -------------- | ------------------ |
| 初始化     | 小程序打开的第一个页面                                                          |                      | onLoad, onShow |
| 打开新页面 | 调用 API <code v-pre>wx.navigateTo</code><br />使用组件 <code v-pre>&lt;navigator open-type=&quot;navigateTo&quot;/&gt;</code>    | onHide               | onLoad, onShow |
| 页面重定向 | 调用 API <code v-pre>wx.redirectTo</code><br />使用组件 <code v-pre>&lt;navigator open-type=&quot;redirectTo&quot;/&gt;</code>    | onUnload             | onLoad, onShow |
| 页面返回   | 调用 API <code v-pre>wx.navigateBack</code><br />使用组件 <code v-pre>&lt;navigator open-type=&quot;navigateBack&quot;&gt;</code> | 用户按左上角返回按钮 | onUnload       | onShow             |
| Tab 切换   | 调用 API <code v-pre>wx.switchTab</code><br />使用组件 <code v-pre>&lt;navigator open-type=&quot;switchTab&quot;/&gt;</code>      | 用户切换 Tab         |                | 各种情况请参考下表 |
| 重启动     | 调用 API <code v-pre>wx.reLaunch</code><br />使用组件 <code v-pre>&lt;navigator open-type=&quot;reLaunch&quot;/&gt;</code>        | onUnload             | onLoad, onShow |</p>
<p>Tab 切换对应的生命周期(以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例):</p>
<table>
<thead>
<tr>
<th>当前页面</th>
<th>路由后页面</th>
<th>触发的生命周期(按顺序)</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>A</td>
<td>Nothing happened</td>
</tr>
<tr>
<td>A</td>
<td>B</td>
<td>A.onHide(), B.onLoad(), B.onShow()</td>
</tr>
<tr>
<td>A</td>
<td>B(再次打开)</td>
<td>A.onHide(), B.onShow()</td>
</tr>
<tr>
<td>C</td>
<td>A</td>
<td>C.onUnload(), A.onShow()</td>
</tr>
<tr>
<td>C</td>
<td>B</td>
<td>C.onUnload(), B.onLoad(), B.onShow()</td>
</tr>
<tr>
<td>D</td>
<td>B</td>
<td>D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()</td>
</tr>
<tr>
<td>D(从转发进入)</td>
<td>A</td>
<td>D.onUnload(), A.onLoad(), A.onShow()</td>
</tr>
<tr>
<td>D(从转发进入)</td>
<td>B</td>
<td>D.onUnload(), B.onLoad(), B.onShow()</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li><code v-pre>navigateTo</code>, <code v-pre>redirectTo</code> 只能打开非 tabBar 页面。</li>
<li><code v-pre>switchTab</code> 只能打开 tabBar 页面。</li>
<li><code v-pre>reLaunch</code> 可以打开任意页面。</li>
<li>页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。</li>
<li>调用页面路由带的参数可以在目标页面的 <code v-pre>onLoad</code> 中获取。</li>
</ul>
</div>
</div></template>


