## 7.总监-派单

### 7.1 地址
> /api/process/app/directorDispatch

### 7.2 请求方式
> POST

### 7.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| directorNo  | 总监账号 | 是 | -
| msgid  | 需求id | 是 | -
| dealerCode  | 经销商编码| 是 | -
| dispadesc  | 派单原因 | 是 | -
| managerNo  | 海尔接口人编码 | 是 | -
| managerName  | 海尔接口人名称| 是 | -

### 7.4 返回值

#### 7.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "总监派单成功"
}
```
#### 7.4.1 失败返回值

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "系统用户不存在"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "经销商编码不能为空"
}
```
