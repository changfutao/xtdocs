# Modbus 

> Modbus协议: 应用于电子控制器上的一种通用语言。通过此协议,可以实现控制器相互之间或通过网络实现通信

## 1.特点

- Modbus协议标准开发、公开发表且无版权要求
- Modbus协议支持多种电气接口,包括RS232、RS485、TCP/IP等,还可以在各种介质上传输,如双绞线、光纤、红外、无线等
- Modbus协议消息帧格式简、紧凑、通俗易懂。用户理解和使用简单,厂商容易开发和集成,方便形成工业控制网络。

## 2.模式

串行链路上的两种不同模式对比

| 特性         | RTU模式               | ASCII模式                     |
| ------------ | --------------------- | ----------------------------- |
| 编码         | 二进制                | ASCII(打印字符:0-9、a-z、A-Z) |
| 每个字符位数 | 起始位: 1bit          | 起始位: 1bit                  |
|              | 数据位: 8bits         | 数据位: 7bits                 |
|              | 奇偶校验位(可选): 1位 | 奇偶校验位(可选): 1位         |
|              | 停止位: 1或2          | 停止位: 1或2                  |
| 报文校验     | CRC(循环冗余检验)     | LRC(纵向冗余校验)             |

串行链路上通用报文格式

| 小于3.5个字符的报文间隔时间 | 地址   | 功能码 | 数据    | CRC校验 | 小于3.5个字符的报文间隔时间 |
| --------------------------- | ------ | ------ | ------- | ------- | --------------------------- |
|                             | 1*byte | 1*byte | N*bytes | 2*bytes |                             |

## 3.Modbus不同存储区

> Modbus涉及到的控制器(或Modbus设备)存储区以0XXXX、1XXXX、3XXXX、4XXXX标识

| 存储区标识 | 名称            | 类型 | 读/写 | 存储单元地址                 |
| ---------- | --------------- | ---- | ----- | ---------------------------- |
| 0XXXX      | 线圈            | 位   | 读/写 | 00001~0XXXX, XXXX:与设备有关 |
| 1XXXX      | 输入线圈        | 位   | 只读  | 10001~1XXXX, XXXX:与设备有关 |
| 3XXXX      | 输入寄存器      | 字   | 只读  | 30001~3XXXX, XXXX:与设备有关 |
| 4XXXX      | 保持/输出寄存器 | 字   | 读/写 | 40001~4XXXX, XXXX:与设备有关 |

## 4.Modbus学习工具

- Modbus Poll(用于仿真ModbusRTU主站或ModbusTCP客户端的软件)
- VSPD (虚拟串口)
- Modbus Slave(用于仿真ModbusRTU从站或ModbusTCP服务器的软件)















