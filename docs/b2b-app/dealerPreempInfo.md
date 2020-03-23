## 11.经销商-查看可抢单信息

### 11.1 地址
> /api/process/app/dealerPreempInfo

### 11.2 请求方式
> POST

### 11.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| dealerCode  | 经销商编码 | 是 | -

### 11.4 返回值

#### 11.4.1 成功返回值
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
                "companyName": "胡东旭",
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
                "connectName": "胡东旭",
                "mobile": "15557446494",
                "email": "862422627@qq.com",
                "count": 0,
                "isRead": "0",
                "isDispatch": "1",
                "msgFlag": "20",
                "ptIspass": "1",
                "ptChecker": "admin",
                "ptCheckDate": "2019-10-19 22:44:36",
                "ptDescp": "成功",
                "appIspass": "1",
                "appChecker": "tc",
                "appCheckDate": "2019-10-20 20:10:58",
                "custCode": "8800132922",
                "managerNo": "01415489",
                "managerName": "刘志坤",
                "proGroup": "彩电",
                "proGroupCode": "11",
                "msgNo": "20191018174640807",
                "managerNoFlag": false
            }
        ]
    }
}
```

#### 11.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```