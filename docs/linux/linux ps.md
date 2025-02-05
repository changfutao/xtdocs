# linux ps命令

> ps命令是Linux中用于查看当前系统进程状态的工具。它可以显示正在运行的进程信息,如进程ID(PID)、CPU和内存使用情况、启动时间等。

## 基本语法

1.ps 查看当前终端关联进程

```bash
ps [选项]
```

- -e: 显示所有进程
- -f: 显示完整格式的进程信息,包括UID、PID、PPID(父进程ID)、CPU使用率、启动时间、命令等
- -F: 显示更详细的进程信息,包括内存使用情况
- -u: 显示指定用户的进程
- -H: 以树状结构显示进程的父子关系
- -L: 显示进程的线程信息
- -o: 自定义输出字段
  - pid: 进程ID
  - ppid: 父进程ID
  - cmd: 命令名称
  - %cpu: CPU使用率
  - %mem: 内存使用率

- 实时刷新进程信息
  - ps本身不支持实时刷新,但可以结合`watch`命令实现

```bash
watch -n 1 'ps -eo pid,ppid,cmd,%cpu,%mem'
```

- 按CPU或内存排序

```bash
ps -eo pid,ppid,cmd,%cpu.%mem --sort=-%cpu
```

