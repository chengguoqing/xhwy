<template>
	<view class="xcfrttyy">
		<view class="hhggbxeer row bbm">
			<view class="col pd ls fz26 pr mr10" @tap="caidan">
				<text class="ml10">{{xzse?xzse:'全部申请'}}</text>
				<image src="../../../static/img/down.png" class="downxeer cz"></image>
			</view>
			<view class="col pd ls fz26 pr mr10 blm" @tap="caidanb">
				<text class="ml10">{{xzseb?xzseb:'全部状态'}}</text>
				<image src="../../../static/img/down.png" class="downxeer cz"></image>
			</view>
			<view class="col pd ls fz26 pr cen blm ">
				<picker mode="date" :value="datewwer" @change="bindDateChange">
					<view class="uni-input">{{datewwer?datewwer:'选择日期'}}</view>
				</picker>
			</view>
		</view>
		
		<view class="pd pt20 pm20">
			<view class="">
				<view class="fz24 z9">
					4月
				</view>
				<navigator class="kjhnnxer ov" v-for="sd in 10" url="/pages/gongzuo/shenqing/jiluxq">
					<view class="row pd dsfdsrt fz26">
						<view class="col">
							<image src="../../../static/img/louzuo_b.png" mode="widthFix" class="xderrty cz"></image>
							<text class="ml10">第一教学楼</text>
						</view>
						<view class="tr">
							待审批 <image src="../../../static/img/right.png" class="fdgrfty cz"></image>
						</view>
					</view>
					<view class="row cen pt30">
						<view class="col">
							<view class="fz24 z9">
								开始时间
							</view>
							<view class="z3 mt10 fz26">
								4月1号 16：00
							</view>
						</view>
						<view class="col">
							<view class="fz24 z9">
								结束时间
							</view>
							<view class="z3 mt10 fz26">
								4月1号 16：00
							</view>
						</view>
						<view class="col">
							<view class="fz24 z9">
								申请数量
							</view>
							<view class="z3 mt10 fz26">
								3
							</view>
						</view>
					</view>
				</navigator>
				
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				xzse:'',
				xzseb:'',
				datewwer:''
			}
		},
		components: {
			
		},
		methods: {
			bindDateChange(e) {
				this.datewwer = e.detail.value
			},
			caidan() {
				let th = this
				let cdfrrt = ['全部申请', '课室申请', '学活申请', '摊位申请']
				uni.showActionSheet({
					itemList: cdfrrt,
					success: function(res) {
						th.xzse = cdfrrt[res.tapIndex]
					}
				});
			},
			caidanb() {
				let th = this
				let cdfrrt = ['全部状态', '待审批', '已通过', '未通过','已撤回']
				uni.showActionSheet({
					itemList:cdfrrt,
					success: function(res) {
						th.xzseb = cdfrrt[res.tapIndex]
					}
				});
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
			    title: '我的申请'
			});
		}
	}
</script>
<style scoped>
	.kjhnnxer{
		height: 200upx;
		background: #fff;
		border-radius: 8upx;
		margin-top: 20upx;
		border: 1px solid #E0E0E0;
	}
	.xderrty{
		width: 50upx;
		height: 50upx;
	}
	
	.dsfdsrt{
		background: #FDA470;
		color: #fff;
		line-height: 70upx;
	}
	.fdgrfty{
		width: 30upx;
		height: 30upx;
	}
	.xcfrttyy{
		padding-bottom: 100upx;
	}
</style>
