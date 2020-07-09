<template>
	<div class="movie_body" ref="movie_body">
		<Loading v-if="isLoading" />
		<Scroller
			v-else
			:handleToScroll="handleToScroll"
			:handleToTouchEnd="handleToTouchEnd"
		>
			<ul>
				<li class="pullDownMsg">{{ pullDownMsg }}</li>
				<li>
					<div class="pic_show" @tap="handleToDetail">
						<img src="/images/movie_1.jpg" />
					</div>
					<div class="info_list">
						<h2>无名之辈</h2>
						<p>观众评 <span class="grade">9.2</span></p>
						<p>主演: 陈建斌,任素汐,潘斌龙</p>
						<p>今天55家影院放映607场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_2.jpg" />
					</div>
					<div class="info_list">
						<h2>
							毒液：致命守护者<img
								v-if="true"
								src="@/assets/maxs.png"
								alt="3dlogo"
							/>
						</h2>
						<p>观众评 <span class="grade">9.3</span></p>
						<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
						<p>今天56家影院放映443场</p>
					</div>
					<div class="btn_mall">true 购票</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_1.jpg" />
					</div>
					<div class="info_list">
						<h2>
							无名之辈<img
								v-if="true"
								src="@/assets/maxs.png"
								alt="3dlogo"
							/>
						</h2>
						<p>观众评 <span class="grade">9.2</span></p>
						<p>主演: 陈建斌,任素汐,潘斌龙</p>
						<p>今天55家影院放映607场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_2.jpg" />
					</div>
					<div class="info_list">
						<h2>毒液：致命守护者</h2>
						<p>观众评 <span class="grade">9.3</span></p>
						<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
						<p>今天56家影院放映443场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_1.jpg" />
					</div>
					<div class="info_list">
						<h2>无名之辈</h2>
						<p>观众评 <span class="grade">9.2</span></p>
						<p>主演: 陈建斌,任素汐,潘斌龙</p>
						<p>今天55家影院放映607场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_2.jpg" />
					</div>
					<div class="info_list">
						<h2>毒液：致命守护者</h2>
						<p>观众评 <span class="grade">9.3</span></p>
						<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
						<p>今天56家影院放映443场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_1.jpg" />
					</div>
					<div class="info_list">
						<h2>无名之辈</h2>
						<p>观众评 <span class="grade">9.2</span></p>
						<p>主演: 陈建斌,任素汐,潘斌龙</p>
						<p>今天55家影院放映607场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show">
						<img src="/images/movie_2.jpg" />
					</div>
					<div class="info_list">
						<h2>毒液：致命守护者</h2>
						<p>观众评 <span class="grade">9.3</span></p>
						<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
						<p>今天56家影院放映443场</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
	name: 'NowPlaying',
	data() {
		return {
			movieList: [],
			pullDownMsg: '',
            isLoading: true,
            preCityId:-1,
		}
	},
	activated() {
        console.log(111)
        var cityId = this.$store.state.city.id;
        if(this.preCityId===cityId){return;}//使用一个preCityId与当前的cityId进行比较，若相同则不触发加载，否则触发（即更换城市后触发加载）
        this.isLoading=true;
		setTimeout(() => {
			this.isLoading = false
		}, 2000)
		this.axios
			.get(this.baseUrl + '/movieOnInfoList?cityId=' + cityId)
			.then((res) => {
                console.log(res)
                this.preCityId=cityId;
				//数据渲染完毕之后
				// this.$neckTick(() => {
				// 调用BScroll
				// var scroll = new BScroll(this.$refs.movie_body, {
				// 	tap: true,
				// 	probeType: 1, //设置可以scroll，触发方法，1有节流效果，所以慢划才会触发
				// })
				// // 滑动时触发方法
				// scroll.on('scroll', (pos) => {
				// 	console.log('scroll')
				// 	if (pos.y > 30) {
				// 		this.pullDownMsg = '正在更新中'
				// 	}
				// })
				// //滑动结束触发方法
				// scroll.on('touchEnd', (pos) => {
				// 	console.log('touchend')
				// 	if (pos.y > 30) {
				// 		//  this.axios.get('/api/movieOnInfoList?cityId=11').then((res)=>{
				// 		//         var msg = res.data.msg;
				// 		//         if( msg === 'ok' ){
				// 		this.pullDownMsg = '更新成功'
				// 		setTimeout(() => {
				// 			// this.movieList = res.data.data.movieList;
				// 			this.pullDownMsg = ''
				// 		}, 1000)

				// 		//     }
				// 		// });
				// 	}
				// })
				// })
			})
	},
	methods: {
		handleToDetail() {
			console.log('handleToDetail')
		},
		handleToScroll(pos) {
			if (pos.y > 30) {
				this.pullDownMsg = '正在更新中'
			}
		},
		handleToTouchEnd(pos) {
			if (pos.y > 30) {
				//  this.axios.get('/api/movieOnInfoList?cityId=11').then((res)=>{
				//         var msg = res.data.msg;
				//         if( msg === 'ok' ){
				this.pullDownMsg = '更新成功'
				setTimeout(() => {
					// this.movieList = res.data.data.movieList;
					this.pullDownMsg = ''
				}, 1000)
			}
			// });
		},
	},
}
</script>

<style scoped>
#content .movie_body {
	flex: 1;
	overflow: auto;
}
.movie_body ul {
	margin: 0 12px;
	overflow: hidden;
}
.movie_body ul li {
	margin-top: 12px;
	display: flex;
	align-items: center;
	border-bottom: 1px #e6e6e6 solid;
	padding-bottom: 10px;
}
.movie_body .pic_show {
	width: 64px;
	height: 90px;
}
.movie_body .pic_show img {
	width: 100%;
}
.movie_body .info_list {
	margin-left: 10px;
	flex: 1;
	position: relative;
}
.movie_body .info_list h2 {
	font-size: 17px;
	line-height: 24px;
	width: 150px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.movie_body .info_list p {
	font-size: 13px;
	color: #666;
	line-height: 22px;
	width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.movie_body .info_list .grade {
	font-weight: 700;
	color: #faaf00;
	font-size: 15px;
}
.movie_body .info_list img {
	width: 50px;
	position: absolute;
	right: 10px;
	top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
	width: 47px;
	height: 27px;
	line-height: 28px;
	text-align: center;
	background-color: #f03d37;
	color: #fff;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
}
.movie_body .btn_pre {
	background-color: #3c9fe6;
}
.movie_body .pullDownMsg {
	margin: 0;
	padding: 0;
	border: 0;
	text-align: center;
	color: #888;
}
</style>
