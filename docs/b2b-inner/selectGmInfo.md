## 4.获取全国工贸信息

### 4.1 地址
>  baseUrl + /api/process/app/selectGmInfo

### 4.2 请求方式
> GET

### 4.3 参数

无

### 4.4 返回值

#### 4.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": [
            {
                "id": "1",
                "remarks": "",
                "gmCode": "GFHEB",
                "branchCode": "12503",
                "gmName": "哈尔滨中心",
                "gmDepart": "东北"
            },
            {
                "id": "2",
                "remarks": "",
                "gmCode": "GFHK",
                "branchCode": "12205",
                "gmName": "海口中心",
                "gmDepart": "华南"
            },
            {
                "id": "3",
                "remarks": "",
                "gmCode": "GFHF",
                "branchCode": "12901",
                "gmName": "合肥中心",
                "gmDepart": "中南"
            },
            {
                "id": "4",
                "remarks": "",
                "gmCode": "GFKM",
                "branchCode": "12603",
                "gmName": "昆明中心",
                "gmDepart": "西南"
            },
            {
                "id": "5",
                "remarks": "",
                "gmCode": "GFLZ",
                "branchCode": "12703",
                "gmName": "兰州中心",
                "gmDepart": "西北"
            },
            {
                "id": "6",
                "remarks": "",
                "gmCode": "GFCD",
                "branchCode": "12601",
                "gmName": "成都中心",
                "gmDepart": "西南"
            },
            {
                "id": "7",
                "remarks": "",
                "gmCode": "GFNC",
                "branchCode": "12902",
                "gmName": "南昌中心",
                "gmDepart": "中南"
            },
            {
                "id": "8",
                "remarks": "",
                "gmCode": "GFNN",
                "branchCode": "12206",
                "gmName": "南宁中心",
                "gmDepart": "华南"
            },
            {
                "id": "9",
                "remarks": "",
                "gmCode": "GFHHHT",
                "branchCode": "12106",
                "gmName": "内蒙中心",
                "gmDepart": "华北"
            },
            {
                "id": "10",
                "remarks": "",
                "gmCode": "GFSH",
                "branchCode": "12D01",
                "gmName": "上海中心",
                "gmDepart": "华东"
            },
            {
                "id": "11",
                "remarks": "",
                "gmCode": "GFSY",
                "branchCode": "12501",
                "gmName": "沈阳中心",
                "gmDepart": "东北"
            },
            {
                "id": "12",
                "remarks": "",
                "gmCode": "GFXF",
                "branchCode": "12402",
                "gmName": "襄樊中心",
                "gmDepart": "中南"
            },
            {
                "id": "13",
                "remarks": "",
                "gmCode": "GFXA",
                "branchCode": "12701",
                "gmName": "西安中心",
                "gmDepart": "西北"
            },
            {
                "id": "14",
                "remarks": "",
                "gmCode": "GFYT",
                "branchCode": "12A01",
                "gmName": "烟台中心",
                "gmDepart": "山东"
            },
            {
                "id": "15",
                "remarks": "",
                "gmCode": "GFYC",
                "branchCode": "12704",
                "gmName": "银川中心",
                "gmDepart": "西北"
            },
            {
                "id": "16",
                "remarks": "",
                "gmCode": "GFCC",
                "branchCode": "12502",
                "gmName": "长春中心",
                "gmDepart": "东北"
            },
            {
                "id": "17",
                "remarks": "",
                "gmCode": "GFZZ",
                "branchCode": "12E01",
                "gmName": "郑州中心",
                "gmDepart": "中南"
            },
            {
                "id": "18",
                "remarks": "",
                "gmCode": "GFCQ",
                "branchCode": "12602",
                "gmName": "重庆中心",
                "gmDepart": "西南"
            },
            {
                "id": "19",
                "remarks": "",
                "gmCode": "GFGZ",
                "branchCode": "12201",
                "gmName": "广州中心",
                "gmDepart": "华南"
            },
            {
                "id": "20",
                "remarks": "",
                "gmCode": "GFWH",
                "branchCode": "12401",
                "gmName": "武汉中心",
                "gmDepart": "中南"
            },
            {
                "id": "21",
                "remarks": "",
                "gmCode": "GFTY",
                "branchCode": "12002",
                "gmName": "太原中心",
                "gmDepart": "华北"
            },
            {
                "id": "22",
                "remarks": "",
                "gmCode": "GFTS",
                "branchCode": "12105",
                "gmName": "唐山中心",
                "gmDepart": "华北"
            },
            {
                "id": "23",
                "remarks": "",
                "gmCode": "GFWX",
                "branchCode": "12305",
                "gmName": "无锡中心",
                "gmDepart": "华东"
            },
            {
                "id": "24",
                "remarks": "",
                "gmCode": "GFXN",
                "branchCode": "12705",
                "gmName": "西宁中心",
                "gmDepart": "西北"
            },
            {
                "id": "25",
                "remarks": "",
                "gmCode": "GFXJ",
                "branchCode": "12702",
                "gmName": "新疆中心",
                "gmDepart": "西北"
            },
            {
                "id": "26",
                "remarks": "",
                "gmCode": "GFXZ",
                "branchCode": "12805",
                "gmName": "徐州中心",
                "gmDepart": "山东"
            },
            {
                "id": "27",
                "remarks": "",
                "gmCode": "GFCS",
                "branchCode": "12403",
                "gmName": "长沙中心",
                "gmDepart": "中南"
            },
            {
                "id": "28",
                "remarks": "",
                "gmCode": "GFHZ",
                "branchCode": "12303",
                "gmName": "杭州中心",
                "gmDepart": "华东"
            },
            {
                "id": "29",
                "remarks": "",
                "gmCode": "GFJN",
                "branchCode": "12802",
                "gmName": "济南中心",
                "gmDepart": "山东"
            },
            {
                "id": "30",
                "remarks": "",
                "gmCode": "GFJIN",
                "branchCode": "12803",
                "gmName": "济宁中心",
                "gmDepart": "山东"
            },
            {
                "id": "31",
                "remarks": "",
                "gmCode": "GFJZ",
                "branchCode": "12505",
                "gmName": "锦州中心",
                "gmDepart": "东北"
            },
            {
                "id": "32",
                "remarks": "",
                "gmCode": "GFNJ",
                "branchCode": "12302",
                "gmName": "南京中心",
                "gmDepart": "华东"
            },
            {
                "id": "33",
                "remarks": "",
                "gmCode": "GFNB",
                "branchCode": "12306",
                "gmName": "宁波中心",
                "gmDepart": "华东"
            },
            {
                "id": "34",
                "remarks": "",
                "gmCode": "GFQD",
                "branchCode": "12A02",
                "gmName": "青岛中心",
                "gmDepart": "山东"
            },
            {
                "id": "35",
                "remarks": "",
                "gmCode": "GFXM",
                "branchCode": "12B02",
                "gmName": "厦门中心",
                "gmDepart": "华南"
            },
            {
                "id": "36",
                "remarks": "",
                "gmCode": "GFSZ",
                "branchCode": "12204",
                "gmName": "深圳中心",
                "gmDepart": "华南"
            },
            {
                "id": "37",
                "remarks": "",
                "gmCode": "GFSJZ",
                "branchCode": "12001",
                "gmName": "石家庄中心",
                "gmDepart": "华北"
            },
            {
                "id": "38",
                "remarks": "",
                "gmCode": "GFDL",
                "branchCode": "12504",
                "gmName": "大连中心",
                "gmDepart": "东北"
            },
            {
                "id": "39",
                "remarks": "",
                "gmCode": "GFTJ",
                "branchCode": "12102",
                "gmName": "天津中心",
                "gmDepart": "华北"
            },
            {
                "id": "40",
                "remarks": "",
                "gmCode": "GFBJ",
                "branchCode": "12C01",
                "gmName": "北京中心",
                "gmDepart": "华北"
            },
            {
                "id": "41",
                "remarks": "",
                "gmCode": "GFFZ",
                "branchCode": "12B01",
                "gmName": "福州中心",
                "gmDepart": "华南"
            },
            {
                "id": "42",
                "remarks": "",
                "gmCode": "GFGY",
                "branchCode": "12604",
                "gmName": "贵阳中心",
                "gmDepart": "西南"
            }
        ]
    }
}
```