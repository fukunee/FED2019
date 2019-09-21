# 第五部分 CSS语言核心  |  CSS Core

## 第16章 元素样式  |   Style of Elements

 - 盒子样式
 - 文本样式
	 - 字体与文本
	 - 安全字体
	 - 长度单位
- 列表样式

---

 ### 盒子样式

 ### 文本样式

 #### 字体与文本

| CSS规则                  | 值                                                           | 例                                                           | 备注                                                         |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| color 颜色               | HSLA                                                         | color: hsla(188, 97%, 28%, .3);                              |                                                              |
|                          | HSL                                                          | color: hsl(188, 97%, 28%);                                   |                                                              |
|                          | RGBA                                                         | color: rgba(18, 138, 125, .9);                               |                                                              |
|                          | RGB                                                          | color: rgb(18, 138, 125);                                    |                                                              |
|                          | RGB-Code                                                     | color: #02798b;                                              |                                                              |
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

