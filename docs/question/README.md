<!--
 * @Description: In User Settings Edit
 * @Author: hdx
 * @Date: 2019-11-27 20:45:45
 * @LastEditors  : hdx
 * @LastEditTime : 2019-12-19 13:56:51
 -->
# 常见小问题
> 项目常见问题

## 1.后台

### 1.1 idea项目启动不成功问题
> 当ided 跑项目时不报错但是卡住无响应，无法启动成功

```
将项目路径中的.idea文件夹删除，然后重新编译即可
```
### 1.2 关于java,replace和replaceAll

```shell
replace的参数是char和CharSequence，即可以支持字符的替换，也支持字符串的替换（CharSequence即字符串序列的意思,说白了也就是字符串）;
replaceAll的参数是regex，即基于规则表达式的替换，比如：可以通过replaceAll("\\d", "*")把一个字符串所有的数字字符都换成星号;
```
    
## 2.前端

### 2.1 indexOf使用方法

```js
#indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
语法:stringObject.indexOf(searchvalue,fromindex)
```
|  参数   |  属性值 |
|  ----  | ----  |
| searchvalue  | 必需。规定需检索的字符串值。 | 
| fromindex  | 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。 |

### 2.2 jquery中保留关键字冲突

```js
在jquery中不可使用nodeName作为变量，与关键字冲突！
```


## 3.nginx

### 3.1 上传图片页面报错POST 413 

```nginx
一般来说是服务器使用nginx作为反向代理出现的问题，post请求长度超过了nginx默认的缓存大小和最大客户端最大请求大小。
在http模块添加
client_max_body_size  20m;
```

## 4.mysql

### 4.1 mysql版本提升到8.0后，启动项目报如下错误
> Unknown character set index for field '255' received from server.

```shell
原因是mysql驱动不匹配，需要升级由原来的5.1.36 升级到与本机mysql匹配的版本mysql-connector-java-8.0.11.jar
```

### 4.2 mysql版本提升到8.0后，其中driverClassName驱动类的名字也需要调整，否则如下报错
> Cannot load JDBC driver class 'com.mysql.jdbc.Driver'

```shell
只需要将driverClassName由com.mysql.jdbc.Driver改为com.mysql.cj.jdbc.Driver
```

### 4.3 mysql版本提升到8.0后，以上问题都修改后启动项目报jdk版本不匹配
> com/mysql/cj/jdbc/Driver : Unsupported major.minor version 52.0

```shell
只需要项目中jdk版本进行更新提升即可，由原来1.7升级为1.8即可
```