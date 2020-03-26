<template>
	<view>
		 <web-view :src="urls"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				urls:""
			}
		},
		components: {
			
		},
		methods: {
			
		},
		onLoad(e) {
			this.urls = e.urls
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
