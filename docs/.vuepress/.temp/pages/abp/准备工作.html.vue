<template><div><h1 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h1>
<h2 id="_1-安装abp-cli" tabindex="-1"><a class="header-anchor" href="#_1-安装abp-cli"><span>1.安装ABP CLI</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">dotnet tool <span class="token function">install</span> <span class="token parameter variable">-g</span> Volo.Abp.Cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-创建解决方案" tabindex="-1"><a class="header-anchor" href="#_2-创建解决方案"><span>2.创建解决方案</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># -t template app</span></span>
<span class="line"><span class="token comment"># -u ui mvc/angular</span></span>
<span class="line"><span class="token comment"># -d database </span></span>
<span class="line"><span class="token comment"># -m react-native</span></span>
<span class="line"></span>
<span class="line">abp new yourprojectname <span class="token parameter variable">-t</span> app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-ddd分层" tabindex="-1"><a class="header-anchor" href="#_3-ddd分层"><span>3.DDD分层</span></a></h2>
<p>.Domain.Shared  &lt;= .Domain  &lt;=  .EntityFrameworkCore</p>
<p>.Domain.Shared &lt;= .Application.Contracts  &lt;=  .Application  &lt;=  .HttpApiClient</p>
<h4 id="domain-shared-项目" tabindex="-1"><a class="header-anchor" href="#domain-shared-项目"><span>.Domain.Shared 项目</span></a></h4>
<p>项目包含常量,枚举和其他对象,这些对象实际上是领域层的一部分,但是解决方案中所有的层/项目中都会使用到.</p>
<p>例如 <code v-pre>BookType</code> 枚举和 <code v-pre>BookConsts</code> 类 (可能是 <code v-pre>Book</code> 实体用到的常数字段,像<code v-pre>MaxNameLength</code>)都适合放在这个项目中.</p>
<ul>
<li>该项目不依赖解决方案中的其他项目. 其他项目直接或间接依赖该项目</li>
</ul>
<h4 id="domain-项目" tabindex="-1"><a class="header-anchor" href="#domain-项目"><span>.Domain 项目</span></a></h4>
<p>解决方案的领域层. 它主要包含 <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Entities" target="_blank" rel="noopener noreferrer">实体, 集合根</a>, <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Domain-Services" target="_blank" rel="noopener noreferrer">领域服务</a>, <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Value-Types" target="_blank" rel="noopener noreferrer">值类型</a>, <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Repositories" target="_blank" rel="noopener noreferrer">仓储接口</a> 和解决方案的其他领域对象.</p>
<p>例如 <code v-pre>Book</code> 实体和 <code v-pre>IBookRepository</code> 接口都适合放在这个项目中.</p>
<ul>
<li>它依赖 <code v-pre>.Domain.Shared</code> 项目,因为项目中会用到它的一些常量,枚举和定义其他对象.</li>
</ul>
<h4 id="application-contracts-项目" tabindex="-1"><a class="header-anchor" href="#application-contracts-项目"><span>.Application.Contracts 项目</span></a></h4>
<p>项目主要包含 <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Application-Services" target="_blank" rel="noopener noreferrer">应用服务</a> <strong>interfaces</strong> 和应用层的 <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Data-Transfer-Objects" target="_blank" rel="noopener noreferrer">数据传输对象</a> (DTO). 它用于分离应用层的接口和实现. 这种方式可以将接口项目做为约定包共享给客户端.</p>
<p>例如 <code v-pre>IBookAppService</code> 接口和 <code v-pre>BookCreationDto</code> 类都适合放在这个项目中.</p>
<ul>
<li>它依赖 <code v-pre>.Domain.Shared</code> 因为它可能会在应用接口和DTO中使用常量,枚举和其他的共享对象.</li>
</ul>
<h4 id="application-项目" tabindex="-1"><a class="header-anchor" href="#application-项目"><span>.Application 项目</span></a></h4>
<p>项目包含 <code v-pre>.Application.Contracts</code> 项目的 <a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Application-Services" target="_blank" rel="noopener noreferrer">应用服务</a> 接口<strong>实现</strong>.</p>
<p>例如 <code v-pre>BookAppService</code> 类适合放在这个项目中.</p>
<ul>
<li>它依赖 <code v-pre>.Application.Contracts</code> 项目, 因为它需要实现接口与使用DTO.</li>
<li>它依赖 <code v-pre>.Domain</code> 项目,因为它需要使用领域对象(实体,仓储接口等)执行应用程序逻辑.</li>
</ul>
<h4 id="entityframeworkcore-项目" tabindex="-1"><a class="header-anchor" href="#entityframeworkcore-项目"><span>.EntityFrameworkCore 项目</span></a></h4>
<p>这是集成EF Core的项目. 它定义了 <code v-pre>DbContext</code> 并实现 <code v-pre>.Domain</code> 项目中定义的仓储接口.</p>
<ul>
<li>它依赖 <code v-pre>.Domain</code> 项目,因为它需要引用实体和仓储接口.</li>
</ul>
<blockquote>
<p>只有在你使用了EF Core做为数据库提供程序时,此项目才会可用. 如果选择的是其他数据库提供程序那么项目的名称会改变</p>
</blockquote>
<h4 id="entityframeworkcore-dbmigrations-项目" tabindex="-1"><a class="header-anchor" href="#entityframeworkcore-dbmigrations-项目"><span>.EntityFrameworkCore.DbMigrations 项目</span></a></h4>
<p>包含解决方案的EF Core数据库迁移. 它有独立的 <code v-pre>DbContext</code> 来专门管理迁移.</p>
<p>ABP是一个模块化的框架,理想的设计是让每个模块都有自己的 <code v-pre>DbContext</code> 类. 这时用于迁移的 <code v-pre>DbContext</code> 就会发挥作用. 它将所有的 <code v-pre>DbContext</code> 配置统一到单个模型中以维护单个数据库的模式. 对于更高级的场景,可以程序可以拥有多个数据库(每个数据库有一个或多个模块表)和多个迁移<code v-pre>DbContext</code>(每个都维护不同的数据库模式)</p>
<p>需要注意,迁移 <code v-pre>DbContext</code> 仅用于数据库迁移,而不在<em>运行时</em>使用.</p>
<ul>
<li>它依赖 <code v-pre>.EntityFrameworkCore</code> 项目,因为它重用了应用程序的 <code v-pre>DbContext</code> 配置 .</li>
</ul>
<blockquote>
<p>只有在你使用了EF Core做为数据库提供程序时,此项目才会可用. 参阅<a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Entity-Framework-Core-Migrations" target="_blank" rel="noopener noreferrer">Entity Framework Core迁移指南</a>了解这个项目的详细信息.</p>
</blockquote>
<h4 id="dbmigrator-项目" tabindex="-1"><a class="header-anchor" href="#dbmigrator-项目"><span>.DbMigrator 项目</span></a></h4>
<p>这是一个控制台应用程序,它简化了在开发和生产环境执行数据库迁移的操作.当你使用它时;</p>
<ul>
<li>必要时创建数据库(没有数据库时).</li>
<li>应用未迁移的数据库迁移.</li>
<li>初始化种子数据(当你需要时).</li>
</ul>
<blockquote>
<p>这个项目有自己的 <code v-pre>appsettings.json</code> 文件. 所以如果要更改数据库连接字符串,请记得也要更改此文件.</p>
</blockquote>
<p>初始化种子数据很重要,ABP具有模块化的种子数据基础设施. 种子数据的更多信息,请参阅<a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/Data-Seeding" target="_blank" rel="noopener noreferrer">文档</a>.</p>
<p>虽然创建数据库和应用迁移似乎只对关系数据库有用,但即使你选择NoSQL数据库提供程序(如MongoDB),也会生成此项目. 这时,它会为应用程序提供必要的初始数据.</p>
<ul>
<li>它依赖 <code v-pre>.EntityFrameworkCore.DbMigrations</code> 项目 (针对EF Core),因为它需要访问迁移文件.</li>
<li>它依赖 <code v-pre>.Application.Contracts</code> 项目,因为它需要访问权限定义在初始化种子数据时为管理员用户赋予所有权限.</li>
</ul>
<h4 id="httpapi-项目" tabindex="-1"><a class="header-anchor" href="#httpapi-项目"><span>.HttpApi 项目</span></a></h4>
<p>用于定义API控制器.</p>
<p>大多数情况下,你不需要手动定义API控制器,因为ABP的<a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/API/Auto-API-Controllers" target="_blank" rel="noopener noreferrer">动态API</a>功能会根据你的应用层自动创建API控制器. 但是,如果你需要编写API控制器,那么它是最合适的地方.</p>
<ul>
<li>它依赖 <code v-pre>.Application.Contracts</code> 项目,因为它需要注入应用服务接口.</li>
</ul>
<h4 id="httpapi-client-项目" tabindex="-1"><a class="header-anchor" href="#httpapi-client-项目"><span>.HttpApi.Client 项目</span></a></h4>
<p>定义C#客户端代理使用解决方案的HTTP API项目. 可以将上编辑共享给第三方客户端,使其轻松的在DotNet应用程序中使用你的HTTP API(其他类型的应用程序可以手动或使用其平台的工具来使用你的API).</p>
<p>ABP有<a href="https://www.koudingke.cn/docs/zh-Hans/abp-v8.1/latest/API/Dynamic-CSharp-API-Clients" target="_blank" rel="noopener noreferrer">动态 C# API 客户端</a>功能,所以大多数情况下你不需要手动的创建C#客户端代理.</p>
<p><code v-pre>.HttpApi.Client.ConsoleTestApp</code> 项目是一个用于演示客户端代理用法的控制台应用程序.</p>
<ul>
<li>它依赖 <code v-pre>.Application.Contracts</code> 项目,因为它需要使用应用服务接口和DTO.</li>
</ul>
<blockquote>
<p>如果你不需要为API创建动态C#客户端代理,可以删除此项目和依赖项</p>
</blockquote>
<h4 id="web-项目" tabindex="-1"><a class="header-anchor" href="#web-项目"><span>.Web 项目</span></a></h4>
<p>包含应用程序的用户界面(UI).如果使用ASP.NET Core MVC UI, 它包括Razor页面,javascript文件,样式文件,图片等...</p>
<p>包含应用程序主要的 <code v-pre>appsettings.json</code> 配置文件,用于配置数据库连接字符串和应用程序的其他配置</p>
<ul>
<li>依赖 <code v-pre>.HttpApi</code> 项目,因为UI层需要使用解决方案的API和应用服务接口.</li>
</ul>
<blockquote>
<p>如果查看 <code v-pre>.Web.csproj</code> 源码, 你会看到对 <code v-pre>.Application</code> 和 <code v-pre>.EntityFrameworkCore.DbMigrations</code> 项目的引用.</p>
<p>在编写UI层时实际上不需要这些引用. 因为UI层通常不依赖于EF Core或应用层的实现. 这个启动模板已经为分层部署做好了准备,API层托管在不同与UI层的服务器中.</p>
<p>但是如果你不选择 <code v-pre>--tiered</code> 选项, .Web项目会有这些引用,以便能够将Web,Api和应用层托管在单个应用程序站点.</p>
<p>你可以在表示层中使用领域实体和仓储,但是根据DDD的理论,这被认为是一种不好的做法.</p>
</blockquote>
<h4 id="test-项目" tabindex="-1"><a class="header-anchor" href="#test-项目"><span>Test 项目</span></a></h4>
<p>解决方案有多个测试项目,每一层都会有一个:</p>
<ul>
<li><code v-pre>.Domain.Tests</code> 用于测试领域层.</li>
<li><code v-pre>.Application.Tests</code> 用于测试应用层.</li>
<li><code v-pre>.EntityFrameworkCore.Tests</code> 用于测试EF Core配置与自定义仓储.</li>
<li><code v-pre>.Web.Tests</code> 用于测试UI(适用于ASP.NET Core MVC UI).</li>
<li><code v-pre>.TestBase</code> 所有测试项目的基础(共享)项目.</li>
</ul>
<p>此外, <code v-pre>.HttpApi.Client.ConsoleTestApp</code> 是一个控制台应用程序(不是自动化测试项目),它用于演示.Net应用程序中HTTP API的用法.</p>
<p>测试项目是用于做集成测试的:</p>
<ul>
<li>它完全集成到ABP框架和应用程序的所有服务.</li>
<li>如果数据库提供程序是EF Core,测试项目会使用SQLite内存数据库,如果是MongoDB,它使用<a href="https://www.koudingke.cn/go?link=https%3a%2f%2fgithub.com%2fasimmon%2fephemeral-mongo" target="_blank" rel="noopener noreferrer">EphemeralMongo</a>库.</li>
<li>授权被禁用,任何的应用服务都可以在测试中轻松调用.</li>
</ul>
<p>你依然可以编写单元测试,只不过它很难写(因为你需要准备mock/fake对象),但它的运行速度更快(因为只测试单个类并跳过所有初始化过程).</p>
</div></template>


