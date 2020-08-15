<!-- 个人中心 -->
<template>
	<div class="">
		个人中心:
		<!-- a标签会和touchstart出现冲突
         -->
		<!-- <a href="#" @touchstart="handleToLogout">退出</a> -->
		<button class="logoutBtn" @touchstart="handleToLogout">退出</button>
		<br />
		用户名:{{ $store.state.user.name }}
		<br />
		用户头像：<br />
		<img :src="headImg" alt="" />
	</div>
</template>

<script>
import axios from 'axios'
import messageBox from '@/components/JS'
export default {
	name: 'center',
	components: {},
	data() {
		return {
			name: '',
			headImg: '',
		}
	},
	methods: {
		handleToLogout() {
			this.axios
				.get('/api2/users/logout')
				.then((res) => {
					console.log(res.data)
					let status = res.data.status
                    var This = this
                    this.$store.commit('user/USER_NAME',{
                        name:''
                    })
					This.$router.push('/mine/login')
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
	// 组件内路由守卫：路由跳转之前/不！能！获取组件实例 `this`
	beforeRouteEnter(to, from, next) {
		// console.log("to==>",to,"from==>",from,"next==>",next)
		axios.post('/api2/users/getUser').then((res) => {
			console.log('获取用户信息：', res.data)
			var status = res.data.status
			if (status === 0) {
                // 由于路由跳转前的守卫不能读取this,所以this.name = res.data.data.username不可用
                // 可以通过next(vm=>{})的方式进行获取数据内容
				next(vm=>{
                    vm.$store.commit('user/USER_NAME',{
                        name:res.data.data.username
                    })
                })
			} else {
				next('/mine/login')
			}
		})
	},

	created() {},
	mounted() {},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.logoutBtn {
	border: none;
	background: #fff;
	color: blue;
}
/* 消除button点击后的边框 */
button:focus {
	outline: 0;
}
</style>
