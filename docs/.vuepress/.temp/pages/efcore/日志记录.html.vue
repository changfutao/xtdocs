<template><div><h1 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录"><span>日志记录</span></a></h1>
<h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置"><span>1.配置</span></a></h2>
<blockquote>
<p>可以在配置DbContext实例时使用LogTo从任意类型的应用程序访问EFCore日志。</p>
</blockquote>
<div class="language-C# line-numbers-mode" data-highlighter="prismjs" data-ext="C#" data-title="C#"><pre v-pre><code><span class="line">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)</span>
<span class="line">    =&gt; optionsBuilder.LogTo(Console.WriteLine);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<p><code v-pre>当使用 AddDbContext 或将 DbContextOptions 实例传递给 DbContext 构造函数时，仍会调用 OnConfiguring。 这使得它成为应用上下文配置的理想位置，而无需考虑如何构造 DbContext。</code></p>
<h2 id="_2-敏感数据" tabindex="-1"><a class="header-anchor" href="#_2-敏感数据"><span>2.敏感数据</span></a></h2>
<blockquote>
<p>默认情况下，EF Core 不会在异常消息中包含任何数据的值, 了解数据值(尤其是键值)在调试时非常有用。通过调用<a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.enablesensitivedatalogging#microsoft-entityframeworkcore-dbcontextoptionsbuilder-enablesensitivedatalogging" target="_blank" rel="noopener noreferrer">EnableSensitiveDataLogging()</a> 在 EF Core 中启用此功能</p>
</blockquote>
<div class="language-c# line-numbers-mode" data-highlighter="prismjs" data-ext="c#" data-title="c#"><pre v-pre><code><span class="line">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)</span>
<span class="line">    =&gt; optionsBuilder</span>
<span class="line">        .LogTo(Console.WriteLine)</span>
<span class="line">        .EnableSensitiveDataLogging();</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-详细查询异常" tabindex="-1"><a class="header-anchor" href="#_3-详细查询异常"><span>3.详细查询异常</span></a></h2>
<p>出于性能原因，EF Core 不会在 try-catch 块中包装每个调用以从数据库提供程序读取值。 但是，这有时会导致难以诊断的异常，尤其是当数据库在模型不允许的情况下返回 NULL 时。</p>
<p>启用 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.enabledetailederrors" target="_blank" rel="noopener noreferrer">EnableDetailedErrors</a> 将导致 EF 引入这些 try-catch 块，从而提供更详细的错误。 例如：</p>
<div class="language-c# line-numbers-mode" data-highlighter="prismjs" data-ext="c#" data-title="c#"><pre v-pre><code><span class="line">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)</span>
<span class="line">    =&gt; optionsBuilder</span>
<span class="line">        .LogTo(Console.WriteLine)</span>
<span class="line">        .EnableDetailedErrors();</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-筛选" tabindex="-1"><a class="header-anchor" href="#_4-筛选"><span>4.筛选</span></a></h2>
<h3 id="_4-1日志级别" tabindex="-1"><a class="header-anchor" href="#_4-1日志级别"><span>4.1日志级别</span></a></h3>
<p>系统会为每条 EF Core 日志消息分配由 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.logging.loglevel" target="_blank" rel="noopener noreferrer">LogLevel</a> 枚举定义的级别。 默认情况下，EF Core 简单日志记录包括 <code v-pre>Debug</code> 级别或更高级别的每条消息。 <code v-pre>LogTo</code> 可以传递一个更高的最低级别来筛选掉某些消息</p>
<div class="language-c# line-numbers-mode" data-highlighter="prismjs" data-ext="c#" data-title="c#"><pre v-pre><code><span class="line">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)</span>
<span class="line">    =&gt; optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-特定消息" tabindex="-1"><a class="header-anchor" href="#_4-2-特定消息"><span>4.2 特定消息</span></a></h3>
<p>每条日志消息都将分配有一个 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.logging.eventid" target="_blank" rel="noopener noreferrer">EventId</a>。 对于特定于关系的消息，可以从 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.entityframeworkcore.diagnostics.coreeventid" target="_blank" rel="noopener noreferrer">CoreEventId</a> 类或 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.entityframeworkcore.diagnostics.relationaleventid" target="_blank" rel="noopener noreferrer">RelationalEventId</a> 类访问这些 ID。 数据库提供程序也可能在相似的类中具有特定于提供程序的 ID。 例如，SQL Server 提供程序的 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.entityframeworkcore.diagnostics.sqlservereventid" target="_blank" rel="noopener noreferrer">SqlServerEventId</a>。</p>
<p><code v-pre>LogTo</code> 可以配置为仅记录与一个或多个事件 ID 关联的消息。 例如，仅记录正在初始化或释放的上下文的消息：</p>
<div class="language-c# line-numbers-mode" data-highlighter="prismjs" data-ext="c#" data-title="c#"><pre v-pre><code><span class="line">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)</span>
<span class="line">    =&gt; optionsBuilder</span>
<span class="line">        .LogTo(Console.WriteLine, new[] { CoreEventId.ContextDisposed, CoreEventId.ContextInitialized });</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-消息级别" tabindex="-1"><a class="header-anchor" href="#_4-3-消息级别"><span>4.3 消息级别</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">类别</th>
<th style="text-align:left">消息</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore</td>
<td style="text-align:left">所有 EF Core 消息</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Database</td>
<td style="text-align:left">所有数据库交互</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Database.Connection</td>
<td style="text-align:left">使用数据库连接</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Database.Command</td>
<td style="text-align:left">使用数据库命令</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Database.Transaction</td>
<td style="text-align:left">使用数据库事务</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Update</td>
<td style="text-align:left">正在保存实体，不包括数据库交互</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Model</td>
<td style="text-align:left">所有模型和元数据交互</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Model.Validation</td>
<td style="text-align:left">模型验证</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Query</td>
<td style="text-align:left">查询，不包括数据库交互</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Infrastructure</td>
<td style="text-align:left">常规事件，例如上下文创建</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Scaffolding</td>
<td style="text-align:left">数据库反向工程</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.Migrations</td>
<td style="text-align:left">迁移</td>
</tr>
<tr>
<td style="text-align:left">Microsoft.EntityFrameworkCore.ChangeTracking</td>
<td style="text-align:left">更改跟踪交互</td>
</tr>
</tbody>
</table>
<p><code v-pre>LogTo</code>可以配置为仅记录一个或多个类别的消息。例如: 仅记录数据库交互:</p>
<div class="language-c# line-numbers-mode" data-highlighter="prismjs" data-ext="c#" data-title="c#"><pre v-pre><code><span class="line">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)</span>
<span class="line">    =&gt; optionsBuilder</span>
<span class="line">        .LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Name });</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，<a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.entityframeworkcore.dbloggercategory" target="_blank" rel="noopener noreferrer">DbLoggerCategory</a> 类将提供一个用于查找某个类别的分层 API，并且无需对字符串进行硬编码。</p>
<p>由于类别是分层的，因此，这个使用 <code v-pre>Database</code> 类别的示例将包含子类别 <code v-pre>Database.Connection</code>、<code v-pre>Database.Command</code> 和 <code v-pre>Database.Transaction</code> 的所有消息。</p>
</div></template>


