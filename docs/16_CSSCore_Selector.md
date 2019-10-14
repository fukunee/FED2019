# 第五部分 CSS语言核心  |  CSS Core

## 第14章 选择器  |   Selector
 - 四大基本选择器
 - 属性选择器
 - 伪类选择器
 - 伪元素选择器
 - before&after
 - 组合选择器
 - 选择器特殊性

---
#### 四大基本选择器

 - 标签选择器
```css
span {}
strong {}
em {}
```

 - 类选择器

```css
.highlight {}
span.highlight {} /*标签选择器与类选择器交集*/
.notebox.warning {}/*类选择器间交集*/
```

 - ID选择器

```css
#one {}
h1#heading {}
```

 - 通配符选择器

```css
* {}
/*通配符选择器的一个妙用是，它可以用来加强以下两种情况的辨识度：*/
article:first-child{} /*选取为某元素首个子元素的article标签元素*/
article :first-child{}/*选取article子元素中的一个*/
article *:first-child{}/*同上，便于阅读*/
```



#### 七大属性选择器

在介绍属性选择器之前，要强调的是属性选择器一般用于复杂class的选取。class的命名也应遵循连词号“-”的命名规范。

 - 属性存在选择器 [attr]
 - 属性值选择器
	 - 全等 [attr=value]
	 - 约等 [attr~=value]	
	 - 根等 [attr|=value]
 - 属性值子串选择器
	 - 首部 [attr^=value]
	 - 尾部 [attr$=value]
	 - 包含 [attr*=value]

```css
li[class] {} /*选取有class属性的li标签*/
li[class="a"] {} /*选取class属性值为"a"的标签*/
li[class~="a"] {} /*选取class属性值为"a"或以空格隔开的属性值中包含"a"的li标签*/
li[class|="a"] {} /*选取class属性值以"a-"开头的li标签*/
li[class^="a"] {} /*选取class属性值以"a"开头的li标签*/
li[class$="a"] {} /*选取class属性值以"a"结尾的li标签*/
li[class*="a"] {} /*选取class属性值中包含"a"的li标签*/
```

在任意属性选择器后加"i"标志可以忽略大小写敏感：

```css
li[class^="a"] {}
li[class^="a" i] {} /*大小写不敏感*/
```



#### 伪类选择器

 - 交互伪类
	 - :focus
	- :target 
	- :active LVHA
	 - :hover LVHA
	 - a:link LVHA
	 - a:visited LVHA
	 - a:any-link
	 - input:blank
	 - input:default
	 - input:enabled
	 - input:disable
	 - input:indeterminate
	 - input:in-range
	 - input:out-of-range
	 - input:valid
	 - input:invalid
	 - input:optional
	 - input:required
	 - input:placeholder-shown
	 - input:read-only
	 - input:read-write
	 - radio:checked
	 - radio:enabled
	 - radio:disable
	
 - DOM树伪类
	 - :root
	 - :scope
	 - :first-child
	 - :last-child
	 - :nth-child
	 - :nth-last-child
	 - :first-of-type
	 - :last-of-type
	 - :nth-of-type
	 - :nth-last-of-type
	 - :only-child
	 - :only-of-type
	
 - 其他伪类
	 - :empty
	 - :not()
	 - :lang

#### 伪元素选择器
 - p::first-letter
 - p::first-line
 - ::selection 

#### before&after
 - ::before
 - ::after

#### 组合选择器
 - 后代选择器 空格
 - 子选择器 >
 - 相邻选择器 +
 - 同级选择器 ~
 - 交集选择器 相邻



### 选择器特殊性

| 选择器   | 例       | 特殊性  | 以10为基数的特殊性 |
| -------- | -------- | ------- | ------------------ |
| 内嵌样式 | style=“” | 1,0,0,0 | 1000               |
| #ID样式  | #wrapper | 0,1,0,0 | 100                |
| 类样式   | .data    | 0,0,1,0 | 10                 |
| 标签样式 | p        | 0,0,0,1 | 1                  |

