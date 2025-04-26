# Socket

## 1.TCP/IP

> TCP/IP: Transmission Control Protocol/Internet Protocol, 传输控制协议/因特网互联协议



七层模型

| OSI中的层  | 功能                                   | TCP/IP协议族                               |
| ---------- | -------------------------------------- | ------------------------------------------ |
| 应用层     | 文件传输、电子邮件、文件服务、虚拟终端 | TFTP、HTTP、SNMP、FTP、SMTP、DNS、Telnet等 |
| 表示层     | 翻译、加密、压缩                       | 没有协议                                   |
| 会话层     | 对话控制、建议同步点(续传)             | 没有协议                                   |
| 传输层     | 端口寻址、分段重组、流量、差错控制     | TCP、UDP                                   |
| 网络层     | 逻辑寻址、路由选择                     | IP、ICMP、OSPF、EIGRP、IGMP                |
| 数据链路层 | 成帧、物理寻址、流量、差错、接入控制   | SLIP、CSLIP、PPP、MTU                      |
| 物理层     | 设置网络拓扑结构、比特传输、位同步     | ISO2110,IEEE802、IEEE802.2                 |



![socket3](E:/home/xtdocs/docs/csharp/images/socket3.jpg)























