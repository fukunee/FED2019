# 第二部分 JS语言核心  |  JS Core

## 第3章 词法   |   Word

- 基本类型值
- null与undefined
- 引用类型值
  - 对象
  - 数组
  - 函数(apply/call/bind)
- 类型转换
- 变量与作用域

---

### 基本类型值

#### 数值

##### 进制转换

```js
// 二进制转十进制：parseInt(string, radix);
parseInt("1100100",2);

// 十进制转换为二进制：NumberObject.toString(radix);
num.toString(2);
```



### 引用类型值

#### 数组

>数组是对象，它拥有对象的一切特性，数组的每一个元素其实就是对象的属性。由其要注意的是稀疏数组这个概念，当数组长度大于了元素的个数时，数组称为稀疏数组，实际上在保存时，稀疏数组中的空缺位是没有占据空间的，for in、map、不会遍历到空缺位。

##### 数组创建
数组创建有两种形式，通常使用直接量法，但还有一种构造函数法，该方法可以限制长度。
```javascript
var a = new Array(10)
```

##### 数组长度
数组长度有限制，最长为2^32-1，约为42亿。
有一种删除数组元素的方式，是通过`a.length=10`那么超过10位之后的元素就回被删除。

##### 数组遍历
ECMA规定`for-in`循环语句可以用不同的顺序遍历对象的属性，所以建议不要用。
面对稀疏数组时有几点需要注意：

```javascript
 for(i;i<a.length;i++){} //这种方式会遍历a.length次，不跳过任何稀疏数组空缺位。
 for(i in a) //这种方式会遍历到数组继承的属性和数组对象的私有属性，如Array.prototype中的方法和a的方法，实在要用：
 for(i in a){
    if(!a.hasOwnProperty(i)) continue;
 }
 另外，直接量创建数组时有如下特性：
 var a=[,,,1]；
 0 in a //false
```

##### 数组方法
 - 改变原数组
	 - arr.push(元素[,元素，元素，元素]) 返回数组长度 //加元素到数组尾部
	 - arr.pop() 返回删除的值 //删除栈中最后一元素
	 - arr.unshift(元素[,元素，元素，元素]) 返数组长度 //加元素到数组头部，并将其他位后移
	 - arr.shift() 返回删除的值 //删除数组第一位的值，并将其他位前移
	 - arr.join(连接符) 返回连接后的字符串 //将数组中所有元素转字符串后用连接符连接
	 - arr.reverse() 返回逆序后的数组 //将数组元素逆序排列后返回
	 - arr.splice(起点指针，删除数量[,...新增元素]) 返回删除的部分 //将数组中的部分进行删除并插入新元素
	 - arr.sort([比较函数]) 返回排序后的数组 //将数组排序后返回（若不加入比较函数作为参数，则转字符串后以首字母asic码排序）

```javascript
arr.sort((a,b)=>{return a-b; })   //根据负数、0、正数判断顺序
```

 - 不改变原数组
	 - arr.concat(元素或数组[,元素或数组]) 返回连接后的数组 //将多个数组连接后返回
	 - arr.slice(起点指针，止点指针) 返回删除的部分 //将数组中的部分进行删除后返回
	 - arr.toString() 返回转字符串的结果 //等同于arr.join()
	- arr.indexOf(搜索值) 返回搜索结果 //顺序搜索数组返回索引
	- arr.lastIndexOf(搜索值) 返回搜索结果 //逆序搜索数组返回索引
	 - arr.forEach(function(值,索引,全数组){}) 返回值无意义 //对数组进行遍历操作
	 - arr.map(function(值,索引,全数组){}) 返回修改后的数组 //对数组进行遍历修改
	 - arr.filter(function(值,索引,全数组){}) 返回过滤后的数组 //对数组遍历过滤，函数参数返回真则保留
	 - arr.every(function(值,索引,全数组){}) 返回判断值 //对数组进行"所有"判断
	 - arr.some(function(值,索引,全数组){}) 返回判断值 //对数组进行"存在"判断
	 - arr.reduce(function(运算器，值),起始值) 返回运算值 //按顺序从左到右执行累积
	 - arr.reduceRight(function(运算器，值),起始值) 返回运算值 //按顺序从右到左执行累积

##### 扩展运算符“...”

 - 将一个数组转为用逗号分隔的参数序列。

```javascript
//用于函数调用。
function push(array, ...items) {
  array.push(...items);
}

//扩展运算符取代apply方法
Math.max.apply(null, [14, 3, 77])// ES5 的写法
Math.max(...[14, 3, 77])// ES6 的写法
Math.max(14, 3, 77);// 等同于

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);// ES5的 写法
arr1.push(...arr2);// ES6 的写法


//合并数组
[1, 2].concat(more)// ES5
[1, 2, ...more]// ES6
 
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
arr1.concat(arr2, arr3);// ES5的合并数组
[...arr1, ...arr2, ...arr3]// ES6的合并数组

// [ 'a', 'b', 'c', 'd', 'e' ]
//扩展运算符将字符串转为真正的数组
[...'hello']// [ "h", "e", "l", "l", "o" ]
```



##### 数组类型判断

 - Array.isArray(对象) //返回布尔值
 - 不要在多frame浏览器环境中用a instanceOf Array 来校验数组，因为浏览器多框架时，会混淆原型。

##### 类数组对象
数组是一种特殊的对象，我们可以通过创建对象并添加特性的方式去模拟数组的行为，用以减少资源消耗和完成自定义行为。
```javascript
let a = {};
for (let i=0;i<10;i++){
    a[i]=i;
}
a.length=i;

Array.prototype.join.call(a,"-");//使用数组原型方法
Array.join(a,"-");//使用数组静态方法

//为了防止环境没有定义数组静态方法：
Array.join = Array.join || function（a,sep）{
    return Array.prototype.join.call(a,sep);
}
```

##### 作为数组的字符串
使用字符串的str.charAt()方法获取，也可以通过str[2]来获取。
另外，字符串也是一种类数组，可以使用数组的一系列方法。
但一定要注意，**字符串是基本类型不可改变**，所以千万不要尝试调用数组本身操作的方法。

```javascript
let s = "Javascript";
Array.prototype.join.call(s,"-");
Array.prototype.filter.call(s,function(v){
    return v.match(/[^aeiou]/)
)}.join("");
```