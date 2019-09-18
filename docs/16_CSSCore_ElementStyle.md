# 第五部分 CSS语言核心  |  CSS Core

## 第16章 元素样式  |   Style of Elements

 - 盒子样式
 - 文本样式
	 - 字体与文本
	 - 

---

 ### 盒子样式

 ### 文本样式

 #### 字体与文本

| CSS规则     | 值                                                           | 例                                                | 备注 |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------- | ---- |
| color       | HSLA                                                         | color: hsla(188, 97%, 28%, .3);                   |      |
|             | HSL                                                          | color: hsl(188, 97%, 28%);                        |      |
|             | RGBA                                                         | color: rgba(18, 138, 125, .9);                    |      |
|             | RGB                                                          | color: rgb(18, 138, 125);                         |      |
|             | RGB-Code                                                     | color: #02798b;                                   |      |
|             | [<color>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) | color: black;                                     |      |
| font-family | Font stacks                                                  | font-family: "Trebuchet MS", Verdana, sans-serif; |      |
|             |                                                              |                                                   |      |
|             |                                                              |                                                   |      |



#### 安全字体

| 字体名          | 类型                  | 备注                                                    |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| Arial           | 无衬线字体 sans-serif | font-family: **Helvetica**, Arial, **sans-serif**       |
| Courier New     | 等宽字体 monospace    | font-family: Courier New, **Courier**, **monospace**    |
| Georgia         | 衬线字体 serif        | font-family: Georgia, **serif**                         |
| Times New Roman | 衬线字体 serif        | font-family: Times New Roman, **Times**, **serif**      |
| Trebuchet MS    | 无衬线字体 sans-serif | font-family: Trebuchet MS, **serif** 在移动端中支持较好 |
| Verdana         | 无衬线字体 sans-serif | font-family: Verdana, **serif**                         |