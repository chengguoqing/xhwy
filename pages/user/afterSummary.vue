<template>
	<view class="">
		<view class="bgff btm pd">
			<view class="fz28 z3  pt40 dsfsdrttze">
				【考后总结】 1.本次考试发挥好的学生：xxx、xxx、xxx 2.本次考试进步较大的学生：xxx、xxx、xx。期待你们下次可以发挥的更好。 3.本次考试发挥不佳的学生：xxx、谢谢、xxx、。
				希望你们不要泄气，用心学习，继续加油
			</view>
			<view class="jkhhsdr mt20">
				<view class="" v-for="sd in 3">
					<image src="https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png" mode="aspectFill" class="sdfsdrtyd w100"></image>
				</view>
			</view>
			<view class="btm mt20 pt20 pm20 tr fz26">
				<image :src="imgurl+'zu.png'" class="xdrrtte mr10 cz"></image> <text class="cz">班级：1班</text>
			</view>
		</view>
		
		<view class=" bgff mt20 pm40">
			<view class="pd  jhhxrert bbm">
				<view class=" cen sdfsdrtt pr f_b mr30 fz32" :class="idxdd==idx?'act':''" v-for="(sd,idx) in timnse" @tap="qiehnnmsd(idx)">
					{{sd}}
				</view>
			</view>
			<view class="">
				<view class="jhbnnxeert cen mt20" v-for="sd in 20">
					<view class="kjhnxerrtx f_b">
						<image :src="imgurl+'banner.png'" class="yj ujjdrrttx"></image>
						<view class="dfdsttxer">
							王泽铭
						</view>
					</view>
				</view>
				
				<view class="qc">
					
				</view>
			</view>
			
			
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				idxdd:0,
				timnse:['已读(20)','已读(20)']
			}
		},
		components: {},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		methods: {
			qiehnnmsd(idx){
				this.idxdd = idx
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.dsfsdrttze {
		line-height: 1.8;
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

	.xdrrtte {
		width: 40upx;
		height: 40upx;
	}
	.jhbnnxeert{
		width: 20%;
		float: left;
	}
	.kjhnxerrtx{
		width: 114upx;
	}
	.ujjdrrttx{
		width: 88upx;
		height: 88upx;
	}
	.dfdsttxer{
		border-radius: 20upx;
		background:rgba(240,240,240,1);
		color: #333;
		line-height: 40upx;
		font-size: 24upx;
		margin-top: -30upx;
		position: relative;
		z-index: 10;
	}
</style>
