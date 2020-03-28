<!-- 场地申请 -->
<template>
	<view class="kjjnnxeert">
		<swiper :indicator-dots="true" class="fgdgtyyxe">
			<swiper-item v-for="sd in  2">
				<view class="xcxfrrtty">
					<navigator class="fgdgdfdtyxe" v-for="sd in 8" url="/pages/gongzuo/shenqing/kcsq">
						<view class="dfdsftycer">
							<view class="">
								<image src="../../../static/img/fgdfgfg.png" class="cz kjjxeerttx"></image>
								<view class="fz34 cf mt10">
									课室
								</view>
							</view>
						</view>
					</navigator>
					<view class="qc"></view>
				</view>
			</swiper-item>
		</swiper>
		
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
			uni.setNavigationBarTitle({
			    title: '选择类型'
			});
		}
	}
</script>
<style scoped>
	.kjjnnxeert{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom,#3DADEB, #D7E8F8);
		padding-bottom: 140upx;
		/* #ifdef H5 */
		top: 88upx;
		padding-bottom: 228upx;
		/* #endif */
	}
	.fgdgtyyxe{
		height: 100%;
	}
	.xcxfrrtty{
		padding: 80upx 20upx;
	}
	.fgdgdfdtyxe{
		float: left;
		width: 50%;
		padding-left: 30upx;
		padding-right: 30upx;
		margin-bottom: 40upx;
	}
	.dfdsftycer{
		height: 210upx;
		border-radius: 20upx;
		text-align: center;
		color: #fff;
		background: linear-gradient(to bottom,#03A9F4,#C5DBF3);
		box-shadow: 0 0 20upx rgba(0,0,0,0.2);
	}
	.kjjxeerttx{
		width: 120upx;
		height: 120upx;
		display: inline-block;
		margin-top: 20upx;
	}
</style>
