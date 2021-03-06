## 10.提供大客户app-查看经销商订单

### 10.1 地址
>  baseUrl + /api/eucapp/iteration/dealerOrderList

### 10.2 请求方式
> POST

### 10.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| dealerCode  | 经销商编码 | 是 |- |
| flag  | 订单标识| 是 |0-工程 1-零售 2-弃单 |
| orgId  | 中心编码 | 是 |- |
| type  | 订单类型 | 是 |1-关闭 2-正在进行中 3-中标 |


### 10.4 返回值

#### 10.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "pageNo": 1,
            "pageSize": 20,
            "count": 4,
            "list": [
                {
                    "id": "168ea3b919304e7d943c716ea75d52ce",
                    "updateDate": "2020-01-14 16:42:47",
                    "eucId": "7c5f82fe981b456ab330b922e765889f",
                    "createTime": "2020-01-14 16:42:47",
                    "contractorCode": "8700000983",
                    "contractorName": "山东金都百货股份有限公司",
                    "orderType": "1",
                    "orgId": "12A01",
                    "isBind": "0",
                    "updateTime": "2020-01-14 16:42:47",
                    "isAbandon": "1",
                    "abandonReason": "超时七天未处理,需求回溯",
                    "abandonTime": "2020-03-09 12:00:00",
                    "msgId": "EUC20191121182947264",
                    "businessCode": "AVCGC201905678297",
                    "businessName": "（烟台）招远岔河置业有限责任公司: 顺河苑住宅小区二期项目",
                    "businessSource": "GN_PRJ_11",
                    "businessType": "新建在建项目",
                    "topCustomerAbbreviation": "",
                    "companyNameA": "招远岔河置业有限责任公司",
                    "contactNameA": "",
                    "contactMobileA": "",
                    "industryId": "003",
                    "industry": "房地产业",
                    "state": "100",
                    "haierTheater": "华东",
                    "center": "12A01",
                    "centerName": "烟台小微",
                    "smallMesh": "招远网格小微",
                    "grid": "山东省烟台市招远市",
                    "province": "山东",
                    "provinceId": "370000000000",
                    "city": "烟台市",
                    "cityId": "370600000000",
                    "district": "招远市",
                    "districtId": "370685000000",
                    "businessOpportunityAddress": "泉山路南, 春雨路两侧",
                    "entryDate": "2019-11-21 18:29:48",
                    "businessChannel": "",
                    "competitors": "",
                    "isSendHps": "0",
                    "ifTopCustomer": "否",
                    "authorityStatus": "0",
                    "authorityTime": 1583726400000,
                    "authorityRecord": "0",
                    "appealTime": 1583726400000
                },
                {
                    "id": "17b3069c9fed491cbe1c0881902e235e",
                    "updateDate": "2020-01-03 14:24:42",
                    "eucId": "22fa47e9620e48808489e6f9d79f1442",
                    "createTime": "2020-03-12 14:46:01",
                    "contractorCode": "8700000983",
                    "contractorName": "四川天姿置业有限公司",
                    "orderType": "1",
                    "orgId": "12601",
                    "isBind": "0",
                    "checkDate": "2020-03-12 14:46:01",
                    "updateTime": "2020-03-12 14:46:01",
                    "isAbandon": "1",
                    "abandonReason": "超时七天未处理,需求回溯",
                    "abandonTime": "2020-03-12 14:46:01",
                    "msgId": "EUC20191121182954032",
                    "businessCode": "AVCGC201901153710",
                    "businessName": "四川省眉山市甘眉工业园区城镇综合体建设项目",
                    "businessSource": "GN_PRJ_11",
                    "businessType": "新建在建项目",
                    "topCustomerAbbreviation": "",
                    "companyNameA": "甘眉工业园区管理委员会",
                    "contactNameA": "",
                    "contactMobileA": "",
                    "industryId": "003",
                    "industry": "房地产业",
                    "state": "100",
                    "haierTheater": "西南",
                    "center": "12601",
                    "centerName": "成都小微",
                    "smallMesh": "眉山彭山网格小微",
                    "grid": "四川省眉山市东坡区",
                    "province": "四川",
                    "provinceId": "510000000000",
                    "city": "眉山市",
                    "cityId": "511400000000",
                    "district": "东坡区",
                    "districtId": "511402000000",
                    "businessOpportunityAddress": "东坡区修文镇甘眉工业园区",
                    "entryDate": "2019-11-21 18:29:55",
                    "businessChannel": "",
                    "competitors": "",
                    "isSendHps": "0",
                    "ifTopCustomer": "否",
                    "authorityStatus": "0",
                    "authorityTime": 1583995561000,
                    "authorityRecord": "0",
                    "appealTime": 1583995561000
                },
                {
                    "id": "6f5b3650c8874058b286a3ce48186ec9",
                    "updateDate": "2019-12-27 17:59:00",
                    "eucId": "a0c59d9c21c346309f88d063d6ea118f",
                    "createTime": "2020-03-12 14:46:01",
                    "contractorCode": "8700000983",
                    "contractorName": "青岛鸿顺瑞商贸有限公司",
                    "orderType": "1",
                    "orgId": "12A02",
                    "isBind": "0",
                    "checkDate": "2020-03-12 14:46:01",
                    "updateTime": "2020-03-12 14:46:01",
                    "isAbandon": "1",
                    "abandonType": "0",
                    "abandonReason": "经销商主动放弃",
                    "abandonTime": "2020-03-12 14:46:01",
                    "abandonRemark": "pc放弃",
                    "msgId": "EUC20191121183030964",
                    "businessCode": "AVCGC20180702600",
                    "businessName": "日照新东港城乡发展有限公司: 日照街道片区屯沟城中村棚户区改造三期项目",
                    "businessSource": "GN_PRJ_11",
                    "businessType": "新建在建项目",
                    "topCustomerAbbreviation": "",
                    "companyNameA": "日照新东港城乡发展有限公司",
                    "contactNameA": "",
                    "contactMobileA": "",
                    "industryId": "003",
                    "industry": "房地产业",
                    "state": "100",
                    "haierTheater": "华东",
                    "center": "12A02",
                    "centerName": "青岛小微",
                    "smallMesh": "日照网格小微",
                    "grid": "山东省日照市东港区",
                    "province": "山东",
                    "provinceId": "370000000000",
                    "city": "日照市",
                    "cityId": "371100000000",
                    "district": "东港区",
                    "districtId": "371102000000",
                    "businessOpportunityAddress": "山东路以南, 文阳路以西",
                    "entryDate": "2019-11-21 18:30:31",
                    "businessChannel": "",
                    "competitors": "",
                    "isSendHps": "0",
                    "ifTopCustomer": "否",
                    "abandonWrite": "pc放弃",
                    "authorityStatus": "0",
                    "authorityTime": 1583995561000,
                    "authorityRecord": "0",
                    "appealTime": 1583995561000
                },
                {
                    "id": "6f9501e7a864419bad6c82cbd2313e02",
                    "updateDate": "2019-12-27 17:59:00",
                    "eucId": "a0c59d9c21c346309f88d063d6ea118f",
                    "createTime": "2020-03-12 14:46:01",
                    "contractorCode": "8700000983",
                    "contractorName": "青岛鸿顺瑞商贸有限公司",
                    "orderType": "1",
                    "orgId": "12A02",
                    "isBind": "0",
                    "checkDate": "2020-03-12 14:46:01",
                    "updateTime": "2020-03-12 14:46:01",
                    "isAbandon": "1",
                    "abandonReason": "超时七天未处理,需求回溯",
                    "abandonTime": "2020-03-12 14:46:01",
                    "msgId": "EUC20191121183030964",
                    "businessCode": "AVCGC20180702600",
                    "businessName": "日照新东港城乡发展有限公司: 日照街道片区屯沟城中村棚户区改造三期项目",
                    "businessSource": "GN_PRJ_11",
                    "businessType": "新建在建项目",
                    "topCustomerAbbreviation": "",
                    "companyNameA": "日照新东港城乡发展有限公司",
                    "contactNameA": "",
                    "contactMobileA": "",
                    "industryId": "003",
                    "industry": "房地产业",
                    "state": "100",
                    "haierTheater": "华东",
                    "center": "12A02",
                    "centerName": "青岛小微",
                    "smallMesh": "日照网格小微",
                    "grid": "山东省日照市东港区",
                    "province": "山东",
                    "provinceId": "370000000000",
                    "city": "日照市",
                    "cityId": "371100000000",
                    "district": "东港区",
                    "districtId": "371102000000",
                    "businessOpportunityAddress": "山东路以南, 文阳路以西",
                    "entryDate": "2019-11-21 18:30:31",
                    "businessChannel": "",
                    "competitors": "",
                    "isSendHps": "0",
                    "ifTopCustomer": "否",
                    "authorityStatus": "0",
                    "authorityTime": 1583995561000,
                    "authorityRecord": "0",
                    "appealTime": 1583995561000
                }
            ],
            "firstResult": 0,
            "maxResults": 20,
            "html": "<div class=\"fixed-table-pagination\" style=\"display: block;\"><div class=\"pull-left pagination-detail\"><span class=\"pagination-info\">显示第 1 到第 4 条记录，总共 4 条记录</span><span class=\"page-list\">每页显示 <span class=\"btn-group dropup\"><button type=\"button\" class=\"btn btn-default  btn-outline dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><span class=\"page-size\">20</span> <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" role=\"menu\"><li class=\"\"><a href=\"javascript:page(1,10,'');\">10</a></li><li class=\"\"><a href=\"javascript:page(1,25,'');\">25</a></li><li class=\"\"><a href=\"javascript:page(1,50,'');\">50</a></li><li class=\"\"><a href=\"javascript:page(1,100,'');\">100</a></li></ul></span> 条记录</span></div><div class=\"pull-right pagination-roll\"><ul class=\"pagination pagination-outline\"><li class=\"paginate_button previous disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-double-left\"></i></a></li>\n<li class=\"paginate_button previous disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-left\"></i></a></li>\n<li class=\"paginate_button active\"><a href=\"javascript:\">1</a></li>\n<li class=\"paginate_button next disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-right\"></i></a></li>\n<li class=\"paginate_button next disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-double-right\"></i></a></li>\n</ul></div></div>"
        }
    }
}
```

#### 10.4.2  失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```