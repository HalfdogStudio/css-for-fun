## CSS，超越排版的艺术

> 注意: 多图预警！
> 
> 注意：手机app似乎不能正确播放gif图像。

很多年前，css被创造出来，用来排版html页面。

开始的时候只是为了排版，控制布局，指定文字、段落、图片和其他元素的样式。

现在，css所能实现的效果已经远远超出最初设计者的想象了吧。

css在人们手中已经不仅仅是排版工具，已然成为艺术创作的工具。

你知道你的浏览器能做到什么吗？仅仅几个简单的html标签和css样式？

[Code Pen](http://codepen.io/tag/css3/)上有很多有意思的示例。

## 绘图

按理说，它不怎么该干这种事情。但这也显示了CSS的强大。

[Opera Logo](http://v2.desandro.com/articles/opera-logo-css/)
[Single Element Chrome Logo(请谷歌浏览器打开)](http://codepen.io/micjamking/pen/xEbrd)
[Single Element IPhone written in CSS3](http://cssdeck.com/labs/creating-single-element-iphone-using-css3)
[Single Element Spinners](https://github.com/lukehaas/css-loaders)
[浏览器CSS3 图标](http://codepen.io/jordanoaragao/pen/xihoe)

### 示例一： 单标签chrome logo

我们画个chrome logo吧

![chrome-css-paint.gif](http://upload-images.jianshu.io/upload_images/927981-68681b68023d681e.gif?imageMogr2/auto-orient/strip)

可以看到，基本是通过“堆叠” `background-image`，这个属性有两个我们能用上的特性：

- 在CSS3中支持multiple background image，最靠前的图像越在上层。
- 可以设置渐变图形。

如果通过堆叠很难实现有些图形元素，可以通过增加伪元素来继续堆叠修补。

### 示例二： 单标签firefox Logo

firefox这个例子更加复杂一些，使用了另一个重要特性`box-shadow`，我们用到了：

- CSS3中对多个box-shadow的支持，越靠前的阴影越在上层

![firefox.gif](http://upload-images.jianshu.io/upload_images/927981-139433f4de804dd9.gif?imageMogr2/auto-orient/strip)

可以看到通过层叠`box-shadow`可以绘制复杂图形。

![firefox-mouth.gif](http://upload-images.jianshu.io/upload_images/927981-40f2f7b265afb900.gif?imageMogr2/auto-orient/strip)

最后有些不方便用同一个图形阴影层叠的部分，可以添加伪元素。

以上图像中又利用了`background`属性：

- 默认的`background-clip`是`border-box`，所以可以让渐变背景显示在透明边框上。
- 通过设置不同长度边框和长宽实现三角形。

这里注意一个细节。火狐中(chromium也是)：width为0的块背景不会显示在边框上啊。。。

## 练习： 单标签太极标志

![taiji-css-paint.gif](http://upload-images.jianshu.io/upload_images/927981-fda2e8dd73d68148.gif?imageMogr2/auto-orient/strip)

在网络上可以找到一个标签的，三个标签的，六个标签的CSS绘制太极图示例。

你能用一个标签实现吗？

## 动画

CSS提供了一些功能让页面设计者能更直观生动的设计页面。

[神奇的组合图形动画](http://codepen.io/micjamking/pen/obdGw)
[CSS 折纸效果](https://developer.mozilla.org/en-US/demos/detail/paperfold-css)
[CSS Tricks](https://developer.mozilla.org/en-US/demos/detail/css-tricks/launch)

动画有2D的，有3D的。

嗯，2D的，让上面例子中的图标转起来就行，我的例子中都随手加上了。

`transition`能方便控制过度，`animation`则可以用来生成复杂动画。

### 旋转太极

transition效果


![taiji.gif](http://upload-images.jianshu.io/upload_images/927981-073d10fac89c1bb7.gif?imageMogr2/auto-orient/strip)


### 滚来滚去的Chromium


![chromium.gif](http://upload-images.jianshu.io/upload_images/927981-550d74ebe06c687b.gif?imageMogr2/auto-orient/strip)

2D动画，在一个animation中设置多个动画。

###  九字护身符走马灯

![carousel.gif](http://upload-images.jianshu.io/upload_images/927981-01e3c9d3e624b344.gif?imageMogr2/auto-orient/strip)

3D空间的变换和动画

### 色声香触味法

![cube.gif](http://upload-images.jianshu.io/upload_images/927981-05bd00eac520529e.gif?imageMogr2/auto-orient/strip)

经典的六面体。

## 结语

我不是艺术家，也不是程序员，甚至不算是个合格的前端。但这几天仔细研究，真真切切感受到CSS带来的强大的图形构建和动画特效的特性。

它已经超越简单的文字排版，进入了多媒体的时代。

ps：不要以为CSS不能用来播放音频

有兴趣检查源码的同学可以看看，我把它放在github上：[]().



Have fun！
