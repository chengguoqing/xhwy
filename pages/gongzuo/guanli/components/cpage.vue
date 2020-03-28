<template>
	<view class="pd dfgdfgtyxe">
		<view class="z9 fz24 pt20 pm20">
			请选择教学楼类型
		</view>
		<view v-for="sd in 10" class="hhbnmjjcrert pr row pt20 pm20">
			<view class="dsfdsgty">
				<image src="../../../static/img/louzuo.png" class="sdfgdsgty cz"></image>
			</view>
			<view class="col dfgdfty pl40 ls">
				第一教学楼
			</view>
			<image src="../../../static/img/righth.png" class="fdsgdrftyy"></image>
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
	.hhbnmjjcrert{
		border: 1px solid #E0E0E0;
		border-radius: 8upx;
		height: 100upx;
		background: #fff;
		margin-bottom: 20upx;
		font-size: 28upx;
	}
	.sdfgdsgty{
		width: 60upx;
		height: 60upx;
		display: inline-block;
	}
	.dsfdsgty{
		width: 120upx;
		text-align: center;
		border-right: 1px solid #E0E0E0;
	}
	.dfgdfty{
			line-height: 60upx;
	}
	.fdsgdrftyy{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 20upx;
		top: 35upx;
	}
	.dfgdfgtyxe{
		padding-bottom: 120upx;
	}
</style>
