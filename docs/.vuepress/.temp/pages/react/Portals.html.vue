<template><div><h1 id="portal" tabindex="-1"><a class="header-anchor" href="#portal"><span>Portal</span></a></h1>
<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h2>
<blockquote>
<p>我们希望渲染的内容独立于父组件,甚至是独立于当前挂载到的DOM元素中(默认都是挂载到id为root的DOM元素上的)</p>
</blockquote>
<p>Portal提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的方案</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 参数一: (child) 是任何可渲染的React子元素, 例如一个元素是字符串或fragment或react组件</span></span>
<span class="line"><span class="token comment">// 参数二: (container) 是一个DOM元素</span></span>
<span class="line"><span class="token function">createPortal</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> container<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<ul>
<li>案例1:</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span>  <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                </span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">App H2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#container'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>案例2:</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token comment">// Modal.jsx 模态窗体</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Modal</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#container'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token comment">// App.jsx</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">'./Modal'</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Modal</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                   </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">我是模态窗体</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Modal</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


