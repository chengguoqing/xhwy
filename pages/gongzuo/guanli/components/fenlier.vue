<template>
	<view>
		<view class="hhggbxeer row bbm" v-if="tyer==1">
			<view class="col pd ls fz26 pr mr10" @tap="caidan">
				<uni-icons type="search" color="#3DADEB" size="24" class="ls cz"></uni-icons>
				<text class="ml10">{{xzse?xzse:'教学楼类型'}}</text>
				<image src="../../../static/img/down.png" class="downxeer"></image>
			</view>
			<view class="col pd ls fz26 pr cen blm ">
				<picker mode="date" :value="datewwer" @change="bindDateChange">
					<view class="uni-input">{{datewwer?datewwer:'选择日期'}}</view>
				</picker>
			</view>
		</view>
		<view class="hhggbxeer row bbm" v-if="tyer==2">
			<view class="col pd ls fz26 pr mr10" @tap="caidaneer">
				<uni-icons type="search" color="#3DADEB" size="24" class="ls cz"></uni-icons>
				<text class="ml10">{{xzseb?xzseb:'全部'}}</text>
				<image src="../../../static/img/down.png" class="downxeer"></image>
			</view>
			<view class="col pd ls fz26 pr cen blm ">
				<picker mode="date" :value="datewwer" @change="bindDateChange">
					<view class="uni-input">{{datewwer?datewwer:'选择日期'}}</view>
				</picker>
			</view>
		</view>
		<shlist :idxdf="tyer-1"></shlist>
	</view>
</template>
<script>
	import shlist from "@/pages/gongzuo/components/shlist.vue"
	export default {
		props:['tyer'],
		data() {
			return {
				idxdf: 0,
				datewwer: '',
				xzse: '',
				xzseb:''
			}
		},
		components: {
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
					itemList:cdfrrt,
					success: function(res) {
						th.xzse = cdfrrt[res.tapIndex]
					}
				});
			},
			caidaneer (){
				let th = this
				let cdfrrt = ['全部', '未通过', '通过', '已撤销']
				uni.showActionSheet({
					itemList:cdfrrt,
					success: function(res) {
						th.xzseb = cdfrrt[res.tapIndex]
					}
				});
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
