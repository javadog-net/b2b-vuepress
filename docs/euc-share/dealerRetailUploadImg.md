## 11.提供大客户app-经销商上传euc零售见证性材料图片(只图片上传接口，返回对应图片url)

### 11.1 地址
>  baseUrl + /api/eucapp/iteration/dealerRetailUploadImg

### 11.2 请求方式
> POST

### 11.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| file  | 上传文件 | 是 |- |
| dealerCode  | 经销商编码| 是 |- |


### 11.4 返回值

#### 11.4.1  成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "92ce7e5708ed4ecdb577657c99e42d16",
            "createDate": "2020-03-16 14:29:45",
            "updateDate": "2020-03-16 14:29:45",
            "attName": "javadog-bone.jpg",
            "attMd5": "a08ff1c757354bf61ce78924cfc92594",
            "attUrl": "/userfiles/sys/8888888801/files/202003/b059388a-05ca-4cc1-9442-bb7488cb3dca.jpg",
            "attExt": "jpg",
            "attSize": 28649
        }
    }
}
```

#### 11.4.2  失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "/dealerRetailUploadImg- 经销商-零售单上传见证性材料(只图片上传接口，返回对应图片url)异常,原因:Index: 0, Size: 0"
}
```