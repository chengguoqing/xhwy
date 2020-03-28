<template>
	<view class="pm120">
		<cpage v-if="idxdf==0"></cpage>
		<fenlier v-if="idxdf==1" tyer="1"></fenlier>
		<fenlier v-if="idxdf==2" tyer="2"></fenlier>
		<dibu :jhhbbde="jhhbbde" @call="call" :idxdf="idxdf" v-if="idxdf>=0"></dibu>

	</view>

</template>
<script>
	import dibu from "@/components/dibu.vue"
	import cpage from "./components/cpage.vue"
	import fenlier from "./components/fenlier.vue"
	export default {
		data() {
			return {
				idxdf: 0,
				jhhbbde: [{
						name: '场地管理',
						icon: '../../../static/img/fdgdfga_a.png',
						icons: '../../../static/img/fdgdfgb_a.png',
					},
					{
						name: '场地分配',
						icon: '../../../static/img/fdgdfga_b.png',
						icons: '../../../static/img/fdgdfgb_b.png',
					},
					{
						name: '分配记录',
						icon: '../../../static/img/fdgdfga_c.png',
						icons: '../../../static/img/fdgdfgb_c.png',
					}
				]
			}
		},
		components: {
			dibu,
			cpage,
			fenlier
		},
		methods: {
			call(e) {
				this.idxdf = e
				console.log(e)
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/gongzuo/guanli/cdxx'
			})
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>
