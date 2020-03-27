<template>
	<view class="jjhnndrrrt">
		<view class="hhggbxeer row bbm">
			<view class="col pd ls fz26 pr mr10" @tap="caidan">
				<uni-icons type="search" color="#3DADEB" size="24" class="ls cz"></uni-icons>
				<text class="ml10">{{xzse?xzse:'请选择'}}</text>
				<image src="../../../static/img/down.png" class="downxeer"></image>
			</view>
			<view class="col pd ls fz26 pr cen blm ">
				<picker mode="date" :value="datewwer" @change="bindDateChange">
					<view class="uni-input">{{datewwer?datewwer:'选择日期'}}</view>
				</picker>
			</view>
		</view>
		<shlist idxdf="0" v-if="idxdf==0"></shlist>
		<shlist idxdf="1" v-if="idxdf==1"></shlist>
		<dibu :jhhbbde="jhhbbde" @call="call" :idxdf="idxdf"></dibu>
	</view>
</template>
<script>
	import dibu from "@/components/dibu.vue"
	import shlist from "../components/shlist.vue"
	export default {
		data() {
			return {
				idxdf: 0,
				datewwer: '',
				xzse: '',
				jhhbbde: [{
						name: '待审核',
						icon: '../../../static/img/dsfa_a.png',
						icons: '../../../static/img/dsfb_a.png',
					},
					{
						name: '已审核',
						icon: '../../../static/img/dsfa_b.png',
						icons: '../../../static/img/dsfb_b.png',
					}
				]
			}
		},
		components: {
			dibu,
			shlist
		},
		methods: {
			bindDateChange(e) {
				this.datewwer = e.detail.value
			},
			call(e) {
				this.idxdf = e
				console.log(e)
			},
			caidan() {
				let th = this
				let cdfrrt = ['第一教室', '第二教室', '第三教室', '第四教室']
				uni.showActionSheet({
					itemList: ['第一教室', '第二教室', '第三教室', '第四教室'],
					success: function(res) {
						th.xzse = cdfrrt[res.tapIndex]
					}
				});
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.hhggbxeer {
		height: 90upx;
		line-height: 70upx;
		background: #fff;
		padding-top: 10upx;
		padding-bottom: 10upx;
		position: sticky;
		left: 0;
		top: 0;
		z-index: 999;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
	}

	.downxeer {
		width: 34upx;
		height: 34upx;
		position: absolute;
		right: 0;
		top: 20upx;
	}

	.jjhnndrrrt {
		padding-bottom: 160upx;
	}
</style>
