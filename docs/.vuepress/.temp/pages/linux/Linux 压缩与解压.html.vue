<template><div><h1 id="linux-压缩与解压" tabindex="-1"><a class="header-anchor" href="#linux-压缩与解压"><span>Linux 压缩与解压</span></a></h1>
<h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍"><span>基本介绍</span></a></h2>
<p>在Linux中,常用的压缩和解压命令主要针对于<code v-pre>.tar</code>、<code v-pre>.gz</code>、<code v-pre>.zip</code>等格式。</p>
<h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩"><span>压缩</span></a></h2>
<h3 id="_1-tar" tabindex="-1"><a class="header-anchor" href="#_1-tar"><span>1.tar</span></a></h3>
<ul>
<li>
<p>压缩为<code v-pre>.tar.gz</code>或<code v-pre>.tgz</code>文件</p>
<ul>
<li>
<p>-c: 创建新的压缩文件</p>
</li>
<li>
<p>-z: 使用gzip压缩</p>
</li>
<li>
<p>-v: 显示压缩过程</p>
</li>
<li>
<p>-f: 指定压缩文件名</p>
</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> 文件名.tar.gz 目录或文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>压缩为<code v-pre>.tar.bz2</code>文件
<ul>
<li>-j: 使用bzip2压缩</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">tar</span> <span class="token parameter variable">-cjvf</span> 文件名.tar.bz2 目录或文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-zip" tabindex="-1"><a class="header-anchor" href="#_2-zip"><span>2.zip</span></a></h3>
<ul>
<li>压缩为<code v-pre>.zip</code>文件
<ul>
<li>-r: 递归压缩目录</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">zip</span> <span class="token parameter variable">-r</span> 文件名.zip 目录或文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-gzip" tabindex="-1"><a class="header-anchor" href="#_3-gzip"><span>3.gzip</span></a></h3>
<ul>
<li>压缩为.gz文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">gzip</span> 文件名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-rar" tabindex="-1"><a class="header-anchor" href="#_4-rar"><span>4.rar</span></a></h3>
<ul>
<li>压缩为<code v-pre>.rar</code>文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">rar</span> a 文件名.rar 目录或文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-7z" tabindex="-1"><a class="header-anchor" href="#_5-7z"><span>5.7z</span></a></h3>
<ul>
<li>压缩为<code v-pre>.7z</code>目录或文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">7z a 文件名.7z 目录或文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="解压" tabindex="-1"><a class="header-anchor" href="#解压"><span>解压</span></a></h2>
<h3 id="_1-tar-1" tabindex="-1"><a class="header-anchor" href="#_1-tar-1"><span>1. tar</span></a></h3>
<ul>
<li>解压<code v-pre>.tar.gz</code> 或 <code v-pre>.tgz</code>文件
<ul>
<li>-x: 解压文件</li>
<li>-z: 使用gzip解压</li>
<li>-v: 显示解压过程</li>
<li>-f: 指定压缩文件名</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> 文件名.tar.gz</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>解压<code v-pre>.tar.bz2</code>文件
<ul>
<li>-j: 使用bzip2解压</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xjvf</span> 文件名.tar.bz2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-unzip" tabindex="-1"><a class="header-anchor" href="#_2-unzip"><span>2.unzip</span></a></h3>
<ul>
<li>解压<code v-pre>.zip</code>文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">unzip</span> 文件名.zip</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-gzip-1" tabindex="-1"><a class="header-anchor" href="#_3-gzip-1"><span>3.gzip</span></a></h3>
<ul>
<li>解压<code v-pre>.gz</code>文件
<ul>
<li>-d: 解压文件后删除.gz文件</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">gzip</span> <span class="token parameter variable">-d</span> 文件名.gz</span>
<span class="line">gunzip 文件名.gz</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-rar-1" tabindex="-1"><a class="header-anchor" href="#_4-rar-1"><span>4.rar</span></a></h3>
<ul>
<li>解压<code v-pre>.rar</code>文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">unrar</span> x 文件名.rar</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-7z-1" tabindex="-1"><a class="header-anchor" href="#_5-7z-1"><span>5.7z</span></a></h3>
<ul>
<li>解压<code v-pre>.7z</code>文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">7z x 文件名.7z</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


