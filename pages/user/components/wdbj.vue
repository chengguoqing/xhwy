<!-- 我的班级 -->
<template>
	<view class="">
		<view @tap="showPop=false" v-if="zhyysd==2">

			<view class="pt20 pl20">
				<scroll-view scroll-x="true" class="dx_jz">
					<view class="jhnnxdrtt" :class="xssd==idx?'act':''" v-for="(sd,idx) in 10" @tap="dfkjjxet(idx)">
						三年级 12班
					</view>
				</scroll-view>
			</view>

			<view class="pd mt20">
				<view class="bgff yj4">
					<view class="fz32 z3 pt20 pm20 pd row ">
						<view class="tihhhxert">
							老师（2）
						</view>
						<view class="col  tr">
							<view class="jhjsdtye">
								<image :src="imgurl+'sdfdsdsfc.png'" class="dfdrtyer mr5"></image>
								邀请老师
							</view>
						</view>
					</view>

					<view class="pt20 mt20">
						<view class="ulistrt btm row pr pd pt20 pm20 btm">
							<image :src="imgurl+'banner.png'" class="yj userrtxe"></image>
							<view class="col pl20">
								<view class="fz32 z3 mt5">
									李老师
								</view>
								<view class="z9 fz26 mt20">
									语文老师
								</view>
							</view>
							<image :src="imgurl+'right.png'" class="rightter" mode="widthFix"></image>
						</view>

						<view class="ulistrt btm row pr pd pt20 pm20 btm">
							<image :src="imgurl+'banner.png'" class="yj userrtxe"></image>
							<view class="col pl20 row">
								<view class="col">
									<view class="fz32 z3 mt5">
										周老师
									</view>
									<view class="z9 fz26 mt20">
										李忠平 邀请
									</view>
								</view>
								<view class="">
									<view class="jhjsdtye ab">
										同意加入
									</view>
								</view>
							</view>
						</view>


					</view>

				</view>

			</view>


			<view class="pd mt20">
				<view class="bgff yj4">
					<view class="fz32 z3 pt20 pm20 pd row ">
						<view class="tihhhxert">
							学生（32）
						</view>
						<view class="col  tr">
							<view class="f_b" v-if="isddf">
								<view class="jhjsdtye" @tap="isddf=false">
									保存
								</view>
							</view>
							<view class="f_b" v-else>
								<view class="jhjsdtye">
									<image :src="imgurl+'sdfdsdsfc.png'" class="dfdrtyer mr5"></image>
									邀请学生
								</view>
								<image :src="imgurl+'sdfdsdsfd.png'" class="uujmxeer cz ml10" mode="widthFix" @tap="gengduo"></image>
							</view>
						</view>
					</view>
					<view class="">
						<view class="ulistrt btm row pr pd pt20 pm20 btm" v-for="(sd,idx) in 2" @longpress="onLongPress($event,idx,1)"
						 @tap="sdfrrt">
							<image :src="imgurl+'banner.png'" class="yj userrtxe"></image>
							<view class="col pl20">
								<view class="fz32 z3 mt5" :class="isddf?'mt30':''">
									李忠平
									<input v-if="isddf" type="number" class="fz28 fdgdfgdgt cz ml10" placeholder="请输入学号" />
								</view>
								<view class="z9 fz26 mt20" v-if="!isddf">
									学号 46
								</view>
							</view>
							<image :src="imgurl+'right.png'" class="rightter" mode="widthFix"></image>
						</view>


						<view class="btm ls fz32 pd pt20 pm20">
							A
						</view>
						<view class="ulistrt btm row pr pd pt20 pm20 btm" v-for="(sd,idx) in 10" @longpress="onLongPress($event,idx,2)"
						 @tap="sdfrrt">
							<image :src="imgurl+'banner.png'" class="yj userrtxe"></image>
							<view class="col pl20">
								<view class="fz32 z3 mt5" :class="isddf?'mt30':''">
									李忠平
									<input v-if="isddf" type="number" class="fz28 fdgdfgdgt cz ml10" placeholder="请输入学号" />
								</view>
								<view class="z9 fz26 mt20" v-if="!isddf">
									学号 46
								</view>
							</view>
							<image :src="imgurl+'right.png'" class="rightter" mode="widthFix"></image>
						</view>
					</view>


				</view>
			</view>
			<view class="jhhxertr fz28 z6 cen yj4" :style="popStyle" v-if="showPop">
				<view class="pt20 pm20" @tap="showPop=false" v-if="isddr==1">
					取消置顶
				</view>
				<view class="pt20 pm20" @tap="showPop=false" v-if="isddr==2">
					置顶
				</view>
				<view class="pt20 pm20 btm" @tap="showPop=false">
					注销
				</view>
			</view>
		</view>
		<view class="pd" v-else-if="zhyysd==1">
			<view class="dsfsdtyy yj4 mt20">

				<view class="cen fz32">
					加入班级需要老师确认，
					<view class="mt10">
						请耐心等待
					</view>
				</view>
				<view class="mt70 cen row pd">
					<view class="col">
						<view class="sdfsdrtxe ab" @tap="zhyysd=2">
							好的
						</view>
					</view>
				</view>

			</view>
		</view>
		<view class="pd" v-else-if="zhyysd==0">
			<view class="dsfsdtyy yj4 mt20">

				<view class="cen fz32">
					确认加入 <text class="ls">三年级 12班</text> 吗？
				</view>
				<view class="mt70 cen row pd">
					<view class="col">
						<view class="sdfsdrtxe" @tap="zhyysd=1">
							是的，我是老师
						</view>
					</view>
					<view class="col">
						<view class="sdfsdrtxe ab" @tap="zhyysd=1">
							是的，我是学生
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
				/* 窗口尺寸 */
				winSize: {},
				popStyle: '',
				showPop: false,
				xssd: 0,
				isddr: 1, // 1 取消置顶 2 置顶
				isddf: false, // 是否设置学号的状态
				zhyysd: 0
			}
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		components: {},
		methods: {
			getWindowSize() {
				uni.getSystemInfo({
					success: (res) => {
						this.winSize = {
							"witdh": res.windowWidth,
							"height": res.windowHeight
						}
					}
				})
			},
			onLongPress(e, idx, ty) {
				console.log(ty)
				this.isddr = ty
				let [touches, style, index] = [e.touches[0], "", e.currentTarget.dataset.index];
				/* 因 非H5端不兼容 style 属性绑定 Object ，所以拼接字符 */
				if (touches.clientY > (this.winSize.height / 2)) {
					style = `bottom:${this.winSize.height-touches.clientY}px;`;
				} else {
					style = `top:${touches.clientY}px;`;
				}
				if (touches.clientX > (this.winSize.witdh / 2)) {
					style += `right:${this.winSize.witdh-touches.clientX}px`;
				} else {
					style += `left:${touches.clientX}px`;
				}

				this.popStyle = style;
				this.$nextTick(() => {
					setTimeout(() => {
						this.showPop = true;
					}, 10);
				});
			},
			sdfrrt(e) {
				console.log(22)
			},
			dfkjjxet(idx) {
				this.xssd = idx
			},
			gengduo() {
				let th = this
				uni.showActionSheet({
					itemList: ['设置学号'],
					success: function(res) {
						if (res.tapIndex == 0) {
							th.isddf = true
						}
					}
				});
			}
		},
		mounted() {
			this.getWindowSize()
		}
	}
