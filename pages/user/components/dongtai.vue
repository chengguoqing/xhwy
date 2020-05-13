<!-- 班级动态 -->
<template>
	<view>
		<view class="cen row pt20 pm20">
			<view class="col" v-for="(sd,idx) in kjjhdr">
				<view class="fz28 dfdsrtxe" :class="idx==idse?'act':''" @tap="sdfsdr(idx)">
					{{sd}}
				</view>
			</view>
		</view>

		<view class="pd ">
			<view class="dsfsdtyy yj4 pm40" v-if="ijjhsdf==0">
				<view class="cen fz32">
					你还没有加入任何班级
				</view>
				<view class="mt70 cen  pd">
					<view class="fz32">
						你是老师，可以
						<view class="sdfsdrtxe ab f_b ml20 fz32" @tap="hfs('/pages/user/teacherRegistration')">
							创建班级
						</view>
					</view>
					<view class="fz32 mt40">
						你是学生，可以
						<view class="sdfsdrtxe ab f_b ml20 fz32">
							加入班级
						</view>
					</view>
				</view>
			</view>
			<view class="" v-else-if="ijjhsdf==1">
				<view class="yj8 bgff mb20 " :class="'dsfdsfrttse'+idx" v-for="(sd,idx) in 3">
					<view class="pt20 pm20 pd row pr">
						<image :src="imgurl+'banner.png'" class="yj usderertx"></image>
						<view class="col pl20 ">
							<view class="row">
								<view class="col">
									<view class="fz28">
										王老师
									</view>
									<view class="fz26 ">
										<text class="z9">04-22 18:13</text>#三年级 12班
									</view>
								</view>
								<image :src="imgurl+'sdfdsdsfd.png'" class="hegeerrt cz"></image>
							</view>
							<view class="row mt20 yj4 fdgdfttxerrt  pl10 pr10  pr">
								<view class="col pt20"  v-if="idx==0">
									<view class="cf fz32">
										测试成绩单
									</view>
									<view class="mt20 fz28 cf">
										周五 测试成绩单
									</view>
								</view>
								<view class="col pt20"  v-if="idx==1">
									<view class="cf fz32">
										考后总结
									</view>
									<view class="mt20 fz28 cf">
										【考后总结】 1.本次考试发挥好的学生：力达、欧阳娜娜、张海妖希望你们一如既往的优秀。2.
									</view>
								</view>
								<view class="col pt20"  v-if="idx==2">
									<view class="cf fz32">
										奖状
									</view>
									<view class="mt20 fz28 cf">
										恭喜xxx获得期中考试第一名！
									</view>
								</view>
								
								
								<image :src="imgurl+'dsfsdrta.png'" class="dsfsdrtxeer" v-if="idx==0"></image>
								<image :src="imgurl+'dsfsdrtb.png'" class="dsfsdrtxeer" v-if="idx==1"></image>
								<image :src="imgurl+'dsfsdrtc.png'" class="dsfsdrtxeer" v-if="idx==2"></image>
								<text class="kjhhbxeers"  v-if="idx==0">成绩单</text>
								<text class="kjhhbxeers"  v-if="idx==1">通知</text>
								<text class="kjhhbxeers"  v-if="idx==2">奖状</text>
							</view>
							
							<view class="z9 fz26 mt20">
								#本次成绩学生互相不可见
							</view>
							<view class="mt30 row fz28 z3" v-if="idx==0">
								2人已查看
								<navigator class="col tr" url="/pages/user/transcript">
									<image :src="imgurl+'fenxiang.png'" class="fnheherrrtt" mode="widthFix"></image>
								</navigator>
							</view>
							<navigator class="mt30 row fz28 z3" v-if="idx==1" url="/pages/user/afterSummary">
								<view class="col tr pm10">
									<text class="kjhhbxeers ab"  >显示全部</text>
								</view>
							</navigator>
							<navigator class="mt30 row fz28 z3" v-if="idx==2 " url="/pages/user/jiangzhuang">
								<view class="col tr pm10">
									<text class="kjhhbxeers ab"  >显示全部</text>
								</view>
							</navigator>
						</view>
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
				idse: 0,
				kjjhdr: ['全部', '通知', '成绩', '奖状'],
				ijjhsdf: 1
			}
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		components: {},
		methods: {
			sdfsdr(idx) {
				this.idse = idx
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.dfdsrtxe {
		border-radius: 40upx;
		width: 160upx;
		line-height: 56upx;
		text-align: center;
		color: #808080;
		display: inline-block;
		background: #D9D9D9;
	}

	.dfdsrtxe.act {
		background: #1A75F6;
		color: #fff;
	}

	.dsfsdtyy.ab {
		padding-top: 0px;
	}

	.usderertx {
		width: 70upx;
		height: 70upx;
	}

	.hegeerrt {
		width: 48upx;
		height: 48upx;
		margin-top: 20upx;
	}
	
	.fdgdfttxerrt{
		background: #47D1A3;
		padding-bottom: 20upx;
	}
	.dsfsdrtxeer{
		width: 208upx;
		height: 136upx;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.kjhhbxeers{
		border-radius: 40upx;
		border: 1px solid #fff;
		color-interpolation: #fff;
		font-size: 24upx;
		padding: 8upx 20upx;
		line-height: 1;
		position: absolute;
		right: 20upx;
		top: 20upx;
		color: #fff;
	}
	.fnheherrrtt{
		width: 138upx;
	}
	.dsfdsfrttse1 .fdgdfttxerrt{
		background: #1A75F6;
	}
	.dsfdsfrttse2 .fdgdfttxerrt{
		background: #FF5D6A;
	}
	.kjhhbxeers.ab{
		border-color: #1A75F6;
		color: #1A75F6;
		position: relative;
		right: 0;
		top: 0;
	}
</style>
