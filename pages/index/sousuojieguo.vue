<template>
	<view class="btm">
		<uni-list>
			<uni-list-item thumb="../../static/img/banner.png" @tap="hf('/pages/index/geshouxq')">
				<view>{{kjhx.Singers}}：<text class="ye f_b">周杰伦</text></view>
			</uni-list-item>
		</uni-list>
		<publiclist isyhgg="2"></publiclist>
	</view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			publiclist
		},
		computed:{
			kjhx(){
				return this.$store.state.lanser
			}
		},
		methods: {
			
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title:this.$store.state.lanser.Search+"："+e.ihhdf
			})
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
