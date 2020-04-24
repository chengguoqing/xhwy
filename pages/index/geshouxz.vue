<!-- 歌手选择 -->
<template>
	<view>
		<scroll-view scroll-x="true" class="jhggxseert dx_jz w100 ">
			<view v-for="(sd,idx) in dhxewer" :key="idx" @tap="sddrert(idx)" :class="idx==xseerr?'act':''" class="xwerrtxe fz30 z6 pr cen  ml30 f_b cz">
				{{sd.name}}
			</view>
		</scroll-view>
		
			<view class="kjhgder pt20 pm20">
				<text v-for="(sd,idx) in kjhder" :key="idx" @tap="hhsf(idx)" class="kjhggdert" :class="idxse==idx?'act':''">{{sd}}</text>
			</view>
		<view class="xrrtxeertx" :style="{height:xrrtxeertx+'px'}" >
			<swiper class="h100" @change="jhxerert" :current="xseerr">
				<swiper-item v-for="(sd,idx) in dhxewer">
					<keep-alive>
						<component :SingerLangId="SingerLangId" :SingerTypeId="SingerTypeId" is="pages" v-if="idx==xseerr" :ref="'sseert'+xseerr"></component>
					</keep-alive>
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
				SingerLangId:1,
				SingerTypeId:1,
				xseerr:0,
				idxse: 0,
				xrrtxeertx:'',
				kjhder: [this.$store.state.lanser.All, this.$store.state.lanser.MaleSingerNew,this.$store.state.lanser.FemaleSingerNew,this.$store.state.lanser.Group],
				dhxewer: [{
					name:this.$store.state.lanser.All,
					id:1
				},{
					name:this.$store.state.lanser.MainlandSinger,
					id:2
				},{
					name:this.$store.state.lanser.IslandSinger,
					id:3
				},{
					name:this.$store.state.lanser.UyghurSinger,
					id:4
				},{
					name:this.$store.state.lanser.ForeignSinger,
					id:5
				},
				{
					name:this.$store.state.lanser.Other,
					id:6
				}
				
				]
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
			hhsf(idx) {
				this.idxse = idx
				this.$store.state.SingerTypeId = idx+1
				this.$refs['sseert'+this.xseerr][0].iqhjwr()
			},
			sddrert(e) {
				this.xseerr = e
				this.$store.state.SingerLangId = e +1
			},
			jhxerert(e) {
				this.xseerr = e.detail.current
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.lanser.Singers
			});
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight - 100
		},
		mounted() {
		}
	}
</script>
<style scoped>
	
		.kjhgder {
			padding-left: 30upx;
		}
		.kjhggdert {
			border-radius: 20upx;
			font-size: 26upx;
			padding: 6upx 20upx;
			background: #F2F2F2;
			color: #666;
			margin-right: 30upx;
			margin-bottom: 20upx;
		}
		
		.kjhggdert.act {
			color: #fff;
			background: #FFD33E;
		}
		.xrrtxeertx{
			padding-top: 0;
			margin-top: 0 !important;
		}
</style>
