<template><div><p>键盘快捷键: <code v-pre>Ctrl + Shift + G</code></p>
<p>VS Code 有开箱即用的 Git 集成。您可以从扩展市场中安装其他 SCM 提供程序。本节描述了 Git 集成。</p>
<h2 id="差异" tabindex="-1"><a class="header-anchor" href="#差异"><span>差异</span></a></h2>
<p>从 <strong>源代码管理</strong> 视图中，选择一个文件以打开差异。</p>
<figure><img src="@source/software/vscode/guide/assets/git-diff.png" alt="来自源代码管理的 git diff" tabindex="0" loading="lazy"><figcaption>来自源代码管理的 git diff</figcaption></figure>
<h3 id="视图布局" tabindex="-1"><a class="header-anchor" href="#视图布局"><span>视图布局</span></a></h3>
<p>差异的默认视图是并排视图。</p>
<p>切换内嵌视图: 点击更多操作右上角(...)按钮，然后选择切换内嵌视图。</p>
<p>如果您喜欢嵌入式视图，可以设置 <code v-pre>&quot;diffEditor.renderSideBySide&quot;: false</code>。</p>
<h3 id="审查窗格" tabindex="-1"><a class="header-anchor" href="#审查窗格"><span>审查窗格</span></a></h3>
<p>使用 <code v-pre>F7</code> 和 <code v-pre>Shift + F7</code> 浏览差异。这将以统一的补丁格式显示它们。可以使用箭头键浏览行，然后按 Enter 键将在差异编辑器和所选行中跳回。</p>
<h3 id="编辑待处理的更改" tabindex="-1"><a class="header-anchor" href="#编辑待处理的更改"><span>编辑待处理的更改</span></a></h3>
<p>您可以直接在 diff 视图的等待更改试图中进行编辑。</p>
<h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h2>
<p>通过状态栏轻松在 Git 分支之间切换。</p>
<p>切换分支</p>
<h2 id="暂存" tabindex="-1"><a class="header-anchor" href="#暂存"><span>暂存</span></a></h2>
<h3 id="暂存文件更改" tabindex="-1"><a class="header-anchor" href="#暂存文件更改"><span>暂存文件更改</span></a></h3>
<ul>
<li>
<p>将鼠标悬停在文件上，然后单击加号按钮。</p>
</li>
<li>
<p>单击减号按钮可以取消更改。</p>
</li>
</ul>
<h3 id="撤消最后提交" tabindex="-1"><a class="header-anchor" href="#撤消最后提交"><span>撤消最后提交</span></a></h3>
<p>单击(...)按钮，然后选择 <strong>提交 &gt; 撤消上一次提交</strong> 以撤消上一次提交。所做的更改将添加到 <strong>暂存的更改</strong> 部分。</p>
<figure><img src="@source/software/vscode/guide/assets/undo-last-commit.png" alt="撤消上一次提交" tabindex="0" loading="lazy"><figcaption>撤消上一次提交</figcaption></figure>
<h2 id="查看-git-输出" tabindex="-1"><a class="header-anchor" href="#查看-git-输出"><span>查看 Git 输出</span></a></h2>
<p>VS Code 使得查看实际运行的 Git 命令变得容易。在学习 Git 或调试困难的源代码管理问题时，这很有用。</p>
<p>使用 <strong>切换输出命令</strong> (<code v-pre>Ctrl + Shift + U</code>)，然后在下拉菜单中选择 Git。</p>
<h2 id="增删指示" tabindex="-1"><a class="header-anchor" href="#增删指示"><span>增删指示</span></a></h2>
<p>在编辑器中查看差异提示。有关更多详细信息，请参见文档。</p>
<figure><img src="@source/software/vscode/guide/assets/gutter.png" alt="增删指示" tabindex="0" loading="lazy"><figcaption>增删指示</figcaption></figure>
<h2 id="解决合并冲突" tabindex="-1"><a class="header-anchor" href="#解决合并冲突"><span>解决合并冲突</span></a></h2>
<p>在合并过程中，转到 <strong>源代码管理</strong> 视图(<code v-pre>Ctrl + Shift + G</code>)，然后在 diff 视图中进行更改。</p>
<p>您可以使用内联 CodeLens 解决合并冲突，内联 CodeLens 允许您 <strong>接受当前更改</strong>，<strong>接受传入更改</strong>，<strong>接受两个更改</strong> 以及 <strong>比较更改</strong>。</p>
</div></template>


