## 19 经销商-作废零售订单

### 19.1 地址
> /api/process/app/dealerCancelOrder

### 19.2 请求方式
> POST

### 19.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| cancelFlag  | 废弃类型| 是| -
| cancelreson  | 废弃理由 | 是 | -
| canceldesc  | 废弃描述 | 是 | -
| orderId  | 经销商订单id | 是 | -

### 19.4 返回值

#### 19.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": 0
    }
}
```

#### 19.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求不存在"
}
```
