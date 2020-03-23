## 1.获取企业购自定义产品相关信息

### 1.1 地址
> baseUrl + /api/process/b2b/getMsgProduct

### 1.2 请求方式
> GET

### 1.3 参数
空
### 1.4 返回值

#### 1.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "code": "0",
                "name": "中央空调",
                "transCode": "BA"
            },
            {
                "code": "1",
                "name": "商用空调",
                "transCode": "BB"
            },
            {
                "code": "2",
                "name": "家用空调",
                "transCode": "CA"
            },
            {
                "code": "3",
                "name": "电/燃气热水器",
                "transCode": "FA,FB"
            },
            {
                "code": "4",
                "name": "太阳能",
                "transCode": "FC"
            },
            {
                "code": "5",
                "name": "商用电脑",
                "transCode": "BB"
            },
            {
                "code": "6",
                "name": "冰箱",
                "transCode": "AA"
            },
            {
                "code": "7",
                "name": "洗衣机",
                "transCode": "DA,DB"
            },
            {
                "code": "8",
                "name": "厨房电器",
                "transCode": "GA,GB,GC,GD,GE,GF"
            },
            {
                "code": "9",
                "name": "医疗设备",
                "transCode": "NA"
            },
            {
                "code": "10",
                "name": "商用冷柜",
                "transCode": "AB"
            },
            {
                "code": "11",
                "name": "彩电",
                "transCode": "EA,EB"
            },
            {
                "code": "12",
                "name": "智能家居/安防",
                "transCode": "JJ"
            },
            {
                "code": "13",
                "name": "社区安防",
                "transCode": "JJ"
            },
            {
                "code": "14",
                "name": "军品定制",
                "transCode": "RA"
            },
            {
                "code": "15",
                "name": "小家电",
                "transCode": "LE"
            },
            {
                "code": "16",
                "name": "商用净水",
                "transCode": "LD,LF,LH,LS,LZ"
            }
        ]
    }
}
```