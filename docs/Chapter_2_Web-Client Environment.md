## 第一部分 概论

### 第2章 客户端环境 WEB-Client Environment

- DNS/HTTP/OSI
- 浏览器运作机制
  - [浏览器的工作原理](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
  - [Chrome浏览器概览](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
  - [浏览时发生了什么？](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
  - [渲染进程的内部工作原理](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
  - [compositor是如何来提高交互性能的？](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
  - [完整的页面生命周期 API 介绍](https://developers.google.com/web/updates/2018/07/page-lifecycle-api)
  - [四个新的观察者：Intersection / Mutation / Resize / Performance (Observer)](https://www.zeolearn.com/magazine/different-types-of-observers-supported-by-modern-browsers)
  - [渲染引擎工作方式及优化建议](https://blog.sessionstack.com/how-javascript-works-the-rendering-engine-and-tips-to-optimize-its-performance-7b95553baeda)
  - [浏览器内核渲染：重建引擎](https://juejin.im/post/5bbaa7da6fb9a05d3761aafe)[跨域解决方案汇总](https://www.jianshu.com/p/438183ddcea8)
- 不同宿主环境下的JS
  - [Mixed Environment JavaScript](

---

#### DNS/HTTP/OSI

##### DNS
域名的层级结构：三级域名.次级域名.顶级域名.根域名,即host.sld.tld.root:
 - .root 十三组根域名服务器 A.ROOT-SERVERS.NET~M.ROOT-SERVERS.NET。
 - .tld 十三组顶级域名服务器 A.GTLD-SERVERS.NET~M.GTLD-SERVERS.NET。
 - .sld 授权次级域名服务器 为各大域名代理商的服务器，如Tencent/AWS/ALIBABA等。
 - .host 三级域名是从次级域名服务器获取的记录中采集的信息。

所以DNS的完整流程是：
1. 浏览器读DNS记录缓存，过期或无效则进入步骤2
2. 读取客户端的host配置文件，若不存在相关记录则访问客户端网络配置的DNS主机（往往是一个内网DNS代理），该请求到达该主机后经过重重代理到达真实的DNS-Server，DNS-Server读DNS记录缓存，过期或无效则进入步骤3
3. DNS-Server读取次级域名服务器缓存，若没过期则向次级域名服务器请求DNS记录并返回Client，过期则进入步骤4
4. DNS-Server读取顶级域名服务器缓存，若没过期则向顶级域名服务器请求次级域名服务器ip并重复步骤3，若顶级域名服务器缓存过期，则进入步骤5
5. DNS-Server向根域名服务器请求顶级域名服务器ip，并重复步骤4。

域名与IP之间的对应关系，称为"记录"(record)。根据使用场景，"记录"可以分成不同的类型(type)，前面已经看到了有A记录和NS记录。常见的DNS记录类型如下：
1. A：地址记录(Address)，返回域名指向的IP地址。
2. NS：域名服务器记录(Name Server)，返回保存下一级域名信息的服务器地址。该记录只能设置为域名，不能设置为IP地址。
3. MX：邮件记录(Mail eXchange)，返回接收电子邮件的服务器地址。
4. CNAME：规范名称记录(Canonical Name)，返回另一个域名，即当前查询的域名是另一个域名的跳转，详见下文。
5. PTR：逆向查询记录(Pointer Record)，只用于从IP地址查询域名，详见下文。

##### HTTP
###### 工作流程
三次握手，四次挥手
[2](https://www.jianshu.com/p/6bf5e3922887)
###### 特点
 - 请求和响应
 - 无状态
 - uri定位资源
 - 多种http方法
 - 持久连接
 - 管线化
[1](http://www.52im.net/thread-1677-1-1.html)
###### 请求报文结构
###### 响应报文结构
###### 报文头
###### 状态码
###### 报文实体
###### 代理/缓存/网关/隧道/Agent代理



##### OSI
![ab74f42a536808909fd73fbab8f94049.png](en-resource://database/1078:1)
![464696ebcde9df1ea3603a4859eb229e.png](en-resource://database/1077:1)


#### 浏览器运作机制
浏览器加载中的事件：

文档状态-document.readyState: loading DOM树在加载中
文档状态-document.readyState: interactive DOM树已加载可供用户交互
DomContentLoaded事件 文档树生成完毕
文档状态-document.readyState: complete 页面加载完毕
load事件 页面加载完毕


网址被DNS解析为IP地址 -> 通过IP地址建立TCP连接 -> 发送HTTP请求 -> 服务器处理请求并返回响应 ->  浏览器解析渲染页面 -> 断开TCP连接



#### 不同宿主环境下的JS

所谓的宿主，是JS运行的一个“**环境**”。
宿主环境主要有两种，客户端浏览器与服务端的NODEJS应用。

**一个重要的概念是，JS不是一个工具或应用，它是一门解释型动态类型语言。**
- **解释型**：相对于编译型，执行前不用先行编译，而是在运行程序的时候才翻译。也称为脚本语言。
- **动态类型**：相对于静态类型，每一个变量在赋值前都明确其类型，能确保类型安全。动态类型则是在运行时才检验类型合法性。