<template><div><h1 id="modbus" tabindex="-1"><a class="header-anchor" href="#modbus"><span>Modbus</span></a></h1>
<h2 id="_1-定义" tabindex="-1"><a class="header-anchor" href="#_1-定义"><span>1.定义</span></a></h2>
<blockquote>
<p>Modbus免费、电气接口广泛、通信协议本身通俗易懂</p>
</blockquote>
<h2 id="_2-协议" tabindex="-1"><a class="header-anchor" href="#_2-协议"><span>2.协议</span></a></h2>
<ul>
<li>modbusRTU (串口)</li>
<li>modbusASCII (串口)</li>
<li>modbusTCP (网口)</li>
<li>modbusUDP(网口)</li>
<li>modbusRTUOverTCP(网口)</li>
<li>modbusRTUOverUDP(网口)</li>
<li>modbusASCIIOverTCP(网口)</li>
<li>modbusASCIIOverTCP(网口)</li>
</ul>
<blockquote>
<p>ModbusRTU(二进制) 、ModbusASCII(ASCII)</p>
</blockquote>
<p>例如: 十进制: 16Dec(一个字节) 对应 十六进制: 10Hex 对应ASCII 3130(两个字节)</p>
<h3 id="_2-1-存储区" tabindex="-1"><a class="header-anchor" href="#_2-1-存储区"><span>2.1 存储区</span></a></h3>
<ul>
<li>输入线圈 (只读)  Bit					1                             10001-19999                   100001-165535</li>
<li>输出线圈 (读写)                            0                             00001-09999</li>
<li>输入寄存器(只读) 16位                3                             30001-39999</li>
<li>输出寄存器(读写)                         4                              40001-49999                   400001-465535</li>
</ul>
<blockquote>
<p>读字节数一定是一个偶数</p>
</blockquote>
<h3 id="_2-2-功能码" tabindex="-1"><a class="header-anchor" href="#_2-2-功能码"><span>2.2 功能码</span></a></h3>
<blockquote>
<p>目的就是读写存储区</p>
<p>保持型寄存器 等同于 输出寄存器</p>
</blockquote>
<ul>
<li>读
<ul>
<li>读取输入线圈              0x02</li>
<li>读取输出线圈              0x01</li>
<li>读取输入寄存器          0x04</li>
<li>读取输出寄存器          0x03</li>
</ul>
</li>
<li>写
<ul>
<li>写入单输出线圈         0x05</li>
<li>写入多输出线圈         0x0F</li>
<li>写入单输出寄存器     0x06</li>
<li>写入多输出寄存器     0x10</li>
</ul>
</li>
</ul>
<blockquote>
<p>MaxIQ 256</p>
<p>​	I0.0-I31.7     &lt;==&gt;  10001 - 10256</p>
<p>​	Q0.0-Q31.7       &lt;==&gt; 00001 - 00256</p>
<p>​	MaxAI 56</p>
<p>​	AlW0-AlW100    &lt;==&gt; 30001-30056</p>
</blockquote>
<h3 id="_2-3-辅助软件" tabindex="-1"><a class="header-anchor" href="#_2-3-辅助软件"><span>2.3 辅助软件</span></a></h3>
<ul>
<li>Poll  (主站、客户端)</li>
<li>Slave(从站、服务器)</li>
<li>VSPD (虚拟串口)</li>
</ul>
<p>主从:</p>
<p>主站(主动)/从站(被动)</p>
<p>客户端(主动)/服务器(被动)</p>
</div></template>


