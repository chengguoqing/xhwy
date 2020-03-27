<template>
	<view class="">
		<navigator url="/pages/gongzuo/shenhe/particulars" class="pd pt20 pm20 bgff row bbm" v-for="sd in 10">
			<view class="jjhhxeert cen fz26 z3">
				<image src="../../../static/img/banner.png" class="useertdrt"></image>

				<view class="">
					孙某某
				</view>
			</view>
			<view class="col fz26 z3 jhhgxeert pl20">
				<view class="">
					场地类型: 第一教学楼
				</view>
				<view class="">
					开始时间: <text class="z9">2019-01-03 19:00</text>
				</view>
				<view class="">
					结束时间: <text class="z9">2019-01-03 19:00</text>
				</view>
				<view class="red" v-if="idxdf ==0">
					等待审核
				</view>
				<view class="z3" v-if="idxdf ==1">
					你的审核结果 <icon type="success_no_circle" class="cz ls ml10 sdfrtxe" size="18"></icon>
				</view>
			</view>
		</navigator>
	</view>
</template>
<script>
	export default {
		props: ['idxdf'],
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {}
	}
</script>
<style scoped>
	.jjhhxeert {
		width: 180upx;
	}

	.jhhgxeert {
		line-height: 50upx;
	}


	.sdfrtxe {
		position: relative;
		margin-top: -10upx;
	}

	.useertdrt {
		border-radius: 8upx;
		width: 160upx;
		height: 160upx;
		padding: 10upx;
		border: 1px solid #E2E2E2;
	}
</style>
