# 第五部分 CSS语言核心  |  CSS Core

## 第16章 元素样式  |   Style of Elements

 - 盒模型样式
      - 盒尺寸
     - 背景与边框
     - overflow
 - 文本样式
	 - 字体与文本
	 - 安全字体
	 - WEB字体
	 - 长度单位
- 列表样式
- 表单样式
- 表格样式
    - 表格结构
    - 表格样式
- 替换元素

---

 ### 盒子样式

#### 盒尺寸
| CSS规则                        | 值          | 例                             | 备注                                                        |
| ------------------------------ | ----------- | ------------------------------ | ----------------------------------------------------------- |
| width | px    | width: 100px; | 绝对单位明确盒子的宽度              |
|            | 50%    | width: 50%; | 相对盒子所在父盒子的content的宽度 |
| height | px     | height: 100px; | 绝对单位明确盒子的高度                                 |
|        | 50% | height: 50%; | 相对盒子所在父盒子的content的高度(若父盒无高度设置则无效) |
| min-width | px | min-width: 100px; | 绝对单位明确盒子的宽度                        |
|  | 50% | min-width: 50%; | 相对盒子所在父盒子的content的宽度     |
| min-height | px      | min-height: 100px; | 绝对单位明确盒子的高度 |
|      | 50% | min-height: 50%; | 相对盒子所在父盒子的content的高度(若父盒无高度设置则无效) |
| max-width | px                                                        | max-width: 100px;  | 绝对单位明确盒子的宽度 |
|                          | 50%                                                      | max-width: 50%; | 相对盒子所在父盒子的content的宽度 |
| max-height | px | max-height: 100px; | 绝对单位明确盒子的高度 |
| | 50% | max-height: 50%; | 相对盒子所在父盒子的content的高度(若父盒无高度设置则无效) |
| padding | px                                                        | padding: 100px;     | 绝对单位明确盒子padding尺寸 |
|  | 50%                                                  | padding: 50%;                 | 相对盒子所在父盒子的content的宽度设置padding |
| margin | px                                                | margin: 100px;            | 绝对单位明确盒子margin尺寸 |
|  | 50% | margin: 50%; | 相对盒子所在父盒子的content的宽度设置margin |


