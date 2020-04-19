<template>
	<view class="btm pt20">
		<view class="pd row fgfyxer">
			<view class="pr20">
				<image src="../../static/img/fanhui.png" class="fanhui " @tap="housd" mode="widthFix"></image>
			</view>
			<view class="col  pm10 pr">
				<view class="bbm pm10 pr">
					<input type="text" value="" v-model="khsdre" placeholder="大家都在搜 孙燕姿" class="fz30  " />
					<view class="kjjddeert fz28" v-if="khsdre">
						<view class="ye pd pt20 pm20 bbm">
							搜索“{{khsdre}}”
						</view>
						<view class="z6 pd pt20 pm20 bbm" v-for="sd in 5">
							<icon type="search" size="16" class="cz mr10"></icon>周杰伦
						</view>
					</view>
				</view>
				<view class="mt10">
					<view class="f_b fz28 mr40" v-for="(sd,idx) in ddfrt" @tap="dfd(idx)">
						<text class="kjhxdrrt cz" :class="idx==idxsw?'act':''"></text>{{sd}}
					</view>
				</view>
			</view>
			<view class="fz30 z3 ml20">
				搜索
			</view>
		</view>
		<view class="mt60 row pd">
			<view class="fz32 z3 col">
				搜索历史
			</view>
			<image src="../../static/img/sanchu.png" class="kjjxerer" mode="widthFix"></image>
		</view>
		<view class="pl30 mt20">
			<text class="hhggxerert" v-for="sd in 4">五月天</text>
		</view>
		<view class="mt60 pd">
			<view class="z3 fz32">
				热门搜索
			</view>
			<publiclist isyhgg="2"></publiclist>
		</view>
	
	</view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	export default {
		data() {
			return {
				idxsw:0,
				ddfrt:['歌手','歌曲'],
				khsdre:''
			}
		},
		components: {
			publiclist
		},
		methods: {
			housd(){
				uni.navigateBack({
					
				})
			},
			dfd(idx){
				this.idxsw = idx
			},
			fdgfgf(){
				uni.navigateTo({
					url:'pages/index/sousuojieguo?ihhdf='+this.khsdre
				})
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.fgfyxer{
		background: #fff;
		position: sticky;
		top: 22upx;
		z-index: 1000;
	}
	.fanhui{
		width: 40upx;
		position: relative;
		top: 6upx;
	}
	.kjhxdrrt{
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		border: 1px solid #FFD33E;
		margin-right: 10upx;
	}
	.kjhxdrrt.act{
		background: #FFD33E;
	}
	.kjjxerer{
		width: 46upx;
	}
	.hhggxerert{
		background: #F2F2F2;
		color: #777777;
		font-size: 26upx;
		padding: 4upx 20upx;
		border-radius: 20upx;
		margin-right: 30upx;
	}
	.kjjddeert{
		position: absolute;
		left: 0;
		top: 55upx;
		background: #fff;
		min-height: 200upx;
		width: 100%;
		box-shadow: 0 0 20upx rgba(0,0,0,0.1);
	}
</style>
