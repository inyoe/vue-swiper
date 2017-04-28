# vue-swiper



## Usage:

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

## Options:

    indicator:
        是否显示指示点
        default: false
    mode:
        0 - 单屏滚动模式
        1 - 自由滚动模式
        default: 0
    auto:
        自动切换间隔时间，0则取消
        default: 0
    effect:
        滑动方向
        horizontal - 左右
        vertical - 上下
        default: 'horizontal'
        
