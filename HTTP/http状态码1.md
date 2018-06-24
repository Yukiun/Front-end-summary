- 200 & OK: 请求成功；

- 204 & No Content: 请求处理成功，但没有资源可以返回；

- 206 & Partial Content: 对资源某一部分进行请求(比如对于只加载了一般的图片剩余部分的请求)；

- 301 & Move Permanently: 永久性重定向；

- 302 & Found： 临时性重定向；

- 303 & See Other: 请求资源存在另一个URI，应使用get方法请求；

- 304 & Not Modified: 服务器判断本地缓存未更新，可以直接使用本地的缓存；

- 307 & Temporary Redirect: 临时重定向；

- 400 & Bad Request: 请求报文存在语法错误；

- 401 & Unauthorized: 请求需要通过HTTP认证；

- 403 & Forbidden: 请求资源被服务器拒绝，访问权限的问题；

- 404 & Not Found: 服务器上没有请求的资源；

- 500 & Internal Server Error: 服务器执行请求时出现错误；

- 502 & Bad Gateway: 错误的网关；

- 503 & Service Unavailable: 服务器超载或正在维护，无法处理请求；

- 504 & Gateway timeout: 网关超时；