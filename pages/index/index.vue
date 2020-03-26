<template>
	<view>
		<view class="index_bg">
			<swiper circular class="cdrttxewertt" :indicator-dots="true" indicator-color="#A1B889"  indicator-active-color="#FFC452" :autoplay="true" :interval="6000" :duration="1000">
				<swiper-item v-for="(sd,idx) in 5" class="cz_w pr">
					<view class="cen cz_a">
						<image src="../../static/img/v2_q6q4a3.png" class="dfrrtxe " mode="aspectFill"></image>
					</view>
					<view class="cen crrtyser cf fz30">
						第{{idx+1}}教学楼
					</view>
				</swiper-item>
			</swiper>
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
	.index_bg{
		background: linear-gradient(to bottom,#04133C, #4ABDCE);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		/* #ifdef H5 */
		padding-bottom: 100upx;
		/* #endif */
		
	}
	.cdrttxewertt{
		width: 100%;
		height: 100%;
	}
	.dfrrtxe{
		width: 560upx;
		height: 560upx;
	}
	.crrtyser{
		position: absolute;
		left: 0;
		bottom: 60upx;
		width: 100%;
	}
</style>
