# 第四部分 HTML语言核心  |  HTML Core

## 第14章 HTML头  |  HTML HEAD

 - title
 - base
 - meta 
 - 图标
 - RSS
 - Open Graph

---




### title

> 一般来说，较长、描述性的标题表现得更好 --MDN

- 避免使用一个或两个单词的标题。
- 搜索引擎通常显示页面标题的前**55-60**个字符。超过这个长度的文本可能会丢失，所以尽量不要有超过这个长度的标题。
- 尽可能避免使用特殊字符
- 不要使用关键词堆砌
- 站点内不同的页面应有不同的title
- 在title里巧妙的融入数字

```html
<head>
    <title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
</head>
```



### base

base标签明确了相对地址对应的baseURL。

| base   | 值                     | 备注         |
| ------ | ---------------------- | ------------ |
| href   | http://www.example.com |              |
| target | _self（默认值）        | 本框架中跳转 |
|        | _blank                 | 新空白页打开 |
|        | _parent                | 父框架跳转   |
|        | _top                   | 顶层框架跳转 |

```html
<base href="http://www.example.com/">
<base target="_blank" href="http://www.example.com/">
<base target="_parent" href="http://www.example.com/">
<base target="_top" href="http://www.example.com/">
```



### meta

| 分类    | 属性名      | 值                                                           | 例子                                          | 备注                                         |
| ----------- | ------------------------------------------------------------ | --------------------------------------------- | -------------------------------------------- | ----------- |
| 必要 | charset     | utf-8                                                        | <meta charset="utf-8">                        | 确定该文档字符集                             |
| 必要 |             | [其他字符集](https://www.iana.org/assignments/character-sets/character-sets.xhtml) | <meta charset="gb2312">                       |                                              |
| 必要 | http-equiv  | content-security-policy                                      |                                               |                                              |
| 必要 | （需要与http-header保持一致） | refresh                                                      | <meta http-equiv="refresh" content="0;url=" /> | 重定向与刷新 |
| 必要 |             | content-type                                                 | <html lang="zh">                              | **！过时**，请在html中加入lang属性来取代它。 |
| 必要 | | X-UA-Compatible | <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" > | 优先使用 IE 最新版本和 Chrome |
| SEO | name: keywords | keywords | <meta name="keywords" content="kw1 kw2 kw3 kw4"> | 874字符以内 |
| SEO | name: description | description | <meta name="description" content="my description"> | 160字符左右 |
| SEO | name: robots | all | <meta name="robots" content="all" /> | 文件将被检索，且页面上的链接可以被查询 |
| SEO | | none | <meta name="robots" content="none" /> | 文件将不被检索，且页面上的链接不可以被查询 |
| SEO | | index | <meta name="robots" content="index,follow" /> | 文件将被检索 |
| SEO | | follow | <meta name="robots" content="index,follow" /> | 页面上的链接可以被查询 |
| SEO | | noindex | <meta name="robots" content="noindex" /> | 文件将不被检索 |
| SEO | | nofollow | <meta name="robots" content="nofollow" /> | 页面上的链接不可以被查询 |
| SEO | name: author | author | <meta name="author" content="author name" /> | |
| 响应 | name: viewport | width(数值/device-width) | <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> | 宽度 |
| 响应 |  | height(数值/device-height) | <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> | 高度 |
| 响应 |  | initial-scale(1) | <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> | 初始缩放比例 |
| 响应 |  | maximum-scale(1) | <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> | 最大缩放比例 |
| 响应 |  | minimum-scale(1) | <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> | 最小缩放比例 |
| 响应 |  | user-scalable(yes/no) | <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> | 是否允许用户缩放 |
| ios | name: apple-mobile-web-app-capable | yes | <meta name="apple-mobile-web-app-capable" content="yes" /> <!-- 启用 WebApp 全屏模式 --> | WebApp全屏模式 |
| ios | name: apple-mobile-web-app-status-bar-style | 颜色关键词 | <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> | 隐藏状态栏/设置状态栏颜色 |
| ios | name: apple-mobile-web-app-title |                                                              | <meta name="apple-mobile-web-app-title" content="标题"> | 添加到主屏后的标题 |
| ios | name: telephone=no |  | <meta content="telephone=no" name="format-detection" /> | 忽略数字自动识别为电话号码 |
| ios | name: email=no |  | <meta content="email=no" name="format-detection" /> | 忽略识别邮箱 |
| ios | name: apple-itunes-app |  | <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"> | 添加智能 App 广告条 Smart App Banner |



移动端适配：（2014年版本，需要更新）

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection"content="telephone=no, email=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" /><!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no" /><!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
<!-- 适应移动端end -->
```



### 图标

https://github.com/audreyr/favicon-cheat-sheet

```html
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" /> <!-- 添加 favicon icon -->
```



### RSS

```HTML
<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" /> <!-- 添加 RSS 订阅 -->
```



### Open Graph

https://ogp.me/