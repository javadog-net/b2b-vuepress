## 7.提供大客户app-euc抢单接口

### 7.1 地址
>  baseUrl + /api/eucapp/iteration/dealerRobtrade

### 7.2 请求方式
> POST

### 7.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| eucMsgId  | euc需求id | 是 |- |
| dealerCode  | 经销商编码 | 是 |- |
| dealerName  | 经销商名称 | 是 |- |


### 7.4 返回值

#### 7.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 7.4.2  失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "EUC需求id不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```