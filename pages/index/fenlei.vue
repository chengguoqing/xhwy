<!-- 语言选择 -->
<template>
	<view>
		<!-- <view class="khjxrrt">
			<icon type="search" size="16"></icon>
		</view> -->
		<scroll-view scroll-x="true" class="jhggxseert dx_jz w100 ">
			<view v-for="(sd,idx) in dhxewer" :key="idx" @tap="sddrert(idx)" :class="idx==xseerr?'act':''" class="xwerrtxe fz30 z6 pr cen  ml30 f_b cz">
				{{sd.name}}
			</view>
		</scroll-view>
		<view class="xrrtxeertx" :style="{height:xrrtxeertx+'px'}">
			<swiper class="h100" @change="jhxerert" :current="xseerr">
				<swiper-item v-for="(sd,idx) in dhxewer">
					<keep-alive>
						<component is="xzyypage" v-if="idx==xseerr" :SongTypeId="sd.id"></component>
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
				xseerr: 0,
				xrrtxeertx: '',
				dhxewer: [{
					name: this.$store.state.lanser.All,
					id: 1
				}, {
					name: this.$store.state.lanser.SongTypePop,
					id: 2
				}, {
					name: this.$store.state.lanser.SongTypeDance,
					id: 3
				}, {
					name: this.$store.state.lanser.SongTypeOld,
					id:4
				}, {
					name: this.$store.state.lanser.SongTypeFolk,
					id: 5
				}, {
					name: this.$store.state.lanser.SongTypeChild,
					id: 6
				}, {
					name: this.$store.state.lanser.SongTypeDrama,
					id:7
				}, {
					name: this.$store.state.lanser.DJ,
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
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"/pages/index/sousuo"
			})
		},
		methods: {
			sddrert(e) {
				this.xseerr = e
			},
			jhxerert(e) {
				this.xseerr = e.detail.current
			},
			
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
