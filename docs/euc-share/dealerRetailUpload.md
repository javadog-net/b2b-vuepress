## 12.提供大客户app-经销商零售单上传见证性材料(图片url+交易金额)

### 12.1 地址
>  baseUrl + /api/eucapp/iteration/dealerRetailUpload

### 12.2 请求方式
> POST

### 12.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 |- |
| urls  | 文件图片(多个以逗号隔开)| 是 |- |
| dealerCode  | 经销商编码| 是 |- |
| tradeCount  | 交易金额| 是 |- |


### 12.4 返回值

#### 12.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": ""
    }
}
```

