# 第五部分 CSS语言核心  |  CSS Core

## 第15章 布局样式  |   Style of Layout

 - 盒模型
	- display
	- block、 inline 与 inline-block 
	- 常规流 Normal Flow
	- 块格式化上下文BFC
	- float
 - 传统布局法
 - FlexBox布局
 - Grid布局
 - Multicol布局
 - Position

---



### 盒模型

#### display

display的值明确了一个元素的内外特性：

- 外特性明确了该元素在当前常规流中的布局要素
- 内特性明确了该元素的尺寸与所有子元素的外特性

| CSS规则 | 值           | 例                    | 备注                                                         |
| ------- | ------------ | --------------------- | ------------------------------------------------------------ |
| display | none         | displa: none;         | 移除该元素及其子元素[隐藏元素](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) |
|         | contents     | displa: contents;     | 移除该元素保留其子元素[grid](https://blogs.igalia.com/mrego/2015/02/25/grid-auto-placement-is-ready/) |
|         | block        | displa: block;        | 外特性：常规流的块级元素                                     |
|         | inline       | displa: inline;       | 外特性：常规流的行内元素                                     |
|         | table        | displa: table;        | 内特性：其内部呈表格布局                                     |
|         | flex         | displa: flex;         | 内特性：其内部呈flex布局                                     |
|         | grid         | displa: grid;         | 内特性：其内部呈grid布局                                     |
|         | inline-block | displa: inline-block; | 外inline内block                                              |
|         | inline-table | displa: inline-table; | 外inline内table                                              |
|         | inline-flex  | displa: inline-flex;  | 外inline内flex                                               |
|         | inline-grid  | displa: inline-grid;  | 外inline内grid                                               |
|         | 组合模式     | displa: inline flex;  | 外inline内flex                                               |



#### block、inline 与 inline-block 
 - block和inline是常规流中的布局部件。inline-block实际上是BFC，它的行为不在常规流中定义。
 - 三种基本元素__默认的高 度__都根据内容自适应。具有不同的特性：
     - 可塑性：高度与宽度可以通过规则明确。无视装的东西。
     - 孤狼性：独占一行其他盒子无法和他同行。
     - 并肩性：可以与其他盒子分享同一行。
     - 换行性：在超出所在行的空间后会自动换行。

|display|可塑性|孤狼性|并肩性|蛇形性|备注|
|--|--|--|--|--|--|
|block|Y|Y|||独占一行。默认宽度100%，若设置宽度，剩余空间依然属于它的margin。默认高度根据内容自适应，可设置。|
|inline|||Y|Y|可与其他行内元素同行。长宽不可设置，根据内容自适应，内容可以蛇形换行。|
|inline-block|Y||Y||可与其他行内元素同行。默认长宽根据内容自适应，可设置，内容永不换行。|



#### 常规流 Normal Flow
 - 以block与inline、inline-block三种元素为单元的布局过程就是常规流。是无CSS情况下的默认方式。
 - Float、Flex、Grid以及Position等高级布局方式通常是依托于常规流进行计算的。
 - Normal Flow工作方式：
	 - 以深度遍历DOM树子节点的顺序，自上而下地进行布局。
	 - 盒子多大取决于装了什么以及盒子的外包装（padding、margin、border）
	 - 块级元素，另起一行，宽度100%。
	 - 行内元素，有空就插，蛇形换行。
	 - 块级行内元素，有空且比自身更宽则插空，否则另起一行。
	 - margin叠加。



#### 块格式化上下文BFC
 - BFC块级元素，**block formatting context**，就是**脱离常规流**的独立空间。BFC的解析依然是常规流。
 - 可以理解成：解析DOM树是一个函数，常规流解析过程中遇到了BFC，则调用相应BFC的解析函数（这个函数依然是使用常规流进行解析），并等待其返回。
 - `position:absolute;` `float:left;` `display:inline-block/float-root/table-cells/table-captain;` `overflow:非visible;`都可以将一个块级元素变为BFC。
 - BFC的高度计算包含所有子元素，包括浮动元素。
 - BFC内的浮动元素不会影响BFC外的元素。
 - 运用场景：
    - 外边距塌陷
    - 清除浮动
    - 两列布局



#### 浮动

float是用来在块元素中浮动图片。也多用来创建多列布局，但在Flex布局、Grid布局出现后最终Float回归了最初的设计。

 - 为块级元素赋予规则`float: left/right`，让它变成一个浮动元素
     - 将float元素脱离文档流，放置在左上角。
     - 后续块级元素以原有方式渲染，无视float元素。
     - 后续行内元素与块级行内元素计算插空时会将float占住的位置加入计算。
 - 清除浮动
	 - 为**块级元素**赋予规则`clear:left/right/both`，该元素将在浮动元素下方另起一行。
     - `.wrapper::after{content:"";clear:both;display:block}` 用这个包裹块元素将需要浮动的元素放在一起。
	 - 通过BFC清除浮动，BFC的高度计算包含所有子元素包括浮动元素。BFC内的浮动元素不会影响BFC外的元素。

---



### 传统布局法

- 两列布局

  - float两列布局

  ```html
  <html lang="zh">
  <head>
      <title>Legacy float - Two Column Layout</title>
  </head>
  <body>
  <div class="wrapper">
      <div class="firstCol">
          <h2>First column</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="secondCol">
          <h2>Second column</h2>
          <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices.</p>
      </div>
      <div class="clear"></div>
  </div>
  </body>
  </html>
  
  <style>
      body {
          margin: 0;
      }
      .firstCol {
          width: 49.5%;
          float: left;
          background: saddlebrown;
          padding:10px;
          box-sizing:border-box;
      }
      .secondCol {
          width: 49.5%;
          float: left;
          background: blueviolet;
          padding:10px;
          box-sizing:border-box;
      }
      .clear {
          clear: both;
      }
      .wrapper {
          background: black;
          margin: 0 auto;
          padding: 10px;
      }
  </style>
  ```

  

  - float两列布局升级版BFC

  ```html
  <html lang="zh">
  <head>
      <title>Legacy BFC - Two Column Layout</title>
  </head>
  <body>
  <div class="wrapper">
      <div class="firstCol">
          <h2>First column</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="secondCol">
          <h2>Second column</h2>
          <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices.</p>
      </div>
      <div class="clear"></div>
  </div>
  </body>
  </html>
  
  <style>
      .firstCol {
          float: left;
          max-width: 200px;
          background: saddlebrown;
          padding:10px;
          box-sizing:border-box;
      }
      .secondCol {
          background: blueviolet;
          padding:10px;
          box-sizing:border-box;
          overflow:auto;
      }
      .clear {
          clear: both;
      }
      .wrapper {
          background: black;
          margin: 0 auto;
          padding: 10px;
      }
  </style>
  ```

---



### FlexBox布局法

Flex模型图如下：

### <img src="D:\FED2019\static\pic\flex_terms.png" alt="flex_terms.png"  />



Flex相关CSS规则：

| 作用区域       | CSS规则         | 值             | 例                              | 备注                                                         |
| -------------- | --------------- | -------------- | ------------------------------- | ------------------------------------------------------------ |
| flex Container | display         | flex           | display: flex;                  |                                                              |
|                | flex-direction  | row            | flex-direction: row;            |                                                              |
|                |                 | row-reverse    | flex-direction: row-reverse;    |                                                              |
|                |                 | column         | flex-direction: column;         |                                                              |
|                |                 | column-reverse | flex-direction: column-reverse; |                                                              |
|                | flex-wrap       | nowrap         | flex-wrap: nowrap;              | <img src="D:\FED2019\static\pic\1569920155256.png" alt="1569920155256" style="zoom:15%;" /> |
|                |                 | wrap           | flex-wrap: wrap;                | <img src="D:\FED2019\static\pic\1569920143233.png" alt="1569920143233" style="zoom:15%;" /> |
|                |                 | wrap-reverse   | flex-wrap: wrap-reverse;        | <img src="D:\FED2019\static\pic\1569920163824.png" alt="1569920163824" style="zoom:15%;" /> |
|                | flex-flow       | 组合模式       | flex-flow: row nowrap;          |                                                              |
|                | align-items     | stretch        | aligh-items: stretch;           | <img src="D:\FED2019\static\pic\1569920740976.png" alt="1569920740976" style="zoom:25%;" /> |
|                |                 | center         | aligh-items: center;            | <img src="D:\FED2019\static\pic\1569920753658.png" alt="1569920753658" style="zoom:25%;" /> |
|                |                 | flex-start     | aligh-items: flex-start;        | <img src="D:\FED2019\static\pic\1569920772444.png" alt="1569920772444" style="zoom:25%;" /> |
|                |                 | flex-end       | aligh-items: flex-end;          | <img src="D:\FED2019\static\pic\1569920785266.png" alt="1569920785266" style="zoom:25%;" /> |
|                | justify-content | flex-start     | justify-content: flex-start;    | <img src="D:\FED2019\static\pic\1569921186665.png" alt="1569921186665" style="zoom: 33%;" /> |
|                |                 | flex-end       | justify-content: flex-end;      | <img src="D:\FED2019\static\pic\1569921203093.png" alt="1569921203093" style="zoom: 33%;" /> |
|                |                 | center         | justify-content: center;        | <img src="D:\FED2019\static\pic\1569921221192.png" alt="1569921221192" style="zoom: 33%;" /> |
|                |                 | space-between  | justify-content: space-between; | <img src="D:\FED2019\static\pic\1569921254472.png" alt="1569921254472" style="zoom: 33%;" /> |
|                |                 | space-around   | justify-content: space-around;  | <img src="D:\FED2019\static\pic\1569921267383.png" alt="1569921267383" style="zoom: 33%;" /> |
|                |                 | space-evenly   | justify-content: space-evenly;  | <img src="D:\FED2019\static\pic\1569921276936.png" alt="1569921276936" style="zoom: 33%;" /> |
| flex Item      | flex-basis      | px             | flex-basis: 200px;              | 基础值                                                       |
|                | flex-grow       | num            | flex-grow: 1;                   | 有空间剩余时的分配权重                                       |
|                | flex-shrink     | num            | flex-shrink: 1;                 | 溢出时的分配权重                                             |
|                | flex            | px             | flex: 200px;                    | item宽度限定为200px                                          |
|                |                 | num            | flex: 1;                        | item宽度计算参考为1                                          |
|                |                 | 组合模式       | flex: 1 200px;                  | flex-grow flex-shrink flex-basis                             |
|                | align-self      | stretch        | align-self: stretch;            | <img src="D:\FED2019\static\pic\1569920740976.png" alt="1569920740976" style="zoom:25%;" /> |
|                |                 | center         | align-self: center;             | <img src="D:\FED2019\static\pic\1569920753658.png" alt="1569920753658" style="zoom:25%;" /> |
|                |                 | flex-start     | align-self: flex-start;         | <img src="D:\FED2019\static\pic\1569920772444.png" alt="1569920772444" style="zoom:25%;" /> |
|                |                 | flex-end       | align-self: flex-end;           | <img src="D:\FED2019\static\pic\1569920785266.png" alt="1569920785266" style="zoom:25%;" /> |



对比三种**单行横排**方式的区别：

|method|子元素间空隙|子元素margin/padding/border影响父元素高度|
|--|--|--|
|block > inline|Y|N|
|block > inline-block|Y|Y|
|flexBox > flexItem|N|Y|

---



### Grid布局

https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

---



### Multicol布局

### Position