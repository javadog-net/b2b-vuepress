<!--
 * @Description: In User Settings Edit
 * @Author: hdx
 * @Date: 2020-02-04 14:20:15
 * @LastEditors  : hdx
 * @LastEditTime : 2020-02-13 13:36:07
 -->
## 11.提供企业购中台我的商机-商机详情

### 11.1 地址
>  baseUrl + /api/customer/getMyProjectDetails

### 11.2 请求方式
> GET

### 11.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| projectId  | hps项目id | 是 |- |



### 11.4 返回值 

#### 11.4.1  成功返回值
```json 
{
    "errcode": 0,
    "errmsg": "OK",
    "data": {
        "roneVO": { // 项目R1信息
            "id": "157343687652655eec85066e34beca27d5eec79acca26",
            "projectName": "113456", //项目名称
            "projectCode": "P11A0219A0301-K", 项目编码
            "projectSource": "GN_PRJ_15", 项目来源
            "projectSourceName": "经销商自主报备", 项目来源名称
            "center": "11A02", 中心
            "centerName": "青岛", 中心名称
            "area": "SDDQ", 区域
            "areaName": "山东大区", 区域名称
            "firstCompanyName":  "北京兴竹同智信息技术股份有限公司", 甲方公司名称
            "firstCompanyOrgCode": "91110106790651384F", 组织结构代码
            "loginLevel": 3, 登录级别
            "beStrategy": false, 是否战略
            "projectType": null, 项目类型
            "projectTypeName": null, 项目类型名称
            "addressProvince": "370000000000", 项目地址（省）
            "addressCity": "370200000000", 项目地址（市）
            "addressCounty": "370202000000", 项目地址（区/县）
            "addressDetail": "1", 详细地址
            "cleanEnergy": null, 煤改清洁能源
            "cleanEnergyType": null, 煤改清洁能源类型
            "frequencyConversion": null, 变频柜嵌
            "beGroupBuy": null, 是否政采/集采
            "beImgageProject": null, 是否形象工程
            "salesModel": null, 销售模式
            "projectCreaterId": "cc179535-6edf-11e9-b767-0eeab13649ea", 项目录入人ID(ITO)
            "projectCreaterName": "赵长升", 项目录入人名称（ITO）
            "funnelStage": "ORDER",漏斗阶段
            "funnelStageCode": "ORDER", 漏斗阶段 Code
            "funnelStageVal": "订单/工程版",漏斗阶段名称
            "dataSource": "EN_CREATED",/**数据来源*/
            "projectStatus": "EXECUTORY_PROJECT_STATUS",/**项目状态*/
            "domainModel": "CUSTOMER_ORDER",/**产业模式（客单和直单）*/
            "domainType": "BX",/**产业类型(大客户、商空、冰箱等)*/
            "createdById": "cc179535-6edf-11e9-b767-0eeab13649ea",/**创建人ID*/
            "lastModifiedById": "154881449717434b56814cca845bda0a839abb109959b",/**最后修改人ID*/
            "address": "山东省 青岛市 市南区 1",/**地址（省+市+县+详细地址）*/
            "purchaseForecastList": [/**项目采购预测VO*/
                {
                    "id": "15734368765303ac57e7516ae482c9930e3fcc715840f",
                    "projectId": "157343687652655eec85066e34beca27d5eec79acca26",
                    "productGroup": "AA",产品组
                    "productGroupName": "冰箱",产品组名称
                    "estimatedQuantity": 1,预计数量
                    "purchaseBudget": 1.000000,采购预算（万元）
                    "createdById": "cc179535-6edf-11e9-b767-0eeab13649ea",创建人ID
                    "lastModifiedById": "赵长升",最后修改人ID
                    "industryLine": null,产业线
                    "industryLineName": null,产业线名称
                    "brand": null,品牌
                    "brandName": null,品牌名称
                    "beWisdom": false 是否智慧
                }
            ],
            "skMaglevList": [],
            "beAfterPurchase": false, 是否复购
            "estimatedTimeBid": 1573436663000, 预计投标时间
            "basePostId": "1557051145091b3d079ef2c9445bfbca252e88114b4f5", 基础岗位ID
            "basePostCode": "JCG-1557051145091b3d079ef2c9445bfbca252e88114b4f5", 基础岗位编码
            "basePostName": "1557051145091b3d079ef2c9445bfbca252e88114b4f5", 基础岗位名称
            "createdDate": 1573436876000, 创建时间
            "msgId": "20191111094755249",商机ID（企业购传入）
            "eucId": null,商机ID（ECU传入）
            "beSendGpms": "0",是否传入GPMS(0：否，1：是，2：已传入)
            "sendGpmsTime": null,传入GPMS时间
            "sendGpmsResult": null,传输GPMS结果
            "cancelReason": null,项目作废原因
            "cancelPersonCode": null,项目作废人编码
            "cancelTime": null,项目作废时间
            "beTurnStraightGuest": null,是否直转客(直单项目是否已经转成客单项目)
            "roneNodeApprovalStatus": "DEFAULT",R1节点审批状态
            "roneNodeApprovalStatusName": "未审批",R1节点审批状态
            "productGroupList": [
                "AA"
            ],产品组List
            "projectManagerCenter": "11A02",项目负责人所属中心
            "projectManagerCenterName": "青岛",项目负责人所属中心名称
            "samplePlateType": "NON_SAMPLE_PROJECT",样板类型
            "samplePlateTypeName": "非样板项目",样板类型名称
            "projectManagerId": "cc179535-6edf-11e9-b767-0eeab13649ea",
            "projectManagerCode": "01006714",
            "projectManagerName": "赵长升",项目负责人名称
            "projectFinishDate": null,履约完成日期
            "beManualSelectProjectFinish": null,是否手动选择的履约完成
            "gridCenterCode": "02040500B999",网格小薇编码
            "gridCenterName": "青岛南网格小微",网格小薇名称
            "gridCode": "CMI42252",网格编码
            "gridName": "山东省青岛市市南区",网格名称
            "districtCode": "370202000000",三级行政区编码
            "gridUserCode": "00614196",网格经营体长工号
            "gridUserName": "李纯",网格经营体长姓名
            "beAllopatric": false,是否异地
            "beMeetFirstParty": null,是否能够约见甲方
            "needApproval": null,是否需要审批
            "profitSharing": null,项目分成
            "productSeriesOneCode": null,产品序列第一个编码
            "productSeriesOneName": null,产品序列第一个名称
            "productSeriesTwoCode": null,产品序列第二个编码
            "productSeriesTwoName": null,产品序列第二个名称
            "brandInfoCode": null,产品品牌编码
            "brandInfoName": null,产品品牌名称
            "bigAndSmall": null,大小机 1大机 2小机
            "judgmentSheetStatus": true,大小单状态 true 大单 false 小单
            "estimatedWinningTime": null
        },预计中标时间
        "rtwoVO": {// 项目R2信息
            "id": "1573436876544398b72988af54235babc418ca04767c3",
            "projectId": "157343687652655eec85066e34beca27d5eec79acca26",项目ID（漏斗R1阶段表）
            "firstContactName": "小王",甲方联系人姓名
            "position": "",职位
            "positionName": null,职位名称
            "phone": "",电话
            "industryHomeCategory": "003",项目所属行业门类
            "industryHomeCategoryName": "房地产业",行业门类名称
            "industryCategory": "0109",行业大类
            "industryCategoryName": "房地产业",行业大类名称
            "chancePoint": "GN_UserLJGJ",机会点
            "chancePointName": "绿建公建",机会点名称
            "userGroup": null,用户群
            "userGroupName": null,用户群名称
            "lockUser": "",锁定用户
            "lockUserName": null,锁定用户
            "beTemplate": null,是否有样板
            "projectFinancialStatus": null,项目的资金情况（资产负债率、 土地储备率、前期已开盘项目销售业绩）（文件ID）
            "projectSpecificLocation": null,项目的具体位置及周围楼盘信息（文件ID）
            "projectValueProposition": null,项目的定位及价值主张（文件ID）
            "projectDevelopPlan": null,项目开发整体进度规划（文件ID）
            "estimatedInstallationAmount": null,预计安装金额
            "estimatedDeliveryAmount": null,预计提货金额
            "beSplitShipment": null,是否分批发货
            "createdById": "cc179535-6edf-11e9-b767-0eeab13649ea",创建人ID
            "lastModifiedById": "cc179535-6edf-11e9-b767-0eeab13649ea",最后修改人ID
            "projectFinancialStatusFile": null,项目资金情况上传文件的文件名
            "projectSpecificLocationFile": null,项目的具体位置及周围楼盘信息上传文件的文件名
            "projectValuePropositionFile": null,项目的定位及价值主张上传文件的文件名
            "projectDevelopPlanFile": null 项目开发整体进度规划上传文件的文件名
        },
        "rthreeVO": { // 项目R3信息
            "id": "157343687653359d854dd50654218b3a79b92666ec3b4",
            "projectId": "157343687652655eec85066e34beca27d5eec79acca26",
            "honourAgreementPattern": "CUSTOMER_ORDER_HONOUR",履约模式
            "honourAgreementPatternName": "客单",履约模式名称
            "ourContractSubjectId": null,我方签约主体ID
            "ourContractSubjectCode": null,我方签约主体编码
            "ourContractSubjectName": null,我方签约主体名称
            "ourContractSubjectIdTwo": null,我方签约主体ID第二个
            "ourContractSubjectCodeTwo": null,我方签约主体编码第二个
            "ourContractSubjectNameTwo": null,我方签约主体名称第二个
            "adverseContractSubjectId": null,对方签约主体ID
            "adverseContractSubjectCode": null,对方签约主体编码
            "adverseContractSubjectName": null,对方签约主体名称
            "contractorId": null,承接商ID
            "contractorCode": "8600022564",承接商编码
            "contractorName": "渠县森隆电器有限公司",承接商名称
            "customerDemandAnalysis": null,客户需求分析
            "projectType": null,工程类型
            "projectTypeName": null,工程类型名称
            "designType": null,设计类型
            "designTypeName": null,设计类型名称
            "installationType": null,安装类型
            "installationTypeName": null,安装类型名称
            "designManagerId": null,设计经理ID
            "designManagerCode": null,设计经理编码
            "designManagerName": null,设计经理名称
            "afterSalesManagerId": null,售后经理ID
            "afterSalesManagerCode": null,售后经理编码
            "afterSalesManagerName": null,售后经理名称
            "generalContractorId": null,总包方ID
            "generalContractorCode": null,总包方编码
            "generalContractorName": null,总包方名称
            "bidCompanyId": null,招投标公司ID
            "bidCompanyCode": null,招投标公司编码
            "bidCompanyName": null,招投标公司名称
            "createdById": null,创建人ID
            "lastModifiedById": "cc179535-6edf-11e9-b767-0eeab13649ea",最后修改人ID
            "customerDemandAnalysisFile": null,客户需求分析上传的文件名称
            "customerDemandAnalysisApprovalStatus": null,客户需求分析上传文件的审批状态
            "customerDemandAnalysisApprovalStatusName": null,客户需求分析上传文件的审批状态
            "bigChannel": "M",大渠道
            "smallChannel": "HA007",小渠道
            "rthreeNodeApprovalStatus": "DEFAULT",R3节点审批状态
            "rthreeNodeApprovalStatusName": "未审批",R3节点审批状态
            "informationSubmissionType": null,信息提报单类型(光伏/光热
            "informationSubmissionTypeName": null,信息提报单类型名称
            "beIndependentBid": null,是否独立投标(A:独立、U：非独立)
            "beIndependentBidName": null是否独立投标(A:独立、U：非独立)
        },
        "rfourVO": {
            "id": "1573436876532538c208d27b04caca8a0184d417c5f1e",
            "projectId": "157343687652655eec85066e34beca27d5eec79acca26",
            "firstBidDocument": null,甲方招标文件
            "technicalProposal": null,技术方案
            "technicalProposalTime": null,技术方案
            "money": 2.000000,金额(元)
            "actualInstallationAmount": null,实际安装金额(元)
            "businessProfits": 0.000000,业务利润(元)
            "beIndependentBidName": null,是否独立投标名称
            "beSendWithOne": null,送装一体
            "tender": null,标书
            "actualTenderTime": 1573436663000,实际投标时间
            "createdById": "cc179535-6edf-11e9-b767-0eeab13649ea",创建人ID
            "lastModifiedById": "154881449717434b56814cca845bda0a839abb109959b",最后修改人ID
            "firstBidDocumentFile": null,甲方招标文件名称
            "technicalProposalFile": null,技术方案名称
            "technicalProposalApprovalStatus": null,技术方案文件审批状态
            "technicalProposalApprovalStatusName": null,技术方案文件审批状态
            "tenderFile": null,标书文件名称
            "tenderApprovalStatus": null,标书文件审批状态
            "tenderApprovalStatusName": null,标书文件审批状态
            "business": null,商务
            "competiorAnalysisList": [],对手分析技术
            "beSinceSupervision": null,是否自监理
            "poolOrgRatio": null,资源池分配工贸占比
            "beAdvanceFund": null,是否垫资
            "technicalManager": null,项目经理ID
            "technicalManagerName": null,
            "technicalManagerStandardPost": null,项目经理，标准岗ID
            "afterSalesBidding": null,需售后招标
            "needDirectDeliverySite": null,需直发工地
            "advanceFundName": null,垫资商名称
            "advanceFundCode": null 垫资商编码
        },
        "rfiveVO": { //项目R5信息 
            "id": "157343687656810b025f3a57347e993377f141e3ce1a6",
            "projectId": "157343687652655eec85066e34beca27d5eec79acca26",
            "beWinBid": true,是否中标
            "winBidTime": null,中标时间
            "winBidMessage": null,中标通知
            "estimatedTimeSigning": 1573436663000,预计签约时间
            "estimatedTimeDelivery": null,预计提货时间
            "createdById": "cc179535-6edf-11e9-b767-0eeab13649ea",创建人ID
            "lastModifiedById": null,最后修改人ID
            "winBidMessageFile": null,中标通知文件名称
            "loseBidApprovalStatus": null,丢标分析审批状态
            "loseBidApprovalStatusName": null,丢标分析审批状态
            "loseBidAnalysisId": null,丢标分析主键
            "rfiveNodeApprovalStatus": "DEFAULT",R5节点审批状态
            "rfiveNodeApprovalStatusName": "未审批",R5节点审批状态
            "projectManagerId": null,项目负责人ID
            "projectManagerCode": null,项目负责人编码
            "projectManagerName": null,项目负责人名称
            "centerPoolProportion": null,中心资源池占比
            "beShowCenterPoolProportion": false 是否展示中心资源池占比字段
        },
        "rsixVO": {
            "id": null, 
            "wbsCode": null, WBS号
            "projectManagerName": null, 项目负责人
            "dataMessage": null, 资料
            "dataMessageFile": null, 资料名称
            "beShowCenterPoolProportion": null 是否展示中心资源池占比字段
        },
        "contractVO": {
            "id": "1573436876584245955ac77bd4218931395421e646b9c",
            "projectId": "157343687652655eec85066e34beca27d5eec79acca26",
            "contractCode": null,合同编码
            "contractName": null,合同名称
            "signTime": 1573436663000,签约时间
            "signFirstPartyId": null,签约甲方ID
            "signFirstPartyCode": null,签约甲方编码
            "signFirstParty": null,签约甲方
            "signSecondPartyIdTwo": null,签约乙方安装签约主体ID
            "signSecondPartyCodeTwo": null,签约乙方安装签约主体编码
            "signSecondPartyTwo": null,签约乙方安装签约主体
            "signSecondPartyId": null,签约乙方ID
            "signSecondPartyCode": null,签约乙方编码
            "signSecondParty": null,签约乙方
            "contractTotalAmount": null,合同总金额
            "contractStartTime": null,合同开始时间
            "contractEndTime": null,合同结束时间
            "contractAttachement": "15734367192069c7de0c79cf9429894545c70e8c3cf02",合同扫描件/甲方合同
            "contractType": "CUSTOMER_ORDER",合同类型
            "createdById": "cc179535-6edf-11e9-b767-0eeab13649ea",创建人ID
            "lastModifiedById": "cc179535-6edf-11e9-b767-0eeab13649ea",最后修改人ID
            "approvalStatus": "APPROVAL",审批状态
            "contractApprovalStatusName": "审批通过",审批状态描述
            "canceled": "0",合同是否作废
            "listR": null,回款节点列表
            "contractAttachementFile": "1573436718611406720693225630989.png",附件名字
            "projectCode": null,项目编码
            "domainType": null,产业编码
            "domainModel": null,产业模式
            "createdBy": "赵长升",创建人
            "createdDate": 1573436876000,创建时间
            "lastModifiedBy": "赵长升",修改时间
            "lastModifiedDate": 1573436876000,最后修改时间
            "beCash": false,是否现款现货
            "projectName": null,项目名称
            "center": null,中心
            "beChanging": false,是否变更中
            "contractOtherFile": null,其它附件
            "contractOtherFileName": null,其它附件
            "hisContractAttachementList": [],历史版本合同扫描件
            "hisContractAttachementFileList": [],历史版本合同扫描件
            "hisContractOtherFileList": [],历史版本合同其它附件
            "hisContractOtherFileNameList": []
        },历史版本合同其它附件
        "orderList": [ //订单信息
            {
            /**订单主键*/
            private String id;
            /**订单编号*/
            private String orderCode;
            /**提报时间*/
            private Date submitTime;
            /**客户要求到货日期*/
            private Date deliveryDate;
            /**订单类型*/
            private String orderType;
            /**订单类别*/
            private String orderCategory;
            /**审批状态*/
            private String approveStatus;
            /**项目名称*/
            private String projectName;
            /**销售组织名称*/
            private String marketOrgName;
            /**产业编码*/
            private String domainCode;
            /**wbs费用id*/
            private String wbsFeeTypeId;
            /**wbs费用编码*/
            private String wbsFeeTypeCode;
            /**wbs费用名称*/
            private String wbsFeeTypeName;
            /**是否换货订单*/
            private Boolean beExchangeOrder;
            /**工厂编码*/
            private String factoryCode;
            /**工厂名称*/
            private String factoryName;
            /**产业名称*/
            private String domainName;
            /**创建时间*/
            private String createdDate;
            /**销售渠道名称*/
            private String channelDistributionCode;
            /**中心*/
            private String center;
            /**订单子表数据*/
            private OrderItemVO item;
            /**需求类型*/
            private String demandType;
            /**库位*/
            private String storage;
            }
        ],
        "brownList": [ 工程板信息
            {
                "brownCode": "11A02XGC201911A00019",工程板单号
                "id": "1576224592352e48be1870e6e4ca5a24d571b747b7211",
                "projectId": "157343687652655eec85066e34beca27d5eec79acca26",项目id
                "projectCode": "P11A0219A0301-K",项目编码
                "projectName": "113456",项目名称
                "projectLinkman": null,项目联系人
                "projectAddress": null,项目地址
                "projectPhone": null,项目联系人电话
                "custLinkman": null,经销商联系人
                "custLinkmanPhone": null,经销商联系人电话
                "dealerCode": "8600022564",经销商编码
                "dealerName": "渠县森隆电器有限公司",经销商名称
                "center": "11A02",中心
                "centerName": null,中心名称
                "projectDate": null,项目审核通过时间
                "domainCode": "BX",产业，判断是否为商空
                "industryCategory": null,产业大类
                "openSystem": "RRS",开货系统
                "expireTime": 1581408592000,到期时间
                "createdDate": 1557734992000,创建时间
                "type": "BrownCancel",类型
                "typeName": null,类型名称
                "productGroupCode": "AA",产品组编码
                "productGroupName": "冰箱",产品组名称
                "addressProvince": null,省
                "addressCity": null,市
                "addressCounty": null,区
                "addressDetail": null,项目验收地址
                "billQuantity": null,工程版审批数量
                "brownDelayVO": null,工程版延期VO
                "brownCancelVO": null,工程板作废VO
                "identify": null,作废延期标识
                "item": [ 工程板子表信息
                    {
                        "id": "15762245923585311557e6eea46aa9a79661604e6779c",工程板子表主键
                        "brownId": "1576224592352e48be1870e6e4ca5a24d571b747b7211",工程板主表主键
                        "productId": null,产品id
                        "productCode": "BJ0V92090",产品编码
                        "productModel": null,产品型号
                        "productName": "GUC24111ACC",产品名称
                        "orderQuantity": 1,下单数量
                        "price": 20000.000000,价格
                        "actualOrderQuantity": null,实际下单数量
                        "izhikou": -0.181100,直扣率
                        "createdById": null,创建人ID
                        "lastModifiedById": null,最后修改人ID
                        "cinvmUnit": "TAI",
                        "iinvrCost": 17999.000000,
                        "avePolicy": null,
                        "curPolicy": null,当前参照最大政策-型号基准价
                        "profit": null,本型号利润审批价-基准价
                        "itaifan": 1159.930000 台反
                    }
                ],
                "lastModifiedDate": 1576749238000,最后修改时间
                "orderQuantitySum": 1,工程版子表下单数量的合计
                "receivedQuantitySum": 0,已签收数量合计
                "isCheck": false,是否创建验收单
                "gpmsSuccessStr": "成功",传送GPMS状态
                "hasContract": "未生效",返利协议生效状态
                "openSystemStatusStr": "未传送",传送开货系统状态
                "openSystemTime": null,传送开货系统时间
                "expireTimeBeforeApprove": null,到期日期
                "beCancel": null 这个工程板是否可以作废
            }
        ],
        "checkList": [ //验收单信息
            {
                "id": "15767445486205ce141af3b744f7e882ecb8f5aae8fa3",主键ID
                "cbillId": "1576224786302b48d2b40bd6b45bf883077859892a1c1",工程单ID
                "cbillCode": "11A02XGC201911A00021",工程单编码
                "projectId": "157343687652655eec85066e34beca27d5eec79acca26",项目ID
                "projectCode": "P11A0219A0301-K",项目编码
                "projectName": "113456",项目名称
                "projectLinkman": "赵长升",项目联系人
                "projectAddress": "山东省 青岛市 市南区 1",项目地址
                "projectPhone": null,项目联系人电话
                "custCode": "8600022564",经销商编码
                "custName": "渠县森隆电器有限公司",经销商名称
                "custLinkman": null,经销商联系人
                "custLinkmanPhone": "0818-7211999",经销商联系人电话
                "productGroupCode": "AA",产品组编码
                "productGroupName": "冰箱",产品组编码名称
                "center": "11A02",中心编码
                "centerName": "青岛",中心名称
                "projectDate": null,项目审核通过时间
                "domain": "BX",产业，判断是否为商空
                "installer": null,安装商名称
                "installerLinkman": null,安装商联系人
                "installerLinkmanPhone": null,安装商电话
                "invoiceCode": null,发票代码
                "invoiceNumber": null,发票号码
                "saleMoney": null,销售额(元)
                "taxId": null,税务登记号
                "taxMoney": null,税额(元)
                "invoiceDate": null,开票日期
                "invoiceFile": null,发票扫描件
                "invoiceFileName": null,发票扫描件
                "marketGrade": null,市场级别
                "billQuantity": 1,工程版审批数量
                "gvsQuantity": 1,实际提货数量
                "verifyQuantity": 1,申请验收数量
                "quantity": 0,实际验收数量
                "verifyRate": 100.00,验收数量比例
                "quality": null,安装质量
                "applyId": null,申请人ID
                "applyer": null,申请人名称
                "applyDate": null,申请时间
                "addressProvince": "370000000000",省
                "addressCity": "370200000000",市
                "addressCounty": "370202000000",区
                "provinceCityCountyDetail": null,省市区名字
                "addressDetail": "1",项目验收地址
                "verifyStatus": "4",状态
                "verifyStatusDesc": "申诉完成",状态描述
                "verifyNum": 0,审批次数 0次是默认，1是初审，2是复审，最多到2
                "beginDate": 1556698386000,GPMS确认时间就是计时开始时间
                "endDate": 1572250386000,最后时间180天
                "firstFailReason": null,初审不合格原因
                "firstFailFile": null,初审见证性资料
                "firstFailFileName": null,初审见证性资料
                "appealStartDate": null,申诉开始时间
                "appealOverDate": null,申诉结束时间
                "againApplyReason": null,复检申请原因
                "againFailReason": null,复检不合格原因
                "againFailFile": null,复审见证性资料
                "againFailFileName": null,复审见证性资料
                "isFreeze": "1",是否传输封号
                "freezeDate": 1576745543000,传输时间
                "freezeReault": "BPELID:63192307MSG:OK",传输结果
                "isSend": "0",是否传GPMS
                "sendDate": null,传GPMS时间
                "sendReault": null,传GPMS结果
                "memo": "工程版超过180天已经发起验收，但是验收未完成,对经销商封户",备注
                "createdById": "A00017",创建人ID
                "createdBy": "刘志坤",创建人
                "createdDate": 1576744548000,创建时间
                "list": [验收单项
                    {
                    /**主键ID*/
                    private String id;
                    /**验收单ID*/
                    private String verifyBillId;
                    /**工程单编号*/
                    private String cbillCode;
                    /**项目编号*/
                    private String projectCode;
                    /**产品组编号*/
                    private String productGroupCode;
                    /**产品组名称*/
                    private String productGroupName;
                    /**型号*/
                    private String modelCode;
                    /**型号名称*/
                    private String modelName;
                    /**施工地址*/
                    private String address;
                    /**申请验收数量*/
                    private Integer quantity;
                    /**备注*/
                    private String memo;
                    /**创建人id*/
                    private String createdById;
                    /**修改人id*/
                    private String lastModifiedById;
                    /**验收单状态*/
                    private String verifyStatus;
                    }
                ],
                "appeal": null,是否可申诉
                "firstGvsQuantity": null,初审提货数
                "firstVerifyQuantity": null,初审申请验收数
                "firstQuantity": null,初审验收数
                "firstRate": null,初审验收比例
                "tempText1": null,临时字段1
                "tempText2": null,临时字段2
                "approvalStatus": null,审批状态
                "contractApprovalStatusName": null,审批状态描述
                "yanshoujiezhiDate": null,验收截止天数
                "quantityUnavailable": null 异常报备数量
            }
        ],
        "superviseList": [ // 监理信息
            {
            /** id */
            private String id;
            /** 监理单号 */
            private String superviseCode;
            /** 监理名称 */
            private String superviseName;
            /** 漏斗项目id */
            private String projectId;
            /** 项目编号 */
            private String projectCode;
            /** 中心 */
            private String center;
            /** 项目名称 */
            private String projectName;
            /** 省 */
            private String addressProvince;
            /** 市 */
            private String addressCity;
            /** 区 */
            private String addressCounty;
            /** 地址 */
            private String addressDetail;
            /** 工程信息来源 */
            private String infoSource;
            /** 经销商 */
            private String custCode;
            /** 经销商名称 */
            private String custName;
            /** 经销商联系人 */
            private String custLinkman;
            /** 经销商联系人电话 */
            private String custLinkPhone;
            /** 安装商 */
            private String installer;
            /** 安装商联系人 */
            private String installerLinkman;
            /** 安装商联系人电话 */
            private String installerLinkmanPhone;
            /** 甲方全称 */
            private String partyName;
            /** 甲方联系人 */
            private String partyLinkman;
            /** 甲方联系人电话 */
            private String partLinkmanPhone;
            /** 售后经理 */
            private String hpManage;
            /** 监理 */
            private String supervisor;
            /** 监理类型 */
            private String supervisorType;
            /** 工程设备提货金额(万) */
            private String receiveMoney;
            /** 现工程状态 */
            private String projectStatus;
            /** 开工时间 */
            private Date startDate;
            /** 是否有效 */
            private String beValid;
            /** 是否首次安装 */
            private String firstInstall;
            /** 是否有集控 */
            private String subMaster;
            /** 调试结束时间 */
            private Date endDate;
            /** 是否总部录入 */
            private String beHq;
            /** 是否异地安装 */
            private String beOutPlace;
            /** 是否结算 */
            private String beSettlement;
            /** 结算记录 */
            private String settlementMsg;
            /** 分类 */
            private String type;
            /** 分类名称 */
            private String typeName;
            /** 单程距离 */
            private String oneWay;
            /** 单程路程费用 */
            private String oneWayCost;
            /** 监理费用 */
            private String supervisorCost;
            /** 结算资料上传 */
            private String settlementFile;
            /** 工程完工资料 */
            private String completeFile;
            /** 地图截图 */
            private String mapFile;
            /** 多联机工程档案 */
            private String projectFile;
            /** 备注 */
            private String memo;
            /** 审核状态 */
            private String approveStatus;
            /** 现项目状态 */
            private String projectStatusDesc;
            /** 信息来源描述 */
            private String infoSourceDesc;
            /** 中心描述 */
            private String centerName;
            /** 结算资料上传名称 */
            private String settlementFileName;
            /** 工程完工资料名称 */
            private String completeFileName;
            /** 地图截图名称 */
            private String mapFileName;
            /** 多联机工程档案名称 */
            private String projectFileName;
            }
        ]
    },
    "dataMap": null,
    "loginUrl": null
}
```
