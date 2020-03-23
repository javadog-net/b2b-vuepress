## 26 经销商-app安装接口

### 26.1 地址
> /api/process/app/dealerInstall

### 26.2 请求方式
> POST

### 26.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 | String
| installman  | 安装人 | 是 | -


### 26.4 返回值

#### 26.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 26.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "安装人不能为空"
}
```