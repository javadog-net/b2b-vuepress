## 3.发布需求接口

### 3.1 地址
>  baseUrl + /api/process/b2b/postwant

### 3.2 请求方式
> POST

### 3.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| mobile  | 手机号 | 是 |- |
| connectName  | 联系人 | 是 |- |
| provinceId  | 省份编码 | 是 |如：370000000000|
| cityId  | 城市编码 | 是 |- |
| districId  | 地区编码 | 是 |- |
| provinceName  | 省份名称 | 是 |- |
| cityName  | 城市名称 | 是 |- |
| districName  | 地区名称 | 是 |- |
| addressDetail  |详细地址 | 是 |- |
| proGroup  |产品组 | 是 |如 彩电;中央空调  (多个以分号隔开) 对应值如下|
| proGroupCode  |产品组编号 |是 |如 11;0  (多个以分号隔开) 对应值如下|
| email  |邮箱 | 是 |- |
| companyName  |公司名 | 是 |- |
| memo  |备注 | 否 |- |
| code  |验证码(用于自注册,不是非必填) | 否 |-|
| channel  |渠道来源 | 是 |对应值如下|

### 3.3.1 参数channel对应枚举值

```java
FOUR("0","400"),
FOUR_CUSTOMER_SERVICE("1","400客服"),
APP("2","大客户app"),
EAPP("3","E企app商空"),
B2BWEB("4","企业购官网"),
HOUSE("5","住房租赁频道"),
COMMERCIAL_PRODUCTS("6","军工"),
COMMERCIAL_AIR_CONDITIONING("7","商空"),
COMMERCIAL_AIR_CONDITIONING_DEPART("8","商空专区"),
TEL("9","固话"),
GRAND_RECEPTION("10","大接待"),
WEBSIT_MESSAGE("11","官网留言"),
CUSTOMER_SERVICE("12","客服"),
WEIXIN("13","微信"),
MOBILE("14","手机端"),
TENDER_NETWORK("15","招标网"),
HAIER_B2B("16","海尔b2b"),
HAIER_SHOP("17","海尔商城"),
HAIER_WEBSIT("18","海尔官网"),
HAIER_MOBILE("19","海尔手机端"),
BAIDU("20","百度"),
COMMUNITY_INTERACTION("21","社群交互"),
HOTEL("22","酒店频道留言板")
```

### 3.3.1 参数proGroup/proGroupCode对应枚举值

```java
CENTRAL_AIR_CONDITIONING("0","中央空调","BA"),
COMMERCIAL_AIR_CONDITIONING("1","商用空调","BB"),
HOUSEHOLD_AIR_CONDITIONER("2","家用空调","CA"),
ELECTRIC_GAS_WATER_HEATER("3","电/燃气热水器","FA,FB"),
SOLAR_ENERGY("4","太阳能","FC"),
COMMERCIAL_COMPUTER("5","商用电脑","BB"),
REFRIGERATOR("6","冰箱","AA"),
WASHING_MACHINE("7","洗衣机","DA,DB"),
KITCHEN_APPLIANCES("8","厨房电器","GA,GB,GC,GD,GE,GF"),
MEDICAL_EQUIPMENT("9","医疗设备","NA"),
COMMERCIAL_REFRIGERATOR("10","商用冷柜","AB"),
COLOR_TV("11","彩电","EA,EB"),
SMART_HOME_SECURITY("12","智能家居/安防","JJ"),
COMMUNITY_SECURITY("13","社区安防","JJ"),
CUSTOMIZATION_MILITARY_PRODUCTS("14","军品定制","RA"),
SMALL_HOME_APPLIANCES("15","小家电","LE"),
COMMERCIAL_WATER_PURIFICATION("16","商用净水","LD,LF,LH,LS,LZ")
```


### 3.4 返回值

#### 3.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "发布需求成功"
}
```
#### 3.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "手机号不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "省份编码不能为空"
}
```