const state = {
	name: '',
	// headImg:''
}
const mutations = {
    // 状态管理中的方法名称最好使用大写
	USER_NAME(state, payload) {
		state.name = payload.name
	},
}
const actions = {}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
