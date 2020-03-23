## 8.提供大客户app-经销商选择承接方式接口

### 8.1 地址
>  baseUrl + /api/eucapp/iteration/dealerUnderTake

### 8.2 请求方式
> POST

### 8.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 |- |
| undertake  | 承接方式(0工程单，1零售) | 是 |- |
| dealerCode  | 经销商编码 | 是 |- |
| dealerName  | 经销商名称 | 是 |- |


### 8.4 返回值

#### 8.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 8.4.2  失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "EUC订单id不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```