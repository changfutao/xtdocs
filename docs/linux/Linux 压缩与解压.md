# Linux 压缩与解压

## 基本介绍

在Linux中,常用的压缩和解压命令主要针对于`.tar`、`.gz`、`.zip`等格式。

## 压缩

### 1.tar

- 压缩为`.tar.gz`或`.tgz`文件

  - -c: 创建新的压缩文件

  - -z: 使用gzip压缩

  - -v: 显示压缩过程

  - -f: 指定压缩文件名

```bash
tar -czvf 文件名.tar.gz 目录或文件
```

- 压缩为`.tar.bz2`文件
  - -j: 使用bzip2压缩

```bash
tar -cjvf 文件名.tar.bz2 目录或文件
```

### 2.zip

- 压缩为`.zip`文件
  - -r: 递归压缩目录

```bash
zip -r 文件名.zip 目录或文件
```

### 3.gzip

- 压缩为.gz文件

```bash
gzip 文件名
```

### 4.rar

- 压缩为`.rar`文件

```bash
rar a 文件名.rar 目录或文件
```

### 5.7z

- 压缩为`.7z`目录或文件

```bash
7z a 文件名.7z 目录或文件
```



## 解压

### 1. tar

- 解压`.tar.gz` 或 `.tgz`文件
  - -x: 解压文件
  - -z: 使用gzip解压
  - -v: 显示解压过程
  - -f: 指定压缩文件名

```bash
tar -xzvf 文件名.tar.gz
```

- 解压`.tar.bz2`文件
  - -j: 使用bzip2解压

```bash
tar -xjvf 文件名.tar.bz2
```

### 2.unzip

- 解压`.zip`文件

```bash
unzip 文件名.zip
```

### 3.gzip

- 解压`.gz`文件
  - -d: 解压文件后删除.gz文件

```bash
gzip -d 文件名.gz
gunzip 文件名.gz
```

### 4.rar

- 解压`.rar`文件

```bash
unrar x 文件名.rar
```

### 5.7z

- 解压`.7z`文件

```bash
7z x 文件名.7z
```



