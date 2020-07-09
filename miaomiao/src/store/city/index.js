const state = {
	name: window.localStorage.getItem('nowNm')||'北京市',
	id: window.localStorage.getItem('nowId')||635,
}
const mutations = {
    // 状态管理中的方法名称最好使用大写
	CITY_INFO(state, payload) {
		state.name = payload.name
		state.id = payload.id
	},
}
const actions = {}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
