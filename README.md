# vue-swiper



### Usage:

```html
<swiper :indicator="true" :auto="5e3" :effect="horizontal" :mode="0">
	<swiper-item>
		<a href="">
			<img src="https://www.abc.com/a.jpg">
		</a>
	</swiper-item>
	<swiper-item>
		<a href="">
			<img src="https://www.abc.com/b.jpg">
		</a>
	</swiper-item>
	<swiper-item>
		<a href="">
			<img src="https://www.abc.com/c.jpg">
		</a>
	</swiper-item>
</swiper>
```

### Options:

    indicator:<br>
        是否显示指示点<br>
        default: false<br><br>
    mode:<br>
        0 - 单屏滚动模式<br>
        1 - 自由滚动模式<br>
        default: 0<br><br>
    auto:<br>
        自动切换间隔时间，0则取消<br>
        default: 0<br><br>
    effect:<br>
        滑动方向<br>
        horizontal - 左右<br>
        vertical - 上下<br>
        default: 'horizontal'<br><br>
        
