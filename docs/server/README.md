<!--
 * @Description: In User Settings Edit
 * @Author: hdx
 * @Date: 2019-11-27 20:45:45
 * @LastEditors: hdx
 * @LastEditTime: 2020-03-11 20:38:01
 -->
# 服务器相关
> 企业购服务器配置

## 1.特权平台账号及密码
    01357690
    Haier,2020
> 特权平台网址 https://pamnew.haier.net  [链接跳转](https://pamnew.haier.net)

### 1.1.1 tips 使用SecureCRT连接ssh
```shell

#Hostname:固定地址
10.135.1.117

#Username:如下10.135.108.212  改为自己服务器地址即可
Username:01357690@haieradmin@10.135.108.212 

#Password:即特权正好平台密码，也就是上方1中的Haier,2020
Haier,2020
```
[![QIJaXn.md.png](https://s2.ax1x.com/2019/12/17/QIJaXn.md.png)](https://imgchr.com/i/QIJaXn)

[![QIJh0x.md.png](https://s2.ax1x.com/2019/12/17/QIJh0x.md.png)](https://imgchr.com/i/QIJh0x)

### 1.1.2 vpn账号

[![QOS1yD.md.png](https://s2.ax1x.com/2019/12/20/QOS1yD.md.png)](https://imgchr.com/i/QOS1yD)

~胡泽鹏账号本人已占

### 1.1.3 安卓版海尔vpn
[参考文档](http://vpn.haier.net/)

[点击下载](http://118.190.36.92/software/haier/2019031923450098291678381.apk) 或扫码下载

![lV0jqs.png](https://s2.ax1x.com/2019/12/27/lV0jqs.png)

### 1.1.4 ios海尔vpn
> 参考上方文档自行下载

## 2.ip地址

### 2.1 生产地址 (⭐以下简称212)  
>  10.135.108.212  

### 2.2 生产地址  (⭐以下简称211)  
>  10.135.108.211

### 2.3 测试地址  (⭐以下简称102)  
>  10.138.106.102

## 3.功能所属

### 212

- 二期前端页面
- 一期管理后台

### 211

- 二期后台管理
- 一二期数据库

### 102

- 测试一期二期前端
- 测试一期二期后台管理
- 测试一期二期数据库

## 4. 具体配置

### 4.1 212

|  参数   |  属性值 |
|  ----  | ----  |
| 逻辑CPU个数  | 4 | 
| 物理CPU个数  | 2 |
| 每个物理CPU中Core的个数  | 4 |
| 内存总数  |  8185364 kB |
| 带宽  | 10000Mb/s |

### 4.2 211

|  参数   |  属性值 |
|  ----  | ----  |
| 逻辑CPU个数  | 4 | 
| 物理CPU个数  | 2 |
| 每个物理CPU中Core的个数  | 4 |
| 内存总数  |  16326204 kB |
| 带宽  | 10000Mb/s |

### 4.3 102

|  参数   |  属性值 |
|  ----  | ----  |
| 逻辑CPU个数  | 4 | 
| 物理CPU个数  | 4 |
| 每个物理CPU中Core的个数  | 4 |
| 内存总数  | 8168588 kB |
| 带宽  | 10000Mb/s |

### 4.4 具体命令

```shell
查看逻辑CPU个数
# cat /proc/cpuinfo | grep "processor" | wc -l

查看物理CPU个数
# cat /proc/cpuinfo | grep "physical id" | sort | uniq | wc -l

查看每个物理CPU中Core的个数
# cat /proc/cpuinfo | grep "cpu cores" | wc -l

查看内存总数
# cat /proc/meminfo | grep MemTotal

查看带宽
# ifconfig
# ethtool ens160(对应上方查询key值)
```

## 5. 测试发版步骤

### 5.1 测试服务器
> http://10.138.106.102

### 5.1.1 h5触屏版发版

> 项目svn地址: svn://jhmis.net/b2b-touch/

- 1.打开HBulider将项目导入

- 2.首先在本地运行项目，查看是否有问题。

   [![QsJVRe.md.png](https://s2.ax1x.com/2019/12/11/QsJVRe.md.png)](https://imgse.com/i/QsJVRe)

- 3.查看统一资源路径是否正确，对应测试和生产环境一定确认好

    [![QsJ0oV.md.png](https://s2.ax1x.com/2019/12/11/QsJ0oV.md.png)](https://imgse.com/i/QsJ0oV)

- 4.发行网站-h5 手机版
    [![QsY9Sg.md.png](https://s2.ax1x.com/2019/12/11/QsY9Sg.md.png)](https://imgse.com/i/QsY9Sg)

- 5.按要填写网站内容，点击发行
    [![QsYPyj.md.png](https://s2.ax1x.com/2019/12/11/QsYPyj.md.png)](https://imgse.com/i/QsYPyj)

- 6.将生成的文件放置到服务器
    ftp账号：haierftp
    ftp密码: Haier@ftp

    目的文件夹：/web/b2bboot/mobile 全部覆盖


### 5.1.2 后台jar包发版

> 项目svn地址: > svn://jhmis.net/b2bboot   

- 1.修改激活指定Profile的打包路径

```
① 进入b2bboot-trunk包下的\src\main\resources 文件夹，找到application.yml打开

② 修改 profiles:
        active: test
③ 保存
```
- 2.返回b2bboot-trunk 目录下，双击package_test.bat 或者 cmd 命令进入 ，输入package_test.bat，如下图则成功打包

    [![Qs0Xin.md.png](https://s2.ax1x.com/2019/12/11/Qs0Xin.md.png)](https://imgse.com/i/Qs0Xin)

    [![QsBVRx.md.png](https://s2.ax1x.com/2019/12/11/QsBVRx.md.png)](https://imgse.com/i/QsBVRx)

- 3.进入b2bboot-trunk/target 查看是否有b2bboot.jar

- 4.将文件上传至服务器/web/b2bboot 文件夹下

- 5.登录特权平台 https://pam.haier.net,账号密码见此篇头部

- 6.选择测试地址 

    [![QsBNy8.md.png](https://s2.ax1x.com/2019/12/11/QsBNy8.md.png)](https://imgse.com/i/QsBNy8)

- 7.启动命令

```shell
#进入指定文件夹
cd /web/b2bboot

#停掉服务
./b2bboot stop

#若没有停掉服务，则可直接杀掉java进程
ps -ef|grep java 
#杀掉对应pid
kill -9 56120

#重启服务
./b2bboot start

```

[![QsB6S0.md.png](https://s2.ax1x.com/2019/12/11/QsB6S0.md.png)](https://imgse.com/i/QsB6S0)




