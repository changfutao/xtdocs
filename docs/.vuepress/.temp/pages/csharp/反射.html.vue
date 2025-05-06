<template><div><h1 id="反射" tabindex="-1"><a class="header-anchor" href="#反射"><span>反射</span></a></h1>
<h2 id="_1-基础概念" tabindex="-1"><a class="header-anchor" href="#_1-基础概念"><span>1.基础概念</span></a></h2>
<ul>
<li>
<p>什么是反射?</p>
<ul>
<li>反射是.NET框架提供的一种机制,允许程序在运行时动态获取类型信息(如类、方法、属性、字段等),并可以动态创建对象、调用方法或访问字段。</li>
<li>反射的核心类是<code v-pre>System.Type</code>,它表示类型的元数据。</li>
</ul>
</li>
<li>
<p>反射的用途</p>
<ul>
<li>动态加载程序集</li>
<li>动态创建对象实例</li>
<li>动态调用方法或访问属性</li>
<li>实现插件架构</li>
<li>序列化和反序列化</li>
<li>依赖注入框架实现</li>
</ul>
</li>
<li>
<p>System.Type</p>
<ul>
<li>表示类型的元数据,是反射的核心类。</li>
<li>获取Type类型的方式</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token class-name">Type</span> t1 <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyClass</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 通过类型</span></span>
<span class="line"><span class="token class-name">Type</span> t2 <span class="token operator">=</span> myObject<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 通过实例</span></span>
<span class="line"><span class="token class-name">Type</span> t3 <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">"Namespace.MyClass"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过完整类型名称</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>System.Reflection.Assembly
<ul>
<li>表示程序集, 可以动态加载程序集并获取其中的类型</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token class-name">Assembly</span> assembly <span class="token operator">=</span> Assembly<span class="token punctuation">.</span><span class="token function">LoadFrom</span><span class="token punctuation">(</span><span class="token string">"MyLibrary.dll"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Type<span class="token punctuation">[</span><span class="token punctuation">]</span></span> types <span class="token operator">=</span> assembly<span class="token punctuation">.</span><span class="token function">GetTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>System.Reflection.MethodInfo
<ul>
<li>表示方法的信息,可以动态调用方法</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token class-name">MethodInfo</span> method <span class="token operator">=</span> type<span class="token punctuation">.</span><span class="token function">GetMethod</span><span class="token punctuation">(</span><span class="token string">"MyMethod"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">method<span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>paramters<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


