## 24 经销商-app物流签收接口(上传订单及签收凭证)

### 24.1 地址
> /api/process/app/dealerSign

### 24.2 请求方式
> POST

### 24.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 | String
| signUrl  | 签收凭证图片url | 是 | app物流签收接口返回的图片地址attUrl


### 24.4 返回值

#### 24.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 24.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商订单ID不能为空"
}
```
