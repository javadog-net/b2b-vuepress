## 5.根据需求Id获取需求详情

### 5.1 地址
>  baseUrl + /api/process/app/getShopMsgDetail

### 5.2 请求方式
> POST

### 5.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 |- |

### 5.4 返回值

#### 5.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "4b042638d27e4472a0395150a7783069",
            "createDate": "2019-11-18 10:10:00",
            "companyName": "海尔",
            "provinceId": "370000000000",
            "provinceName": "山东省",
            "cityId": "370200000000",
            "cityName": "青岛市",
            "districId": "370213000000",
            "districName": "李沧区",
            "address": "山东省 青岛市 李沧区",
            "addressDetail": "上王埠3区3号楼3单元",
            "orgId": "12A02",
            "orgName": "青岛",
            "channel": "11",
            "connectName": "123",
            "mobile": "18306390693",
            "email": "862422627@qq.com",
            "depart": "1",
            "companyOrgCode": "91370200264574251E",
            "companyOrgName": "海尔智家股份有限公司",
            "category": "0",
            "count": 0,
            "isRead": "1",
            "isDispatch": "0",
            "msgFlag": "10",
            "ptIspass": "1",
            "ptChecker": "admin",
            "ptCheckDate": "2019-11-18 10:13:02",
            "ptDescp": "你好",
            "proGroup": "彩电",
            "proGroupCode": "11,0",
            "memo": "111",
            "msgNo": "20191118101000410",
            "managerNoFlag": false,
            "nodetag": "1"
        }
    }
}
```

#### 5.4.1.1  返回值对应实体
```java
private String companyName;		// 公司
	private String companySize;		// 公司规模
	private String provinceId;		// 省份编码
	private String provinceName;		// 省份名称
	private String cityId;		// 城市编码
	private String cityName;		// 城市名称
	private String districId;		// 地区编码
	private String districName;		// 区域名称
	private String address;		// 省市区的名称
	private String addressDetail;		// 详细地址(hps必备）
	private String orgId;		// 工贸编码
	private String orgName;		// 工贸名称
	private String channel;		// 渠道来源
	private String connectName;		// 联系人
	private String mobile;		// 联系方式
	private String reserveMobile;		// 400中的预留手机号
	private String email;		// 邮箱
	private String qq;		// qq
	private String depart;		// 部门
	private String money;		// 预算（400 客服界面上有该选项）
	private String companyOrgCode;		// 统一社会信息编码
	private String companyOrgName;		// 统一信用认证完整公司名称
	private String brandName;		// 品牌
	private String category;		// 品类
	private String msgType;		// 需求分类（询价、代理、邀标、资料获取、品牌合作、文化交流）
	private String quotaInfo;		// 报价信息（400客服界面用到）
	private String projectCode;		// 项目编码
	private int count;//产品数量
	private String descp;		// 需求描述
	private String areaDetails;		// 详细地址	utf8
	private String isRead;		// 未读0  已读1
	private String haveUndertake;		// 是否有承接经销商 0 没有  1  有
	private String isDispatch;		// 是否派单
	private String franchiseId;		// 采购商ID
	private String msgFlag;		// 0 平台待审核；
	private String oldCode;		// 历史单号
	private String ptIspass;		// 平台审核是否通过
	private String ptChecker;		// 平台审核人
	private Date ptCheckDate;		// 平台审核时间
	private String ptDescp;		// 平台审核备注
	private String appIspass;		// 平台审核是否通过
	private String appChecker;		// APP 审核人
	private Date appCheckDate;		// app审核时间
	private String appCancleReason;		// 废弃原因
	private String appDescp;		// app审核原因
	private Date grabDate;		// 抢单时间
	private String custCode;		// 经销商编码
	private String isBack;		// 是否反馈，1是，0否
	private String operExchange;		// 合作交流内容
	private String managerNo;		// 指派人编号
	private String managerName;		// 指派人名称
	private String conFranchiseType;		// 商空采购商类型
	private Date remarksDate;		// 总监备注填写时间
	private String remarksPerson;		// 填写备注的总监编号
	private String sendmsg;		// 是否已成功发送短信，（1-已成功发送）
	private String unreadMsg;		// 客户未读信息条数
	private String proGroup;		// 产品组冗余字段
	private String proGroupCode; // 产品组对应冗余字段
	private String memo;		// 采购需求描述
	private String code; // 短信验证码（自注册时使用）
	private String registType; //是否已经注册
    private Date addTime;//添加时间
	private String msgNo;//需求单号
```

#### 5.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求不存在"
}
```
