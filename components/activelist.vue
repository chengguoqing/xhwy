<template>
	<view class="mt20 bgff dsfdsrtze">
		<view class="row">
			<view class="col dian fz32" @tap="yijserrt">
				《一次体验活动》
			</view>
			<view class="pr">
				<button class="sdfdsrtt" open-type="share"></button>
				<image class="ml10 cttxeert cz" :src="imgurl+'fenxiang.png'" mode="widthFix" @tap.stop="fx"></image>
			</view>
		</view>
		<view class="fz24 z6 dianer mt20" @tap="yijserrt">
			_六年级语文_语文_小学教育_教育专区
		</view>
		<view class="jkhhsdr mt20">
			<view class="" v-for="sd in 3" @tap.stop="fangdase">
				<image src="https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png" mode="aspectFill" class="sdfsdrtyd w100"></image>
			</view>
		</view>
		<view class="mt20 row">
			<view class="">
				<image v-if="dinas" @tap.stop="diansnsd(1)" :src="imgurl+'hzhsda.png'" mode="widthFix" class="ikxeert cz"></image>
				<image v-else @tap.stop="diansnsd(2)" :src="imgurl+'yidian.png'" mode="widthFix" class="ikxeert cz"></image>
				<text class="fz32 z3 cz ml5">6</text>
			</view>
			<view class=" ml20" @tap.stop="pinglld">
				<image :src="imgurl+'hzhsdb.png'" mode="widthFix" class="ikxeert cz"></image>
				<text class="fz32 z3 cz ml5">6</text>
			</view>
			<view class="col tr">
				<view class="sfdsdttx">
					进行中
				</view>
				<navigator class="f_b" v-if="isbian" url="/pages/user/cjhd?tys=2">
					<image :src="imgurl+'bianji.png'" class="jhjjderrt cz" mode="widthFix"></image>
				</navigator>
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		props: {
			isbian: { // 是否显示编辑按钮
				type: Boolean,
				default: false
			},
			isxq: { // 是否为详情
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				dinas: true
			}
		},
		components: {},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		methods: {
			fx() {

			},
			// 点赞按钮触发
			diansnsd(dx) {
				if (dx == 1) {
					this.dinas = false
				} else {
					this.dinas = true
				}
			},
			// 评论按钮触发
			pinglld () {
				this.$emit("pinglun")
			},
			// 列表点击事件
			yijserrt(){
				if(!this.isxq) {
					uni.navigateTo({
						url:'/pages/hd/xq'
					})
				}
			},
			// 图片点击放大
			fangdase (){
				uni.previewImage({
					urls:["https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png" ]
				})
			}
			
		},

		mounted() {}
	}
</script>
<style scoped>
	.dsfdsrtze {
		border-radius: 8upx;
		padding: 20upx;
		position: relative;
		z-index: 1;
	}

	.cttxeert {
		width: 138upx;
	}

	.jkhhsdr {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 10upx;
		grid-row-gap: 10upx;
	}

	.sdfsdrtyd {
		height: 200upx;
		border-radius: 8upx;
	}

	.ikxeert {
		width: 48upx;
		height: 48upx;
	}


	.sdfdsrtt {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 100;
	}

	.jhjjderrt {
		width: 130upx;
		margin-left: 20upx;
	}
</style>
