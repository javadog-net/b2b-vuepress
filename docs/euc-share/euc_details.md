## 3.提供企业购中台和大客户app-根据商机编码获取详细信息

### 3.1 地址
>  baseUrl + /api/euc/euc_details/{businessCode}

### 3.2 请求方式
> GET

### 3.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| businessCode  | 商机编码 | 是 |如：AVCGC2010105116100 |


### 3.4 返回值

#### 3.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "{\"code\":0,\"message\":\"成功\",\"data\":{\"other\":{\"id\":6451,\"commonId\":22,\"issue\":\"-\",\"kpyear\":\"2019\",\"quarter\":\"Q1\",\"kptime\":\"201901\",\"area\":\"\",\"investorname\":\"-\",\"propertyName\":\"置地物业公司\",\"developer\":\"\",\"topPiveteen\":\"非50强\",\"housePx\":\"住宅\",\"zxPtatus\":\"精装修\",\"housePrice\":\"1万以下\",\"decorationStandard\":\"-\",\"grade\":\"-\",\"houseCount\":\"1500\",\"jzHouseCount\":\"300\",\"ghStatus\":\"样板间\",\"rzTime\":\"待定\",\"brandrangeHood\":\"欧意\",\"hoodLx\":\"侧吸式\",\"brandrangeCookers\":\"欧意\",\"cookersLx\":\"未调查出\",\"disinfectionCabinet\":\"无\",\"dishWashingMachine\":\"无\",\"microwaveOven\":\"无\",\"electricOven\":\"无\",\"geyser\":\"无\",\"geyserLx\":\"\",\"airConditioning\":\"无\",\"airConditioningLx\":\"无\",\"tv\":\"无\",\"iceBox\":\"无\",\"washingMachine\":\"无\",\"smartHomeFl\":\"无\",\"smartHomeMx\":\"无\"},\"common\":{\"businessSource\":\"GN_PRJ_11\",\"businessName\":\"置地国际广场\",\"smallMeshCode\":\"02040500C385\",\"cjsPerson\":\"\",\"companyAName\":\"河南省置地房地产集团有限公司\",\"type\":\"0011\",\"centener\":\"漯河小微\",\"businessCode\":\"AVC201901364\",\"competitors\":\"\",\"province\":\"河南\",\"enterPersonName\":\"黄亚玲\",\"id\":\"22\",\"businessAddress\":\"置地大道与铜山大道交叉口西北角\",\"enterTime\":\"Thu Nov 14 17:42:55 CST 2019\",\"cjsXq\":\"\",\"ifTopCustomer\":\"\",\"performanceWay\":\"\",\"haierArea\":\"A008\",\"cjsCode\":\"\",\"smallMesh\":\"驻马店市网格小微\",\"tradeCode\":\"\",\"haierJkPersonCode\":\"\",\"cjsXqCode\":\"\",\"node\":\"\",\"businessSourceName\":\"奥维\",\"enterPersonCode\":\"a0027939\",\"dealTime\":\"Sat Mar 14 20:42:03 CST 2020\",\"grabNum\":\"1\",\"meshCode\":\"CMI46302\",\"district\":\"驿城区\",\"haierJkPerson\":\"\",\"cjsQd\":\"\",\"status\":\"1000\",\"districtCode\":\"411702000000\",\"city\":\"驻马店\",\"cityCode\":\"411700000000\",\"haierAreaName\":\"中南\",\"authNum\":\"0\",\"typeName\":\"精装修\",\"centenerCode\":\"12E02\",\"remark\":\"\",\"telAName\":\"\",\"serialVersionUID\":\"1\",\"projectCode\":\"\",\"cjsQdCode\":\"\",\"statusName\":\"漏斗已存在\",\"personAName\":\"\",\"mesh\":\"河南省驻马店市驿城区\",\"provinceCode\":\"410000000000\",\"authStatus\":\"\",\"trade\":\"\",\"demandCode\":\"EUC20191121180344481\"}}}"
}
```

```json
{
{
    "success": true,
    "errorCode": "-1",
    "msg": "{\"code\":0,\"message\":\"成功\",\"data\":{\"data\":\"该商机编码没有数据！\"}}"
}
```
