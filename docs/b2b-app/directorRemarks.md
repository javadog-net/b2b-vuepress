## 5.总监-提交备注

### 5.1 地址
> /api/process/app/directorRemarks

### 5.2 请求方式
> POST

### 5.3 参数

|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| msgId  | 需求id | 是 | -
| remarks  | 备注内容 | 是 | -
| remarksperson  | 备注人| 是 | -

### 5.4 返回值

#### 5.4.1 成功返回值

```json
{
    "success": true,
    "errorCode": "-1",
    "msg": "操作成功"
}
```

#### 5.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "此需求不存在"
}
```

```json
{
    "success": false,
    "errorCode": "999",
    "msg": "总监备注不能为空"
}
```


```json
{
    "success": false,
    "errorCode": "999",
    "msg": "总监备注人不能为空"
}
```