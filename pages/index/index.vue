<template>
	<view class="pd pt20">
		<navigator class="kjhhxeret fz26" url="/pages/index/sousuo">
			<!-- #ifdef MP-WEIXIN || APP-PLUS -->
			<icon type="search" size="16" class="dfrertt" />
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<icon type="search" size="16" class="cz" />
			<!-- #endif -->
			<text class="cz ml10 ddfrrttyx"> {{kjhx.SearchDescription}}</text>
		</navigator>
		<swiper class="mt20 ddryyxer deerty ov" indicator-active-color="#FFD33E" indicator-color="#fff" :indicator-dots="true"
		 :autoplay="true" circular :interval="3000" :duration="1000">
			<swiper-item v-for="(sd,idx) in banners" :key="idx">
				<image :src="sd.ImagePath" class="w100 h100 cz"></image>
			</swiper-item>
		</swiper>
		<view class="mt30 row">
			<view class="col xdrertty">
				<navigator class="pr" url="/pages/index/geshouxz">
					<image src="../../static/img/gdfga.png" class="cz"></image>
					<text class="neijjxne">{{kjhx.Singers}}</text>
				</navigator>
			</view>
			<view class="col xdrertty ab">
				<navigator class="pr" :url='"/pages/index/yuyangyz?title="+kjhx.Language+"&fname=Search-Song"'>
					<image src="../../static/img/gdfgb.png" class="cz"></image>
					<text class="neijjxne">{{kjhx.Language}}</text>
				</navigator>
			</view>
		</view>
		<view class="mt40 parentse">
			<navigator class="kkhjhxr pr" :url='"/pages/index/fenlei?title="+kjhx.Type'>
				<image src="../../static/img/gdfgc.png" class="w100"></image>
				<text class="cf fz30 drrtty">{{kjhx.Type}}</text>
			</navigator>
			<navigator class="kkhjhxr pr"  :url='"/pages/index/yuyangyz?title="+kjhx.Hot+"&fname=Search-Hot"'>
				<image src="../../static/img/gdfgd.png" class="w100"></image>
				<text class="cf fz30 drrtty">{{kjhx.Hot}}</text>
			</navigator>
			<navigator class="kkhjhxr pr"  :url='"/pages/index/yuyangyz?title="+kjhx.New+"&fname=Search-New"'>
				<image src="../../static/img/gdfge.png" class="w100"></image>
				<text class="cf fz30 drrtty">{{kjhx.New}}</text>
			</navigator>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				indexfo:[]
			}
		},
		onShareAppMessage: function(res) {
			// 来自页面内分享按钮
			return {
				title: "獨行工匠",
				path: "/pages/index/index"
			}
		},
		components: {

		},
		computed:{
			kjhx(){
				return this.$store.state.lanser
			},
			banners () {
				return this.$store.state.indexbanner
			}
		},
		methods: {

		},
		onLoad() {
		},
		mounted() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.Select
			})
			let sdr = uni.getStorageSync('lanindex')
			this.$store.commit('setlanser', sdr || 0)
		}
	}
</script>
<style scoped>
	.ddfrrttyx {
		position: relative;
		bottom: 3upx;
	}

	.kjhhxeret {
		height: 70upx;
		line-height: 70upx;
		border-radius: 60upx;
		text-align: center;
		color: #B1B1B1;
		background: #F2F3F4
	}

	.ddryyxer {
		height: 320upx;
		border-radius: 8upx;
		overflow: hidden;
	}

	.deerty {
		border-radius: 8upx;
	}

	.xdrertty {
		padding-right: 15upx;

		height: 100upx;
	}

	.xdrertty.ab {
		padding-right: 0;
		padding-left: 15upx;
	}

	.xdrertty image {
		width: 100%;

		height: 100upx;
		position: absolute;
	}

	.neijjxne {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		font-size: 32upx;
		line-height: 100upx;
		text-align: center;
		color: #fff;
	}

	.parentse {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 40upx;
		grid-row-gap: 0px;
	}

	.kkhjhxr image {
		height: 200upx;
	}

	.drrtty {
		position: absolute;
		color: #fff;
		right: 20upx;
		bottom: 20upx;
	}
	.dfrertt{
		position: relative;
		top: 4upx;
	}
</style>
