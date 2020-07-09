<template>
	<div class="city_body">
		<div class="city_list">
			<Loading v-if="isLoading" />
			<Scroller v-else ref="city_list">
				<div>
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li
								v-for="item in hotList"
								:key="item.id"
								@tap="handleToCity(item.citysName, item.id)"
							>
								{{ item.citysName }}
							</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="item in cityList" :key="item.id">
							<h2>{{ item.index }}</h2>
							<ul>
								<li
									v-for="itemlist in item.list"
									:key="itemlist.id"
									@tap="
										handleToCity(itemlist.name, itemlist.id)
									"
								>
									{{ itemlist.name }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Scroller>
		</div>

		<div class="city_index">
			<ul>
				<li
					v-for="(item, index) in cityList"
					:key="item.id"
					@touchstart="handleToIndex(index)"
				>
					{{ item.index }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import formatPinyin from '@/utils/tool.js'
export default {
	name: 'City',
	data() {
		return {
			cityList: [],
			hotList: [],
			isLoading: true,
		}
	},
	mounted() {
		console.log('city mounted')
		// setTimeout(() => {
		// 	this.isLoading = false
		// }, 1500)
		var cityList = window.localStorage.getItem('cityList')
		var hotList = window.localStorage.getItem('hotList')
		if (cityList && hotList) {
			this.cityList = JSON.parse(cityList) //设置进data中
			this.hotList = JSON.parse(hotList)
			this.isLoading = false
		} else {
			this.axios.get(this.baseUrl + '/cityList').then((res) => {
				console.log(res)
				if (res.status === 200) {
					this.isLoading = false
					var data = res.data.provinces
					var { cityList, hotList } = this.formatCityList(data)
					console.log(cityList)
					this.cityList = cityList //设置进data中
					this.hotList = hotList //设置进data中
					window.localStorage.setItem(
						'cityList',
						JSON.stringify(cityList)
					) //由于localStorage不能存储数组，所以需要转化为数组型字符串
					window.localStorage.setItem(
						'hotList',
						JSON.stringify(hotList)
					)
				}
			})
		}
	},
	methods: {
		// 处理城市列表cityList
		formatCityList(data) {
			var cityList = []
			var hotList = []
			let pro = data.map((el) => {
				return el.citys
			})
			var cities = []
			pro.map(function(value, index, array) {
				cities = cities.concat(value)
			})
			//list是所有城市的集合数组
			cities.filter((value, index, arr) => {
				value.id = index + 1 //加上城市id
				value.py = formatPinyin(value.citysName) //加上城市拼音
				if (
					value.citysName == '北京市' ||
					value.citysName == '上海市' ||
					value.citysName == '广州市' ||
					value.citysName == '深圳市' ||
					value.citysName == '杭州市' ||
					value.citysName == '天津市' ||
					value.citysName == '南京市' ||
					value.citysName == '成都市'
				) {
					value.hot = 1 //判断热门城市
				} else {
					value.hot = 0
				}
				// return value.id
			})
			console.log(cities)
			//获取热门城市
			for (var i = 0; i < cities.length; i++) {
				if (cities[i].hot === 1) {
					hotList.push(cities[i])
				}
			}

			for (var i = 0; i < cities.length; i++) {
				var firstLetter = cities[i].py.substring(0, 1).toUpperCase() //获取拼音首字母
				if (toCom(firstLetter)) {
					//新添加索引index
					cityList.push({
						index: firstLetter,
						list: [{ name: cities[i].citysName, id: cities[i].id }],
					})
				} else {
					//累加到已有index中
					for (var j = 0; j < cityList.length; j++) {
						if (cityList[j].index === firstLetter) {
							cityList[j].list.push({
								name: cities[i].citysName,
								id: cities[i].id,
							})
						}
					}
				}
			}
			cityList.sort((n1, n2) => {
				if (n1.index > n2.index) {
					return 1
				} else if (n1.index < n2.index) {
					return -1
				} else {
					return 0
				}
			})
			function toCom(firstLetter) {
				//如果是首次取到首字母，不同于其他首字母，则执行将首字母添加进cityList中，否则返回false,执行else,添加到对应首字母的数组list中
				for (var i = 0; i < cityList.length; i++) {
					if (cityList[i].index === firstLetter) {
						return false
					}
				}
				return true
			}
			// console.log(hotList)
			// console.log(cityList)
			return { cityList, hotList }
		},
		//点击索引进入对应值
		handleToIndex(index) {
			var h2 = this.$refs.city_sort.getElementsByTagName('h2')
			//parentNode就是父节点<div class="city_list">
			// this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop//用better-scroll时原生的scrollTop就不管用了
			//使用better-scroll中的方法
			this.$refs.city_list.toScrollTop(-h2[index].offsetTop)
		},
		handleToCity(name, id) {
			this.$store.commit('city/CITY_INFO', { name, id })
			window.localStorage.setItem('nowNm', name)
			window.localStorage.setItem('nowId', id)
			this.$router.push('/movie/nowPlaying')
		},
	},
}
</script>

<style scoped>
#content .city_body {
	margin-top: 45px;
	display: flex;
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
}
.city_body .city_list {
	flex: 1;
	overflow: auto;
	background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
	background-color: transparent;
	width: 0;
}
.city_body .city_hot {
	margin-top: 20px;
}
.city_body .city_hot h2 {
	padding-left: 15px;
	line-height: 30px;
	font-size: 14px;
	background: #f0f0f0;
	font-weight: normal;
}
/* .city_body .city_hot ul{} */
.city_body .city_hot ul li {
	float: left;
	background: #fff;
	width: 29%;
	height: 33px;
	margin-top: 15px;
	margin-left: 3%;
	padding: 0 4px;
	border: 1px solid #e6e6e6;
	border-radius: 3px;
	line-height: 33px;
	text-align: center;
	box-sizing: border-box;
}
/* .city_body .city_sort{} */
.city_body .city_sort div {
	margin-top: 20px;
}
.city_body .city_sort h2 {
	padding-left: 15px;
	line-height: 30px;
	font-size: 14px;
	background: #f0f0f0;
	font-weight: normal;
}
.city_body .city_sort ul {
	padding-left: 10px;
	margin-top: 10px;
}
.city_body .city_sort ul li {
	line-height: 30px;
	line-height: 30px;
}
.city_body .city_index {
	width: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	border-left: 1px #e6e6e6 solid;
}
</style>
