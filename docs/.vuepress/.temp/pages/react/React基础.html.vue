<template><div><h1 id="react基础" tabindex="-1"><a class="header-anchor" href="#react基础"><span>React基础</span></a></h1>
<h2 id="_1-特点" tabindex="-1"><a class="header-anchor" href="#_1-特点"><span>1.特点</span></a></h2>
<ul>
<li>声明式
<ul>
<li>React允许我们只需要维护自己的状态,当状态改变时,React可以根据最新的状态去渲染我们的UI界面</li>
</ul>
</li>
<li>组件化开发</li>
<li>多平台适配
<ul>
<li>Web</li>
<li>App</li>
<li>VR</li>
</ul>
</li>
</ul>
<h2 id="_2-开发依赖" tabindex="-1"><a class="header-anchor" href="#_2-开发依赖"><span>2.开发依赖</span></a></h2>
<p>开发React必须依赖三个库</p>
<ul>
<li>react: 包含react所必须的核心代码
<ul>
<li>react包含了react web和react-native所共同拥有的核心代码</li>
</ul>
</li>
<li>react-dom: react渲染在不同平台所需要的核心代码
<ul>
<li>web端: react-dom会将jsx最终渲染成真实的DOM,显示在浏览器</li>
<li>native端: react-dom会将jsx最终渲染成原生的控件(比如Android中的Button, IOS中的UIButton)</li>
</ul>
</li>
<li>babel: 将jsx转换成React代码的工具
<ul>
<li>编译器、转移器</li>
<li>将ES6转为ES5</li>
<li>babel可以帮助我们将jsx转为React.createElement</li>
</ul>
</li>
</ul>
<h2 id="_3-依赖引入" tabindex="-1"><a class="header-anchor" href="#_3-依赖引入"><span>3.依赖引入</span></a></h2>
<ul>
<li>CDN</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>react.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"react-dom.js"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"babel.js"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>script text<span class="token operator">=</span><span class="token string">"text/babel"</span><span class="token operator">></span></span>
<span class="line">  <span class="token comment">// 1.定义变量</span></span>
<span class="line">  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'Hello World'</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">btnClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    message <span class="token operator">=</span> <span class="token string">'Hello React'</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 2.渲染内容</span></span>
<span class="line">  <span class="token comment">// 用于创建一个React根,之后渲染的内容会包含在这个根中</span></span>
<span class="line">  <span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>btnClick<span class="token punctuation">}</span><span class="token operator">></span>修改文本<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">	  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>下载后,添加本地依赖</li>
<li>通过npm管理</li>
</ul>
<h2 id="_4-组件" tabindex="-1"><a class="header-anchor" href="#_4-组件"><span>4.组件</span></a></h2>
<blockquote>
<p>组件的名称首字母必须大写,小写会被认为是HTML元素</p>
</blockquote>
<h3 id="类组件" tabindex="-1"><a class="header-anchor" href="#类组件"><span>类组件</span></a></h3>
<ul>
<li>定义一个类(类名大写,组件的名称是必须大写的),继承自React.Component/React.PureComponent</li>
<li>实现当前组件的render函数</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// constrator函数在没有状态管理时可以不写, 因为继承了父类所以必须调用super()</span></span>
<span class="line">    <span class="token function">constrator</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello World'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state</span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


