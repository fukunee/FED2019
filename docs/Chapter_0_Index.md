## 第一部分 概论

### 第1章 前端概论 Introduction
 - 前端简史
 - 发展趋势

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
	 - [Mixed Environment JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/apA.md)

## 第二部分 JS语言核心
### 第3章 词法
 - 基本类型值
 - null与undefined
 - 引用类型值
    	- 对象
    	- 数组
    	- 函数(apply/call/bind)
 - 类型转换
 - 变量与作用域


### 第4章 短语
 - 操作符
	 - 操作符顺序表 犀牛p66
	 - 位操作符
	 - 逻辑操作符
	 - 算数操作符
	 - 关系操作符
	 - 特殊操作符
		 - 条件操作符
		 - typeof操作符
		 - 逗号操作符
		 - in操作符
		 - instanceof操作符
 - 表达式
	 - 原始表达式
	 - 初始化表达式
	 - 函数表达式
	 - 属性访问与方法调用表达式
	 - 对象创建表达式
	 - 算数表达式
	 - 关系表达式
	 - 正则表达式


### 第5章 语法
 - 控制语句
	 - 条件
	 - 循环
	 - 跳转
 - 声明语句
	 - 变量声明
	 - 函数声明
 - 异常处理语句
 - 其他语句


### 第6章 闭包/this/对象/原型/类
[Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)
[this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/README.md)

