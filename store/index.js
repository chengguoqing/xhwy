import Vue from 'vue'
import Vuex from 'vuex'
import {
	LanguageZH,
	LanguageEN,
	LanguageUG
} from '@/static/js/yuyan'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		lanser: LanguageZH
	},
	mutations: {
		setlanser(state,data) {
			if (data==0){ // 0汉语
				state.lanser = LanguageZH
			}
			if (data==1){ // 
				state.lanser = LanguageUG
			}
			if (data==2){ // 
				state.lanser = LanguageEN
			}
			uni.setStorage({
				key:"lanindex",
				data:data
			})
			uni.setTabBarItem({
			  index: 0,
			  text: state.lanser.Select
			})
			uni.setTabBarItem({
			  index: 1,
			  text: state.lanser.Selected
			})
			uni.setTabBarItem({
			  index: 2,
			  text: state.lanser.Control
			})
			uni.setTabBarItem({
			  index: 3,
			  text: state.lanser.Other
			})
			
		}
	}
})

export default store
