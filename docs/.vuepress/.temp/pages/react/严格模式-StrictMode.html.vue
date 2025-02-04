<template><div><nav class="table-of-contents"><ul><li><router-link to="#_1-作用">1.作用</router-link></li><li><router-link to="#_2-应用">2.应用</router-link></li><li><router-link to="#_3-严格模式检查的内容">3.严格模式检查的内容</router-link></li></ul></nav>
<h1 id="严格模式-strictmode" tabindex="-1"><a class="header-anchor" href="#严格模式-strictmode"><span>严格模式-StrictMode</span></a></h1>
<h2 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用"><span>1.作用</span></a></h2>
<ul>
<li>StrictMode 是一个用来突出显示应用程序中潜在问题的工具
<ul>
<li>与 Fragment 一样,StrictMode 不会渲染任何可见的 UI</li>
<li>它为其后代元素出发额外的检查和警告</li>
<li>严格模式检查仅在开发模式下运行,它不会影响生产构建</li>
</ul>
</li>
</ul>
<h2 id="_2-应用" tabindex="-1"><a class="header-anchor" href="#_2-应用"><span>2.应用</span></a></h2>
<ul>
<li>可以为应用程序的任何部分启用严格模式</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token comment">// Profile.jsx</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">UNSAFE_componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Profile UNSAFE_componentWillMount"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Profile componentDidMount"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Profile</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Profile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token comment">// Cart.jsx</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Cart</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Cart</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Cart<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token comment">// App.jsx</span></span>
<span class="line"><span class="token comment">// 注意: 不会对Cart组件运行严格模式检查, 会对Profile组件以及它的后代组件进行检查</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent<span class="token punctuation">,</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">"./pages/Profile"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Cart <span class="token keyword">from</span> <span class="token string">"./pages/Cart"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cart</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Profile</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-严格模式检查的内容" tabindex="-1"><a class="header-anchor" href="#_3-严格模式检查的内容"><span>3.严格模式检查的内容</span></a></h2>
<ul>
<li>
<p>1.识别不安全的生命周期：</p>
</li>
<li>
<p>2.使用过时的 ref API</p>
</li>
<li>
<p>3.检查意外的副作用  这个组件的 constructor 会被调用两次；</p>
<ul>
<li>这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用；</li>
<li>在生产环境中，是不会被调用两次的；</li>
</ul>
</li>
<li>
<p>4.使用废弃的 findDOMNode 方法</p>
<ul>
<li>在之前的 React API 中，可以通过 findDOMNode 来获取 DOM，不过已经不推荐使用了，可以自行学习演练一下</li>
</ul>
</li>
<li>
<p>5.检测过时的 context API  早期的 Context 是通过 static 属性声明 Context 对象属性，通过 getChildContext 返回 Context 对象等方式来使用 Context 的；</p>
<ul>
<li>目前这种方式已经不推荐使用，大家可以自行学习了解一下它的用法；</li>
</ul>
</li>
</ul>
</div></template>


