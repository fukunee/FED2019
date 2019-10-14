# 第五部分 CSS语言核心  |  CSS Core

## 第17章 At-Rules |  At-Rules

- @media
- @import
- @supports
- @document



---

#### @media

media特性：

| features     | 值                 | 例                                    | 备注             |
| ------------ | ------------------ | ------------------------------------- | ---------------- |
| aspect-ratio | min-aspect-ratio   | @media (min-aspect-ratio: 8/5){ ... } | 最小视图宽高比   |
|              | max-aspect-ratio   | @media (max-aspect-ratio: 3/2){ ... } | 最大视图宽高比   |
|              | aspect-ratio       | @media (aspect-ratio: 1/1){ ... }     | 确定视图宽高比   |
| color        | min-color          | @media (min-color:8){ ... }           | 屏幕色位最小值   |
|              | max-color          | @media (max-color:256){ ... }         | 屏幕色位最大值   |
|              | color              | @media (color:8){ ... }               | 确定屏幕色位     |
| grid         | 0                  | @media (grid:0){ ... }                | 确定为Bitmap屏幕 |
|              | 1                  | @media (grid:1){ ... }                | 确定为网格屏幕   |
| hover        | none               | @media (hover: none){ ... }           | 确定不可指针悬浮 |
|              | hover              | @media (hover:hover){ ... }           | 确定可指针悬浮   |
| height       | min-height /px/rem | @media (min-height: 360px){ ... }     | 确定最小视图高度 |
|              | max-height/px/rem  | @media (max-height:1000px){ ... }     | 确定最大视图高度 |
|              | height/px/rem      | @media (height:860px){ ... }          | 确定视图高度     |
| width        | min-width/px/rem   | @media (min-width:860px){ ... }       | 确定最小视图宽度 |
|              | max-width/px/rem   | @media (max-width:860px){ ... }       | 确定最大视图宽度 |
|              | width/px/rem       | @media (width:860px){ ... }           | 确定视图宽度     |
| orientation  | portrait           | @media (orientation:portrait)         | 宽小于高         |
|              | landscape          | @media (orientation:landscape)        | 高小于宽         |
| resolution   | min-resolution/dpi | @media (min-resolution:150dpi)        | 最小分辨率       |
|              | max-resolution/dpi | @media (max-resolution:150dpi)        | 最大分辨率       |
|              | resolution/dpi     | @media (resolution:150dpi)            | 确定分辨率       |

media组合关键词：and 、or 、not

```css
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
```



#### @import

https://developer.mozilla.org/en-US/docs/Web/CSS/@import