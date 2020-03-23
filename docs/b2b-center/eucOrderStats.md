## 2.提供企业购中台-查看经销商EUC抢派单

### 2.1 地址
>  baseUrl + /api/customer/stats/eucOrderStats

### 2.2 请求方式
> POST

### 2.3 参数

header

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| Authorization  | tooken | 是 |身份验证|



### 2.4 返回值 

#### 2.4.1  成功返回值
```json 
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "garbCount": 12, //抢单数量
            "dispatcherCount": 0 //派单数量
        }
    }
}
```

#### 2.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "401",
    "msg": "授权异常"
}
```
