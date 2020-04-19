<template>
	<view class="btm pt20 pd">
		<view class=" dfgdftyxewrt">
			<view class="cf fz32 pt20 cen">
				音量
			</view>
			<view class="parentse cen mt50 pd">
				<view class="jjhser">
					<view class="fz28 cf">
						音乐
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix"></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix"></image>
					</view>
				</view>
				<view class="jjhser">
					<view class="fz28 cf">
						麦克风
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix"></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix"></image>
					</view>
				</view>
				<view class="jjhser">
					<view class="fz28 cf">
						效果器
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix"></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="mt40">
			<view class="fz30 z3">
				气氛
			</view>
			<view class="row cen mt40">
				<view class="col">
					<image src="../../static/img/fgfgc.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						欢呼
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgd.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						鼓掌
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfge.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						嘲笑
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgf.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						笑声
					</view>
				</view>
			</view>
			
			
			<view class="row cen mt60">
				<view class="col">
					<image src="../../static/img/fgfgg.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						重唱
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgh.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						伴唱
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgi.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						切歌
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgj.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						播放
					</view>
				</view>
			</view>
			
			
			<view class="row cen mt60">
				<view class="col" @tap="ljhad">
					<image src="../../static/img/fgfgk.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						蓝牙
					</view>
				</view>
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
			ljhad(){
				uni.showActionSheet({
					itemList:['打开蓝牙','关闭蓝牙'],
					itemColor:"#FFD33E"
				})
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.dfgdftyxewrt{
		border-radius: 8upx;
		background: linear-gradient(to right,#FFA23C, #FFCF3C);
		height: 260upx;
	}
	.parentse {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20upx;
		grid-row-gap: 0px;
	}
	.jhbxert{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 16upx;
		grid-row-gap: 0px;
		margin-top: 20upx;
	}
	.kkjxeert{
		width: 96upx;
		height: 96upx;
		
	}
</style>