### 第7章 异步与性能
[Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/async-performance/README.md)
[如何避免 async/await 地狱](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c)
[“回调地狱”的解决思路汇总](https://www.jianshu.com/p/bc7b8d542dcd)

### 第8章 JS运行时
[JS 引擎、运行时与调用栈概述](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
[V8 引擎简介](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)
[内存管理与4中常见的泄漏](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
[从 Event Loop 规范探究 JavaScript 异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)
[异步之 Event Loop](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
[NodeJS 中的 Event Loop、Timers 与process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
[Tasks、Microtasks、Queues 与Schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
[Web Workers 及其5个常见使用场景](https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)



## 第三部分 浏览器脚本
### 第9章    浏览器对象BOM
 - 计时器
 - Window对象
 - Location对象
 - Navigator对象
 - Screen对象
 - History对象


### 第10章    文档对象DOM
 - 节点层次
	 - Node类型
	 - Document类型
	 - Element类型
	 - Text类型
	 - Comment类型
	 - CDATASection类型
	 - DocumentType类型
	 - DocumentFragment类型
	 - Attr类型
 - 扩展
	 - 选择符API
	 - 遍历和范围
	 - 专有扩展


### 第11章 AJAX与XHR

### 第12章 事件EVENT

### 第13章 Canvas & SVG

### 第14章 HTML5的新API



## 第五部分 CSS语言核心

### 第15章 选择器

### 第16章 盒模型

### 第17章 布局

### 第19章 CSS样式大全

### 第18章 media查询与模块化



## 第四部分 最佳实践

### 第20章    编码最佳实践
 - 编码规范
	 - [前端开发指导书](http://taitems.github.io/Front-End-Development-Guidelines)
 - CSS命名规范BEM
 - metadata与SEO

### 第21章    客户端最佳实践
 - 前端组件
	 - [element组件实践](https://element.eleme.io/#/zh-CN/component/layout)
 - 前端动画
	 - [前端动画特效每日挑战](https://github.com/comehope/front-end-daily-challenges)
	 - [动画设计的12个原则🎥](https://www.youtube.com/watch?v=uDqjIdI4bF4)
	 - [贝塞尔曲线扫盲](http://www.html-js.com/article/1628)
	 - [动画：从 AE 到 Web](https://aotu.io/notes/2018/03/06/ae2web/)
	 - 最全最好用的动效落地方法：[基础知识](https://zhuanlan.zhihu.com/p/34501702)[落地方式](https://zhuanlan.zhihu.com/p/34815524)
 - css实践
	 - [You-Need-to-Know-CSS](https://lhammer.cn/You-need-to-know-css/#/)
	 - [CSS布局指南](https://juejin.im/post/5b3b56a1e51d4519646204bb)
	 - [CSS 中的各类换行处理方式](https://css-tricks.com/where-lines-break-is-complicated-heres-all-the-related-css-and-html/)
	 - [浏览器将rem转成px时有精度误差怎么办？](https://www.zhihu.com/question/264372456)
	 - [精准操控的滚动体验，浅谈新标准 Scroll Snap](https://juejin.im/post/5ba079e86fb9a05d1227fddb)
	 - [如何完美实现一个非button元素的按钮](https://www.scottohara.me/blog/2018/10/03/unbutton-buttons.html)
	 - [巧用 CSS Grid 来创建横向滚动容器](https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585)
	 - [如何处理内联元素中的空隙](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
	 - [CSS Stacking Context 里那些鲜为人知的坑](https://segmentfault.com/a/1190000002783265)
	 - [在 (S)CSS 中实现主题功能的 4½ 种方法](https://juejin.im/post/5c0feb3bf265da616d5409a5)

### 第22章 自动化测试与构建
 - 构建工具
     - 任务调度
         - npm scripts
         - gulp
     - 检查与标准化
         - Prettier
         - ESLint
         - ESLint-Airbnb
     - 代码混淆
         - Javascript Obfuscator
         - JScrambler
     - 模块打包
         - webpack
 - 测试[单元/集成/功能]
     - Jes
	     - [Jest Doc](https://jestjs.io/docs/en/getting-started.html)
     - Enzyme
     - Cypress
 - 单元测试组件
     - Chai
     - expect
     - should

## 第五部分 框架工具
### 第23章 工具
 - 工具类
     - accounting.js
     - async
     - axios
     - chance
     - date-fns
     - dinero
     - Finance.js
     - format.js
     - Howler.js
     - immutableis.js
     - lodash
     - luxon
     - Math.js
     - Moment.js
     - Ramda
     - RxJS
     - TheoremJS
     - voca
     - wait
     - xregexp.com
     - transform-www

 - 工具软件
     - Closure Compiler
     - Terser
     - Optimize-js
     - Prepack
     - Esprima
     - istanbul
     - Coveralls


 - 在线正则工具
     - debuggex
     - regex101
     - regexper
     - RegExr

### 第23章 框架
 - Vue
	 - [深入浅出 - vue变化侦测原理](https://github.com/berwin/Blog/issues/17)
	 - [Vue 模板编译原理](https://github.com/berwin/Blog/issues/18)
 - React
	 - [React 底层揭秘](https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/)
	 - [你所需要知道的 React 细节](https://github.com/hateonion/react-bits-CN)
	 - [React Fiber 架构](https://zhuanlan.zhihu.com/p/37095662)
	 - [React 16 Fiber 源码速览](http://zxc0328.github.io/2017/09/28/react-16-source/)
	 - [React 是怎样炼成的](https://segmentfault.com/a/1190000013365426)
从零开始实现一个React：
	 - [1. JSX和虚拟DOM](https://github.com/hujiulong/blog/issues/4)
	 - [2. 组件和生命周期](https://github.com/hujiulong/blog/issues/5)
	 - [3. diff算法](https://github.com/hujiulong/blog/issues/6)
	 - [4. 异步的setState](https://github.com/hujiulong/blog/issues/7)
	 - [「react技术栈」单页应用实践快速入门](https://www.jianshu.com/p/0b2acb50f321)
	 - [React 生命周期图示](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 - Redux
	 - [重新设计 Redux](https://hackernoon.com/redesigning-redux-b2baee8b8a38)：Rematch
	 - [如何用 GraphQL 来替代 Redux](https://hackernoon.com/how-graphql-replaces-redux-3fff8289221d)
	 - [解读 Redux 的设计思路与用法](https://div.io/topic/1309)
	 - [(Redux)应用构建的三个原则](https://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-1-organize-by-feature)
 - RxJS
	 - [ReactiveX 官网](http://reactivex.io/)：宝石图真的非常形象易读
	 - [响应式编程，是明智的选择](https://www.cnblogs.com/android-blogs/p/5586395.html)
	 - [图解RxJS](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)
	 - [调试RxJS：Tooling](https://blog.angularindepth.com/debugging-rxjs-4f0340286dd3)
	 - [调试RxJS：Logging](https://blog.angularindepth.com/debugging-rxjs-part-2-logging-56904459f144)

## 附录

### 附录1 疑惑点整理

### 附录2 重要参考资料
 - [前端技术清单](https://alienzhou.github.io/frontend-tech-list/)
 - [前端性能优化之旅](https://alienzhou.github.io/fe-performance-journey/)