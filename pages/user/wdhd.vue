<template>
	<view class="pm40">
		<!--  -->
		<view class="jjhhdrtrts pd">
			<view class="bgsddrrt" v-if="gdse>70"></view>
			<view class="pr" @tap="ht">
				<image :src="imgurl+'left.png'" mode="widthFix" class="leistrrt cz"></image>
				<text class="fz32 z3 ml10">我的活动</text>
			</view>
		</view>
		<usertop isbianji></usertop>
		<view class="btm bgff jhhxrert row">
			<view class="col cen sdfsdrtt pr" :class="idxdd==idx?'act':''" v-for="(sd,idx) in timnse" @tap="qiehnnmsd(idx)">
				{{sd}}
			</view>
		</view>
		<view class="pd pt20">
			<view class="kjhxdrrt cen">

				<view class="" v-if="isjjdf">
					<view class="fz32 cen sdfdrtxwe">
						未发起过活动
					</view>
					<navigator class="jhbbnxdf fz32 mt40" url="/pages/user/cjhd">
						现在创建
					</navigator>
				</view>

				<view class="tl " v-else>
					<activelist :isbian="idxdd==0?true:''" @pinglun="pinglun" :listdata="listdata" :ispl="true"></activelist>
					
				</view>


			</view>
		</view>

			<pinglun ref="jhdrrtt" :activityId="activityId"></pinglun>
	</view>
</template>
<script>
	import usertop from "@/components/usertop.vue"
	import activelist from "@/components/activelist.vue"
	import pinglun from "@/components/pinglun.vue"
	export default {
		data() {
			return {
				activityId:'',
				listdata:'',
				jjhsd: true,
				idxdd: 0,
				timnse: ['发起的活动', '参与的活动'],
				isjjdf: false,
				gdse: 0
			}
		},
		components: {
			usertop,
			activelist,
			pinglun
		},
		computed: {
			imgurl() {
				return this.$store.state.imgurl
			}
		},
		methods: {
			pinglun(e) {
				this.activityId = e
				this.$refs.jhdrrtt.open()
			},
			qiehnnmsd(idx) {
				this.idxdd = idx
				this.getdata()
			},
			onClose() {

			},
			fanhuid() {
				uni.navigateBack();
			},
			async getdata(ty) {
				let datad ={}
				datad.userId =1
				let qurl = "/activity/myActivityList"
				if (this.idxdd == 1){
					qurl = "/activity/myPartakeActivityList"
				}
				let res = await this.post(qurl)
				this.listdata = res.data
				console.log(this.listdata)
			}
		},
		onPageScroll: function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			this.gdse = e.scrollTop
		},
		onLoad() {
			this.getdata()
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.kjhxdrrt{
		background:transparent !important;
	}
</style>
