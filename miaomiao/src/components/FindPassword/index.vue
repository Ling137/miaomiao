<!-- 找回密码 -->
<template>
	<div class="">
		<div class="title"><p @touchstart="back">返回</p></div>
		找回密码
	</div>
</template>

<script>
export default {
	name: 'findPassword',
	components: {},
	data() {
		return {}
	},
	methods: {
		back() {
			this.$router.push('/mine/login')
		},
	},
	created() {},
	mounted() {},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.title {
	text-align: center;
	font-size: 24px;
	font-family: cursive;
	/* text-shadow: 6px 2px 2px #333; */
	color: deeppink;
}
</style>
