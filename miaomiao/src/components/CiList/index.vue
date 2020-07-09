<template>
	<div class="cinema_body" ref="cinema_body">
		<Loading v-if="isLoading" />
		<Scroller v-else>
			<ul>
				<li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"
							><span class="price">22.9</span> 元起</span
						>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
						<div>小吃</div>
						<div>折扣卡</div>
					</div>
				</li>
				<li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"
							><span class="price">22.9</span> 元起</span
						>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
						<div>小吃</div>
						<div>折扣卡</div>
					</div>
				</li>
				<li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"
							><span class="price">22.9</span> 元起</span
						>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
						<div>小吃</div>
						<div>折扣卡</div>
					</div>
				</li>
				<li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"
							><span class="price">22.9</span> 元起</span
						>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
						<div>小吃</div>
						<div>折扣卡</div>
					</div>
				</li>
				<li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"
							><span class="price">22.9</span> 元起</span
						>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
						<div>小吃</div>
						<div>折扣卡</div>
					</div>
				</li>
				<li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"
							><span class="price">22.9</span> 元起</span
						>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
						<div>小吃</div>
						<div>折扣卡</div>
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'CiList',
	data() {
		return {
			isLoading: true,
		}
	},
	filters: {
		//根据传过来的值设置正确的标签显示
		// formatCard(key) {
		//     var card = [
		//         { key: 'allowRefund', value: '允许退款' },
		//         { key: 'endorse', value: '赞同' },
		//         { key: 'sell', value: '折扣' },
		//         { key: 'snack', value: '小吃' },
		//     ];
		//     for(var i=0;i<card.length;i++){
		//         if(card[i].key===key){
		//             return card[i].value;
		//         }
		//
		//     }
		//     return '';
		// },
		// 更换标签颜色
		// classCard(key) {
		// 	var card = [
		// 		{ key: 'allowRefund', value: 'or' },
		// 		{ key: 'endorse', value: 'or' },
		// 		{ key: 'sell', value: 'bl' },
		// 		{ key: 'snack', value: 'bl' },
		// 	]
		// 	for (var i = 0; i < card.length; i++) {
		// 		if (card[i].key === key) {
		// 			return card[i].value;
		// 		}
		// 	}
		// 	return '';
		// },
	},
	mounted() {
		// new BScroll(this.$refs.cinema_body, {})
		setTimeout(() => {
			this.isLoading = false
		}, 2000)
	},
}
</script>

<style scoped>
#content .cinema_body {
	flex: 1;
	overflow: auto;
}
.cinema_body ul {
	padding: 20px;
}
.cinema_body li {
	border-bottom: 1px solid #e6e6e6;
	margin-bottom: 20px;
}
.cinema_body div {
	margin-bottom: 10px;
}
.cinema_body .q {
	font-size: 11px;
	color: #f03d37;
}
.cinema_body .price {
	font-size: 18px;
}
.cinema_body .address {
	font-size: 13px;
	color: #666;
}
.cinema_body .address span:nth-of-type(2) {
	float: right;
}
.cinema_body .card {
	display: flex;
}
.cinema_body .card div {
	padding: 0 3px;
	height: 15px;
	line-height: 15px;
	border-radius: 2px;
	color: #f90;
	border: 1px solid #f90;
	font-size: 13px;
	margin-right: 5px;
}
.cinema_body .card div.or {
	color: #f90;
	border: 1px solid #f90;
}
.cinema_body .card div.bl {
	color: #589daf;
	border: 1px solid #589daf;
}
</style>
