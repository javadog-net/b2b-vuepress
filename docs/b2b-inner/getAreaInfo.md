## 2.获取省市区信息

### 2.1 地址
>  baseUrl + /api/process/app/getAreaInfo

### 2.2 请求方式
> GET

### 2.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| areaId  | 地区id | 否 |查词地区下子集,若不填areaId则查询全部省份 |



### 2.4 返回值

#### 2.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "110000000000",
                "parentId": "0",
                "cityName": "北京市"
            },
            {
                "id": "120000000000",
                "parentId": "0",
                "cityName": "天津市"
            },
            {
                "id": "130000000000",
                "parentId": "0",
                "cityName": "河北省"
            },
            {
                "id": "140000000000",
                "parentId": "0",
                "cityName": "山西省"
            },
            {
                "id": "150000000000",
                "parentId": "0",
                "cityName": "内蒙古自治区"
            },
            {
                "id": "210000000000",
                "parentId": "0",
                "cityName": "辽宁省"
            },
            {
                "id": "220000000000",
                "parentId": "0",
                "cityName": "吉林省"
            },
            {
                "id": "230000000000",
                "parentId": "0",
                "cityName": "黑龙江省"
            },
            {
                "id": "310000000000",
                "parentId": "0",
                "cityName": "上海市"
            },
            {
                "id": "320000000000",
                "parentId": "0",
                "cityName": "江苏省"
            },
            {
                "id": "330000000000",
                "parentId": "0",
                "cityName": "浙江省"
            },
            {
                "id": "340000000000",
                "parentId": "0",
                "cityName": "安徽省"
            },
            {
                "id": "350000000000",
                "parentId": "0",
                "cityName": "福建省"
            },
            {
                "id": "360000000000",
                "parentId": "0",
                "cityName": "江西省"
            },
            {
                "id": "370000000000",
                "parentId": "0",
                "cityName": "山东省"
            },
            {
                "id": "410000000000",
                "parentId": "0",
                "cityName": "河南省"
            },
            {
                "id": "420000000000",
                "parentId": "0",
                "cityName": "湖北省"
            },
            {
                "id": "430000000000",
                "parentId": "0",
                "cityName": "湖南省"
            },
            {
                "id": "440000000000",
                "parentId": "0",
                "cityName": "广东省"
            },
            {
                "id": "450000000000",
                "parentId": "0",
                "cityName": "广西壮族自治区"
            },
            {
                "id": "460000000000",
                "parentId": "0",
                "cityName": "海南省"
            },
            {
                "id": "500000000000",
                "parentId": "0",
                "cityName": "重庆市"
            },
            {
                "id": "510000000000",
                "parentId": "0",
                "cityName": "四川省"
            },
            {
                "id": "520000000000",
                "parentId": "0",
                "cityName": "贵州省"
            },
            {
                "id": "530000000000",
                "parentId": "0",
                "cityName": "云南省"
            },
            {
                "id": "540000000000",
                "parentId": "0",
                "cityName": "西藏自治区"
            },
            {
                "id": "610000000000",
                "parentId": "0",
                "cityName": "陕西省"
            },
            {
                "id": "620000000000",
                "parentId": "0",
                "cityName": "甘肃省"
            },
            {
                "id": "630000000000",
                "parentId": "0",
                "cityName": "青海省"
            },
            {
                "id": "640000000000",
                "parentId": "0",
                "cityName": "宁夏回族自治区"
            },
            {
                "id": "650000000000",
                "parentId": "0",
                "cityName": "新疆维吾尔自治区"
            }
        ]
    }
}
```
