<!-- 评论列表 -->
<template>
	<div>

		<view class="bbm pt20 pm20 row pd" v-for="sd in 10">
			<image src="../static/img/banner.png" class="yj userdrr cz"></image>
			<view class="col pl20">
				<view class="fz28 z3">
					小胖墩
				</view>
				<view class="fz26 z6 mt20">
					最后学到了不管什么活动都要考虑好各个环节，才能组织一个高效率的活动。
				</view>
				<view class="fz24 z6 mt20 row">
					<text class="z9">10分钟前</text>
					<text class="ml10" @tap="pinglld">回复TA</text>
					<view class="col tr">
						<image src="../static/img/dgg.png" class="dinghgdder cz" mode="widthFix"></image>
						<text class="fz24 cz">100</text>
					</view>
				</view>
			</view>
		</view>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			// 评论按钮触发
			pinglld () {
				this.$emit("pinglun")
			}
		},
		mounted() {}
	}
</script>
<style  scoped>
	.userdrr{
		width: 62upx;
		height: 62upx;
	}
	.dinghgdder{
		width: 36upx;
	}
</style>
