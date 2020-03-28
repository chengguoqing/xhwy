<template>
	<view class="">
		<cdsq v-if="idxdf==0"></cdsq>
		<wdsq v-if="idxdf==1"></wdsq>
		
		<dibu :jhhbbde="jhhbbde" @call="call" :idxdf="idxdf" v-if="idxdf>=0"></dibu>
	</view>
</template>
<script>
	import cdsq from './components/cdsq.vue'
	import wdsq from './components/wdsq.vue'
	import dibu from "@/components/dibu.vue"
	export default {
		data() {
			return {
				idxdf: '',
				jhhbbde: [{
						name: '场地申请',
						icon: '../../../static/img/dsfa_a.png',
						icons: '../../../static/img/dsfb_a.png',
					},
					{
						name: '我的申请',
						icon: '../../../static/img/dsfa_b.png',
						icons: '../../../static/img/dsfb_b.png',
					}
				]
			}
		},
		components: {
			dibu,
			cdsq,
			wdsq
		},
		onLoad(e) {
			this.idxdf = e.ty || 0
		},
		methods: {
			call(e) {
				this.idxdf = e
				console.log(e)
			},
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
