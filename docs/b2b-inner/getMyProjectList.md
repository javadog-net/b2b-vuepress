<!--
 * @Description: In User Settings Edit
 * @Author: hdx
 * @Date: 2020-02-04 14:20:15
 * @LastEditors  : hdx
 * @LastEditTime : 2020-02-13 13:35:59
 -->
## 10.提供企业购中台我的商机-商机报备

### 10.1 地址
>  baseUrl + /api/customer/getMyProjectList

### 10.2 请求方式
> GET

### 10.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| pageNo  | 当前页数 | 是 |- |
| pageSize  | 当前页数量 | 是 |- |
| contractorCode  | 经销商编码 | 是 |-|
| projectName  | 项目名称 | 否 |- |
| funnelStage  | 项目节点 | 否 |- |
| contractApprovalStatus  | 合同审批状态 | 否 |- |
| createDateStart  | 创建时间 | 否 |- |
| createDateEnd  | 结束时间 | 否 |- |


### 10.4 返回值 

#### 10.4.1  成功返回值
```json 
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "count": 1,
    "data": [
        {
           "processStatus": "APPROVAL", //审批状态
            "industryHomeCategory": "", //所属产业编码
            "domainType": "DKH", //产业编码
            "projectManagerName": "刘志坤", //项目负责人
            "basePostCode": "JCG-1548831221612c335601bfa684f4695b7765c5d614df6", //基础岗code
            "ourContractSubjectName": "", //我方签约主体名称
            "currentOperator": "黄智勇", //当前审核人
            "projectSource": "GN_PRJ_12", //项目来源
            "contractorName": "山东金都百货股份有限公司", //承接商名称
            "projectStatusName": "订单履约中", //审批状态名称
            "basePostId": "1548831221612c335601bfa684f4695b7765c5d614df6", //基础岗id
            "projectManagerCode": "01415489",
            "projectCode": "P12A0220A0050-Z", //项目编号
            "beSendGpms": "0", //是否传入GPMS(0：否，1：是，2：已传入)
            "adverseContractSubjectCode": "", //对方签约主体编码
            "contractName": "", //合同名称
            "id": "157810490385077a62d90f0174160900f32910f5fa64f",
            "domainModelName": "客单",
            "beWinBid": "1",
            "estimatedTimeBid": "2020-01-15 00:00:00", //预计投标时间
            "funnelStageName": "工程版",
            "basePostName": "1548831221612c335601bfa684f4695b7765c5d614df6",
            "ourContractSubjectCode": "",
            "beTurnStraightGuest": "",
            "center": "12A02", //中心编码
            "contractorCode": "8700000983",
            "funnelStage": "ORDER",
            "projectSourceName": "个人获取",
            "industryCategoryName": "", //所属产业名称
            "ourContractSubjectId": "",
            "projectStatus": "EXECUTORY_PROJECT_STATUS", //项目状态编码
            "domainModel": "CUSTOMER_ORDER", //漏斗模式（直客单）
            "createdDate": "2020-01-04 10:28:23", //创建时间
            "adverseContractSubjectName": "",
            "money": 80.00, //金额万元
            "handoverCount": 0,
            "adverseContractSubjectId": "",
            "currentNodeId": "1", //当前审核节点
            "contractId": "15781056472044474d639f3f04284b9c5d02ab872f094",
            "projectManagerId": "A00017",
            "projectName": "中国石油大学公寓彩电(长沙黄坤)", //项目名称
            "contractCode": "",
            "operateDate": "2020-01-04 10:40:54", //审核时间
            "beSendGpmsFlag": "否",
            "centerName": "青岛",
            "firstCompanyName": "浙江德尚韵兴医疗科技有限公司", // 甲方公司名称
            "firstCompanyOrgCode": "913301050709760410", // 统一社会信用代码
            "cancelReason": "sadasds", // 关闭原因
            "cancelTime": "2019-01-01 13:10:00", // 关闭时间
            "loseReason": "丢标测试", // 丢标原因
            "winComp": "格力" //中标品牌
            //200206 新增 提供给履约完成 字段
            "gridName": "山东省青岛市黄岛区", //网格
            "gridCenterName": "黄岛网格小微", //网格小微
            "projectFinishDate": "2020-01-04 17:33:16" //完成时间
        }
    ]
}
```
