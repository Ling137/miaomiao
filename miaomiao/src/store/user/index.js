const state = {
	name: '',
}
const mutations = {
	// 状态管理中的方法名称最好使用大写
	USER_NAME(state, payload) {
		console.log('state==>', state, 'payload==>', payload)
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
