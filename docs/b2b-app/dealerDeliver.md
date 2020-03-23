## 25 经销商-app物流出库接口

### 25.1 地址
> /api/process/app/dealerDeliver

### 25.2 请求方式
> POST

### 25.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 | String
| deliverNum  | 出库单号 | 是 | -


### 25.4 返回值

#### 25.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 25.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商订单ID不能为空"
}
```