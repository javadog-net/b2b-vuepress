## 4.大数据共享云平台免登陆认证接口-B2B全流程订单状态查询
> 通过订单编号查询RRS大数据平台物流状态信息，直接用接口返回的url打开页面即可

### 4.1 地址
>  baseUrl + /api/customer/rrsLogin

### 4.2 请求方式
> POST

### 4.3 参数

param


|  参数   | 注释  |是否必填  |备注  |
|  ----  | ----  |----  |----  |
| ordedrNo  | 订单编码 | 是 |测试可以用2000004319这个订单号有数据|


### 4.4 返回值 

#### 4.4.1  成功返回值
```json 
{
    "success": true,
    "errorCode": "-1",
    "msg": "https://icloud.rrswl.com/user/rrsLogin?systemid=001&time=20200222141055&token=f80b5f1064c63b4241ec0918fbec41dc&userId=b2bHaier&username=b2bHaier&bstkd=8593496914&type=1"
}
```

#### 4.4.2 失败返回值
```json
{
    "success": false,
    "errorCode": "999",
    "msg": "当前订单不存在,请核对后再试"
}
```
