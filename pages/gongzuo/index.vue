<template>
	<view>
		<swiper class="xrerrttx" :autoplay="true" :interval="6000" :duration="1000">
			<swiper-item v-for="sd in 5">
				<image src="../../static/img/banner.png" mode="widthFix" class="w100"></image>
			</swiper-item>
		</swiper>
		<view class="pd kjnxrter">
			<view class="kjnxerert row">
				<navigator class="col cen" url="/pages/gongzuo/shenhe/index">
					<image src="../../static/img/dsfdsa.png" mode="widthFix" class="kkjxjeet"></image>
					<view class="fz30 z3 ">
						审核
					</view>
				</navigator>
				<view class="col cen">
					<image src="../../static/img/dsfdsb.png" mode="widthFix" class="kkjxjeet"></image>
					<view class="fz30 z3 ">
						管理
					</view>
				</view>
				<view class="col cen">
					<image src="../../static/img/dsfdsc.png" mode="widthFix" class="kkjxjeet"></image>
					<view class="fz30 z3 ">
						申请
					</view>
				</view>
				<view class="col cen">
					<image src="../../static/img/dsfdsd.png" mode="widthFix" class="kkjxjeet"></image>
					<view class="fz30 z3 ">
						公告
					</view>
				</view>
			</view>
			<view class="mt20 ddfrtty">
				<view class="pr20">
					<scroll-view scroll-x class="dx_jz dfdsrttyxe">
						<view v-for="(sd,idx) in jjhxe" class="f_b dfrtyxet fz30 ml20" :class="idx==idxs?'act':''" @tap="ssder(idx)">
							{{sd}}
						</view>
					</scroll-view>
				</view>

				<pagese></pagese>
			</view>
		</view>
		<!-- 右上角的弹出层 -->
		<view class="kkjjhnxer pt10 pm10" v-if="isse">
			<view class="sanjidxet"></view>
			<view class="pd pt5 pm5 ">
				<image src="../../static/img/lajix.png" class="cz lajixdrtt" mode="widthFix"></image>
				<text class="fz26  ml10 cz">清除缓存</text>
			</view>
			<view class="pd  pm5 pt5 " @tap="saomas">
				<image src="../../static/img/saoyisao.png" class="cz lajixdrtt" mode="widthFix"></image>
				<text class="fz26  ml10 cz">扫一扫</text>
			</view>
		</view>
	</view>
</template>
<script>
	import pagese from "./components/pages.vue"
	export default {
		data() {
			return {
				idxs: 0,
				jjhxe: [
					'全部', '第一教学楼', '第三教学楼', '摊位', '艺术大厅', '创客方舟'
				],
				isse: false
			}
		},
		components: {
			pagese
		},
		methods: {
			ssder(e) {
				this.idxs = e
			},
			saomas() {
				let th = this
				th.isse = false
				uni.scanCode({
					success: function(res) {
						uni.navigateTo({
							url: "/pages/gongzuo/saoyisao?urls=" + res.result
						})
					}
				});
			}
		},
		onNavigationBarButtonTap(e) {
			// 右上角的加号点击事件
			if (e.index == 0){
				this.isse = true
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.xrerrttx {
		height: 380upx;
	}

	
	
</style>
