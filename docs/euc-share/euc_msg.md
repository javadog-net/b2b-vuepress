## 2.提供ECU-向企业购提报需求接口

### 2.1 地址
>  baseUrl + /api/euc/euc_msg

### 2.2 请求方式
> POST

### 2.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| businessCode  | 商机编码 | 是 |如：AVCGC2010105116100 |
| businessName  | 商机名称 | 是 |- |
| businessSource  | 商机来源 | 是 |如：GN_PRJ_18|
| businessType  | 商机类型 | 是 |- |
| topCustomerAbbreviation  | top客户简称 | 否 |- |
| ifTopCustomer  | 是否top | 否 |- |
| companyNameA  | 甲方公司名称 | 否 |- |
| contactNameA  | 甲方联系姓名 | 否 |- |
| contactMobileA  |甲方联系电话 | 否 |- |
| industryId  |行业id | 否 |- |
| industry  |行业名称 | 否 |- |
| haierTheater  |海尔战区 | 否 |- |
| center  |中心 | 是 |如：12A02 |
| centerName  |中心名称 | 是 |- |
| smallMesh  |网格小微 | 否 |-|
| grid  |网格 | 否 |- |
| province  |省份 | 是 |-|
| provinceId  |省份id | 是 |如：370000000000 |
| city  |城市 | 是 |- |
| cityId  |城市id | 是 |-|
| district  |区县 | 是 |- |
| districtId  |区县_id | 是 |-|
| businessOpportunityAddress  |商机地址 | 否 |- |
| contractorCode  |承接商编码 | 否 |-|
| contractorName  |承接商名称 | 否 |- |
| businessChannel  |承接商大渠道 |  否 |-|
| competitors  |竞争对手公司 |  否 |-|
| gridCode  |网格编码 |  是 |-|
| smallMeshCode  |网格小微编码 |  是 |-|


### 2.4 返回值

#### 2.4.1  成功返回值
```json
//推送或更新
{
    "success": true,
    "errorCode": "-1",
    "msg": "EUC20191111145515188"     //企业购需求单号
}
```
```json
//指派经销商
{
    "success": true,
    "errorCode": "-1"
}
```


#### 2.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求已存在"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "商机编码不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "商机已推送过此经销商，请勿再推送"
}
```

