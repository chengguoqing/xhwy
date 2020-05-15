<template>
	<view class="dxddf pm40"> 
		<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box pr" @change="change">
				<swiper-item v-for="sd in info">
					<view class="swiper-item w100 h100 pr" @tap="hfs(sd.turl)">
						<text class="jhhhbdrt">{{sd.name}}</text>
						<image class="w100 h100" :src="sd.url" />
					</view>
				</swiper-item>
				
				
			</swiper>
		</uni-swiper-dot>
		<view class="pd kjjhnxefr">
			<view class="kjhnxertxe row">
				<view @tap="hfs('/pages/user/wdhd')" class="col dfgrtxeer aa pt20 pm20">
					<image :src="imgurl+'dsfdsa.png'" class="loakderr cz"></image>
					<text class="fz32 z3 ml10">我的活动</text>
				</view>
				<view @tap="hfs('/pages/user/myClass')" class="col dfgrtxeer pt20 pm20">
					<image :src="imgurl+'dsfdsb.png'" class="loakderr cz "></image>
					<text class="fz32 z3 ml10">我的班级</text>
				</view>
			</view>
		</view>
		<view class="kkjcertt row pd pt20 pm20">
			<image :src="imgurl+'laba.png'"  class="dsfsdttxer cz"></image>
			<view class="jjhhbxedft fz30 z3 pl10 col">
				<swiper  :interval="3000" :duration="1000" autoplay circular vertical class="h100 ov">
					<swiper-item v-for="sd in 5">
						<navigator class="dian dfsdttxerr" url="/pages/index/zx">
							今天,做一个学生,上课、集体活动、挥洒青春集体活挥洒青春集体活挥洒青春集体活
						</navigator>
					</swiper-item>
				</swiper>
				<!-- <view class="dian">
					今天,做一个学生,上课、集体活动、挥洒青春集体活挥洒青春集体活挥洒青春集体活
				</view> -->
			</view>
		</view>
	
		<!-- 	<van-notice-bar
			  :left-icon= "imgurl+'laba.png'" 
			  text="今天,做一个学生,上课、集体活动、挥洒青春集体活挥洒青春集体活挥洒青春集体活"
			>
			</van-notice-bar> -->
	<view class="pd"> 
			<view class=" pr">
				<image :src="imgurl+'fdj.png'" class="faddrrttx"></image>
				<input class="jjjhgeert fz30" type="text" value="" placeholder="请输入活动的名称" />
			</view>
			<view class="mt20 bgff jhhxrert row">
				<view class="col cen sdfsdrtt pr" :class="idxdd==idx?'act':''" v-for="(sd,idx) in timnse" @tap="qiehnnmsd(idx)">
					{{sd}}
				</view>
			</view>
			
			<activelist  v-for="sd in 10" @pinglun="pinglun"></activelist>
		</view>
		<pinglun ref="jhdrrtt"></pinglun>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	import activelist from "@/components/activelist.vue"
	import pinglun from "@/components/pinglun.vue"
	export default {
		components: {
			uniSection,
			uniSwiperDot,
			activelist,
			pinglun
		},
		computed:{
			user_info(){
				return this.$store.state.user_info
			},
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		data() {
			return {
				info: [{
						name:'录入参赛作品',
						turl:'/pages/user/entryEntries',
						url: 'https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png'
					},
					{
						name:'录入参赛作品',
						turl:'/pages/user/entryEntries',
						url: 'https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png'
					},
					
				],
				current: 0,
				mode: 'round',
				dotsStyles: {
					backgroundColor: 'rgba(255,255,255,0.8)',
					border: '1px #f8f8f8 solid',
					color: '#fff',
					selectedBackgroundColor: '#fff',
					selectedBorder: '1px #f8f8f8 solid'
				},
				idxdd:0,
				timnse:['热门活动','最新活动']
			}
		},
		onShareAppMessage(res) {
			return {
				title: '独行工匠工作室',
				imageUrl:'https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png',
				path: '/pages/index/index'
			}
		},
		onLoad() {},
		methods: {
			pinglun(){
				this.$refs.jhdrrtt.open()
			},
			change(e) {
				this.current = e.detail.current
			},
			qiehnnmsd(idx){
				this.idxdd = idx
			}
		}
	}
</script>

<style scoped>
	.swiper-box {
		height: 340upx;
	}

	.kjhnxertxe {
		border-radius: 8upx;
		background: #fff;
	}

	.kjjhnxefr {
		position: relative;
		z-index: 5;
		margin-top: -50upx;
	}

	.dfgrtxeer {
		padding-left: 60upx;
	}

	.dfgrtxeer.aa {
		border-right: 1px solid #E0E0E0;
	}

	.loakderr {
		width: 66upx;
		height: 66upx;
	}

	.labasert {
		width: 44upx;
		height: 44upx;
	}

	.sdrttxer {
		line-height: 44upx;
	}

	.jjjhgeert {
		padding-left: 100upx;
		height: 80upx;
		background: #fff;
		border-radius: 8upx;
	}

	.faddrrttx {
		width: 46upx;
		height: 46upx;
		position: absolute;
		left: 24upx;
		top: 18upx;
		z-index: 10;
	}
	.jhhhbdrt{
		position: absolute;
		left: 0;
		right: 0;
		top: 100upx;
		font-size: 60upx;
		z-index: 100;
		color: red;
	}
	.kkjcertt{
	}
	.dsfsdttxer{
		height: 48upx;
		width: 48upx;
	}
	.jjhhbxedft{
		height: 48upx;
		line-height: 48upx;
	}
	.dfsdttxerr{
		background: #F0F0F0 !important;
	}
</style>
