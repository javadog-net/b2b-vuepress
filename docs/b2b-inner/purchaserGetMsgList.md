## 6.根据用户手机号查询用户需求列表

### 6.1 地址
>  baseUrl + /api/process/b2b/purchaserGetMsgList

### 6.2 请求方式
> POST

### 6.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| mobile  | 需求id | 是 |- |
| category  | 分类 | 否 |- 如需求分类 0 |
| nodetag  | 节点标识 | 否 | 0相应  1跟单 3到货 4安装 5晒单 | 

### 6.4 返回值

#### 6.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "0745ad4977bf41949e2c8c6f0530fba5",
                "createDate": "2019-11-23 20:51:51",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "123",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "wqdeqw2@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "132",
                "msgNo": "20191123205151296",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "0926a9f988784f04860f54e1c723ac64",
                "createDate": "2019-11-23 22:19:33",
                "companyName": "11",
                "provinceId": "150000000000",
                "provinceName": "内蒙古自治区",
                "cityId": "150100000000",
                "cityName": "呼和浩特市",
                "districId": "150104000000",
                "districName": "玉泉区",
                "address": "内蒙古自治区 呼和浩特市 玉泉区",
                "addressDetail": "123",
                "orgId": "12106",
                "orgName": "内蒙",
                "channel": "16",
                "connectName": "11",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "123",
                "msgNo": "20191123221933820",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "0e5df4a999de4383ae1d3fd12467f911",
                "createDate": "2019-11-23 22:25:08",
                "companyName": "123",
                "provinceId": "140000000000",
                "provinceName": "山西省",
                "cityId": "140200000000",
                "cityName": "大同市",
                "districId": "140202000000",
                "districName": "城区",
                "address": "山西省 大同市 城区",
                "addressDetail": "123",
                "orgId": "12002",
                "orgName": "太原",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "家用空调,电/燃气热水器",
                "proGroupCode": "2,3",
                "memo": "123",
                "msgNo": "20191123222507655",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "16c596fe8b454f77917e658ce87b8af2",
                "createDate": "2019-11-23 22:16:50",
                "companyName": "123",
                "provinceId": "130000000000",
                "provinceName": "河北省",
                "cityId": "130100000000",
                "cityName": "石家庄市",
                "districId": "130102000000",
                "districName": "长安区",
                "address": "河北省 石家庄市 长安区",
                "addressDetail": "123",
                "orgId": "12001",
                "orgName": "石家庄",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "123",
                "msgNo": "20191123221649461",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "1b6bc9687f3d4c88a20e3e84b1388780",
                "createDate": "2019-11-23 20:35:56",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "123",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "123",
                "msgNo": "20191123203555938",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "25a4539a766745cea979aa1f54661506",
                "createDate": "2019-11-23 22:12:54",
                "companyName": "11",
                "provinceId": "130000000000",
                "provinceName": "河北省",
                "cityId": "130200000000",
                "cityName": "唐山市",
                "districId": "130202000000",
                "districName": "路南区",
                "address": "河北省 唐山市 路南区",
                "addressDetail": "123",
                "orgId": "12105",
                "orgName": "唐山",
                "channel": "16",
                "connectName": "11",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调",
                "proGroupCode": "0",
                "memo": "123",
                "msgNo": "20191123221253748",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "395f5f52a42f4fb99ad80664000aed6b",
                "createDate": "2019-11-23 20:51:04",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "123",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "wqdeqw2@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "132",
                "msgNo": "20191123205103121",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "6d9bde4a83e1468d865a5fe1b2efda56",
                "createDate": "2019-11-23 21:27:10",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123212709431",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "6f2de343e8d1415599ec108986f9d823",
                "createDate": "2019-11-23 20:34:49",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "123",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "123",
                "msgNo": "20191123203448612",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "7b27f75cbab2440a8adfa98e80ee22b1",
                "createDate": "2019-11-23 21:31:23",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123213122828",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "817a81385a884c3fad2419b0a66aec41",
                "createDate": "2019-11-23 21:28:11",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123212811737",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "83db880d7c0c4753a72dbcac4f21c92d",
                "createDate": "2019-11-23 22:25:24",
                "companyName": "123",
                "provinceId": "140000000000",
                "provinceName": "山西省",
                "cityId": "140200000000",
                "cityName": "大同市",
                "districId": "140202000000",
                "districName": "城区",
                "address": "山西省 大同市 城区",
                "addressDetail": "123",
                "orgId": "12002",
                "orgName": "太原",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "太阳能",
                "proGroupCode": "4",
                "memo": "123",
                "msgNo": "20191123222524554",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "a1d95e9d927646d0a218b3ce74655dfd",
                "createDate": "2019-11-23 20:35:29",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "123",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "123",
                "msgNo": "20191123203528875",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "ac4f25d46ee6437e8efebc7d154a683c",
                "createDate": "2019-11-23 21:35:32",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123213532415",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "b776f5ad14a546d4a3514790c3423f66",
                "createDate": "2019-11-23 21:30:04",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123213004856",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "c254c8cdab944ad7a7b8caf0cd26d61a",
                "createDate": "2019-11-20 17:52:33",
                "companyName": "ceshi",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "详细地址",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "18",
                "mobile": "18306390693",
                "email": "862422627@qq.com",
                "depart": "0",
                "companyOrgCode": "91320312MA1MB80T8X",
                "companyOrgName": "江苏华正数控机械有限公司",
                "category": "0",
                "count": 0,
                "isRead": "1",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "彩电,中央空调",
                "proGroupCode": "11,0",
                "memo": "多来一台",
                "msgNo": "20191120175232753",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "d2d8697e378c4f01bbbcb7c568a6d995",
                "createDate": "2019-11-23 21:31:23",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123213123918",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "d32967e274bb46859b9cc6b4d9a37862",
                "createDate": "2019-11-23 22:17:18",
                "companyName": "123",
                "provinceId": "130000000000",
                "provinceName": "河北省",
                "cityId": "130100000000",
                "cityName": "石家庄市",
                "districId": "130102000000",
                "districName": "长安区",
                "address": "河北省 石家庄市 长安区",
                "addressDetail": "123",
                "orgId": "12001",
                "orgName": "石家庄",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "123@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "123",
                "msgNo": "20191123221717601",
                "managerNoFlag": false,
                "nodetag": "0"
            },
            {
                "id": "e172c748274e4ae8ae838b7198049516",
                "createDate": "2019-11-23 21:30:15",
                "companyName": "123",
                "provinceId": "370000000000",
                "provinceName": "山东省",
                "cityId": "370200000000",
                "cityName": "青岛市",
                "districId": "370213000000",
                "districName": "李沧区",
                "address": "山东省 青岛市 李沧区",
                "addressDetail": "1231",
                "orgId": "12A02",
                "orgName": "青岛",
                "channel": "16",
                "connectName": "123",
                "mobile": "18306390693",
                "email": "12@qq.com",
                "depart": "0",
                "count": 0,
                "isRead": "0",
                "isDispatch": "0",
                "msgFlag": "0",
                "proGroup": "中央空调,商用空调",
                "proGroupCode": "0,1",
                "memo": "23",
                "msgNo": "20191123213015679",
                "managerNoFlag": false,
                "nodetag": "0"
            }
        ]
    }
}
```

#### 6.4.1.1  返回值对应实体
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

#### 6.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求不存在"
}
```