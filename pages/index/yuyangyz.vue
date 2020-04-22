<!-- 语言选择 -->
<template>
	<view>
		<scroll-view scroll-x="true" class="jhggxseert dx_jz w100 ">
			<view v-for="(sd,idx) in dhxewer" :key="idx" @tap="sddrert(idx)" :class="idx==xseerr?'act':''" class="xwerrtxe fz30 z6 pr cen  ml30 f_b cz">
				{{sd.name}}
			</view>
		</scroll-view>
		<view class="xrrtxeertx" :style="{height:xrrtxeertx+'px'}">
			<swiper class="h100" @change="jhxerert" :current="xseerr">
				<swiper-item v-for="(sd,idx) in dhxewer">
					<xzyypage></xzyypage>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	import xzyypage from "./components/xzyypage.vue"
	export default {
		data() {
			return {
				xseerr: 0,
				xrrtxeertx: '',
				dhxewer: [{
					name:this.$store.state.lanser.All,
					id: ''
				}, {
					name: this.$store.state.lanser.Country_China,
					id: ''
				}, {
					name: this.$store.state.lanser.China_GT,
					id: ''
				}, {
					name: this.$store.state.lanser.CountryChinaUG,
					id: ''
				}, {
					name: this.$store.state.lanser.CountryKoriya,
					id: ''
				}, {
					name: this.$store.state.lanser.CountryIndia,
					id: ''
				}, {
					name: this.$store.state.lanser.CountryUzbik,
					id: ''
				}, {
					name: this.$store.state.lanser.CountryEnglish,
					id: ''
				},
				{
					name:this.$store.state.lanser.Other,
					id:''
				}]
			}
		},
		components: {
			xzyypage
		},
		methods: {
			sddrert(e) {
				this.xseerr = e
			},
			jhxerert(e) {
				this.xseerr = e.detail.current
			}
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
			    title: e.title
			});
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight - 50
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>
