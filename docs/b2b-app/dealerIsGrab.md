## 12.经销商-查看是否还可继续抢单(当处于跟进中的单子大于10时,则不可再抢单)

### 12.1 地址
> /api/process/app/dealerIsGrab

### 12.2 请求方式
> POST

### 12.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| dealerCode  | 经销商编码 | 是 | -

### 12.4 返回值

#### 12.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "flag": true,
            "orderNum": 2
        }
    }
}
```
#### 12.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```