## 15经销商-选择承接方式

### 15.1 地址
> /api/process/app/dealerUnderTake

### 15.2 请求方式
> POST

### 15.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| orderId  | 经销商订单id | 是 | -
| dealerCode  | 经销商编码 | 是 | -
| undertake  | 承接方式 | 是 | 0工程单 1零售
| managerNo  | 海尔接口人 | 是 | -
| managerName  | 海尔接口人名称 | 是 | -

### 15.4 返回值

#### 15.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 15.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "承接方式格式填写不正确"
}

```