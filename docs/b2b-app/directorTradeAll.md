## 4.总监-对应App留言板-行业总监查看待审核的留言信息

### 4.1 地址
> /api/process/app/directorTradeAll

### 4.2 请求方式
> POST

### 4.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orgId  | 工贸编码 | 是 | 如12A02
| directorNo  | 总监账号 | 是 | -

### 4.4 返回值

#### 4.4.1 成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "9eaf9403424041b38cd2d6d51703b7e6",
                "createDate": "2019-10-18 17:46:41",
                "companyName": "ceshi",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "海尔b2b",
                "mobile": "18306390693",
                "email": "862422627@qq.com",
                "count": 0,
                "isRead": "0",
                "msgFlag": "10",
                "ptIspass": "1",
                "ptChecker": "admin",
                "ptCheckDate": "2019-10-19 22:44:36",
                "ptDescp": "成功",
                "proGroup": "冰箱",
                "msgNo": "20191018174640807",
                "managerNoFlag": false
            }
        ]
    }
}
```

#### 4.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "系统用户不存在"
}

```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "所属工贸不能为空"
}

```