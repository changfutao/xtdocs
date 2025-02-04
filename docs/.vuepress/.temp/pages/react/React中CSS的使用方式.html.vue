<template><div><nav class="table-of-contents"><ul><li><router-link to="#_1-组件化天下的-css">1.组件化天下的 CSS</router-link></li><li><router-link to="#_2-内联样式">2.内联样式</router-link></li><li><router-link to="#_3-普通的-css">3.普通的 css</router-link></li><li><router-link to="#_4-css-modules">4.css modules</router-link></li><li><router-link to="#_5-less-module">5.less module</router-link></li><li><router-link to="#_6-css-in-js">6.CSS in JS</router-link><ul><li><router-link to="#_1-styled-component-安装">1.styled-component 安装</router-link></li><li><router-link to="#_2-标签模板字符串">2.标签模板字符串</router-link></li><li><router-link to="#_3-styled-components-基本使用">3.styled-components 基本使用</router-link></li></ul></li><li><router-link to="#classnames-使用">classNames 使用</router-link><ul><li><router-link to="#安装-classnames">安装 classnames</router-link></li></ul></li></ul></nav>
<h1 id="react-中-css-的使用方式" tabindex="-1"><a class="header-anchor" href="#react-中-css-的使用方式"><span>React 中 CSS 的使用方式</span></a></h1>
<h2 id="_1-组件化天下的-css" tabindex="-1"><a class="header-anchor" href="#_1-组件化天下的-css"><span>1.组件化天下的 CSS</span></a></h2>
<p>CSS 的设计就不是为了组件化而生的,所以在目前组件化的框架中都在需要一种合适的 CSS 解决方案</p>
<ul>
<li>在组件化中选择合适的 CSS 解决方案应该符合以下条件
<ul>
<li>可以编写局部 css: css 具备自己的局部作用域,不会随意污染其他组件内的元素</li>
<li>可以编写动态的 css: 可以获取当前组件的一些状态,根据状态的变化生成不同的 css 样式</li>
<li>支持所有的 css 特性: 伪类、动画、媒体查询等</li>
<li>编写起来简洁方便、最好符合一贯的 css 风格特点</li>
</ul>
</li>
</ul>
<h2 id="_2-内联样式" tabindex="-1"><a class="header-anchor" href="#_2-内联样式"><span>2.内联样式</span></a></h2>
<ul>
<li>
<p>内联样式是官方推荐的一种 css 样式写法</p>
<ul>
<li>style 接受一个采用小驼峰命名属性的 JavaScript 对象,而不是 CSS 字符串</li>
<li>并且可以引用 state 中的状态来设置相关的样式</li>
</ul>
</li>
<li>
<p>内联样式的优点</p>
<ul>
<li>内联样式, 样式之间不会有冲突</li>
<li>可以动态获取当前 state 中的状态</li>
</ul>
</li>
<li>
<p>内联样式的缺点</p>
<ul>
<li>写法上都需要使用驼峰标识</li>
<li>某些样式没有提示</li>
<li>大量的样式造成代码混乱</li>
</ul>
</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="App.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"20px"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> fontSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">,</span> color <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官方推荐内联样式和普通 css 一起使用</p>
<h2 id="_3-普通的-css" tabindex="-1"><a class="header-anchor" href="#_3-普通的-css"><span>3.普通的 css</span></a></h2>
<p>普通的 css 我们通常会编写一个单独的文件,之后再进行引入。</p>
<ul>
<li>普通的 css 缺点:
<ul>
<li>组件化开发中我们总是希望组件时一个独立的模块,即便是样式也只是在自己内部生效,不会相会影响,但是普通的 css 都属于全局的 css,样式之间会相互影响</li>
<li>普通的 css 最大的问题是样式之间会相互层叠掉</li>
</ul>
</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="pages/home/style.css"><pre v-pre><code><span class="line"><span class="token selector">.title</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="pages/home/home.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"./style.css"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="pages/profile/style.css"><pre v-pre><code><span class="line"><span class="token selector">.title</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="pages/profile/profile.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"./style.css"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Profile</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Profile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="App.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"./home"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">"./profile"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Profile</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-css-modules" tabindex="-1"><a class="header-anchor" href="#_4-css-modules"><span>4.css modules</span></a></h2>
<ul>
<li>
<p>css modules 并不是 React 特有的解决方案,而是所有使用了类似于 webpack 配置的环境下都可以使用</p>
<ul>
<li>如果在其他项目中使用它,那么我们需要自己来进行配置,比如配置 webpack.config.js 中的 modules: true 等</li>
</ul>
</li>
<li>
<p>React 的脚手架已经内置了 css modules 的配置</p>
<ul>
<li>.css/.less/.scss 等样式文件都需要修改成.module.css/.module.less/.module.scss 等之后就可以引用并且进行使用</li>
</ul>
</li>
</ul>
<blockquote>
<p>css modules 解决了局部作用域的问题</p>
</blockquote>
<ul>
<li>css modules 缺点
<ul>
<li>引用的类名, 不能使用连接符(.home-title),在 JavaScript 中是不识别的</li>
<li>所有的 className 都必须使用{style.className}的形式来编写</li>
<li>不方便动态来修改某些样式,依然需要使用内联样式的方式</li>
</ul>
</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="profile.module.css"><pre v-pre><code><span class="line"><span class="token selector">.title</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="profile.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> profileStyle <span class="token keyword">from</span> <span class="token string">"./profile.module.css"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>profileStyle<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Profile</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Profile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="App.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">"./profile"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Profile</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-less-module" tabindex="-1"><a class="header-anchor" href="#_5-less-module"><span>5.less module</span></a></h2>
<p>1.安装 craco 和 craco-less</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line">npm install @craco/craco</span>
<span class="line">npm install craco-less</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.将 package.json 文件里的 scripts 换成 craco</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"craco start"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"craco build"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"craco test"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"eject"</span><span class="token operator">:</span> <span class="token string">"react-scripts eject"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.在 src 目录下创建 craco.config.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"craco-less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">plugin</span><span class="token operator">:</span> CracoLessPlugin<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">lessLoaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"@primary-color"</span><span class="token operator">:</span> <span class="token string">"#1DA57A"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="style.module.less"><pre v-pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token selector">.title</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bolder<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="App.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> appStyle <span class="token keyword">from</span> <span class="token string">"./style.module.less"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>appStyle<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>appStyle<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-css-in-js" tabindex="-1"><a class="header-anchor" href="#_6-css-in-js"><span>6.CSS in JS</span></a></h2>
<blockquote>
<p>&quot;CSS-in-JS&quot;是指一种模式,其中 CSS 由 JavaScript 生成而不是在外部文件中定义</p>
</blockquote>
<ul>
<li>CSS-in-JS 通过 JavaScript 来为 CSS 赋予一些能力,包括类似于 CSS 预处理器一样的嵌套、函数定义、逻辑复用、动态修改状态等。</li>
<li>虽然 CSS 预处理也具备某些能力,但是获取动态状态依然是一个不好处理的点。</li>
</ul>
<p>目前比较流行的 CSS-in-JS 库有哪些?</p>
<ul>
<li>styled-components</li>
<li>emotion</li>
<li>glamorous</li>
</ul>
<h3 id="_1-styled-component-安装" tabindex="-1"><a class="header-anchor" href="#_1-styled-component-安装"><span>1.styled-component 安装</span></a></h3>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line">npm install styled-components</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-标签模板字符串" tabindex="-1"><a class="header-anchor" href="#_2-标签模板字符串"><span>2.标签模板字符串</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"ross"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 这里也是对foo函数的调用</span></span>
<span class="line"><span class="token comment">// 1.模板字符串被拆分了</span></span>
<span class="line"><span class="token comment">// 2.第一个元素是数组, 是被模板字符串拆分的字符串组合</span></span>
<span class="line"><span class="token comment">// 3.后面的元素是一个个模板字符串传入的内容</span></span>
<span class="line">foo<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我的名字:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 年龄:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 这里会输出: 参数是三个数组</span></span>
<span class="line"><span class="token comment">// 参数一: ['我的名字:', ', 年龄:', '']</span></span>
<span class="line"><span class="token comment">// 参数二: ross</span></span>
<span class="line"><span class="token comment">// 参数三: 18</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-styled-components-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-styled-components-基本使用"><span>3.styled-components 基本使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="style/variables.js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> primaryColor <span class="token operator">=</span> <span class="token string">"#0094ff"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> middleSize <span class="token operator">=</span> <span class="token string">"16px"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="home/style.js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> primaryColor<span class="token punctuation">,</span> middleSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../style/variables.js"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> HomeWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  .title {</span>
<span class="line">    font-size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>middleSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line">    color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>primaryColor<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line">    font-weight: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>fontWeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line">    &amp;:hover {</span>
<span class="line">      background-color: skyblue;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="home.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HomeWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./style"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// fontWeight 通过props传递给style.js的font-weight属性的值【动态赋值】</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HomeWrapper</span></span> <span class="token attr-name">fontWeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bolder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">HomeWrapper</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="css-in-js继承"><pre v-pre><code><span class="line"><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> MyBaseButton <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  border-redius: 5px;</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> MyPrimaryButton <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>MyButton<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  background-color: #0094ff;</span>
<span class="line">  color: #fff;</span>
<span class="line">  border: none;</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="styled默认值"><pre v-pre><code><span class="line"><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 表明当&lt;HomeWrapper />的Props中没有传递padding时,使用默认的5px</span></span>
<span class="line"><span class="token keyword">const</span> HomeWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">paddingStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>padding <span class="token operator">||</span> <span class="token string">"5px"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  .title {</span>
<span class="line">    padding: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>paddingStyle<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line">  }</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>styled-components 设置主题</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="index.js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"30px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="style.js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> HomeWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line">  font-size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>fontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="classnames-使用" tabindex="-1"><a class="header-anchor" href="#classnames-使用"><span>classNames 使用</span></a></h2>
<h3 id="安装-classnames" tabindex="-1"><a class="header-anchor" href="#安装-classnames"><span>安装 classnames</span></a></h3>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line">npm i classNames</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="style.css"><pre v-pre><code><span class="line"><span class="token selector">.title</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bold</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bolder<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="App.jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">"classnames"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">isTitle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">isBold</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> isTitle<span class="token punctuation">,</span> <span class="token literal-property property">bold</span><span class="token operator">:</span> isBold <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">classNames</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> isTitle<span class="token punctuation">,</span> <span class="token literal-property property">bold</span><span class="token operator">:</span> isBold <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        &lt;h2 className=["aaa", </span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> isTitle<span class="token punctuation">,</span> <span class="token literal-property property">bold</span><span class="token operator">:</span> isBold <span class="token punctuation">}</span><span class="token plain-text">]>App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


