## 6.总监-审核

### 6.1 地址
> /api/process/app/directorApproval

### 6.2 请求方式
> POST

### 6.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| id  | 需求id | 是 | -
| proGroup  | 产品组 | 是 | -
| connectName  | 联系人| 是 | -
| companyName  | 公司名称 | 是 | -
| mobile  | 联系电话 | 是 | -
| provinceId  | 省份id| 是 | -
| cityId  | 城市id | 是 | -
| districId  | 地区id | 是 | -
| provinceName  | 山东省| 是 | -
| cityName  | 青岛市 | 是 | -
| districName  | 李沧区 | 是 | -
| managerNo  | 负责人编号| 是 | -
| managerName  | 负责人名称| 是 | -
| directorNo  | 总监账号| 是 | -
| appIspass  | 总监审核结果| 是 | 1通过 0关闭
| appCancleReason  | 总监废弃原因| 否 | 当总监审核结果为拒绝时填写
| appDescp  | 总监废弃详细描述| 否 | 当总监审核结果为拒绝时填写

### 6.4 返回值

#### 6.4.1 成功返回值
```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 6.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此流程节点已变更，请核对后再处理"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "产品组不能为空"
}
```