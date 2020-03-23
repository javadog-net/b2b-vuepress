## 9.总监-派单拉取经销商列表

### 9.1 地址
> /api/process/app/directorPullListDealer

### 9.2 请求方式
> POST

### 9.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| directorNo  | 总监编号 | 是 | -
| orgid  | 工贸编码| 是| -
| currPage  | 当前页 | 否 | -
| pageSize  | 页数 | 否 | -

### 9.4 返回值

#### 9.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "pageNo": 1,
            "pageSize": 10,
            "count": 2,
            "list": [
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
                }
            ],
            "html": "<div class=\"fixed-table-pagination\" style=\"display: block;\"><div class=\"pull-left pagination-detail\"><span class=\"pagination-info\">显示第 1 到第 2 条记录，总共 2 条记录</span><span class=\"page-list\">每页显示 <span class=\"btn-group dropup\"><button type=\"button\" class=\"btn btn-default  btn-outline dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><span class=\"page-size\">10</span> <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" role=\"menu\"><li class=\"active\"><a href=\"javascript:page(1,10,'');\">10</a></li><li class=\"\"><a href=\"javascript:page(1,25,'');\">25</a></li><li class=\"\"><a href=\"javascript:page(1,50,'');\">50</a></li><li class=\"\"><a href=\"javascript:page(1,100,'');\">100</a></li></ul></span> 条记录</span></div><div class=\"pull-right pagination-roll\"><ul class=\"pagination pagination-outline\"><li class=\"paginate_button previous disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-double-left\"></i></a></li>\n<li class=\"paginate_button previous disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-left\"></i></a></li>\n<li class=\"paginate_button active\"><a href=\"javascript:\">1</a></li>\n<li class=\"paginate_button next disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-right\"></i></a></li>\n<li class=\"paginate_button next disabled\"><a href=\"javascript:\"><i class=\"fa fa-angle-double-right\"></i></a></li>\n</ul></div></div>",
            "firstResult": 0,
            "maxResults": 10
        }
    }
}
```
#### 9.4.1 成功返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "需求id不能为空"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "系统用户不存在"
}
```