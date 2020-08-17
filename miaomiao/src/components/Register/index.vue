<!-- 注册页 -->
<template>
	<div id="register">
		<!-- <div class="title"><p @touchstart="back">返回</p></div> -->

		<div>
			<span>邮箱：</span><input v-model="email" type="text" />
			<button class="sendCodeBtn" @touchstart="handleToVerify">
				发送验证码
			</button>
		</div>
		<div><span>用户名：</span><input v-model="username" type="text" /></div>
		<div>
			<span>密码：</span>
			<input v-model="password" type="password" />
		</div>
		<div>
			<span>确认密码：</span
			><input v-model="passwordAgain" type="password" />
		</div>
		<div><span>验证码：</span><input v-model="verify" type="text" /></div>
		<div>
			<button class="registerBtn" @touchstart="handleToRegister">
				注册
			</button>
		</div>
		<div class="register_link">
			<router-link to="/mine/login">立即登录</router-link>
			<router-link to="/mine/findPassword">找回密码</router-link>
		</div>
	</div>
</template>

<script>
import { messageBox } from '@/components/JS'
export default {
	name: 'register',
	components: {},
	data() {
		return {
			email: '',
			username: '',
			password: '',
			passwordAgain: '',
			verify: '',
		}
	},
	methods: {
		back() {
			this.$router.push('/mine/login')
		},
		handleToVerify() {
			this.axios
				.get('/api2/users/verify?email=' + this.email)
				.then((res) => {
					console.log(res)
					var status = res.data.status
					if (status === 0) {
						messageBox({
							title: '提示',
							content: '验证码发送成功',
							confirm: '确定',
						})
					} else {
						messageBox({
							title: '提示',
							content: '验证码发送失败',
							confirm: '确定',
						})
					}
				})
		},
		handleToRegister() {
			// if (this.password !== this.passwordAgain) {
			// 	messageBox({
			// 		title: '提示',
			// 		content: '两次输入密码不一致',
			// 		confirm: '确定',
			// 	})
			// } else {
			// 	console.log('密码一致')
			// }
			this.axios
				.post('/api2/users/register', {
					username: this.username,
					password: this.password,
					email: this.email,
					verify: this.verify,
				})
				.then((res) => {
					console.log(res)
                    var status = res.data.status
                    var _this = this
					if (status === 0) {
						messageBox({
							title: '提示',
							content: res.data.msg,
                            confirm: '确定',
                            handleConfirm(){
                                _this.$router.push('/mine/login')
                            }
						})
					} else {
						messageBox({
							title: '提示',
							content: res.data.msg+',请重新注册',
							confirm: '确定'
						})
					}
				})
		},
	},
	created() {},
	mounted() {},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
#register div {
	padding: 10px 16px;
	display: flex;
	align-items: center;

	/* justify-content: center; */
}
#register div span {
	width: 80px;
	font-size: 16px;
	text-align: right;
}
#register div input {
	padding: 5px 8px;
	border: 1px solid skyblue;
	margin-right: 5px;
	border-radius: 2px;
}
button.sendCodeBtn {
	padding: 4px;
	border: 1px solid skyblue;
	border-radius: 4px;
	background: #fff;
	color: blue;
}
.title {
	text-align: center;
	font-size: 24px;
	font-family: cursive;
	/* text-shadow: 6px 2px 2px #333; */
	color: deeppink;
}
.registerBtn {
	width: 100%;
	height: 100%;
	background: #e54847;
	border-radius: 3px;
	border: none;
	display: block;
	color: white;
	font-size: 20px;
	padding: 10px 0;
}

.register_link {
	display: flex;
	justify-content: space-between;
}
.register_link a {
	text-decoration: none;
	margin: 0 5px;
	font-size: 12px;
	color: #e54847;
}
</style>
