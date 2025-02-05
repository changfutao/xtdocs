# Redis

## 基础知识

### 特性

- 速度快  10W OPS
  - 数据存储在内存中
  - 使用C语言编写
  - 采用单线程
- 持久化
- 多种数据结构
  - String/Blobs/Bitmaps
  - Hash Tables(objects)
  - Linked Lists
  - Sets
  - Sorted Sets
  - HyperLogLog: 超小内存唯一值计数
  - GEO: 地理信息定位
- 支持多种客户端语言
- 功能丰富
  - 发布订阅
  - Lua脚本
  - 事务
  - pipeline
- 不依赖外部库
- 主从复制
- 高可用、分布式
  - 高可用 【Redis-Sentinel(v2.8)支持高可用】
  - 分布式 【Redis-Cluster(v3.0)支持分布式】



### 应用场景

- 缓存系统
- 计数器
- 消息队列系统
- 排行榜
- 社交网络
- 实时系统