<template><div><h1 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h1>
<p>Binding Path=xxx, 当没有指定Source时, 将DataContext作为Source,
如果自己没有DataContext那么会一层一层向上找,直到找到Window</p>
<p>以下的代码没有指定Source和Path,</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBox</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Binding}</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBox</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


