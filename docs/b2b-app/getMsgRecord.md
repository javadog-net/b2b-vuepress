## 22 通过需求id(msgId)获取需求履历状态

### 22.1 地址
> /api/process/app/getMsgRecord

### 22.2 请求方式
> POST

### 22.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -

### 22.4 返回值

#### 22.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "64",
                "createDate": "2019-10-15 11:09:40",
                "msgId": "163e41e3edac40f285576841306139c3",
                "statusNode": "0",
                "statusName": "平台待审核",
                "operator": "11",
                "content": "88,已于2019-10-15 11:09:39发布一条采购需求，需求id=163e41e3edac40f285576841306139c3",
                "operatorType": "平台"
            },
            {
                "id": "65",
                "createDate": "2019-10-15 14:40:06",
                "msgId": "163e41e3edac40f285576841306139c3",
                "statusNode": "12",
                "statusName": "平台直接派单",
                "operator": "admin",
                "content": "admin平台(客服),已于2019-10-15 14:40:06派单一条需求，需求id=163e41e3edac40f285576841306139c3,派给青岛海源合商贸有限公司",
                "operatorType": "平台"
            }
        ]
    }
}
```

#### 22.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "需求id不能为空"
}
```