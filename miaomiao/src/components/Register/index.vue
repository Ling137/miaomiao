<!-- 注册页 -->
<template>
	<div id="register">
		<div class="title"><p @touchstart="back">返回</p></div>

		<div>
			<span>邮箱：</span><input type="text" /> <button class="sendCodeBtn">发送验证码</button>
		</div>
		<div><span>用户名：</span><input type="text" /></div>
		<div>
			<span>密码：</span>
			<input type="password" />
		</div>
		<div><span>确认密码：</span><input type="password" /></div>
		<div><span>验证码：</span><input type="text" /></div>
		<div><button class="registerBtn">注册</button></div>
	</div>
</template>

<script>
export default {
	name: 'register',
	components: {},
	data() {
		return {}
	},
	methods: {
        back(){
            this.$router.push('/mine/login')
        }
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
#register div input{
    padding:5px 8px;
    border:1px solid skyblue;
    margin-right: 5px; 
    border-radius: 2px;
}
button.sendCodeBtn{
    padding:4px;
    border:1px solid skyblue;
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
    padding:10px 0;
    }
</style>
