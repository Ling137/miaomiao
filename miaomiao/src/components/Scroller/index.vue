<template>
	<div class="wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'Scroller',
	props: {
		handleToScroll: {
			type: Function,
			default: function() {},
		},
		handleToTouchEnd: {
			type: Function,
			default: function() {},
		},
	},
	mounted() {
		var scroll = new BScroll(this.$refs.wrapper, {
			tap: true,
			probeType: 1, //设置可以scroll，触发方法，1有节流效果，所以慢划才会触发
        })
        this.scroll = scroll;
		// 滑动时触发方法的方法需要通过父子传值方式传递出去
		scroll.on('scroll', (pos) => {
			console.log('scroll')
			this.handleToScroll(pos) //通过props将方法传递出去
		})
		scroll.on('touchEnd', (pos) => {
			console.log('touchEnd')
			this.handleToTouchEnd(pos)
		})
    },
    methods:{
        toScrollTop:function(y){
            this.scroll.scrollTo(0,y);//better-scroll封装的滚动方法，参数为x,y,这里x轴不用滚动所以为0
        }
    }
}
</script>

<style>
.wrapper {
	height: 100%;
}
</style>
