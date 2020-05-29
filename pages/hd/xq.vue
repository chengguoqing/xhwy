<!-- 活动详情 -->
<template>
	<view class="bgff pt10 btm">
		<activelist :isxq="true" @pinglun="pinglun"></activelist>
		<pllist></pllist>
		
		<pinglun ref="jhdrrtt"></pinglun>
	</view>
</template>
<script>
	import activelist from "@/components/activelist.vue"
	import pllist from "@/components/pllist.vue"
	import pinglun from "@/components/pinglun.vue"
	export default {
		data() {
			return {}
		},
		components: {
			pllist,
			activelist,
			pinglun
		},
		methods: {
			pinglun(){
				this.$refs.jhdrrtt.open()
			},
		},
		mounted() {}
	}
</script>
<style scoped>

</style>
