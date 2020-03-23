## 20 经销商-零售单上传见证性材料(只图片上传接口，返回对应图片url)

### 20.1 地址
> /api/process/app/dealerZykcUploadImg

### 20.2 请求方式
> POST

### 20.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| dealerCode  | 经销商编码 | 是 | -
| file  | 见证性材料| 是| -

### 20.4 返回值

#### 20.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "10db5ed05afa4ba68c6e769a334d468c",
            "attName": "8127d2a727f86da719a427051ec8d3e.jpg",
            "attMd5": "eeb45843ae739599d2c544ddec8ca2cb",
            "attUrl": "/userfiles/sys/8800132922/files/201910/60ff77a3-f23f-4268-9b18-2629101e778c.jpg",
            "attExt": "jpg",
            "attSize": 111010
        }
    }
}
```

#### 20.4.2 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "/dealerZykcUploadImg- 经销商-零售单上传见证性材料(只图片上传接口，返回对应图片url)异常,原因:Index: 0, Size: 0"
}
```
