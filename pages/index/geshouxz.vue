<!-- 歌手选择 -->
<template>
	<view>
		<view class="khjxrrt">
			<icon type="search" size="16"></icon>
		</view>
		<scroll-view scroll-x="true" class="jhggxseert dx_jz w100 ">
			<view v-for="(sd,idx) in dhxewer" :key="idx" @tap="sddrert(idx)" :class="idx==xseerr?'act':''" class="xwerrtxe fz30 z6 pr cen  ml30 f_b cz">
				{{sd.name}}
			</view>
			<view class="fgrtyyxe">
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
					name:"全部",
					id:''
				},{
					name:"大陆歌手",
					id:''
				},{
					name:"港台歌手",
					id:''
				},{
					name:"维族歌手",
					id:''
				},{
					name:"外国歌手",
					id:''
				}]
			}
		},
		components: {
			pages
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
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight - 50
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
