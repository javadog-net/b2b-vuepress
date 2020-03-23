## 23 经销商-app物流签收接口(上传图片返回上传信息)

### 23.1 地址
> /api/process/app/dealerSignUpload

### 23.2 请求方式
> POST

### 23.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| file  | 图片文件 | 是 | MultipartFile类型
| dealerCode  | 经销商编码 | 是 | String类型


### 23.4 返回值

#### 23.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功",
    "body": {
        "result": {
            "id": "dc362164df7f45f9ba54dd089f7e64c8",
            "createDate": "2019-12-02 09:52:23",
            "updateDate": "2019-12-02 09:52:23",
            "attName": "TIM图片20191129200606.png",
            "attMd5": "3000a3dd5a0026889657e3921bec8b65",
            "attUrl": "/userfiles/sys/8800002395/files/201912/4c5e7657-12d9-4e28-b831-5221fe44059d.png",
            "attExt": "png",
            "attSize": 31748
        }
    }
}
```