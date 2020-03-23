## 16 经销商-根据经销商编码获得未处理(未选择承接方式)订单数量

### 16.1 地址
> /api/process/app/dealerOrderUnderTake

### 16.2 请求方式
> POST

### 16.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| dealerCode  | 经销商编码 | 是 | -

### 16.4 返回值

#### 16.4.1 成功返回值

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

#### 16.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此经销商不存在"
}
```