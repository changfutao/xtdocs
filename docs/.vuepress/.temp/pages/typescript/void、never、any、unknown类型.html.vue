<template><div><h1 id="void、never、any、unknown类型" tabindex="-1"><a class="header-anchor" href="#void、never、any、unknown类型"><span>void、never、any、unknown类型</span></a></h1>
<h2 id="void类型" tabindex="-1"><a class="header-anchor" href="#void类型"><span>void类型</span></a></h2>
<p><code v-pre>void</code>表示没有任何类型,不能直接赋值</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>给变量赋值为void是没有意义的</p>
</blockquote>
<p>如果一个函数没有返回值,此时我们可以定义为<code v-pre>void</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'今天天气不错'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


