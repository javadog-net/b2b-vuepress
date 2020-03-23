## 8.根据需求id获取评价列表

### 8.1 地址
>  baseUrl + /api/process/b2b/evaluateList/{msgid}

### 8.2 请求方式
> GET

### 8.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgid  | 需求id | 是 |- |

### 8.4 返回值

#### 8.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "6cdfdc4bf0924617adfdf6ee485260ad",
                "msgid": "4b042638d27e4472a0395150a7783069",
                "nodestate": "0",
                "nodename": "需求响应",
                "description": "hao",
                "skillGrade": "5",
                "attitudeGrade": "5",
                "subuserId": "0006ded7e395482dae5580131ed2031f",
                "subusername": "胡",
                "addtime": "2019-11-25 17:16:13",
                "companyName": "胡东旭",
                "orgId": "12A02",
                "orgName": "青岛",
                "connectName": "胡东旭",
                "mobile": "15557446494",
                "channel": "11"
            }
        ]
    }
}
```