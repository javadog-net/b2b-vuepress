## 27 行业总监根据中心获得中心下的经销商列表

### 27.1 地址
> /api/process/app/directorSelectFranchiserByOrgid

### 27.2 请求方式
> POST

### 27.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orgId  | 工贸编码 | 是 | 如12A02,如果不传则查寻所有符合要求经销商


### 27.4 返回值

#### 27.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "b5ca9a06442145f7a6e449988f967f86",
                "createDate": "2019-05-20 15:46:32",
                "updateDate": "2019-10-25 09:02:59",
                "companyCode": "8800132922",
                "companyName": "青岛海源合商贸有限公司",
                "contacts": "郭志远",
                "tel": "0532-66765123",
                "mobile": "13235328199",
                "email": "NULL",
                "zipCode": "266000",
                "areaInfo": "NULL",
                "detailAddress": "青岛市",
                "channelName": "直采专区",
                "taxCode": "9137021358782864XC",
                "gmId": "12A02",
                "undertakeArea": "青岛市",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "中央空调;商用空调;家用空调;电/燃气热水器;太阳能;洗衣机;冰箱;厨房电器;商用冷柜;彩电;楼宇对讲;社区安防;小家电"
            }
        ]
    }
}
```
