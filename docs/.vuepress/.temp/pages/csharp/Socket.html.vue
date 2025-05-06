<template><div><h1 id="socket" tabindex="-1"><a class="header-anchor" href="#socket"><span>Socket</span></a></h1>
<h2 id="_1-tcp-ip" tabindex="-1"><a class="header-anchor" href="#_1-tcp-ip"><span>1.TCP/IP</span></a></h2>
<blockquote>
<p>TCP/IP: Transmission Control Protocol/Internet Protocol, 传输控制协议/因特网互联协议</p>
</blockquote>
<p>七层模型</p>
<table>
<thead>
<tr>
<th>OSI 中的层</th>
<th>功能</th>
<th>TCP/IP 协议族</th>
</tr>
</thead>
<tbody>
<tr>
<td>应用层</td>
<td>文件传输、电子邮件、文件服务、虚拟终端</td>
<td>TFTP、HTTP、SNMP、FTP、SMTP、DNS、Telnet 等</td>
</tr>
<tr>
<td>表示层</td>
<td>翻译、加密、压缩</td>
<td>没有协议</td>
</tr>
<tr>
<td>会话层</td>
<td>对话控制、建议同步点(续传)</td>
<td>没有协议</td>
</tr>
<tr>
<td>传输层</td>
<td>端口寻址、分段重组、流量、差错控制</td>
<td>TCP、UDP</td>
</tr>
<tr>
<td>网络层</td>
<td>逻辑寻址、路由选择</td>
<td>IP、ICMP、OSPF、EIGRP、IGMP</td>
</tr>
<tr>
<td>数据链路层</td>
<td>成帧、物理寻址、流量、差错、接入控制</td>
<td>SLIP、CSLIP、PPP、MTU</td>
</tr>
<tr>
<td>物理层</td>
<td>设置网络拓扑结构、比特传输、位同步</td>
<td>ISO2110,IEEE802、IEEE802.2</td>
</tr>
</tbody>
</table>
<p><img src="@source/csharp/images/socket3.jpg" alt="socket3"></p>
</div></template>


