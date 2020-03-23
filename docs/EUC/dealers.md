## 1.提供ECU-获取经销商列表接口

### 1.1 地址
> baseUrl + /api/euc/dealers

### 1.2 请求方式
> POST

### 1.3 参数
|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| companyCode  | 经销商编码 | 否 |如：8700099146 (模糊搜索)|
| companyName  | 经销商名称 | 否 |如：邯郸市阳光三联电器有限公司 (模糊搜索) |
| gmId  | 中心编码 | 否 |如：12A02|
| pageNo  | 页数 | 否 |-|
| pageSize  | 每页显示数量 | 否 |-|

### 1.4 返回值

#### 1.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "pageNo": 1,     [******页数******]
            "pageSize": 10,  [******每页条数******]
            "count": 5249,   [******总条数******]
            "list": [
                {
                    "id": "593395ee688a46e98e5f1afce37a37eb",
                    "createDate": "2019-08-06 15:50:49",
                    "updateDate": "2019-11-13 17:55:45",
                    "companyCode": "8800102404",
                    "companyName": "潍坊顺尔意经贸有限公司",
                    "contacts": "刘刚",
                    "tel": "13305367760",
                    "mobile": "13356793166",
                    "email": "NULL",
                    "zipCode": "261000",
                    "areaInfo": "NULL",
                    "detailAddress": "潍坊",
                    "channelName": "直采专区",
                    "taxCode": "3.71E+14",
                    "gmId": "12A02"
                },
                {
                    "id": "513e7cf21d9b41d8a460c668b49a20fa",
                    "createDate": "2019-06-03 16:45:36",
                    "updateDate": "2019-11-13 17:29:44",
                    "companyCode": "8800262505",
                    "companyName": "山东净天蓝空调设备有限公司",
                    "contacts": "李丽丽",
                    "tel": "NULL",
                    "mobile": "13792619300",
                    "email": "NULL",
                    "zipCode": "NULL",
                    "areaInfo": "NULL",
                    "detailAddress": "潍坊市",
                    "channelName": "直采专区",
                    "taxCode": "91370702MA3MKC3A56",
                    "gmId": "12A02"
                },
                {
                    "id": "c372b4807ac641c49648670a56b63022",
                    "createDate": "2019-06-18 09:42:55",
                    "updateDate": "2019-11-13 15:43:57",
                    "companyCode": "8700001074",
                    "companyName": "青岛利客来集团股份有限公司家电分公司",
                    "contacts": "冯作洁",
                    "tel": "87655798",
                    "mobile": "18562523102",
                    "email": "NULL",
                    "zipCode": "266000",
                    "areaInfo": "NULL",
                    "detailAddress": "/",
                    "channelName": "直采专区",
                    "taxCode": "91370213697177155H",
                    "gmId": "12A02"
                },
                {
                    "id": "1f99a9e66ab9447d96de217ff7b3545d",
                    "createDate": "2019-11-13 08:06:11",
                    "updateDate": "2019-11-13 08:08:14",
                    "companyCode": "8800317274",
                    "companyName": "青岛金杉臻工贸有限公司",
                    "contacts": "綦建建",
                    "tel": "13356391960",
                    "mobile": "13370817277",
                    "detailAddress": "青岛市",
                    "channelName": "直采专区",
                    "taxCode": "91370283MA3NNA3K9P",
                    "gmId": "12A02"
                },
                {
                    "id": "c91c3a9b74aa449daba1e0db72635321",
                    "createDate": "2019-09-17 13:34:17",
                    "updateDate": "2019-11-12 12:00:20",
                    "companyCode": "8800128401",
                    "companyName": "青岛恒立盛商贸有限公司",
                    "contacts": "秦世房",
                    "tel": "0532-87842177",
                    "mobile": "15066896781",
                    "email": "NULL",
                    "zipCode": "266000",
                    "areaInfo": "NULL",
                    "detailAddress": "青岛",
                    "channelName": "直采专区",
                    "taxCode": "91370212587827225K",
                    "gmId": "12A02"
                },
                {
                    "id": "bdb6fabbf6cd40f3a0c6320da2a47986",
                    "createDate": "2019-11-12 09:50:07",
                    "updateDate": "2019-11-12 09:50:54",
                    "companyCode": "8700000253",
                    "companyName": "青岛海尔国际旅行社有限公司",
                    "contacts": "刘美娟",
                    "tel": "8939525",
                    "mobile": "18306390693",
                    "email": "NULL",
                    "zipCode": "266000",
                    "areaInfo": "NULL",
                    "detailAddress": "青岛",
                    "channelName": "直采专区",
                    "taxCode": "91370212713724914E",
                    "gmId": "12A02"
                },
                {
                    "id": "dadc5f5525b54269b2e0242295d55fab",
                    "createDate": "2019-06-27 17:24:53",
                    "updateDate": "2019-11-11 15:51:53",
                    "companyCode": "8800325383",
                    "companyName": "青岛欣怡缘环境科技有限公司",
                    "contacts": "李化恩",
                    "tel": "13969644777",
                    "mobile": "13969644777",
                    "detailAddress": "青岛市",
                    "channelName": "直采专区",
                    "taxCode": "91370282MA3CN1RH2K",
                    "gmId": "12A02"
                },
                {
                    "id": "0298dc704a8b4f81b34ce9fcbc4c2c1e",
                    "createDate": "2019-06-13 13:16:36",
                    "updateDate": "2019-11-11 13:31:38",
                    "companyCode": "8800016151",
                    "companyName": "青岛鸿顺瑞商贸有限公司",
                    "contacts": "于见清",
                    "tel": "0532-82756358",
                    "mobile": "13969610709",
                    "email": "NULL",
                    "zipCode": "266000",
                    "areaInfo": "NULL",
                    "detailAddress": "青岛市",
                    "channelName": "直采专区",
                    "taxCode": "91370203686754105Y",
                    "gmId": "12A02"
                },
                {
                    "id": "4975f3832ea44c03996b4864507f5829",
                    "createDate": "2019-09-03 16:49:12",
                    "updateDate": "2019-11-11 12:34:42",
                    "companyCode": "8800337121",
                    "companyName": "青岛泽祥节能技术有限公司",
                    "contacts": "王金华",
                    "tel": "13645429184",
                    "mobile": "15215423232",
                    "detailAddress": "青岛市",
                    "channelName": "直采专区",
                    "taxCode": "91370211MA3M4M872A",
                    "gmId": "12A02"
                },
                {
                    "id": "1a1aebfe1d284d6a8bb497af0e8225c2",
                    "createDate": "2019-06-24 16:26:56",
                    "updateDate": "2019-11-11 11:12:31",
                    "companyCode": "8700110366",
                    "companyName": "日照源轩商贸有限公司",
                    "contacts": "孙成峰",
                    "tel": "0633-3220606",
                    "mobile": "13706339526",
                    "email": "NULL",
                    "zipCode": "NULL",
                    "areaInfo": "NULL",
                    "detailAddress": "NULL",
                    "channelName": "直采专区",
                    "taxCode": "3.71E+14",
                    "gmId": "12A02"
                }
            ],
            "html": "<div class=\"fixed-table-pagination\" style=\"display: block;\"><div class=\"pull-left pagination-detail\"><span class=\"pagination-info\">显示第 1 到第 10 条记录，总共 71 条记录</span><span class=\"page-list\">每页显示 <span class=\"btn-group dropup\"><button type=\"button\" class=\"btn btn-default  btn-outline dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><span class=\"page-size\">10</span> <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" role=\"menu\"><li class=\"active\"><a href=\"javascript:page(1,10,'');\">10</a></li><li class=\"\"><a href=\"javascript:page(1,25,'');\">25</a></li><li class=\"\"><a href=\"javascript:page(1,50,'');\">50</a></li><li class=\"\"><a href=\"javascript:page(1,100,'');\">100</a></li></ul></span> 条记录</span></div><div class=\"pull-right pagination-roll\"><ul class=\"pagination pagination-outline\"><li class=\"paginate_button previous disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-double-left\"></i></a></li>\n<li class=\"paginate_button previous disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-left\"></i></a></li>\n<li class=\"paginate_button active\"><a href=\"javascript:\">1</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(2,10,'');\">2</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(3,10,'');\">3</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(4,10,'');\">4</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(5,10,'');\">5</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(6,10,'');\">6</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(7,10,'');\">7</a></li>\n<li class=\"paginate_button \"><a href=\"javascript:\" onclick=\"page(8,10,'');\">8</a></li>\n<li class=\"paginate_button next\"><a href=\"javascript:\" onclick=\"page(2,10,'');\"><i class=\"fa fa-angle-right\"></i></a></li>\n<li class=\"paginate_button next\"><a href=\"javascript:\" onclick=\"page(8,10,'');\"><i class=\"fa fa-angle-double-right\"></i></a></li>\n</ul></div></div>",
            "maxResults": 10,
            "firstResult": 0
        }
    }
}
```

#### 1.4.1.1  成功返回值对应实体类

> 标注 [******需要字段******] 是所需字段，其余字段可按需获取
```java
	private String companyCode;		// 经销商编码 [******需要字段******]
	private String companyName;		// 经销商名称 [******需要字段******]
	private String companyNum;		// 公司人数
	private String contacts;		// 公司联系人
	private String tel;		// 公司联系人电话
	private String mobile;		// 手机
	private String email;		// 邮箱
	private String zipCode;		// 邮编
	private String provinceId;		// 省
	private String cityId;		// 市
	private String districtId;		// 区
	private String areaInfo;		// 所在地区
	private String detailAddress;		// 详细地址
	private String channelName;		// 渠道名称(区分88码用户性质，如客单报备,直采，抢派单流程)
	private String taxCode;		// 税码
	private String kjtAccount;		// 快捷通账号
	private String electronicUrl;		// 营业执照电子版
	private String idCardUrl;		// 身份证电子版
	private String legalPersonName;		// 法人姓名
	private String legalPersonIdCard;		// 法人身份号
	private String companyTel;		// 公司电话
	private String electronicLicense;		// 开户许可证电子版
	private String logoUrl;		// 企业logo地址
	private String gmId;		// 所属工贸
	private String isClosed;		// 是否关闭 
	private String isStore;		// 是否开店
	private String isSelf;		// 是否自营
	private String undertakeArea;		// 承接区域
	private String auditState;		// 审核状态
	private Date auditTime;		// 审核时间 
	private String auditor;		// 审核人
	private String auditDesc;		// 审核意见
	private String underProductIstotal;		// 承接品类是否是所有0否 1是(一期）
	private String instruct;		// 行业类别(一期）
	private String gmName;		// 工贸名称(二期新增)
	private String score;		// 经销商积分(一期）
	private String allowPop;		// 是否允许经销商开店（0 否 1 是）
	private String allowDispatch;	// 是否允许抢派单（0 否 1 是）
	private String allowDemand;		// 是否允许需求报备（0 否 1 是）
	private String dealerType;		// 经销商类型(暂时保留)
	private String underProduct;		// 承接品类
	private String acgPassword;//acg传入密码
	private String customerCategory;// 客户性质大类 [******需要字段******]
	private String industryClass;// 客户性质小类 [******需要字段******]
```


