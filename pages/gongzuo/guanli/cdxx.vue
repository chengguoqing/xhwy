<!-- 场地信息 -->
<template>
	<view class="pd pt20 pm100">
		<view class="fsgtyydfr" v-for="sd in 10">
			<view class="row pt20">
				<view class="col">
					<image src="../../../static/img/louzuo.png" class="dfsgdttyxe cz"></image>
					<text class="ls fz28 ls ml10">第一教学楼</text>
				</view>
				<view class="">
					<image src="../../../static/img/bianji.png" class="dfggrtyxe cz" @tap="idddff=true"></image>
				</view>
			</view>
			<view class="bgff sdfgdgtyxer mt20">
				<view class="pd pt20 pm20 row">
					<view class="dfsgrfyyy ">
						<image src="../../../static/img/naoz.png" class="cz fdgfrtyxe"></image>
						<text class="ml10 z9 fz30">开发时间</text>
					</view>
					<view class="col z9 fz32 cz fsgfdty">
						08:00
					</view>
				</view>

				<view class="btm pd pt20 pm20 row">
					<view class="dfsgrfyyy ">
						<image src="../../../static/img/naoz.png" class="cz fdgfrtyxe"></image>
						<text class="ml10 z9 fz30">开发时间</text>
					</view>
					<view class="col z9 fz32 cz fsgfdty">
						08:00
					</view>
				</view>
			</view>

		</view>

		<!-- 编辑弹出层 -->
		<view class="fgdftyyxcert" v-if="idddff">
			<view class="dfgdfgyxerr">
				<view class="pd pt20">
					<view class="z6 fz26">
						请输入要修改的内容
					</view>
					<view class="mt40 row dfsgfyuyxre">
						<view class="fz26 z3">
							开始时间
						</view>
						<view class="col pl20">
							<picker mode="date" class="fdgfdtyxr fz28 pl20" @change="dfgdftya">
								<view>{{dsfdsgfda || '请选择'}}</view>
							</picker>
						</view>
					</view>

					<view class="mt20 row dfsgfyuyxre">
						<view class="fz26 z3">
							结束时间
						</view>
						<view class="col pl20">
							<picker mode="date" class="fdgfdtyxr fz28 pl20" @change="dfgdftyb">
								<view>{{dsfdsgfdb || '请选择'}}</view>
							</picker>
						</view>
					</view>
				</view>



				<view class="mt40 row">
					<view class="col dfgdfgt" @tap="idddff=false">
						取消
					</view>
					<view class="col dfgdfgt ab" @tap="idddff=false">
						确定
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
				idddff:false,
				dsfdsgfda: '',
				dsfdsgfdb: ''
			}
		},
		components: {

		},
		methods: {
			dfgdftya(e){
				this.dsfdsgfda = e.detail.value
			},
			dfgdftyb(e){
				this.dsfdsgfdb = e.detail.value
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.dfsgdttyxe {
		width: 55upx;
		height: 55upx;
	}

	.dfggrtyxe {
		width: 40upx;
		height: 40upx;
	}

	.sdfgdgtyxer {
		border-radius: 8upx;
		background: #fff;
	}

	.fdgfrtyxe {
		width: 44upx;
		height: 44upx;
	}

	.fsgfdty {
		margin-top: 8upx;
	}

	.dfsgrfyyy {
		width: 250upx;
	}

	.fgdftyyxcert {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
	}

	.dfgdfgyxerr {
		width: 540upx;
		height: 320upx;
		border-radius: 8upx;
		background: #fff;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	.fdgfdtyxr {
		height: 60upx;
		line-height: 60upx;
		border: 1px solid #E0E0E0;
	}

	.dfsgfyuyxre {
		line-height: 60upx;
	}

	.dfgdfgt {
		line-height: 70upx;
		font-size: 30upx;
		background: #7AB8FB;
		color: #fff;
		text-align: center;
	}

	.dfgdfgt.ab {

		font-size: 30upx;
		background: #FF5F5F;
	}
</style>
