<template><div><h1 id="jsx语法" tabindex="-1"><a class="header-anchor" href="#jsx语法"><span>JSX语法</span></a></h1>
<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h2>
<ul>
<li>JSX是什么
<ul>
<li>JSX是一种JavaScript的语法扩展,也在很多地方称之为JavaScript XML,因为看起来就是一段XML语法</li>
<li>它用于描述我们的UI界面,并且其完成可以和JavaScript融合在一起使用</li>
</ul>
</li>
</ul>
<h2 id="_2-书写规范" tabindex="-1"><a class="header-anchor" href="#_2-书写规范"><span>2.书写规范</span></a></h2>
<ul>
<li>JSX的顶层只能有一个根元素/使用Fragment</li>
<li>为了方便阅读,我们可以在jsx的外层包裹一个小括号(), 这样可以方便阅读,并且jsx可以进行换行书写</li>
<li>JSX中的标签可以是单标签,也可以是双标签
<ul>
<li>注意: 如果是单标签,必须以 /&gt;结尾</li>
</ul>
</li>
</ul>
<h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用"><span>3.使用</span></a></h2>
<h3 id="_3-1-注释" tabindex="-1"><a class="header-anchor" href="#_3-1-注释"><span>3.1 注释</span></a></h3>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token punctuation">{</span><span class="token comment">/* 注释 */</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-jsx嵌入变量作为子元素" tabindex="-1"><a class="header-anchor" href="#_3-2-jsx嵌入变量作为子元素"><span>3.2 JSX嵌入变量作为子元素</span></a></h3>
<ul>
<li>当变量是Number、String、Array类型时,可以直接显示</li>
<li>当变量是null、undefined、Boolean类型时,内容为空
<ul>
<li>如果希望可以显示null、undefined、Boolean,那么需要转成字符串</li>
<li>转换的方式有很多, 比如toString方法、和空字符串拼接,String(变量)等方式</li>
</ul>
</li>
<li>Object对象类型不能作为子元素(not valid as a React child)
<ul>
<li>这里作为子元素是<div>{msg}</div>不能为对象,在 <div name={msg}>这种是可以的</div></li>
</ul>
</li>
</ul>
<h3 id="_3-2-jsx嵌入表达式" tabindex="-1"><a class="header-anchor" href="#_3-2-jsx嵌入表达式"><span>3.2 JSX嵌入表达式</span></a></h3>
<ul>
<li>运算表达式</li>
<li>三元运算符</li>
<li>执行一个函数</li>
</ul>
</div></template>


