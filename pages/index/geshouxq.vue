<!-- 歌手详情 -->
<template>
	<view>
		<view class="kjhhxertxe pr">
			<image src="../../static/img/bjt.png" class="w100 dsgftyxer" mode="aspectFill"></image>
			<view class="jjhexertx row">
				<image src="../../static/img/fengmian.jpg" mode="aspectFill" class="dsfdtyxe"></image>
				<view class="col pl40 cf fz32 ftf45yx">
					华晨宇
				</view>
			</view>
		</view>
		<publiclist></publiclist>
	</view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			publiclist
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.dsgftyxer{
		height: 210upx;
	}
	.jjhexertx{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		padding-left: 92upx;
		padding-top: 30upx;
		z-index: 100;
	}
	.dsfdtyxe{
		width: 105upx;
		height: 150upx;
		border-radius: 8upx;
	}
	.ftf45yx{
		line-height: 150upx;
	}
</style>
