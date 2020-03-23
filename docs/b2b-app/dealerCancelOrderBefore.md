## 14经销商-在选择承接方式之前弃单

### 14.1 地址
> /api/process/app/dealerCancelOrderBefore

### 14.2 请求方式
> POST

### 14.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| cancelReason  | 废弃理由 | 是 | -
| memo  | 备注 | 是 | -
| dealerCode  | 经销商编码 | 是 | -

### 14.4 返回值

#### 14.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 14.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求不存在"
}
```
