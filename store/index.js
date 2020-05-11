import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user_info:'' // 用户信息
	},
	mutations: {
		setuserinfo(state,data) {
			state.user_info = data
		}
	}
})

export default store
