## 5.提供企业购中台-查询所有符合中心下商机列表(版本修改为网格中心全国)

### 5.1 地址
>  baseUrl + /api/euc/euc_list_all_v1

### 5.2 请求方式
> POST

### 5.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| EucMsg  | EUC需求实体 | 是 |-详见实体参数 |

### 5.3.1 实体参数
```java
private String msgId;		// 需求id
	private String businessCode;		// 商机编码
	private String businessName;		// 商机名称
	private String businessSource;		// 商机来源
	private String businessType;		// 商机类型
	private String topCustomerAbbreviation;		// top客户简称
	private String companyNameA;		// 甲方公司名称
	private String contactNameA;		// 甲方联系姓名
	private String contactMobileA;		// 甲方联系电话
	private String industryId;		// 行业id
	private String industry;		// 行业名称
	private String state;		// 状态
	private String haierTheater;		// 海尔战区
	private String center;		// 中心
    private String centerName;		// 中心名称
	private String smallMesh;		// 网格小微
	private String grid;		// 网格
	private String province;		// 省份
	private String provinceId;		// 省份id
	private String city;		// 城市	
	private String cityId;		// 城市id 
	private String district;		// 区县
	private String districtId;		// 区县_id
	private String businessOpportunityAddress;		// 商机地址
	private Date lastProcessingTime;		// 最近处理时间
	private Date entryDate;		// 录入日期
	private String startEntryDate;   //开始时间
	private String endEntryDate;	//结束时间
    private String smallMeshCode;  //网格小微编码
	private String gridCode; //网格编码
	private String screenStstus; //筛选状态(0网格，1中心，2全国)
	private String isValid;  //是否有效（是否在抢单池中可见） 0否 1是
	private Integer shareCount; //共享数量
```


### 5.4 返回值

#### 5.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "count": 2,
    "data": [
        {
            "id": "60865cb7580340b49f19c516295100e5",
            "remarks": "EUC数据更新Wed Mar 11 11:17:58 CST 2020",
            "updateDate": "2020-02-12 15:33:33",
            "msgId": "EUC20191121180343779",
            "businessCode": "AVC201901002",
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
            "isSendHps": "0",
            "ifTopCustomer": "否",
            "undertake": "",
            "imageUrl": "",
            "smallMeshCode": "",
            "gridCode": "CMI45832",
            "screenStstus": "2",
            "isValid": "1",
            "shareCount": 0
        },
        {
            "id": "db5d8aa9a3db4f32af05342ab031f3d0",
            "updateDate": "2020-02-12 15:33:33",
            "msgId": "EUC20191121180504631",
            "businessCode": "AVC201908022",
            "businessName": "国信南山翰林府",
            "businessSource": "GN_PRJ_11",
            "businessType": "精装修",
            "topCustomerAbbreviation": "",
            "companyNameA": "吉林省同仁众和房地产开发有限公司",
            "contactNameA": "",
            "contactMobileA": "",
            "industryId": "003",
            "industry": "房地产业",
            "state": "100",
            "haierTheater": "东北",
            "center": "12502",
            "centerName": "长春小微",
            "smallMesh": "长春2网格小微",
            "grid": "吉林省长春市南关区",
            "province": "吉林",
            "provinceId": "220000000000",
            "city": "长春",
            "cityId": "220100000000",
            "district": "南关区",
            "districtId": "220102000000",
            "businessOpportunityAddress": "净月大街南延线18公里处",
            "lastProcessingTime": "2020-03-13 10:25:46",
            "entryDate": "2020-03-13 10:25:46",
            "contractorName": "",
            "businessChannel": "",
            "competitors": "",
            "isSendHps": "0",
            "ifTopCustomer": "否",
            "undertake": "",
            "imageUrl": "",
            "screenStstus": "2",
            "isValid": "1"
        }
    ]
}
```
