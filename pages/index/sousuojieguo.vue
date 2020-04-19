<template>
	<view class="btm">
		<uni-list>
			<uni-list-item thumb="../../static/img/banner.png" @tap="hf('/pages/index/geshouxq')">
				<view>歌手：<text class="ye f_b">周杰伦</text></view>
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
		methods: {
			
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title:"搜索："+e.ihhdf
			})
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
