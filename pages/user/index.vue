<template>
	<view>
		<view class="dsfdsrtty pd pt20 row">
			<image src="../../static/img/v2_q6o8vi.jpg" class="usericon yj"></image>
			<view class="col pl30">
				<view class="fz32 cf mt10">
					小叮当
				</view>
				<view class="mt10">
					<view class="kjjdsrtt f_b cf fz26">
						<image src="../../static/img/user/dsdfa.png" class="dsdfa cz"></image>
						<text class="cz ml5">每日签到</text>
					</view>
				</view>
			</view>
		</view>
		<view class=" kjnxrter">
			<view class="pd">
				<view class="kjnxerert row ">
					<view class="col cen">
						<image src="../../static/img/user/dsdfb.png" mode="widthFix" class="kkjxjeet"></image>
						<view class="fz28 z9  ">
							收藏
						</view>
					</view>
					<view class="col cen">
						<image src="../../static/img/user/dsdfc.png" mode="widthFix" class="kkjxjeet"></image>
						<view class="fz28 z9  ">
							名片
						</view>
					</view>
					<view class="col cen">
						<image src="../../static/img/user/dsdfd.png" mode="widthFix" class="kkjxjeet"></image>
						<view class="fz28 z9  ">
							钱包
						</view>
					</view>
					<view class="col cen">
						<image src="../../static/img/user/dsdfe.png" mode="widthFix" class="kkjxjeet"></image>
						<view class="fz28 z9 ">
							通知
						</view>
					</view>
				</view>
			</view>
			<uni-list class="mt20">
				<uni-list-item title="个人中心" thumb="../../static/img/user/dsdff.png"  @click="tiozsre('/pages/user/user_center')"/>
				<uni-list-item title="帮助中心" thumb="../../static/img/user/dsdfg.png" />
				<uni-list-item title="邀请好友" thumb="../../static/img/user/dsdfh.png" />
				<uni-list-item title="关于我们" thumb="../../static/img/user/dsdfi.png" />
				<uni-list-item title="设置" thumb="../../static/img/user/dsdfj.png" />
							
			</uni-list>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		methods: {
			tiozsre(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.dsfdsrtty {
		height: 300upx;
		background: #3DADEB;
	}

	.usericon {
		border: 4upx solid #fff;
		width: 130upx;
		height: 130upx;
	}

	.kjjdsrtt {
		padding: 8upx 15upx;
		background: #39BB5F;
	}

	.dsdfa {
		width: 32upx;
		height: 32upx;
	}

	.kkjxjeet {
		width: 55upx;
		height: 55upx;
	}

	.kjnxerert {
		height: 145upx;
	}
</style>
