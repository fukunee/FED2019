# 第五部分 工具与框架  |  Tool Lib Framework

## 第25章 框架  |   Framework

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

---

### Vue

#### Vue实例

Vue实例是以组件化进行组装的，根实例为main.js中定义的

```js
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
```

其中App（App.vue）是根实例的Vue组件定义，该实例绑定到index.js的#app标签。

根实例下的其他组件，则是在App.vue下进行组装

![Vue 实例生命周期](D:\FED2019\static\pic\lifecycle.png)

![img](D:\FED2019\static\pic\vuex.png)![Component Tree](D:\FED2019\static\pic\components.png)