</script>
<style scoped>
	.jhnnxdrtt {
		display: inline-block;
		border-radius: 8upx;
		text-align: center;
		width: 258upx;
		height: 78upx;
		line-height: 78upx;
		background: #D9D9D9;
		color: #808080;
		font-size: 28upx;
		margin-right: 20upx;
	}

	.jhnnxdrtt.act {
		color: #fff;
		background-color: #1A75F6;
	}

	.jhjsdtye {
		padding: 10upx 20upx;
		color: #fff;
		background: #1A75F6;
		border-radius: 40upx;
		display: inline-block;
		font-size: 28upx;

	}

	.jhjsdtye.ab {
		position: relative;
		top: 24upx;
		border: 1px solid #1A75F6;
		background: #fff;
		color: #1A75F6;
	}

	.dfdrtyer {
		width: 34upx;
		height: 34upx;
		position: relative;
		top: 4upx;
	}

	.tihhhxert {

		line-height: 60upx;
	}

	.userrtxe {
		width: 100upx;
		height: 100upx;

	}

	.rightter {
		width: 36upx;
		position: absolute;
		right: 20upx;
		top: 60upx;
	}

	.uujmxeer {
		width: 48upx;
	}

	.fdgdfgdgt {
		width: 200upx;
		height: 50upx;
		border: 1px solid #e0e0e0;
		border-radius: 8upx;
		padding-left: 20upx;
		display: inline-block;
	}

	.jhhxertr {
		position: fixed;
		width: 200upx;
		background: #fff;
		border: 1px solid #DEDEDE;
		z-index: 100;
	}
</style>
