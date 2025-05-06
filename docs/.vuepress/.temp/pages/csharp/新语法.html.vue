<template><div><h1 id="新语法" tabindex="-1"><a class="header-anchor" href="#新语法"><span>新语法</span></a></h1>
<h2 id="c-10" tabindex="-1"><a class="header-anchor" href="#c-10"><span>C# 10</span></a></h2>
<ul>
<li>全局using指令 我们可以在类库/控制台等里新建一个Using.cs【文件名没有特殊限制】,Using.cs内部使用如下代码:</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token comment">// 那么这个类库的其他.cs文件就不需要using这些命名空间了</span></span>
<span class="line"><span class="token keyword">global</span> <span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">global</span> <span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Extensions<span class="token punctuation">.</span>Configuration<span class="token punctuation">.</span>Json</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>然后需要在类库的.csproj文件中加入&lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;</code></p>
<ul>
<li>
<p>文件范围的命名空间声明</p>
<ul>
<li>允许编写独立的namespace代码行声明命名空间,文件中所有的类型都是这个命名空间下的成员。</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> <span class="token namespace">CSharpDemo</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span><span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-9" tabindex="-1"><a class="header-anchor" href="#c-9"><span>C# 9</span></a></h2>
<ul>
<li>
<p>顶级语句   不需要声明类和方法,直接写C#代码。编译器的语法糖,编译器会自动生成类和Main方法</p>
<ul>
<li>如何想在顶级语句中写异步方法,那么可以直接使用await</li>
</ul>
</li>
<li>
<p>记录类型(record) 编译器会自动生成Equals、GetHashCode等方法【比较两个对象是否相等,不需要重写Equals方法】</p>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> FirstName<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> LastName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Zack"</span><span class="token punctuation">,</span> <span class="token string">"Yang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Zack"</span><span class="token punctuation">,</span> <span class="token string">"Yang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true  </span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>编译器把record类型编译成一个Person类,并且提供了构造方法、属性、ToString方法、Equals方法等。 在参数里的编译器会将它们定义成只读属性</p>
</blockquote>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token comment">// 高级用法</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> LastName<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span>    </span>
<span class="line">   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> FirstName <span class="token punctuation">{</span><span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>record类型的对象属性默认都是只读的,而且我们也推荐使用属性都为只读的类型。所有属性、成员变量都为只读的类型叫做&quot;不可变类型&quot;,不可变类型可以简化程序逻辑,并且减少并发访问、状态管理等麻烦。</p>
</blockquote>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> UserName<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Emial<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> Age<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> UserName<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> Age<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">(</span>UserName<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> Age<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">User</span> u1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span><span class="token punctuation">(</span><span class="token string">"zs"</span><span class="token punctuation">,</span> <span class="token string">"123@qq.com"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">User</span> u2 <span class="token operator">=</span> u1 <span class="token keyword">with</span> <span class="token punctuation">{</span> Email <span class="token operator">=</span> <span class="token string">"333@qq.com"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">ReferenceEquals</span><span class="token punctuation">(</span>u1<span class="token punctuation">,</span> u2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-8" tabindex="-1"><a class="header-anchor" href="#c-8"><span>C# 8</span></a></h2>
<ul>
<li>简化using, using声明,在C#中可以用using关键字来简化非托管资源的释放,当变量离开using作用的范围后,会自动调用对象的Dispose方法,从而完成非托管资源的释放。</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token comment">// 当代码执行离开被using修饰的变量作用域的时候,变量指向的对象的Dispose方法就会被调用</span></span>
<span class="line"><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>connStr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">conn<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> cmd <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">CreateCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">cmd<span class="token punctuation">.</span>CommandText <span class="token operator">=</span> <span class="token string">"select * from T_Articles"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> reader <span class="token operator">=</span> cmd<span class="token punctuation">.</span><span class="token function">ExecuteReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>可为空的引用类型</p>
<ul>
<li>在vs2022中默认是启用的, 需要在当前所在类库/控制台等的<code v-pre>.csproj</code>中新增<code v-pre>&lt;Nullable&gt;disable&lt;/Nullable&gt;</code>关闭这个功能</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> <span class="token namespace">CSharpDemo</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span></span>
<span class="line"><span class="token punctuation">{</span>    </span>
<span class="line">   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span><span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line">   <span class="token comment">// 定义可为空的引用类型</span></span>
<span class="line">   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Address <span class="token punctuation">{</span><span class="token keyword">get</span><span class="token punctuation">;</span><span class="token keyword">set</span><span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">s<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span></span>
<span class="line">s<span class="token punctuation">.</span>Address <span class="token operator">=</span> <span class="token string">"青岛"</span><span class="token punctuation">;</span></span>
<span class="line">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Address<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这样会触发警告</span></span>
<span class="line">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token operator">!</span><span class="token punctuation">.</span>Address<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用!抑制警告</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


