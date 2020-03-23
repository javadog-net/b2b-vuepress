## 29 获取经销商订单详细信息

### 29.1 地址
> /api/process/app/dealerGetOrderDetail

### 29.2 请求方式
> POST

### 29.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 | 也就是列表接口中的id字段

### 29.4 返回值

#### 29.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "8509",
            "createDate": "2017-10-30 14:29:50",
            "companyName": "金都饭店",
            "provinceId": "130000000000",
            "provinceName": "河北省",
            "cityId": "130400000000",
            "cityName": "邯郸市",
            "districId": "130402000000",
            "districName": "邯山区",
            "address": "河北省邯郸市邯山区",
            "addressDetail": "邯郸市",
            "orgId": "12001",
            "orgName": "石家庄工贸",
            "channel": "16",
            "connectName": "魏",
            "mobile": "13011492212",
            "reserveMobile": "13011492212",
            "email": "2502904885@qq.com",
            "qq": "",
            "depart": "0",
            "money": "0.00",
            "category": "0",
            "count": 0,
            "isRead": "1",
            "isDispatch": "1",
            "msgFlag": "30",
            "ptIspass": "1",
            "ptChecker": "01411729",
            "ptCheckDate": "2017-10-30 14:32:25",
            "ptDescp": "",
            "appIspass": "1",
            "appChecker": "巩爱红",
            "appCheckDate": "2017-10-30 14:33:59",
            "grabDate": "2017-10-30 14:34:25",
            "custCode": "8800014300",
            "isBack": "0",
            "unreadMsg": "1",
            "proGroup": "太阳能",
            "proGroupCode": "4",
            "memo": "A自用，员工宿舍，热泵 1.5顿。",
            "msgNo": "8509",
            "managerNoFlag": false,
            "shopMsgCustcodeOrder": {
                "id": "1000",
                "createDate": "2017-10-30 14:34:25",
                "msgId": "8509",
                "orgId": "12001",
                "orgName": "石家庄工贸",
                "companyName": "金都饭店",
                "fromSource": "0",
                "cancelFlag": "1",
                "canceler": "8800014300",
                "cancelDate": "2018-06-01 11:37:31",
                "cancelReason": "用户寻完价后，再无联系，四处比较，询价",
                "custName": "邯郸市正信电器有限公司",
                "custCode": "8800014300",
                "address": "邯郸市",
                "memo": "询价",
                "totalCount": "0",
                "isBind": "0",
                "timeoutFlag": "1",
                "timeoutReason": "询价",
                "isInstall": "0",
                "installPersion": "",
                "isDeliver": "0",
                "isSign": "0",
                "isSunburn": "0",
                "isBackpass": "0",
                "proGroup": "太阳能",
                "proGroupCode": "4"
            },
            "nodetag": "0"
        }
    }
}
```

#### 29.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商订单ID不能为空"
}
```





