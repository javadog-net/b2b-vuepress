## 28 获取总监信息

### 28.1 地址
> /api/process/app/getDirectorInfo

### 28.2 请求方式
> POST

### 28.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orgId  | 工贸编码 | 是 | -

### 28.4 返回值

#### 28.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "8788cb5d06d64ee3b0ecb3b60a1de5d3",
            "remarks": "哈哈",
            "createBy": {
                "id": "79992a30a8ff40bb91d609fc65bca3aa",
                "loginFlag": "1",
                "roleNames": "",
                "admin": false
            },
            "createDate": "2018-11-06 16:50:44",
            "updateBy": {
                "id": "1",
                "loginFlag": "1",
                "roleNames": "",
                "admin": true
            },
            "updateDate": "2019-04-22 14:09:26",
            "company": {
                "id": "1",
                "parentIds": "0,",
                "name": "总公司",
                "sort": 30,
                "hasChildren": false,
                "type": "2",
                "parentId": "0"
            },
            "office": {
                "id": "5",
                "parentIds": "0,1,",
                "name": "技术部",
                "sort": 30,
                "hasChildren": false,
                "type": "2",
                "parentId": "1"
            },
            "loginName": "tc",
            "no": "110",
            "name": "tc",
            "email": "793929984@qq.com",
            "phone": "",
            "mobile": "15863792159",
            "loginIp": "10.135.108.212",
            "loginDate": "2019-05-31 17:26:07",
            "loginFlag": "1",
            "photo": "/userfiles/sys/79992a30a8ff40bb91d609fc65bca3aa/images/201811/thumb/81feb6c4-6e81-482e-aa52-34e0b0874959_s.jpg",
            "qrCode": "/shop/userfiles//qrcode/.png",
            "oldLoginIp": "10.135.108.212",
            "oldLoginDate": "2019-05-31 17:26:07",
            "gmId": "12A02",
            "roleNames": "",
            "admin": false
        }
    }
}
```

#### 28.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "中心编码不能为空"
}
```