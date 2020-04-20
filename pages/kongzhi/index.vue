<template>
	<view class="btm pt20 pd">
		<view class=" dfgdftyxewrt">
			<view class="cf fz32 pt20 cen">
				{{$store.state.lanser.Sound}}
			</view>
			<view class="parentse cen mt50 pd">
				<view class="jjhser">
					<view class="fz28 cf">
						{{$store.state.lanser.Music}}
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix"></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix"></image>
					</view>
				</view>
				<view class="jjhser">
					<view class="fz28 cf">
						{{$store.state.lanser.Mic}}
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix"></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix"></image>
					</view>
				</view>
				<view class="jjhser">
					<view class="fz28 cf">
						{{$store.state.lanser.Effect}}
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
						{{$store.state.lanser.MoodWhistle}}
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgd.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.MoodApplaudShort}}
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfge.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.MoodApplaudLong}}
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgf.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.MoodSmile}}
					</view>
				</view>
			</view>
			
			
			<view class="row cen mt60">
				<view class="col">
					<image src="../../static/img/fgfgg.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.Replay}}
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgh.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.SongMode}}
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgi.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.NexSong}}
					</view>
				</view>
				<view class="col">
					<image src="../../static/img/fgfgj.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.Pause}}
					</view>
				</view>
			</view>
			
			
			<view class="row cen mt60">
				<view class="col" @tap="ljhad">
					<image src="../../static/img/fgfgk.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{$store.state.lanser.Bluetooth}}
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
		onLoad() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.Control
			})
		},
		methods: {
			ljhad(){
				uni.showActionSheet({
					itemList:[this.$store.state.lanser.EnableBluetooth,this.$store.state.lanser.DisableBluetooth],
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
