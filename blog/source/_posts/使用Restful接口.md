#使用Restful接口
通常约定使用JSON数据格式进行请求响应,发出的请求是只需将Header中的"Content-Type"修改为"application/json"即可.

##使用AFN需要怎么做

```
AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];

// 设置请求格式为 JSON 类型
manager.requestSerializer = [AFJSONRequestSerializer serializer];
```
搞定!

