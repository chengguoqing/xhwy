<template>
	<view class="pd">
		<view class="mt60 cen">
			<image src="../../../static/img/successsd.png" class="ikmmjxeeer"></image>
			<view class="fz34 ls mt20">
				撤销成功
			</view>
			<view class="fz26 z9 mt20">
				撤销将同步到审核方
			</view>
		</view>
		<view class="mt40 btm pt40">
			<navigator class="sfgdgdrfty" url="/pages/gongzuo/shenqing/index?ty=1">
				完成
			</navigator>
			<navigator class="sfgdgdrfty ab" url="/pages/gongzuo/shenqing/kcsq">
				重新申请
			</navigator>
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
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.ikmmjxeeer{
		width: 120upx;
		height: 120upx;
	}
	.sfgdgdrfty{
		line-height: 88upx;
		background: #4DB4FF;
		color: #fff;
		text-align: center;
		border-radius: 8upx;
	}
	.sfgdgdrfty.ab{
		margin-top: 40upx;
		background: #FF5F5F;
	}
</style>
