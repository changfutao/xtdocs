<template><div><h1 id="linux删除" tabindex="-1"><a class="header-anchor" href="#linux删除"><span>linux删除</span></a></h1>
<h2 id="_1-删除目录" tabindex="-1"><a class="header-anchor" href="#_1-删除目录"><span>1.删除目录</span></a></h2>
<ul>
<li>删除空目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">rmdir</span> 目录名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>删除非空目录
<ul>
<li>-r: 递归删除</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">rm</span> <span class="token parameter variable">-r</span> 目录名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>强制删除目录【不提示确认】
<ul>
<li>-f: 强制</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> 目录名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


