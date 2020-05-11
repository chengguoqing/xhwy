<template>
	<view>
		<view class="bghhdert">
			<image :src="bjurl" class="w100 h100" mode="widthFix"></image>
		</view>
		<view class="drtterrt">
			<view class="jjhhxdef bgff pd">
				<view class="">
					<image src="../static/img/banner.png" class="yj usericdert"></image>
					<text class="jjhhhcrr fz24" @tap="gehuanbj">点击图片，更换背景</text>
				</view>

				<view class="fz36 z3 mt20 row">
					独行工匠
					<!-- 班级 -->
					<view class="col pr" v-if="banji">
						<image src="../static/img/sdfdsdsfa.png" class="jjhdrtrx ml20 cz"></image>
						<text class="ls fz30 ml5">老师</text>
						<view class="cf fz32 jhjsdtye cen" @tap="$emit('showewe')">
							<image src="../static/img/sdfdsdsfb.png" class="dfdrtyer cz"></image>
							<text class="ml5">动态</text>
						</view>
					</view>
					<view class="col" v-else>
						<image v-if="!isbianji" src="../static/img/bj.png" class="bjsderttx cz ml10"></image>
					</view>
				</view>
			</view>
		</view>
		
		<!-- #ifdef MP-WEIXIN -->
		<van-popup :show="jjhsd" @close="jjhsd=false" position="bottom" >
			<view class="bgff pr">
				 <icon type="clear" size="20" class="closderert" @tap="jjhsd=false"/>
				<view class="pt20 pm20 fz32 cen">
					请选择一张背景图
				</view>
				<scroll-view scroll-x="true" class="sdfsdtyzwe pr20 pm20 mt20">
					<image :src="sd" v-for="sd in bgtps" class="kjjsdfstyt" @tap="kjjdddf(sd)"></image>
				</scroll-view>
			</view>
		</van-popup>
		<!-- #endif -->
		
	</view>
</template>
<script>
	export default {
		props:['isbianji','banji'],
		data() {
			return {
				jjhsd:false,
				bjurl: 'https://testcheng.oss-cn-shanghai.aliyuncs.com/bgtp.png',
				bgtps:[
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg1.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg2.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg3.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg4.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg5.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg6.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg7.png',
					'https://testcheng.oss-cn-shanghai.aliyuncs.com/bg8.png',
				]
			}
		},
		components: {},
		methods: {
			// 更换背景图按钮触发
			gehuanbj() {
				this.jjhsd=true
			},
			kjjdddf(sd){
				this.bjurl = sd
				this.jjhsd=false
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
		.bghhdert {
			height: 370upx;
			overflow: hidden
		}
	.drtterrt {
		position: relative;
		margin-top: -67upx;
		z-index: 10;
	}
	.jjhhhcrr {
		background: rgba(255, 255, 255, 0.6);
		line-height: 1;
		position: relative;
		top: -90upx;
		margin-left: 40upx;
		color: #1A1A1A;
		padding: 4upx 20upx;
		border-radius: 20upx;
	}
	.jjhhxdef {
		height: 174upx;
		background: #fff;
		border-top-left-radius: 40upx;
		border-top-right-radius: 40upx;
	}
	.usericdert {
		border-radius: 50%;
		border: 4upx solid #fff;
		width: 128upx;
		height: 128upx;
		margin-top: -64upx;
	}
	.bjsderttx {
		width: 40upx;
		height: 40upx;
	}
	
	.sdfsdtyzwe{
		white-space:nowrap; 
	}
	.kjjsdfstyt{
		width: 422upx;
		height: 244upx;
		border-radius: 8upx;
		margin-left: 20upx;
	}
	.sdfsdtyzwe{
		height: 244upx;
	}
	
	.jjhdrtrx{
		width: 28upx;
		height: 28upx;
	}
	.jhjsdtye{
		width: 172upx;
		height: 68upx;
		color: #fff;
		background: #1A75F6;
		border-radius: 40upx;
		line-height: 68upx;
		position: absolute;
		right: 0;
		top: -10upx;
		
	}
	.dfdrtyer{
		width: 32upx;
		height: 32upx;
		position: relative;
		top: -4upx;
	}
</style>
