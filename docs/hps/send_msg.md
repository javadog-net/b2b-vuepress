## 1.提供hps短信发送接口

### 1.1 地址
>  baseUrl + /api/hps/send_msg

### 1.2 请求方式
> POST

### 1.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| key  | 密钥 | 是 |简单验证 - HaierHps20200204 |
| mobile  | 手机号 | 是 |- |
| content  | 内容 | 是 |提示：内容不要过长，短信部门会有限制| 


### 1.4 返回值 

#### 1.4.1  成功返回值
```json 
{
    "success": true,
    "errorCode": "-1",
    "msg": "短信发送成功"
}
```

#### 1.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "发送短信失败:密钥不正确"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "发送短信失败:手机号格式不正确"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "发送短信失败:短信内容不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "发送短信失败:The host did not accept the connection within timeout of 10000 ms"
}
```


### 1.5 备注
#### 短信发送部门对绑定ip限制，只有再生产上(b2b.haier.com)使用时才可发送成功，测试上(10.138.106.102)时发送失败