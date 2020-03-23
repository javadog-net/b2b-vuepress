## 7.需求详情评价接口

### 7.1 地址
>  baseUrl + /api/process/b2b/evaluateAdd

### 7.2 请求方式
> POST

### 7.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgid  | 需求id | 是 |- |
| nodestate  | 节点标识 | 是 |-|
| description  | 评价描述 | 是 |- |  
| skillGrade  | 技能打分 | 是 | 0-5数字| 
| attitudeGrade  | 态度打分 | 是 |0-5数字 |  
| subuserId  | 提交人id | 是 |- | 
| subusername  | 提交人名称 | 是 |- | 

### 7.4 返回值

#### 7.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 7.4.1.1  返回值对应实体
```java
	private String msgid;		// 需求Id
	private String nodestate;		// 所到节点状态
	private String nodename;		// 所到节点名称
	private String description;		// 描述
	private String skillGrade;		// 技能评分
	private String attitudeGrade;		// 态度评分
	private String subuserId;		// 提交人
	private String subusername;		// 提交人名称
	private Date addtime;		// 提交时间
	private String feedbackdesc;		// 客服反馈内容
	private String feedbackperson;		// 客服反馈人
	private Date feedbacktime;		// 客服反馈时间
	//扩展字段
	private String companyName;		// 公司
	private String orgId;		// 工贸编码
	private String orgName;		// 工贸名称
	private String connectName;		// 联系人
	private String mobile;		// 联系方式
	private String channel;		// 渠道来源
```

#### 7.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求已评价"
}
```
