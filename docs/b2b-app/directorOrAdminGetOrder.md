## 8.总监/管理员-查看我的项目

### 8.1 地址
> /api/process/app/directorOrAdminGetOrder

### 8.2 请求方式
> POST

### 8.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| directorNo  | 总监账号 | 否 | 不填写则为管理员权限
| orgId  | 需求id | 是 | -
| gcFlag  | 工程单标记| 否| 1关闭 2进行中 3中标
| lsFlag  | 零售单标记 | 否 | 1关闭 2进行中 3中标
| cancelFlag  | 客户弃单标记 | 否 | 1关闭 2进行中 3中标
| pageNo  | 页数 | 是 | int类型
| pageSize  | 每页显示数 | 是 | int类型

### 8.4 返回值

#### 8.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "2ac0d45eaf714072b2c730064897441e",
                "createDate": "2019-10-20 20:14:19",
                "msgId": "9eaf9403424041b38cd2d6d51703b7e6",
                "orgId": "12A02",
                "orgName": "青岛",
                "companyName": "胡东旭",
                "fromSource": "2",
                "cancelFlag": "0",
                "custName": "青岛海源合商贸有限公司",
                "custCode": "8800132922",
                "address": "山东省 青岛市 李沧区",
                "underTake": "-1",
                "proGroup": "彩电",
                "proGroupCode": "11"
            },
            {
                "id": "7c2f9dca97b444e0b23559ef8ee2c11c",
                "createDate": "2019-10-15 14:40:06",
                "msgId": "163e41e3edac40f285576841306139c3",
                "orgId": "12A02",
                "orgName": "青岛",
                "companyName": "88",
                "fromSource": "1",
                "cancelFlag": "1",
                "canceler": "8800132922",
                "cancelDate": "2019-10-15 14:43:24",
                "cancelReason": "废弃一下试试",
                "custName": "青岛海源合商贸有限公司",
                "custCode": "8800132922",
                "address": "山东省 青岛市 李沧区",
                "memo": "废弃两下试试",
                "proGroup": "彩电",
                "proGroupCode": "11"
            },
            {
                "id": "c29934584f21401ab45c2963e2bc5439",
                "createDate": "2019-10-15 15:25:43",
                "msgId": "c2923a28f6684f6ba8b72aa1aa44462a",
                "orgId": "12A02",
                "orgName": "青岛",
                "companyName": "胡东旭",
                "fromSource": "0",
                "cancelFlag": "0",
                "custName": "青岛海源合商贸有限公司",
                "custCode": "8800132922",
                "address": "山东省 青岛市 李沧区",
                "underTake": "-1",
                "proGroup": "彩电",
                "proGroupCode": "11"
            },
            {
                "id": "df97b4afd4564e87a887c80f7df6b268",
                "createDate": "2019-10-14 16:01:07",
                "msgId": "a77a4f3850f049b2a1a6891c2028f43d",
                "orgId": "12A02",
                "orgName": "青岛",
                "companyName": "胡东旭",
                "fromSource": "0",
                "cancelFlag": "0",
                "custName": "青岛海源合商贸有限公司",
                "custCode": "8800132922",
                "address": "山东省 青岛市 李沧区",
                "underTake": "1",
                "proGroup": "彩电",
                "proGroupCode": "11"
            }
        ]
    }
}
```

#### 8.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "系统用户不存在"
}

```