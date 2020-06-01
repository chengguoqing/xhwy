<template>
	<div>
		<view class="bgkkjsdrer"></view>
		<view class="pr">
			<view class="kdsfsdt cen">
				<image :src="imgurl+'logo.png'" class="loofrrty"></image>
			</view>
			<view class="mt200 cen z9 fz30">
				请完成微信授权以继续使用
			</view>
			<view class="mt20 pd">
				<button class="jjjdrrtt fz30" open-type="getUserInfo" @getuserinfo="getuserrtw">
					<image :src="imgurl+'weixin.png'" class="weixeddr cz mr10"></image> 授权微信用户信息
				</button>
			</view>
		</view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				urls: '',
				codes:''
			}
		},
		computed: {
			imgurl() {
				return this.$store.state.imgurl
			}
		},
		components: {},
		methods: {
			getuserrtw(e) {
				
				console.log(e.detail.userInfo)
				uni.setStorageSync('userinfo', e.detail.userInfo)
				this.$store.commit('setuserinfo', e.detail.userInfo)
				let th = this
				uni.redirectTo({
					url: th.urls
				})
			}
		},
		onLoad(e) {
			this.urls = e.urls
			wx.login({
				success(res) {
					console.log(res)
				}
			})
		},
		mounted() {}
	}
</script>
<style scoped>
	.bgkkjsdrer {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: #fff;
	}

	.kdsfsdt {
		margin-top: 240upx;
	}

	.loofrrty {
		width: 240upx;
		height: 240upx;
	}

	.jjjdrrtt {
		background: #19AD56;
		color: #fff;
		height: 90upx;
		line-height: 90upx;
	}

	.weixeddr {
		width: 52upx;
		height: 52upx;
	}
</style>
