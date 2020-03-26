<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="sd in 2">
				<image src="../../static/img/fdfgf.png" mode="widthFix" class="xerttyxe"></image>
			</swiper-item>
		</swiper>
		<view class="pd pt20 pm20 fdgft6ys btm" v-for="sd in 3">
			<view class="fz28 dfsgfdty">
				艺术大赛
			</view>
			<view class="fz26 z9">
				“歌唱青春,放飞理想。12月2日晚,由我校主办的校园艺术大赛如期而至,在艺术活动中心中心精彩上演。1200余名师生欢聚一堂,共同见证学子的艺术梦想。
			</view>
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
	.xerttyxe{
		width: 100%;
		height: 300upx;
	}
	.dfsgfdty{
		color: rgba(255, 196, 82, 1);
	}
	
</style>
