<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>本篇教程以 CentOS 为例介绍系统的启动过程。</p>
</div>
<p>Linux 启动时我们会看到许多启动信息。</p>
<p>Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段:</p>
<ul>
<li>内核的引导。</li>
<li>运行 init。</li>
<li>系统初始化。</li>
<li>建立终端 。</li>
<li>用户登录系统。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>init 程序的类型:</p>
<ul>
<li>SysV: init, CentOS 5 之前, 配置文件: /etc/inittab。</li>
<li>Upstart: init,CentOS 6, 配置文件: /etc/inittab, /etc/init/*.conf。</li>
<li>Systemd: systemd, CentOS 7,配置文件: /usr/lib/systemd/system、 /etc/systemd/system。</li>
</ul>
</div>
<h2 id="内核引导" tabindex="-1"><a class="header-anchor" href="#内核引导"><span>内核引导</span></a></h2>
<p>当计算机打开电源后，首先是 BIOS 开机自检，按照 BIOS 中设置的启动设备(通常是硬盘)来启动。</p>
<p>操作系统接管硬件以后，首先读入 <code v-pre>/boot</code> 目录下的内核文件。</p>
<figure><img src="@source/linux/assets/boot.png" alt="boot" tabindex="0" loading="lazy"><figcaption>boot</figcaption></figure>
<h2 id="运行-init" tabindex="-1"><a class="header-anchor" href="#运行-init"><span>运行 init</span></a></h2>
<p>init 进程是系统所有进程的起点，您可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。</p>
<p>init 程序首先是需要读取配置文件 <code v-pre>/etc/inittab</code>。</p>
<figure><img src="@source/linux/assets/init.png" alt="init" tabindex="0" loading="lazy"><figcaption>init</figcaption></figure>
<h3 id="运行级别" tabindex="-1"><a class="header-anchor" href="#运行级别"><span>运行级别</span></a></h3>
<p>许多程序需要开机启动。它们在 Windows 叫做&quot;服务&quot;(service)，在 Linux 就叫做&quot;守护进程&quot;(daemon)。</p>
<p>init 进程的一大任务，就是去运行这些开机启动的程序。</p>
<p>但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动 Apache，用作桌面就不需要。</p>
<p>Linux 允许为不同的场合，分配不同的开机启动程序，这就叫做&quot;运行级别&quot;(runlevel)。也就是说，启动时根据&quot;运行级别&quot;，确定要运行哪些程序。</p>
<figure><img src="@source/linux/assets/runlevel.png" alt="runlevel" tabindex="0" loading="lazy"><figcaption>runlevel</figcaption></figure>
<p>Linux 系统有 7 个运行级别(runlevel):</p>
<ul>
<li>运行级别 0: 系统停机状态，系统默认运行级别不能设为 0，否则不能正常启动</li>
<li>运行级别 1: 单用户工作状态，root 权限，用于系统维护，禁止远程登陆</li>
<li>运行级别 2: 多用户状态(没有 NFS)</li>
<li>运行级别 3: 完全的多用户状态(有 NFS)，登陆后进入控制台命令行模式</li>
<li>运行级别 4: 系统未使用，保留</li>
<li>运行级别 5: X11 控制台，登陆后进入图形 GUI 模式</li>
<li>运行级别 6: 系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动</li>
</ul>
<h2 id="系统初始化" tabindex="-1"><a class="header-anchor" href="#系统初始化"><span>系统初始化</span></a></h2>
<p>在 init 的配置文件中有这么一行: <code v-pre>si::sysinit:/etc/rc.d/rc.sysinit</code>　它调用执行了 <code v-pre>/etc/rc.d/rc.sysinit</code>，而 <code v-pre>rc.sysinit</code> 是一个 bash shell 的脚本，它主要是完成一些系统初始化的工作，rc.sysinit 是每一个运行级别都要首先运行的重要脚本。</p>
<p>它主要完成的工作有: 激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">l5:5:wait:/etc/rc.d/rc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span></code></pre>
</div><p>这一行表示以 5 为参数运行 <code v-pre>/etc/rc.d/rc</code>，<code v-pre>/etc/rc.d/rc</code> 是一个 Shell 脚本，它接受 5 作为参数，去执行 <code v-pre>/etc/rc.d/rc5.d/</code> 目录下的所有的 rc 启动脚本，<code v-pre>/etc/rc.d/rc5.d/</code> 目录中的这些启动脚本实际上都是一些连接文件，而不是真正的 rc 启动脚本，真正的 rc 启动脚本实际上都是放在 <code v-pre>/etc/rc.d/init.d/</code>目录下。</p>
<p>而这些 rc 启动脚本有着类似的用法，它们一般能接受 start、stop、restart、status 等参数。</p>
<p><code v-pre>/etc/rc.d/rc5.d/</code> 中的 rc 启动脚本通常是 K 或 S 开头的连接文件，对于以 S 开头的启动脚本，将以 start 参数来运行。</p>
<p>而如果发现存在相应的脚本也存在 K 打头的连接，而且已经处于运行态了(以 <code v-pre>/var/lock/subsys/</code> 下的文件作为标志)，则将首先以 stop 为参数停止这些已经启动了的守护进程，然后再重新运行。</p>
<p>这样做是为了保证是当 init 改变运行级别时，所有相关的守护进程都将重启。</p>
<p>至于在每个运行级中将运行哪些守护进程，用户可以通过 chkconfig 或 setup 中的 &quot;System Services&quot; 来自行设定。</p>
</div></template>


