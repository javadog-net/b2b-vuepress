## 10.总监-获取经销商详细信息

### 10.1 地址
> /api/process/app/selectDealerByOrgid

### 10.2 请求方式
> GET

### 10.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| orgid  | 工贸编码 | 是 | -

### 10.4 返回值

#### 10.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "1629",
                "createDate": "2018-06-10 10:19:14",
                "updateDate": "2019-07-05 15:06:42",
                "companyCode": "8800016151",
                "companyName": "青岛鸿顺瑞商贸有限公司",
                "contacts": "胡悦鑫",
                "mobile": "18669719112",
                "detailAddress": "青岛市松江路7号",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "电/燃气热水器,商用净水"
            },
            {
                "id": "164",
                "createDate": "2017-10-23 10:29:58",
                "updateDate": "2018-07-19 14:28:47",
                "companyCode": "8700043143",
                "companyName": "青岛圣之力电气制冷工程有限公司",
                "contacts": "范乃远",
                "mobile": "15066292999",
                "detailAddress": "青岛市市北区云溪路40号",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "allowDispatch": "1"
            },
            {
                "id": "165",
                "createDate": "2017-10-23 10:32:28",
                "updateDate": "2019-07-18 10:46:12",
                "companyCode": "8800132922",
                "companyName": "青岛海源合商贸有限公司",
                "contacts": "李诚",
                "mobile": "13235328199",
                "detailAddress": "山东省青岛市李沧区308国道639号",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "中央空调,商用空调,家用空调,电/燃气热水器,太阳能,洗衣机,冰箱,厨房电器,商用冷柜,彩电,小家电"
            },
            {
                "id": "166",
                "createDate": "2017-09-07 18:37:59",
                "updateDate": "2018-10-15 17:00:14",
                "companyCode": "8800101954",
                "companyName": "青岛鸿程永泰商贸有限公司",
                "contacts": "王伟",
                "mobile": "13589311033",
                "detailAddress": "青岛市李沧区青山路616号1单元202",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "家用空调,电/燃气热水器,太阳能,洗衣机,冰箱,厨房电器,商用冷柜,彩电,楼宇对讲,社区安防,小家电"
            },
            {
                "id": "167",
                "createDate": "2018-05-08 10:42:52",
                "updateDate": "2018-06-12 14:06:36",
                "companyCode": "8700000472",
                "companyName": "青岛高和电器有限公司",
                "contacts": "李梅",
                "mobile": "15853280580",
                "detailAddress": "青岛市宁夏路249号",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "厨房电器"
            },
            {
                "id": "168",
                "createDate": "2017-09-14 15:24:15",
                "updateDate": "2018-07-19 14:28:36",
                "companyCode": "8700090831",
                "companyName": "青岛嘉昶恒利商贸有限公司",
                "contacts": "单连洪",
                "mobile": "13356897628",
                "detailAddress": "青岛市四方区杭州路9号8号网点-1",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "电/燃气热水器,太阳能,洗衣机,厨房电器"
            },
            {
                "id": "1798",
                "createDate": "2019-07-05 15:12:39",
                "updateDate": "2019-07-17 09:59:28",
                "companyCode": "8800262505",
                "companyName": "山东净天蓝空调设备有限公司",
                "contacts": "徐常宝",
                "mobile": "15963823999",
                "detailAddress": "1",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "潍坊市,日照市",
                "underProductIstotal": "0",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "中央空调"
            },
            {
                "id": "1823",
                "createDate": "2019-07-17 10:01:36",
                "companyCode": "8800264199",
                "companyName": "山东皓博工程设备有限公司",
                "contacts": "杨继生",
                "mobile": "18605360539",
                "detailAddress": "潍坊市高新区潍县中路福寿街北150米路西",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "潍坊市,日照市",
                "underProductIstotal": "0",
                "gmName": "青岛工贸",
                "allowDispatch": "1",
                "underProduct": "商用空调"
            },
            {
                "id": "329",
                "createDate": "2017-09-07 18:37:37",
                "updateDate": "2018-07-19 14:28:29",
                "companyCode": "8800161149",
                "companyName": "青岛洲际通商贸有限公司",
                "contacts": "黄海龙",
                "mobile": "13884973816",
                "detailAddress": "青岛市市北区四流南路133号甲海尔专卖店",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "score": "85",
                "allowDispatch": "1"
            },
            {
                "id": "330",
                "createDate": "2017-09-07 18:37:25",
                "updateDate": "2018-06-12 14:06:20",
                "companyCode": "8800203405",
                "companyName": "青岛贵广通建设工程有限公司",
                "contacts": "胡继荣",
                "mobile": "18363997055",
                "detailAddress": "青岛市崂山区香港东路295号9号楼1单元602户",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "score": "80",
                "allowDispatch": "1"
            },
            {
                "id": "413",
                "createDate": "2018-04-08 18:29:05",
                "updateDate": "2018-05-23 14:19:25",
                "companyCode": "8700000971",
                "companyName": "青岛凯特电器有限公司",
                "contacts": "王",
                "mobile": "13165080767",
                "detailAddress": "青岛",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "underProductIstotal": "0",
                "gmName": "青岛工贸"
            },
            {
                "id": "461",
                "createDate": "2017-09-14 15:23:48",
                "updateDate": "2018-05-08 10:42:52",
                "companyCode": "8700000567",
                "companyName": "青岛海腾达商贸有限公司",
                "contacts": "傅波",
                "mobile": "18653266583",
                "detailAddress": "青岛市市北区镇江路41号",
                "channelName": "1",
                "taxCode": "",
                "gmId": "12A02",
                "undertakeArea": "青岛市,潍坊市,日照市",
                "underProductIstotal": "1",
                "gmName": "青岛工贸",
                "score": "75",
                "underProduct": "家用空调,商用电脑,楼宇对讲,社区安防,小家电,商用净水"
            }
        ]
    }
}
```
#### 10.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "所属工贸不能为空"
}
```