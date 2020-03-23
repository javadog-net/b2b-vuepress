## 21 经销商-零售单上传见证性材料(图片url+交易金额)

### 21.1 地址
> /api/process/app/dealerZykcUpload

### 21.2 请求方式
> POST

### 21.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| urls  | 见证性材料url | 是 | -
| dealerCode  | 经销商编码| 是| -
| orderId  | 经销商订单id | 是 | -
| tradeCount  | 交易金额| 是|万元

### 21.4 返回值

#### 21.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 21.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "零售单交易金额不能为空"
}
```