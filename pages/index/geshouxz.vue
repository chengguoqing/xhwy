<!-- 歌手选择 -->
<template>
	<view>
		<scroll-view scroll-x="true" class="jhggxseert dx_jz w100 ">
			<view v-for="(sd,idx) in dhxewer" :key="idx" @tap="sddrert(idx)" :class="idx==xseerr?'act':''" class="xwerrtxe fz30 z6 pr cen  ml30 f_b cz">
				{{sd.name}}
			</view>
		</scroll-view>
		<view class="xrrtxeertx" :style="{height:xrrtxeertx+'px'}" >
			<swiper class="h100" @change="jhxerert" :current="xseerr">
				<swiper-item v-for="(sd,idx) in dhxewer">
					<pages></pages>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>
<script>
	import pages from "./components/pages.vue"
	export default {
		data() {
			return {
				xseerr:0,
				xrrtxeertx:'',
				dhxewer: [{
					name:this.$store.state.lanser.All,
					id:''
				},{
					name:this.$store.state.lanser.MainlandSinger,
					id:''
				},{
					name:this.$store.state.lanser.IslandSinger,
					id:''
				},{
					name:this.$store.state.lanser.UyghurSinger,
					id:''
				},{
					name:this.$store.state.lanser.ForeignSinger,
					id:''
				}]
			}
		},
		components: {
			pages
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
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.lanser.Singers
			});
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight - 50
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
