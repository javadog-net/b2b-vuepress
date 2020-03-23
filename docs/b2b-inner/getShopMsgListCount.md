## 9.根据采购商手机号获取需求数量集合

### 9.1 地址
>  baseUrl + /api/process/b2b/getShopMsgListCount

### 9.2 请求方式
> POST

### 9.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| mobile  | 手机号 | 是 |- |

### 9.4 返回值

#### 9.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            18,
            3,
            0,
            0,
            0
        ]
    }
}
```
#### 9.4.2  失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "手机号不能为空"
}
```