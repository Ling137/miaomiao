<template>
	<div class="search_body">
		<div class="search_input">
			<div class="search_input_wrapper">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" v-model="message" />
			</div>
		</div>
		<div class="search_result">
			<h3>电影/电视剧/综艺</h3>
			<ul>
				<li>
					<div class="img"><img src="/images/movie_1.jpg" /></div>
					<div class="info">
						<p><span>无名之辈</span><span>8.5</span></p>
						<p>A Cool Fish</p>
						<p>剧情,喜剧,犯罪</p>
						<p>2018-11-16</p>
					</div>
				</li>
				<li>
					<div class="img"><img src="/images/movie_1.jpg" /></div>
					<div class="info">
						<p><span>无名之辈</span><span>8.5</span></p>
						<p>A Cool Fish</p>
						<p>剧情,喜剧,犯罪</p>
						<p>2018-11-16</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			message: '',
			movieList: [],
		}
	},
	watch: {
		// 监听双向绑定的message搜索输入信息
		message(newValue, oldValue) {
			// 方法一：   可以使用 clearTimeout()   setTimeout()  截取，设置一定时常请求一次
			// 通过设置延时定时器阻止多次触发（简单方法）
			// clearTimeout()
			// setTimeout()
			// 方法二：通过axios自带的防抖方法
			var that = this
			// 取消上一次请求
			this.cancelRequest()
			this.axios
				.get(this.baseUrl + '/cityList', {
					cancelToken: new this.axios.CancelToken(function(c) {
						that.source = c
					}),
				})
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					if (this.axios.isCancel(err)) {
						console.log('Rquest canceled', err.message) //请求如果被取消，这里是返回取消的message
					} else {
						//handle error
						console.log(err)
					}
				})
		},
	},
	methods: {
		cancelRequest() {
			if (typeof this.source === 'function') {
				this.source('终止请求')
				/**
                 * this.source<=>
                 * ƒ cancel(message) {
                        if (token.reason) {
                        // Cancellation has already been requested
                        return;
                        }

                        token.reason = new Cancel(message);
                        resolvePromise(token.reason);
                    }
                 */
			}
		},
	},
}
</script>

<style scoped>
#content .search_body {
	flex: 1;
	overflow: auto;
}
.search_body .search_input {
	padding: 8px 10px;
	background-color: #f5f5f5;
	border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_wrapper {
	padding: 0 10px;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	background-color: #fff;
	display: flex;
	line-height: 20px;
}
.search_body .search_input_wrapper i {
	font-size: 16px;
	padding: 4px 0;
}
.search_body .search_input_wrapper input {
	border: none;
	font-size: 13px;
	color: #333;
	padding: 4px 0;
	outline: none;
	margin-left: 5px;
	width: 100%;
}
/* .search_body .search_result{} */
.search_body .search_result h3 {
	font-size: 15px;
	color: #999;
	padding: 9px 15px;
	border-bottom: 1px solid #e6e6e6;
}
/* .search_body .search_result ul{} */
.search_body .search_result li {
	border-bottom: 1px #c9c9c9 dashed;
	padding: 10px 15px;
	box-sizing: border-box;
	display: flex;
}
.search_body .search_result .img {
	width: 60px;
	float: left;
}
.search_body .search_result .img img {
	width: 100%;
}
.search_body .search_result .info {
	float: left;
	margin-left: 15px;
	flex: 1;
}
.search_body .search_result .info p {
	height: 22px;
	display: flex;
	line-height: 22px;
	font-size: 12px;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1) {
	font-size: 18px;
	flex: 1;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2) {
	font-size: 16px;
	color: #fc7103;
}
</style>
