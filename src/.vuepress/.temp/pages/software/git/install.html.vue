<template><div><h2 id="git-下载" tabindex="-1"><a class="header-anchor" href="#git-下载"><span>Git 下载</span></a></h2>
<p>官网在国外，网速较慢。在安装 Git 前推荐安装好 <RouteLink to="/software/vscode/">VS Code</RouteLink>。</p>
<ul>
<li><a href="https://git-scm.com/downloads/" target="_blank" rel="noopener noreferrer">官网下载</a></li>
</ul>
<h2 id="git-的安装" tabindex="-1"><a class="header-anchor" href="#git-的安装"><span>Git 的安装</span></a></h2>
<ol>
<li>
<p>同意协议并选择安装位置 (不建议更改安装位置)</p>
<figure><img src="@source/software/git/assets/install1.png" alt="安装协议" tabindex="0" loading="lazy"><figcaption>安装协议</figcaption></figure>
<figure><img src="@source/software/git/assets/install2.png" alt="安装位置" tabindex="0" loading="lazy"><figcaption>安装位置</figcaption></figure>
</li>
<li>
<p>启用 LFS 支持，其他随意 (影响不大)</p>
<figure><img src="@source/software/git/assets/install3.png" alt="组件选择" tabindex="0" loading="lazy"><figcaption>组件选择</figcaption></figure>
</li>
<li>
<p>自行决定是否创建启动菜单</p>
<figure><img src="@source/software/git/assets/install4.png" alt="是否创建启动菜" tabindex="0" loading="lazy"><figcaption>是否创建启动菜</figcaption></figure>
</li>
<li>
<p>选择使用 VS Code 作为 git 的默认编辑器。</p>
<figure><img src="@source/software/git/assets/install5.png" alt="设置默认编辑器" tabindex="0" loading="lazy"><figcaption>设置默认编辑器</figcaption></figure>
</li>
<li>
<p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p>
<figure><img src="@source/software/git/assets/install6.png" alt="设置默认分支名称" tabindex="0" loading="lazy"><figcaption>设置默认分支名称</figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p>
</div>
</li>
<li>
<p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p>
<figure><img src="@source/software/git/assets/install7.png" alt="Git 命令行" tabindex="0" loading="lazy"><figcaption>Git 命令行</figcaption></figure>
</li>
<li>
<p>使用 OpenSSL Library</p>
<figure><img src="@source/software/git/assets/install8.png" alt="Git SSL" tabindex="0" loading="lazy"><figcaption>Git SSL</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p>
</div>
</li>
<li>
<p>务必选择最后一项 “原样检出与提交”</p>
<figure><img src="@source/software/git/assets/install9.png" alt="Git 行尾设置" tabindex="0" loading="lazy"><figcaption>Git 行尾设置</figcaption></figure>
</li>
<li>
<p>选择 Git 终端</p>
<figure><img src="@source/software/git/assets/install10.png" alt="Git 终端" tabindex="0" loading="lazy"><figcaption>Git 终端</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p>
</div>
</li>
<li>
<p>选择 <code v-pre>git pull</code> 的默认行为，保持默认不要改动</p>
<figure><img src="@source/software/git/assets/install11.png" alt="Git Pull Action" tabindex="0" loading="lazy"><figcaption>Git Pull Action</figcaption></figure>
</li>
<li>
<p>选择凭据储存管理器，请选择第一个跨平台管理器</p>
<figure><img src="@source/software/git/assets/install12.png" alt="凭据储存管理器设置" tabindex="0" loading="lazy"><figcaption>凭据储存管理器设置</figcaption></figure>
</li>
<li>
<p>额外的选项确认，均勾选即可</p>
<figure><img src="@source/software/git/assets/install13.png" alt="额外选项" tabindex="0" loading="lazy"><figcaption>额外选项</figcaption></figure>
</li>
<li>
<p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p>
<figure><img src="@source/software/git/assets/install14.png" alt="实验性功能" tabindex="0" loading="lazy"><figcaption>实验性功能</figcaption></figure>
</li>
</ol>
<h2 id="git-bash" tabindex="-1"><a class="header-anchor" href="#git-bash"><span>Git Bash</span></a></h2>
<p>安装完成后，您可以通过搜索找到“Git Bash” (Mac 上叫 Git Shell)，这是一个 Git 提供的命令窗口，您可以在这里运行 Git 命令。</p>
<figure><img src="@source/software/git/assets/shell.png" alt="Git Bash" tabindex="0" loading="lazy"><figcaption>Git Bash</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果您对 VS Code 和 PowerShell 还不熟悉，您可以在接下来的学习与操作中使用 Git Bash。</p>
<p>否则，你可以:</p>
<ul>
<li>在 Linux 上直接通过终端来使用 Git。</li>
<li>在 Windows 上安装最新的 PowerShell，并在终端中使用 Git。</li>
</ul>
</div>
<h2 id="git-的初次配置" tabindex="-1"><a class="header-anchor" href="#git-的初次配置"><span>Git 的初次配置</span></a></h2>
<ol>
<li>
<p>为 Git 全局配置用户名和邮箱。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Your Name"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "email@example.com"</span></span></code></pre>
</div><p>将上方的字符串换成您自己的名字和邮箱。</p>
<p>如:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Mister.Duan"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "mister-hope@outlook.com"</span></span></code></pre>
</div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>由于 Git 是一个多人协作的版本控制系统，首先您应当设置您的身份。</p>
</div>
</li>
<li>
<p>创建 SSH Key。打开 Shell (Windows 下打开 cmd)，创建 SSH Key:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "youremail@example.com"</span></span></code></pre>
</div><p>您需要把邮件地址换成您自己的邮件地址，然后一路回车，使用默认值即可，由于这个 Key 也不是用于军事目的，所以也无需设置密码。</p>
<p>如果一切顺利的话，可以在用户主目录里找到 .ssh 目录，里面有 id_rsa 和 id_rsa.pub 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p>ssh-keygen 用来生成一堆密钥，作为您的身份识别信息，您可以放心的把公钥交给别人，留下自己的私钥。</p>
</li>
<li>
<p><code v-pre>.ssh</code> 目录是默认隐藏的。Win10 查看隐藏文件详见 <RouteLink to="/code/windows/hidden-file.html">显示隐藏的文件</RouteLink></p>
</li>
</ul>
</div>
<div class="hint-container info">
<p class="hint-container-title">RSA</p>
<p>RSA 是一种不对称加密，公钥的加密只能通过私钥解开，反之私钥的加密只能由公钥解开。也就是说当您给别人自己的公钥的时候，他们也无法冒充您。</p>
</div>
</li>
<li>
<p>打开 <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> 并选择 &quot;Sign in&quot; 注册自己的账号。</p>
<figure><img src="@source/software/git/assets/github.png" alt="GitHub 界面简介" tabindex="0" loading="lazy"><figcaption>GitHub 界面简介</figcaption></figure>
<p>登陆 GitHub 后，点击右上角头像，进入设置。</p>
<p>进入 &quot;安全设置&quot; 下的 &quot;SSH 公钥&quot; 界面。</p>
<figure><img src="@source/software/git/assets/githubSSH.png" alt="GitHub 界面简介" tabindex="0" loading="lazy"><figcaption>GitHub 界面简介</figcaption></figure>
<p>在标题中填写公钥的备注名称，把 id_rsa.pub 文件的内容粘贴到底下的输入框中，设置一个标识此电脑的备注。</p>
</li>
</ol>
</div></template>


