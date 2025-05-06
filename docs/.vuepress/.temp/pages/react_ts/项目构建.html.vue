<template><div><h1 id="项目构建" tabindex="-1"><a class="header-anchor" href="#项目构建"><span>项目构建</span></a></h1>
<h2 id="_1-使用vite构建项目" tabindex="-1"><a class="header-anchor" href="#_1-使用vite构建项目"><span>1.使用vite构建项目</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># npm</span></span>
<span class="line"><span class="token function">npm</span> init vite@lastest</span>
<span class="line"><span class="token comment"># yarn</span></span>
<span class="line"><span class="token function">yarn</span> create vite</span>
<span class="line"><span class="token comment"># pnpm</span></span>
<span class="line"><span class="token function">pnpm</span> create vite</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-editorconfig" tabindex="-1"><a class="header-anchor" href="#_2-editorconfig"><span>2.EditorConfig</span></a></h2>
<p>项目根目录创建.editorconfig文件,统一格式</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># https://editorconfig.org</span></span>
<span class="line"><span class="token comment"># root = true 表示根文件</span></span>
<span class="line">root <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># [*] 表示针对所有文件都生效</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span></span>
<span class="line">charset <span class="token operator">=</span> utf-8</span>
<span class="line"><span class="token comment"># 缩进格式是空格</span></span>
<span class="line">indent_style <span class="token operator">=</span> space</span>
<span class="line"><span class="token comment"># 缩进是2个空格</span></span>
<span class="line">indent_size <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token comment"># 换行符 \n</span></span>
<span class="line">end_of_line <span class="token operator">=</span> lf</span>
<span class="line">insert_final_newline <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置解读</strong></p>
<p>root=true 对所有文件生效</p>
<p>end_of_line= lf 不同操作系统换行符不同</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">end_of_line</span>
<span class="line">lf <span class="token operator">|</span> cr <span class="token operator">|</span> <span class="token function">crlf</span> <span class="token punctuation">(</span>大小写不限）</span>
<span class="line">复制代码</span>
<span class="line">end_of_line设置的换行符的表示方式。先看一下这几个值是什么意思</span>
<span class="line"></span>
<span class="line">lf：全拼Line Feed，意思是换行，用符号 \n 表示</span>
<span class="line"><span class="token literal-property property">cr</span><span class="token operator">:</span> 全拼Carriage Return， 意思是回车， 用符号 \r 表示</span>
<span class="line">crlf：cr 和 lf的结合，回车换行，用符号 \r\n</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>insert_final_newline = true 代码最后新增一行</p>
<p>trim_trailing_whitespace = true 修剪尾随空格</p>
<blockquote>
<p>vscode 需要安装editorconfig插件</p>
</blockquote>
<h2 id="_3-prettier" tabindex="-1"><a class="header-anchor" href="#_3-prettier"><span>3.Prettier</span></a></h2>
<h3 id="部分配置" tabindex="-1"><a class="header-anchor" href="#部分配置"><span>部分配置</span></a></h3>
<ul>
<li><code v-pre>trailingComma</code>: 对象的最后一个属性末尾也会添加<code v-pre>,</code>,比如<code v-pre>{ a: 1, b: 2 }</code>会格式为<code v-pre>{ a: 1, b: 2 }</code></li>
<li><code v-pre>tabWidth</code>: 缩进大小</li>
<li><code v-pre>semi</code>: 是否添加分号</li>
<li><code v-pre>singleQuote</code> : 是否单引号</li>
<li><code v-pre>jsxSingleQuote</code>: jsx语法下是否单引号</li>
<li><code v-pre>endOfLine</code>: 与<code v-pre>.editorconfig</code>保持一致设置</li>
<li><code v-pre>printWidth</code>： 单行代码最长字符长度,超过之后会自动格式化换行</li>
<li><code v-pre>bracketSpacing</code>: 在对象中的括号之间打印空格, <code v-pre>{ a: 5 }</code>格式化为 <code v-pre>{ a: 5 }</code></li>
<li><code v-pre>arrowParens</code>: 箭头函数的参数无论有几个,都要括号包裹。比如<code v-pre>(a) =&gt; {}</code>,如果设为<code v-pre>avoid</code>,会自动格式化为<code v-pre>a =&gt; {}</code></li>
</ul>
<h3 id="安装配置流程" tabindex="-1"><a class="header-anchor" href="#安装配置流程"><span>安装配置流程</span></a></h3>
<p>1.安装prettier插件和vscode扩展Prettier - Code formatter</p>
<p>2.在项目根目录新建一个文件夹<code v-pre>.vscode</code>,在此文件下再建一个<code v-pre>settings.json</code></p>
<p>代码保存时会自动格式化代码</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 保存自动格式化代码</span></span>
<span class="line">  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 开启stylelint自动修复</span></span>
<span class="line">  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 默认格式化工具</span></span>
<span class="line">  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prettier配置" tabindex="-1"><a class="header-anchor" href="#prettier配置"><span>prettier配置</span></a></h3>
<p>在项目根目录上创建.prettierrc.cjs</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 每行最大列，超过换行</span></span>
<span class="line">  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 使用制表符而不是空格缩进</span></span>
<span class="line">  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 缩进</span></span>
<span class="line">  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 结尾不用分号</span></span>
<span class="line">  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 使用单引号</span></span>
<span class="line">  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 在JSX中使用单引号而不是双引号</span></span>
<span class="line">  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 箭头函数里面，如果是一个参数的时候，去掉括号</span></span>
<span class="line">  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">'avoid'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 对象、数组括号与文字间添加空格</span></span>
<span class="line">  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 尾随逗号</span></span>
<span class="line">  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-eslint" tabindex="-1"><a class="header-anchor" href="#_4-eslint"><span>4.EsLint</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> js <span class="token keyword">from</span> <span class="token string">'@eslint/js'</span></span>
<span class="line"><span class="token keyword">import</span> globals <span class="token keyword">from</span> <span class="token string">'globals'</span></span>
<span class="line"><span class="token keyword">import</span> reactHooks <span class="token keyword">from</span> <span class="token string">'eslint-plugin-react-hooks'</span></span>
<span class="line"><span class="token keyword">import</span> reactRefresh <span class="token keyword">from</span> <span class="token string">'eslint-plugin-react-refresh'</span></span>
<span class="line"><span class="token keyword">import</span> tseslint <span class="token keyword">from</span> <span class="token string">'typescript-eslint'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> tseslint<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dist'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>js<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">,</span> <span class="token operator">...</span>tseslint<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.{ts,tsx}'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">languageOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">globals</span><span class="token operator">:</span> globals<span class="token punctuation">.</span>browser<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'react-hooks'</span><span class="token operator">:</span> reactHooks<span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'react-refresh'</span><span class="token operator">:</span> reactRefresh<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span>reactHooks<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">.</span>rules<span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'react-refresh/only-export-components'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">allowConstantExport</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'react/react-in-jsx-scope'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 新增部分</span></span>
<span class="line">      <span class="token string-property property">'no-console'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用console</span></span>
<span class="line">      <span class="token string-property property">'no-unused-vars'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span><span class="token comment">// 禁止定义未使用的变量</span></span>
<span class="line">      <span class="token string-property property">'no-debugger'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用debugger</span></span>
<span class="line">      <span class="token string-property property">'no-var'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token comment">// 要求使用 let 或 const 而不是 var</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-vite" tabindex="-1"><a class="header-anchor" href="#_5-vite"><span>5.Vite</span></a></h2>
<p>需要使用<code v-pre>path.resolve(__dirname, './src')</code>,这个是node里的,需要安装<code v-pre>@types/node</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span></span>
<span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span> <span class="token comment">// 需要安装@types/node</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  server<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    host<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span></span>
<span class="line">    port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line">    proxy<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token string">'http://api-driver.marsview.cc'</span> <span class="token comment">// 遇到/api变成http://api-driver.marsview.cc</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    alias<span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-环境配置封装" tabindex="-1"><a class="header-anchor" href="#_6-环境配置封装"><span>6.环境配置封装</span></a></h2>
<h3 id="_6-1-方式一" tabindex="-1"><a class="header-anchor" href="#_6-1-方式一"><span>6.1 方式一:</span></a></h3>
<p>在项目根目录下创建环境配置<code v-pre>.env.development</code>、<code v-pre>.env.stag</code>、<code v-pre>.env.production</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title=".env.development"><pre v-pre><code><span class="line"><span class="token comment"># 设置NODE_ENV环境变量</span></span>
<span class="line"><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>development</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 接口API地址</span></span>
<span class="line"><span class="token assign-left variable">VITE_BASE_API</span><span class="token operator">=</span>/api</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 上传API</span></span>
<span class="line"><span class="token assign-left variable">VITE_UPLOAD_API</span><span class="token operator">=</span>http://api-driver-dev.marsview.cc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># CDN地址</span></span>
<span class="line"><span class="token assign-left variable">VITE_CDN</span><span class="token operator">=</span>http://www.aliyun.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># MOCK 开关</span></span>
<span class="line"><span class="token assign-left variable">VITE_MOCK</span><span class="token operator">=</span>false</span>
<span class="line"></span>
<span class="line"><span class="token comment"># MOCK API</span></span>
<span class="line"><span class="token assign-left variable">VITE_MOCK_API</span><span class="token operator">=</span>https://dev.usemock.com/67b6d819cc83fde820e1ef02/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：要定义的变量必须以VITE_开头, 在js中可以通过import.meta.env.VITE_xxx来访问</p>
</blockquote>
<h2 id="额外知识" tabindex="-1"><a class="header-anchor" href="#额外知识"><span>额外知识</span></a></h2>
<h3 id="生产依赖和开发依赖" tabindex="-1"><a class="header-anchor" href="#生产依赖和开发依赖"><span>生产依赖和开发依赖</span></a></h3>
<ul>
<li>生产依赖表示打包上线时需要用到的依赖包</li>
<li>开发依赖表示在开发时需要依赖的包,但是在生产上线时不需要</li>
</ul>
</div></template>


