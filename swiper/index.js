import swiperComponent from './swiper'
import swiperItemComponent from './swiper-item'

export default {
	install(Vue) {
		Vue.component('swiper', swiperComponent);
		Vue.component('swiper-item', swiperItemComponent);
	}
}