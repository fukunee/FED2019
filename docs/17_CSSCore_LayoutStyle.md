# 第五部分 CSS语言核心  |  CSS Core

## 第15章 布局样式  |   Style of Layout

 - 盒模型
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

对比三种**单行横排**方式的区别：
|method|子元素间空隙|子元素margin/padding/border影响父元素高度|
|--|--|--|
|block > inline|Y|N|
|block > inline-block|Y|Y|
|flex|N|Y|





### Grid布局



---



### Multicol布局

### Position