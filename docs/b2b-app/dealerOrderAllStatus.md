## 17 经销商-根据销商编码返回每个状态的订单数量

### 17.1 地址
> /api/process/app/dealerOrderAllStatus

### 17.2 请求方式
> POST

### 17.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| dealerCode  | 经销商编码 | 是 | -

### 17.4 返回值

#### 17.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    }
}
```

#### 17.4.1.1 对应值

```js
$("#count1").html("弃单：<font color='#1493DF' >"+obj[0]+"</font>");
$("#count2").html("关闭：<font color='#1493DF' >"+obj[1]+"</font>");
$("#count3").html("跟进中：<font color='#1493DF' >"+obj[3]+"</font>");
$("#count4").html("中标：<font color='#1493DF' >"+obj[2]+"</font>");
$("#count5").html("关闭：<font color='#1493DF' >"+obj[4]+"</font>");
$("#count6").html("跟进中：<font color='#1493DF' >"+obj[6]+"</font>");
$("#count7").html("中标：<font color='#1493DF' >"+obj[5]+"</font>");
```


#### 17.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此经销商不存在"
}
```