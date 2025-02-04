<template><div><h1 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment"><span>Fragment</span></a></h1>
<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h2>
<blockquote>
<p>当不想渲染外层的 div【但是 React 要求必须有一个根节点】,那么这时就需要使用 Fragment。</p>
</blockquote>
<p>Fragment 允许将子列表分组,而无需向 DOM 添加额外节点</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComonent<span class="token punctuation">,</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"JavaScript深入浅出"</span><span class="token punctuation">,</span> <span class="token string">"Java内核"</span><span class="token punctuation">,</span> <span class="token string">"SQL Server本质"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">              <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>books<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">book</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                  	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>book<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                      		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>book<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                  		  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">></span></span></span>
<span class="line">              	  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在 React 中还提供了 Fragment 的短语法:</p>
</blockquote>
<ul>
<li>使用空标签&lt;&gt; &lt;/&gt; 【这里就不需要导入 Fragment】</li>
<li>注意： 如果我们需要在 Fragment 中添加 key,那么就不能使用短语法</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token comment">// 使用&lt;> &lt;/> 短语法不能添加key等属性</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComonent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"JavaScript深入浅出"</span><span class="token punctuation">,</span> <span class="token string">"Java内核"</span><span class="token punctuation">,</span> <span class="token string">"SQL Server本质"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">              <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>books<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">book</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                  	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                      		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>book<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                  		  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span></span>
<span class="line">              	  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


