## 13.提供大客户app-查看经销商订单详情

### 13.1 地址
>  baseUrl + /api/eucapp/iteration/dealerOrderDetails

### 13.2 请求方式
> POST

### 13.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orderId  | 订单id | 是 |-- |


### 13.4 返回值

#### 13.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "1b834204d56e4797a3316979d5abdc1a",
            "updateDate": "2020-01-03 14:16:10",
            "eucId": "6c37cb2b78a045f7b3f8cf32750802b2",
            "createTime": "2020-03-12 14:46:01",
            "contractorCode": "8700000983",
            "contractorName": "四川天姿置业有限公司",
            "undertake": "1",
            "orderType": "1",
            "orgId": "12601",
            "isCheck": "1",
            "isBind": "0",
            "checkDate": "2020-03-12 14:46:01",
            "updateTime": "2020-03-12 14:46:01",
            "isAbandon": "1",
            "abandonType": "3",
            "abandonReason": "超时七天未处理,需求回溯",
            "abandonTime": "2020-03-12 14:46:01",
            "abandonRemark": "pc放弃",
            "msgId": "EUC20191121183008974",
            "businessCode": "AVCGC201909001490",
            "businessName": "（遂宁）四川省射洪中学校学生公寓, 食堂建设项目",
            "businessSource": "GN_PRJ_11",
            "businessType": "新建在建项目",
            "topCustomerAbbreviation": "",
            "companyNameA": "四川省射洪中学校",
            "contactNameA": "",
            "contactMobileA": "",
            "industryId": "001",
            "industry": "教育",
            "state": "100",
            "haierTheater": "西南",
            "center": "12601",
            "centerName": "成都小微",
            "smallMesh": "蓬溪射洪网格小微",
            "grid": "四川省遂宁市射洪县",
            "province": "四川",
            "provinceId": "510000000000",
            "city": "遂宁市",
            "cityId": "510900000000",
            "district": "射洪县",
            "districtId": "510922000000",
            "businessOpportunityAddress": "射洪县红专路230号",
            "entryDate": "2019-11-21 18:30:09",
            "businessChannel": "",
            "competitors": "",
            "isSendHps": "0",
            "ifTopCustomer": "否",
            "abandonWrite": "pc放弃",
            "authorityStatus": "0",
            "authorityTime": 1583995561000,
            "authorityRecord": "0",
            "appealTime": 1583995561000
        }
    }
}
```

#### 13.4.2  失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "EUC订单id不能为空"
}
```
