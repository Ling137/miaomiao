<template>
	<div>
		<!-- Hello Mine -->
		<Header title="我的电影" />
		<div id="content">
			<!-- <Login /> -->
            <router-view />
		</div>
		<TabBar />
	</div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'

export default {
	name: 'Mine',
	components: {
		Header,
		TabBar,
		Login,
	},
}
</script>

<style scoped>
#content .login_body {
	width: 100%;
}
</style>
