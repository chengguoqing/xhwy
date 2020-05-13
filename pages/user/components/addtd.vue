<!-- 发布动态 -->
<template>
	<view class="fdrttxer pm40">
		<view class="mt10">
			<image :src="imgurl+'dsfsdfdsa.png'" class="jhnfdstxer cz"></image>
			<text class="fz36 cz ml10">任务</text>
		</view>
		<view class="mt20">
			<view class="jjhnxeertx yj4 row" @tap="hfs('/pages/user/noticeTemplate')">
				<image :src="imgurl+'dsfsdfdsb.png'" class="yj dsfsrtxer cz"></image>
				<view class="col pl20 dfgdtxerxe">
					<view class="fz32 z3">
						发布通知
					</view>
					<view class="fz24 z9 mt10">
						一键发布通知
					</view>
				</view>
			</view>
		</view>
		
		<view class="mt30">
			<image :src="imgurl+'dsfsdfdsc.png'" class="jhnfdstxer cz"></image>
			<text class="fz36 cz ml10">成绩</text>
		</view>
		<view class="mt20 row serdsfsdrt">
			<view class="jjhnxeertx yj4 row ab">
				<image :src="imgurl+'dsfsdfdsd.png'" class="yj dsfsrtxer cz"></image>
				<view class="col pl20 dfgdtxerxe">
					<view class="fz32 z3">
						上传成绩
					</view>
					<view class="fz24 z9 mt10">
						互不可见包含隐私
					</view>
				</view>
			</view>
			
			<view class="jjhnxeertx yj4 row ">
				<image :src="imgurl+'dsfsdfdse.png'" class="yj dsfsrtxer cz"></image>
				<view class="col pl20 dfgdtxerxe">
					<view class="fz32 z3">
						发布奖状
					</view>
					<view class="fz24 z9 mt10">
						夸奖优秀激励不足
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		components: {},
		methods: {},
		mounted() {}
	}
</script>
<style scoped>
	.jhnfdstxer {
		width: 56upx;
		height: 56upx;
	}

	.jjhnxeertx {
		width: 338upx;
		height: 166upx;
		align-items: center;
		justify-content: center;
		background: #EAF2FF;
		padding-left: 15upx;
	}
	.jjhnxeertx.ab{
		background: #EEFBF7;
	}
	.dsfsrtxer {
		width: 96upx;
		height: 96upx;
	}

	.dfgdtxerxe {
		line-height: 1.6;
	}
	.serdsfsdrt{
		flex-direction: row;
		  justify-content: space-between;
	}
	.fdrttxer{
		padding-left: 20upx;
		padding-right: 20upx;
	}
</style>
