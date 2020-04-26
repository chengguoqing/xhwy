<!-- 语言选择 -->
<template>
	<view>
		<scroll-view scroll-x="true" class="jhggxseert dx_jz w100 ">
			<view v-for="(sd,idx) in dhxewer" :key="idx" @tap="sddrert(idx)" :class="idx==xseerr?'act':''" class="xwerrtxe fz30 z6 pr cen  ml30 f_b cz">
				{{sd.name}}
			</view>
			<text class="sdfrtyxe"></text>
			<icon type="search" size="20" class="dsftryteer" @tap="isSearch=true"></icon>
		</scroll-view>
		<view class="xrrtxeertx" :style="{height:xrrtxeertx+'px'}">
			<swiper class="h100" @change="jhxerert" :current="xseerr">
				<swiper-item v-for="(sd,idx) in dhxewer">
					<keep-alive>
						<component is="xzyypage" v-if="idx==xseerr" :isSearch="isSearch" @closertr="isSearch=false"  :SongTypeId="sd.id" :urls="urls"></component>
					
					</keep-alive>
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
				isSearch:false,
				xseerr: 0,
				xrrtxeertx: '',
				urls:'',
				dhxewer: [{
					name:this.$store.state.lanser.All,
					id: 1
				}, {
					name: this.$store.state.lanser.Country_China,
					id: 2
				}, {
					name: this.$store.state.lanser.China_GT,
					id: 3
				}, {
					name: this.$store.state.lanser.CountryChinaUG,
					id: 4
				}, {
					name: this.$store.state.lanser.CountryKoriya,
					id: 5
				}, {
					name: this.$store.state.lanser.CountryIndia,
					id: 6
				}, {
					name: this.$store.state.lanser.CountryUzbik,
					id: 7
				}, {
					name: this.$store.state.lanser.CountryEnglish,
					id: 8
				},
				{
					name:this.$store.state.lanser.Other,
					id:9
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
			this.urls = e.fname
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight - 50
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>