#### 背景与边框
| CSS规则                        | 值          | 例                             | 备注                                                        |
| ------------------------------ | ----------- | ------------------------------ | ----------------------------------------------------------- |
| background-attachment 背景附着 | scroll      | background-attachment: scroll; | 相对元素定位，不与文本同时滚动                              |
| (背景跟着什么一起动)           | fixed       | background-attachment: fixed;  | 相对viewport定位，不与文本同时滚动                          |
|                                | local       | background-attachment: local;  | 与文本同时滚动                                              |
| background-clip 背景裁剪       | border-box  | background-clip: border-box;   | 以border外围进行裁剪                                        |
|                                | padding-box | background-clip: padding-box;  | 以padding外围进行裁剪                                       |
|                                | content-box | background-clip: content-box;  | 以内容外围进行裁剪                                          |
|                                | text        | background-clip: text;         | 以文本边缘进行裁剪，只可与background-attachment: local;共用 |
| background-color               | HSLA | background-color: hsla(188, 97%, 28%, .3); |                                                             |
|                          | HSL                                                          | background-color: hsl(188, 97%, 28%);                   |                                                              |
|                          | RGBA                                                         | background-color: rgba(18, 138, 125, .9);               |                                                              |
|                          | RGB                                                          | background-color: rgb(18, 138, 125);                    |                                                              |
|                          | RGB-Code                                                     | background-color: #02798b;                              |                                                              |
|                          | transparent                                                  | background-color: transparent;                          | 透明                                                         |
|                                | [<color>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) | color: black; |                                                             |
| background-image | url() | background-image: url("../bg.png"); | 图片 |
|                                | linear-gradient | background: linear-gradient(0deg, blue, green 40%, red); | 线性渐变 |
|                                | radial-gradient | background: radial-gradient(circle at 50% 50%,#000 0%, #eee 50%); | 扩散渐变 |
|                                | repeating-linear-gradient | background: repeating-linear-gradient(#000, #eee 50px); | 重复线性渐变 |
|                                | repeating-radial-gradient | background: repeating-radial-gradient(#000, #eee 50px); | 重复扩散渐变 |
|                                | conic-gradient                                               | background: conic-gradient(#000, #eee);                      | 锥形渐变                                                    |
| background-position            | top/bottom/left/right/center | background-position: left bottom; | 左下 |
|                                | 25% 75%                                                      | background-position: 25% 75%; | 左25% 顶75% |
|                                | left 10px bottom20px | background-position: left 10px bottom 20px; | 左10px 底20px |
| background-repeat | repeat-x | background-repeat: repeat-x; | 横向重复 |
|                                | repeat-y | background-repeat: repeat-y; | 纵向重复 |
|                                | repeat | background-repeat: repeat; | 双向重复 |
|                                | space | background-repeat: space; | 等距重复 |
|                                | round | background-repeat: round; | 中心双向重复 |
|                                | no-repeat | background-repeat: no-repeat; | 不重复 |
|                                | 两值 | background-repeat: repeat space; | 横向与纵向定义 |
| background-size | cover | background-size: cover | 拉伸到填充整个空间 |
|                                | contain | background-size: contain | 拉伸到图片完全展示 |
|                                | 100px | background-size: 100px | 横向拉伸，保持原比例 |
|                                | 50% auto                                                     | background-size: 50% auto | 双向拉伸 |
| background | 组合模式                                                     | no-repeat center/80% url("../img/image.png") | attachment clip repeat position/size image, ... ,color;     |
| border-width | px/em/rem | border-width: 2px; |  |
| border-style | none | border-style: none; |  |
|  | hidden | border-style: hidden; |  |
|  | dotted | border-style: dotted; |  |
|  | dashed | border-style: dashed; |  |
|  | solid | border-style: solid; |  |
|  | double | border-style: double; |  |
|  | groove | border-style: groove; |  |
|  | ridge | border-style: ridge; |  |
|  | inset | border-style: inset; |  |
|  | outset | border-style: outset; |  |
|  | 两值 | border-style: dotted solid; | 上下 左右 |
|  | 四值 | border-style: none solid dotted dashed; | 上右下左 |
| border-color | ... | border-color: #eee; |  |
| border | 组合模式 | border: 1px solid black; | width style color |
| outline | 组合模式 | outline: 1px solid black; | width style color |
| border-radius | px | border-radius: 10px; | 圆角本质上需要八个值 |
|  | 10% | border-radius: 10%; |  |
|  | 二值 | border-radius: 10px 5%; |  |
|  | 四值 | border-radius: 10px 5%  20px 30px; |  |
|  | 两侧修饰 | border-radius: 10px 5%  20px 30px/20px 25em 30px 35em; | 左上 右上 右下 左下 / 左上侧 右上侧 右下侧 左下侧 |

#### overflow

- overflow:非visible，可以将一个块级元素变为BFC。
- 在可预测内容的场景下做好UI测试
- 在不可预测内容的场景下尽量避免使用scroll

| CSS规则  | 值      | 例                        | 备注   |
| -------- | ------- | ------------------------- | ------ |
| overflow | visible | overflow: visible;        | 默认值 |
|          | hidden  | overflow: hidden;         |        |
|          | scroll  | overflow: scroll;         |        |
|          | auto    | overflow: auto;           |        |
|          | 两值    | overflow: hidden visible; |        |

----




 ### 文本样式

 #### 字体与文本

| CSS规则                  | 值                                                           | 例                                                           | 备注                                                         |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| color 颜色               | HSLA                                                         | color: hsla(188, 97%, 28%, .3);                              |                                                              |
|                          | HSL                                                          | color: hsl(188, 97%, 28%);                                   |                                                              |
|                          | RGBA                                                         | color: rgba(18, 138, 125, .9);                               |                                                              |
|                          | RGB                                                          | color: rgb(18, 138, 125);                                    |                                                              |
|                          | RGB-Code                                                     | color: #02798b;                                              |                                                              |
|                          | transparent                                                  | color: transparent;                                          | 透明                                                         |
|                          | [<color>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) | color: black;                                                |                                                              |
| font-style 字体风格      | normal                                                       | font-size: normal;                                           | 正常字体                                                     |
|                          | italic                                                       | font-size: italic;                                           | 斜体字体，若无斜体则模拟                                     |
|                          | oblique                                                      | font-size: oblique;                                          | 用正常字体模拟斜体                                           |
| font-variant 字体变形    | normal                                                       | font-variant: normal;                                        | 不变形                                                       |
|                          | small-caps                                                   | font-variant: small-caps;                                    | 大写且保持原有高度                                           |
|                          | 组合模式                                                     | common-ligatures small-caps;                                 | 大写且保持原有高度，隐藏连词时的点，如“fi”的i                |
| font-weight 字体厚度     | normal                                                       | font-weight: normal;                                         | 正常字体                                                     |
|                          | bold                                                         | font-weight: bold;                                           | 粗体                                                         |
|                          | 100-900                                                      | font-weight: 900;                                            | 数字衡量的粗细程度                                           |
| font-stretch 字体拉伸    | normal                                                       | font-stretch: normal;                                        | 字母的横向拉伸                                               |
|                          | [<Keyword>](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch#Keyword_to_numeric_mapping) | font-stretch: expanded;                                      |                                                              |
|                          | 50%~200%                                                     | font-stretch: 150%;                                          |                                                              |
| font-size 字号           | px                                                           | font-size: 1px;                                              | 元素的字体大小默认继承父元素                                 |
|                          | em                                                           | font-size: 1em;                                              |                                                              |
|                          | rem                                                          | font-size: 1rem;                                             |                                                              |
| line-height 行高         | px                                                           | line-height: 15px;                                           | 15px行高                                                     |
| font-family 字体         | Font stacks                                                  | font-family: "Trebuchet MS", Verdana, sans-serif;            |                                                              |
| font 字体                | 组合模式                                                     | font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif; | font-style font-variant font-weight font-stretch font-size line-height font-family |
| text-transform 文本变形  | none                                                         | text-transform: none;                                        | 阻止变形                                                     |
|                          | uppercase                                                    | text-transform: uppercase;                                   | 转换成大写                                                   |
|                          | lowercase                                                    | text-transform: lowercase;                                   | 转换成小写                                                   |
|                          | capitalize                                                   | text-transform: capitalize;                                  | 转换成首字母大写                                             |
| text-decoration 文本装饰 | none                                                         | text-decoration: none;                                       | 阻止装饰                                                     |
|                          | underline                                                    | text-decoration: underline;                                  | 下划线                                                       |
|                          | overline                                                     | text-decoration: overline;                                   | 上划线                                                       |
|                          | line-through                                                 | text-decoration: line-through;                               | 贯穿线                                                       |
|                          | 组合模式                                                     | text-decoration: underline overline;                         | 同时装饰上下划线                                             |
| text-shadow 文本阴影     | 四值                                                         | text-shadow: 4px 4px 5px red;                                | 横移/纵移/成像距离/颜色                                      |
|                          | 组合模式                                                     | text-shadow: -1px -1px 1px #aaa, 0px 4px 1px #aaa;           | 多个光源                                                     |
| text-alignment 文本位置  | left                                                         | text-alignment: left;                                        | 左对齐                                                       |
|                          | right                                                        | text-alignment: right;                                       | 右对齐                                                       |
|                          | center                                                       | text-alignment: center;                                      | 居中                                                         |
|                          | justify                                                      | text-alignment: justify;                                     | 两端对齐                                                     |
|                          | 1.5~2.0                                                      | line-height: 1.5                                             | 字体的1.5倍行高                                              |
| letter-spacing 字间距    | px/em/rem                                                    | letter-spacing: 1px;                                         |                                                              |
| word-spacing 词间距      | px/em/rem                                                    | word-spacing: 1px;                                           |                                                              |
| text-indent 缩进         | px/em/rem                                                    | text-indent: 2em;                                            |                                                              |
| text-overflow 溢出效果   | clip                                                         | overflow: hidden; text-overflow: clip;                       | 字母断开，避免显示一半字母                                   |
|                          | ellipsis                                                     | overflow: hidden; text-overflow: ellipsis;                   | 结尾处...                                                    |
| white-space 换行模式     | normal                                                       | white-space: normal;                                         | 常规模式                                                     |
|                          | nowrap                                                       | white-space: nowrap;                                         | 不换行                                                       |
|                          | pre                                                          | white-space: pre;                                            | 保持源码格式                                                 |
|                          | pre-wrap                                                     | white-space: pre-wrap;                                       | 保持源码格式，且换行                                         |
|                          | pre-line                                                     | white-space: pre-line;                                       | 常规模式，且源码换行处换行                                   |
|                          | break-spaces                                                 | white-space: break-spaces;                                   | 同pre-wrap，必在空格处换行                                   |
| word-break 词换行模式    | normal                                                       | word-break: normal;                                          | 空格中文可断开                                               |
|                          | break-all                                                    | word-break: break-all;                                       | 任意位置可断开                                               |
|                          | keep-all                                                     | word-break: keep-all;                                        | 只在空格处断开                                               |
|                          | break-word                                                   | word-break: break-word;                                      | 空格断开，若溢出则中英文断                                   |



#### 安全字体

| 字体名          | 类型                  | 备注                                                    |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| Arial           | 无衬线字体 sans-serif | font-family: **Helvetica**, Arial, **sans-serif**       |
| Courier New     | 等宽字体 monospace    | font-family: Courier New, **Courier**, **monospace**    |
| Georgia         | 衬线字体 serif        | font-family: Georgia, **serif**                         |
| Times New Roman | 衬线字体 serif        | font-family: Times New Roman, **Times**, **serif**      |
| Trebuchet MS    | 无衬线字体 sans-serif | font-family: Trebuchet MS, **serif** 在移动端中支持较好 |
| Verdana         | 无衬线字体 sans-serif | font-family: Verdana, **serif**                         |



#### WEB字体

```css
@font-face {
  font-family: 'ciclefina';
  src: url('fonts/cicle_fina-webfont.eot');
  src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
  font-weight: normal;
  font-style: normal;
}
html {
  font-family: "ciclefina", "Bitstream Vera Serif", serif;
}
```

字体来源：

 - [fontsquirrel](https://www.fontsquirrel.com/fonts/list/hot) 英文字体
 - [losttype](http://www.losttype.com/browse/) 英文字体
 - [Google Font](https://fonts.google.com/) 在线英文字体
 - [Google NOTO](https://www.google.com/get/noto/) 中文字体
 - [思源字体](http://jikasei.me/font/genjyuu/) 中文字体
 - [方正字体](https://www.foundertype.com/) 中文字体
 - [源字体](https://github.com/ButTaiwan?tab=repositories) 繁体字体
 - [整合](http://www.tuyiyi.com/v/56117.html) 字体整合



中文字体压缩：

 - [FontMin](https://ecomfe.github.io/fontmin)



#### 长度单位

| 度量值 | 值/单位 | 备注                                |
| :----- | :------ | :---------------------------------- |
| 长度   | 1px     | 像素，绝对长度                      |
|        | 1em     | 父节点的Font-size计算长度，相对长度 |
|        | 1rem    | 根节点的Font-size计算长度，相对长度 |
|        | 1vw     | viewport宽度的1%，相对长度          |
|        | 1vh     | viewport长度的1%，相对长度          |
|        | 50%     | 父盒子宽度的50%，相对长度           |

---



### 列表样式

| CSS规则                                                      | 值          | 例                                          | 备注           |
| :----------------------------------------------------------- | :---------- | :------------------------------------------ | -------------- |
| list-style-type 项标记                                       | disc        | list-style-type: disc;                      | 实心圆         |
| [<style>](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#Values) | circle      | list-style-type: circle;                    | 空心圆         |
|                                                              | square      | list-style-type: square;                    | 实心方         |
|                                                              | decimal     | list-style-type: decimal;                   | 1. 2. 3.       |
|                                                              | '-'         | list-style-type: '-';                       | -  -  -        |
|                                                              | none        | list-style-type: none;                      | 空白           |
|                                                              | upper-roman | list-style-type: upper-roman;               | I. II. III.    |
| list-style-position                                          | inside      | list-style-position: inside;                | 标记在盒子内部 |
|                                                              | outside     | list-style-position: outside;               | 标记在盒子外部 |
| list-style-image                                             | none        | list-style-image: none;                     |                |
|                                                              | url()       | list-style-image: url('starsolid.gif');     |                |
| list-style                                                   | 组合模式    | list-style: square url(example.png) inside; |                |

---

### 表单样式

表单组件是很难做到跨平台一致性的。所以大部分UI框架都对下列组件进行一致性处理：

- input select option optgroup datalist progress meter

- 表单组件是替换元素，其盒模型并不同于常规元素。要想统一其盒模型的表现，需要用以下代码进行hack。

```css
input, textarea, select, button {
  -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
     -moz-box-sizing: border-box; /* For legacy (Firefox <29) Gecko based browsers */
          box-sizing: border-box;
}
```



---



### 表格样式

 - 表格的组成为:
    - caption 表名
    - thead 表头
    - tbody 表体
    - tfoot 表尾
    - tr 表行
    - th 表头格
    - td 单元格

```html
<table>
    <caption>A summary of the UK's most famous punk bands</caption>
    <colgroup>
        <col>
        <col span="2" class="batman">
        <col span="1" class="flash">
    </colgroup>
    <thead>
    <tr>
        <th scope="col" colspan="2">Band</th>
        <th scope="col">No. of Albums</th>
        <th scope="col">Most famous song</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th rowspan="2" scope="row">Buzzcocks</th>
        <td>1976</td>
        <td>9</td>
        <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
        <td>1976</td>
        <td>6</td>
        <td>London Calling</td>
    </tr>
    <tr>
        <th scope="row">The Clash</th>
        <td>1976</td>
        <td>6</td>
        <td>London Calling</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th scope="row" colspan="2">Total albums</th>
        <td colspan="2">77</td>
    </tr>
    </tfoot>
</table>
```



#### 表格结构

| 标签     | 参数    | 值       | 例               | 备注                          |
| -------- | :------ | :------- | :--------------- | ----------------------------- |
| table    |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| caption  |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| thead    |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| tbody    |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| tfoot    |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| tr       |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| colgroup |         |          |                  | 不接受任何参数, 用CSS指定样式 |
| th       | scope   | row      | scope=“row”      |                               |
|          |         | col      | scope=“col”      |                               |
|          |         | rowgroup | scope=“rowgroup” |                               |
|          |         | colgroup | scope=“colgroup” |                               |
|          |         | auto     | scope=“auto”     | 默认值                        |
|          | rowspan | 2        | span=“2”         | 确定其占据的行数              |
|          | colspan |          |                  | 确定其占据的列数              |
| col      | span    | 1        | span=“1”         | 确定其占据的列数              |



#### 表格样式

##### 空隙与布局

| CSS规则         | 值       | 例                        | 备注             |
| :-------------- | :------- | :------------------------ | ---------------- |
| table-layout    | auto     | table-layout: auto        | 根据内容计算列宽 |
|                 | fixed    | table-layout: fixed       | 固定列宽         |
| border-collapse | separate | border-collapse: separate | 不共享边框       |
|                 | collapse | border-collapse: collapse | 共享边框         |

```css
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}
thead th:nth-child(1) {
  width: 30%;
}
thead th:nth-child(2) {
  width: 20%;
}
thead th:nth-child(3) {
  width: 50%;
}
th, td {
  padding: 20px;
}
```

##### 字体

```css
/* 全局字体 */
html { 
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
}
/* 表头字体 */
thead th, tfoot th {
  font-family: 'Rock Salt', cursive;
}
/* 表头字体 */
th {
  letter-spacing: 2px;
}
/* 单元格字体 */
td {
  letter-spacing: 1px;
}
/* 单元格字体 */
tbody td {
  text-align: center;
}
/* 表头字体 */
tfoot th {
  text-align: right;
}
```

##### 斑马条纹

```css
tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}
tbody tr:nth-child(even) {
  background-color: #e495e4;
}
```

##### 表名

| CSS规则      | 值     | 例                   | 备注             |
| :----------- | :----- | :------------------- | ---------------- |
| caption-side | auto   | caption-side: top    | 表名显示在表上方 |
|              | bottom | caption-side: bottom | 表名显示在表下方 |



---



### 替换元素

- 图片、视频和iframe是替换元素
- 替换元素着css无法影响其内部元素，只能操作其位置和大小。
- 替换元素的尺寸不受flex与grid操作，若需要与flex与grid联动则需要一个父盒子，并设置替换元素的长宽100%。

| CSS规则         | 值           | 例                                                  | 备注                   |
| :-------------- | :----------- | :-------------------------------------------------- | ---------------------- |
| object-fit      | contain      | img{height:100%;width:100%;object-fit: contain;}    | 必须和长宽100%同时使用 |
|                 | cover        | img{height:100%;width:100%;object-fit: cover;}      | 必须和长宽100%同时使用 |
|                 | fixll        | img{height:100%;width:100%;object-fit: fill;}       | 必须和长宽100%同时使用 |
|                 | none         | img{height:100%;width:100%;object-fit: none;}       | 必须和长宽100%同时使用 |
|                 | scale-down   | img{height:100%;width:100%;object-fit: scale-down;} | 必须和长宽100%同时使用 |
| object-position | right top;   | object-position: right top;                         | 必须和长宽100%同时使用 |
|                 | 50% 50%;     | object-position: 50% 50%;                           | 必须和长宽100%同时使用 |
|                 | 250px 125px; | object-position: 250px 125px;                       | 必须和长宽100%同时使用 |


