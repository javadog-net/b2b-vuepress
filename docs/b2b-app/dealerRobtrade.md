## 13.经销商-抢单

### 13.1 地址
> /api/process/app/dealerRobtrade

### 13.2 请求方式
> POST

### 13.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| dealerCode  | 经销商编码 | 是 | -

### 13.4 返回值

#### 13.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 13.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "需求id不能为空"
}
```
