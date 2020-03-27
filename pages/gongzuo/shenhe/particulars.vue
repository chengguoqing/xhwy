<template>
    <view class="pd pt20 dsfdttxe">
		<view class="bgff ffgtyser ov">
			<view class="pr pd pt30 row jjhhxder">
				<view class="col">
					<image src="../../../static/img/louzuo.png" class="koujxert cz" mode="widthFix"></image>
					<text class="ls fz28 ml10">第一教学楼</text>
				</view>
				<view class="col tr z9 fz26 pt10">
					编号：123456789 
				</view>
			</view>
			
			<view class="pd pt40 fz24 jjhhxder pr">
				<view class="z3">
					<text class="z9">申请人</text>
					<text class="ml10">独行工匠</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">申请人所属单位</text>
					<text class="ml10">独行工匠</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">开始时间</text>
					<text class="ml10">2020-02-04  19：00</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">结束时间</text>
					<text class="ml10">2020-02-04  19：00</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">时长</text>
					<text class="ml10">1</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">申请设备</text>
					<text class="ml10">音响 ：1   空调：2</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">申请理由</text>
					<text class="ml10">进行机构新生 的第一轮面试</text>
				</view>
				<view class="z3 mt20">
					<text class="z9">提交日期</text>
					<text class="ml10">2020-01-03  16：00</text>
				</view>
				<view class="z3 mt20 row sdfdsfrt">
					<text class="z9">活动推文</text>
					<text class="ml10 col">活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文活动推文</text>
				</view>
			</view>
			
			<view class="pd pt30">
				<view class="fz26 z6">
					审批流程记录
				</view>
				
				<view class="kjeert pr mt40">
					<view class="dfddyxeer">
						
					</view>
					
					<view class="kjkjhhxner row">
						<view class="xdeeert pr">
							<image src="../../../static/img/banner.png" class="kjjmxeert"></image>
							<icon type="success_no_circle" size="16" class="cderrrtxe"></icon>					
						</view>
						<view class="col pl60 ">
							<view class="row mt10">
								<view class="fz30 z3">
									发起申请
								</view>
								<view class="fz26 z9 tr col">
									03.01  01:08
								</view>
							</view>
							<view class="fz26 z3 mt40">
								独行工匠
							</view>
						</view>
					</view>
					
					<view class="kjkjhhxner row">
						<view class="xdeeert pr">
							<image src="../../../static/img/banner.png" class="kjjmxeert"></image>
							<icon type="cancel" size="16" class="cderrrtxe"></icon>					
						</view>
						<view class="col pl60 ">
							<view class="row mt10">
								<view class="fz30 z3">
									发起申请
								</view>
								<view class="fz26 z9 tr col">
									03.01  01:08
								</view>
							</view>
							<view class="fz26 z3 mt40">
								独行工匠
							</view>
						</view>
					</view>
					
					
					<view class="kjkjhhxner row">
						<view class="xdeeert pr">
							<view class="yj kjjxeeert">
								<image src="../../../static/img/xunuhu.png" class="kjjmxeert"></image>
								
							</view>
						</view>
						<view class="col pl60 ">
							
							<view class="fz26 z3 mt20">
								 校团委 
							</view>
						</view>
					</view>
					
					
					<view class="kjkjhhxner row">
						<view class="xdeeert pr">
							<view class="yj kjjxeeert">
								<view class="kjjnxeer yj"></view>
							</view>
						</view>
						<view class="col pl60 ">
							<view class="fz26 z3 mt20">
								 校团委 
							</view>
						</view>
					</view>
					<view class="kjkjhhxner row">
						<view class="xdeeert pr">
							<view class="yj kjjxeeert">
								<view class="kjjnxeer yj"></view>
							</view>
						</view>
						<view class="col pl60 ">
							<view class="fz26 z3 mt20">
								 课室管理科 
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<navigator class="kjnmxeeretr fz32" url="/pages/gongzuo/shenhe/shenbinr">
			审批
		</navigator>
    </view>
</template>
<script>
export default {
    data () {
        return {}
    },
    components: {},
    methods: {},
    mounted () {}
}
</script>
<style  scoped>
	.ffgtyser{
		position: relative;
		border-radius: 8upx;
	}
	.koujxert{
		width: 60upx;
	}
	.jjhhxder{
		padding-bottom: 30upx;
		border-bottom: 1px dashed #e0e0e0;
	}
	.jjhhxder::after,.jjhhxder::before{
		content: ' ';
		width: 40upx;
		height: 40upx;
		position: absolute;
		left: -20upx;
		bottom: -20upx;
		border-radius: 50%;
		background:#F7F7F7 ;
	}
	.jjhhxder::before{
		left: inherit;
		right: -20upx;
	}
	
	.kjjmxeert{
		width: 140upx;
		height: 140upx;
		padding: 10upx;
		background: #fff;;
		border: 1px solid #e0e0e0;
	}
	.xdeeert{
		width: 140upx;
	}
	.cderrrtxe{
		position: absolute;
		right: -40upx;
		bottom: 20upx;
	}
	.kjkjhhxner{
		margin-bottom: 40upx;
	}
	.kjjxeeert{
		text-align: center;
	}
	.kjjxeeert image{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		background: #fff;
		display: inline-block;
	}
	.kjjnxeer{
		background: #989898;
		border-radius: 50%;
		width: 40upx;
		height: 40upx;
		display: inline-block;
		margin-top: 16upx;
		border:4upx solid #fff
	}
	.dfddyxeer{
		position: absolute;
		left: 65upx;
		top: 0;
		width: 10upx;
		height: 100%;
		background: #BBBBBB;
	}
	.dsfdttxe{
		padding-bottom: 120upx;
	}
</style>
