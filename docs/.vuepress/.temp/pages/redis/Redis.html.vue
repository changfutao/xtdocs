<template><div><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h1>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识"><span>基础知识</span></a></h2>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3>
<ul>
<li>速度快  10W OPS
<ul>
<li>数据存储在内存中</li>
<li>使用C语言编写</li>
<li>采用单线程</li>
</ul>
</li>
<li>持久化</li>
<li>多种数据结构
<ul>
<li>String/Blobs/Bitmaps</li>
<li>Hash Tables(objects)</li>
<li>Linked Lists</li>
<li>Sets</li>
<li>Sorted Sets</li>
<li>HyperLogLog: 超小内存唯一值计数</li>
<li>GEO: 地理信息定位</li>
</ul>
</li>
<li>支持多种客户端语言</li>
<li>功能丰富
<ul>
<li>发布订阅</li>
<li>Lua脚本</li>
<li>事务</li>
<li>pipeline</li>
</ul>
</li>
<li>不依赖外部库</li>
<li>主从复制</li>
<li>高可用、分布式
<ul>
<li>高可用 【Redis-Sentinel(v2.8)支持高可用】</li>
<li>分布式 【Redis-Cluster(v3.0)支持分布式】</li>
</ul>
</li>
</ul>
<h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3>
<ul>
<li>缓存系统</li>
<li>计数器</li>
<li>消息队列系统</li>
<li>排行榜</li>
<li>社交网络</li>
<li>实时系统</li>
</ul>
</div></template>


