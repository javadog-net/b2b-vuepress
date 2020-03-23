## 4.提供企业购中台-根据id查询基础EUC信息

### 4.1 地址
>  baseUrl + /api/euc/euc_list_detail/{id}

### 4.2 请求方式
> GET

### 4.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| id  | 商机编码 | 是 |如:4698ea583a00466893da79dc78b9a07e |


### 4.4 返回值

#### 4.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "4698ea583a00466893da79dc78b9a07e",
            "remarks": "EUC数据更新Mon Mar 16 10:35:21 CST 2020",
            "updateDate": "2020-03-16 10:35:22",
            "msgId": "EUC20191121180343247",
            "businessCode": "AVC201901001",
            "businessName": "瓯江公元上城",
            "businessSource": "GN_PRJ_11",
            "businessType": "精装修",
            "companyNameA": "温州太德恒康健康颐养有限公司",
            "industryId": "003",
            "industry": "房地产业",
            "state": "100",
            "haierTheater": "华南",
            "center": "12201",
            "centerName": "宁波小微",
            "smallMesh": "温州永瓯网格小微",
            "grid": "浙江省温州市瓯海区",
            "province": "浙江省",
            "provinceId": "330000000000",
            "city": "温州市",
            "cityId": "330300000000",
            "district": "瓯江口新区",
            "districtId": "330304000000",
            "businessOpportunityAddress": "瓯江口新区瓯锦大道与霓鸿街交汇处(新月公园对面)",
            "lastProcessingTime": "2020-03-13 10:25:29",
            "entryDate": "2020-03-13 10:25:29",
            "ifTopCustomer": "否",
            "undertake": "",
            "imageUrl": "",
            "smallMeshCode": "",
            "gridCode": "CMI45832"
        }
    }
}
```
