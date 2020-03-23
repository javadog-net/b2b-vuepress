## 3.提供企业购中台-根据查询履约相关的所有数据

### 3.1 地址
>  baseUrl + /api/customer/inperOrderList

### 3.2 请求方式
> POST

### 3.3 参数

header

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| Authorization  | tooken | 是 |身份验证|

param


|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| projectCode  | 项目编码 | 否 |-|
| projectName  | 项目名称 | 否 |-|
| brownCode  | 工程版单号 | 否 |-|
| orderTypeNo  | 订单号 | 否 |-|
| industryHomeCategoryId  | 行业id | 否 |-|
| industryId  | 行业id | 否 |-|
| projectstate  | 项目状态 | 否 |-|
| orderStatus  | 订单状态 | 否 |1-已下单 2-已评审 3-一次物流 4-二次物流 5-已返单|

### 3.4 返回值 

#### 3.4.1  成功返回值
```json 
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "count": 2,
    "data": [
        {
            "projectId": "1558682642016e31e8df003084c95b3a131468e7d6b79",
            "projectCode": "P12A0219A0167-K",
            "projectName": "客单测试项目194",
            "custCode": "8800043093",
            "custName": "江门市蓬江去堤东永祥商行",
            "centerCode": "12A02",
            "centerName": "青岛",
            "gridCenterName": "青岛北网格小微",
            "gridName": "山东省青岛市李沧区",
            "firstCompanyName": "小米科技有限责任公司",
            "firstCompanyOrgCode": "91110108551385082Q194",
            "brownCode": "12D01XGC202001A00038",
            "industryHomeCategoryId": "001",
            "industryHomeCategoryName": "教育",
            "projectSource": "GN_PRJ_08",
            "projectManagerName": "刘志坤",
            "projectManagerMobile": "15066257597",
            "effectTime": "2019-05-31 17:13:56",
            "dcheckdatedy": "2020-02-14 09:50:48",
            "projectstate": "履约中",
            "lastModifiedDateBrown": "2020-02-14 09:50:48",
            "productGroup": "CA",
            "productModel": "KFR-35W/2033室外机总成",
            "sapKwmeng": "472.0000"
        },
        {
            "projectId": "1558682642016e31e8df003084c95b3a131468e7d6b79",
            "projectCode": "P12A0219A0167-K",
            "projectName": "客单测试项目194",
            "custCode": "8800043093",
            "custName": "江门市蓬江去堤东永祥商行",
            "centerCode": "12A02",
            "centerName": "青岛",
            "gridCenterName": "青岛北网格小微",
            "gridName": "山东省青岛市李沧区",
            "firstCompanyName": "小米科技有限责任公司",
            "firstCompanyOrgCode": "91110108551385082Q194",
            "brownCode": "12D01XGC202001A00038",
            "industryHomeCategoryId": "001",
            "industryHomeCategoryName": "教育",
            "projectSource": "GN_PRJ_08",
            "projectManagerName": "刘志坤",
            "projectManagerMobile": "15066257597",
            "effectTime": "2019-05-31 17:13:56",
            "dcheckdatedy": "2020-02-14 09:50:48",
            "projectstate": "履约中",
            "lastModifiedDateBrown": "2020-02-14 09:50:48",
            "productGroup": "CA",
            "productModel": "KFR-35G/MCA33室内机总成",
            "sapKwmeng": "472.0000"
        }
    ]
}
```

#### 3.4.1.1  实体类
```java
    private String projectId;		// 项目id
	private String projectCode;		// 项目编码
	private String projectName;		// 项目名称
	private String custCode;		// 经销商编码
	private String custName;		// cust_name
	private String centerCode;		// 中心编码
	private String centerName;		// 中心名称
	private String gridCenterName;		// 网格小微
	private String gridName;		// 网格
	private String firstCompanyName;		// 甲方公司名称
	private String firstCompanyOrgCode;		// 甲方统一社会信用代码
	private String brownCode;		// 工程版单号
	private String industryHomeCategoryId;		// 行业id
	private String industryHomeCategoryName;		// 行业名称
	private String projectSource;		// 项目来源
	private String projectManagerName;		// 海尔接口人
	private String projectManagerMobile;		// 海尔接口人电话
	private Date effectTime;		// 工程版生效时间
	private Date dcheckdatedy;		// 协议签订时间
	private String projectstate;		// 项目状态
	private Date lastModifiedDateBrown;		// 更新时间

	private String productGroup;		//产品组
	private String productModel;		//产品型号
	private String sapKwmeng;		//订单数量
	private Date createdTime;		//下单时间
	private String sapJudgeDate;		//评审时间
	private String sapJudgeStatus;		//评审状态
	private String sapPtdSendDate;		//计划发运时间

	private String planInDate;		//预计到达时间
	private String sapDn5date;		//二次物流时间 已发货时间（若此值存在，则取一次物流时间）
	private String sapDn1date;		//一次物流时间
	private String sapCenterRecieveDate;	//达到中心时间
	private String sapReorderDate;		//签收时间
	private String orderTypeNo;		//订单号
```



#### 3.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "401",
    "msg": "授权异常"
}
```
