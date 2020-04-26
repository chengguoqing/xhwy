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
		lanser: LanguageZH,
		SingerTypeId:1,
		SingerLangId:1,
		seartext:'', // 歌手选择的输入框内容
		indexbanner:'' // 首页的轮播图
	},
	mutations: {
		setlanser(state,data) {
			let uindex = uni.getStorageSync('gcook')
			if (data==0){ // 0汉语
				state.lanser = LanguageZH
				state.indexbanner = uindex.BannerZH
			}
			if (data==1){ // 
				state.lanser = LanguageUG
				state.indexbanner = uindex.BannerUG
			}
			if (data==2){ // 
				state.lanser = LanguageEN
				state.indexbanner = uindex.BannerEN
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
