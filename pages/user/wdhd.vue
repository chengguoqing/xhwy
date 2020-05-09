<template>
	<view class="pm40">
		<view class="jjhhdrtrts" v-if="gdse>70">
			
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
				
				<view class="tl pt10" v-else>
					<activelist isbian @pinglun="pinglun"></activelist>
					<view class="fz28 btm pd pt20">
						评论
					</view>
					<pllist @pinglun="pinglun"></pllist>
					
					
				</view>
				

			</view>
		</view>

		<text class="fanhuier" @tap="fanhuid">返回</text>
<pinglun ref="jhdrrtt"></pinglun>
	</view>
</template>
<script>
	import usertop from "@/components/usertop.vue"
	import activelist from "@/components/activelist.vue"
	import pllist from "@/components/pllist.vue"
		import pinglun from "@/components/pinglun.vue"
	export default {
		data() {
			return {
				jjhsd: true,
				idxdd: 0,
				timnse: ['发起的活动', '参与的活动'],
				isjjdf:false,
				gdse:0
			}
		},
		components: {
			usertop,
			activelist,
			pllist,
			pinglun
		},
		methods: {
			pinglun(){
				this.$refs.jhdrrtt.open()
			},
			qiehnnmsd(idx) {
				this.idxdd = idx
			},
			onClose() {
				console.log(222)
			},
			fanhuid() {
				uni.navigateBack();
			}
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
		this.gdse = e.scrollTop
		},
		mounted() {

		}
	}
</script>
<style scoped>
	
</style>
