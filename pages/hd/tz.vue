<!-- 发布通知 -->
<template>
	<view class="pd bgff pt40 btm pm40">
		<view class="">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">班级名称</text>
			</view>
			<picker class="fz30 userinput " @change="bindPickerChange" :range="array">
				<text class="z9" v-if="!jhhsdfa">请选择班级名称</text>
				<text class="z3" v-else>{{jhhsdfa}}</text>
				<image src="../../static/img/right.png" class="rihhhher" mode="widthFix"></image>
			</picker>
		</view>
		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">选择成员</text>
			</view>
			<picker class="fz30 userinput " @change="bindPickerChangeb" :range="arrayb">
				<text class="z9" v-if="!jhhsdfb">请选择选择成员</text>
				<text class="z3" v-else>{{jhhsdfb}}</text>
				<image src="../../static/img/right.png" class="rihhhher" mode="widthFix"></image>
			</picker>
		</view>


		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">通知标题</text>
			</view>
			<input type="text" value="" placeholder="例如关于穿校服的通知" class="fz30 userinput" />
		</view>

		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">通知内容</text>
			</view>
			<view class="w100 fz30 userinput ab pr">
				<textarea  placeholder="请输入通知内容" row="6" class="w100 h100" />
				<view class="sdfjdjgrrt pd pm20 tr">
					<image src="../../static/img/fdsfsda.png" class="kjjhxertxer cz" mode="widthFix" @tap="upimgsd"></image>
					<image src="../../static/img/fdsfsdb.png" class="kjjhxertxer ml10 cz" mode="widthFix" @tap="upVideo"></image>
				</view>
			</view>
			<view class="fz26 z3 tr mt20">
				（视频或拍照出现问题？
				<text class="ls">点击这里</text>)
			</view>
		</view>
			
			<view class="mt30" v-if="tupoojs.length>0">
				<view class="fz30">
				</view>
				<view class="mt20">
					<view class="jjhghsedert pr fl mr10 mb20" v-for="(sd,idx) in tupoojs">
						<image :src="sd" class="w100 h100 " ></image>
						<image :src="imgurl+'close.png'" class="cloasert" @tap="clossert(idx)"></image>
					</view>
					
					<view class="jjhghsedert fl" @tap="upimgsd">
						<image :src="imgurl+'upicon.png'" class="kjnxertrt cz" ></image>
					</view>
					<view class="qc">
						
					</view>
				</view>
			</view>
			
			<view class="mt30" v-if="hjjsd">
				<view class="fz30">
				</view>
				<view class="mt20">
					<view class="jjhghsedert pr fl mr10 mb20">
						<image :src="dsftyer" class="w100 h100 " ></image>
						<image :src="imgurl+'close.png'" class="cloasert" @tap="hjjsd=''"></image>
						<view class="jhjbcrtxer" @tap="hfs('/pages/public/video?urls='+hjjsd)">
							<image src="../../static/img/bofang.png" class="cz bofnahert"></image>
						</view>
					</view>
					
				
					<view class="qc">
						
					</view>
				</view>
			</view>
			
			
		<view class="mt70">
			<view class="kjhnxeertx row">
				<view class="fdgdttxeer">
					保存并预览
				</view>
				<view class="col dfrtxeertr">
					立即发布
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				teste:'',
				jhhsdfa:'',
				dsftyer:'',
				hjjsd:'',
				array:['班级一','班级二','班级三','班级四'],
				jhhsdfb:'',
				arrayb:['全部','成员a','成员b','成员c'],
				tupoojs:[],
			}
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		components: {},
		methods: {
			bindPickerChange(e) {
				this.jhhsdfa = this.array[e.detail.value]
			},
			bindPickerChangeb(e) {
				this.jhhsdfb = this.arrayb[e.detail.value]
			},
			// 选择图片
			upimgsd() {
							  uni.chooseImage({
							  	count:1,
								success: (a) => {
									this.tupoojs.push(a.tempFilePaths[0])
								}
							  })
			},
			// 选择视频
			upVideo() {
				uni.chooseVideo({
					success: async (res) => {
						this.teste = JSON.stringify(res)
						this.dsftyer = res.thumbTempFilePath
						const tempFilePaths =res.tempFilePath;
						uni.showLoading({
							title:'视频上传中'
						})
						let urlse = await this.upfile.upload2oss(tempFilePaths,'.mp4')
						this.hjjsd = urlse
					}
				})
			},
		},
		mounted() {}
	}
</script>
<style scoped>
	.userinput{
		line-height: 88upx;
		position: relative;
	}
	.userinput.ab{
		line-height: 1.6;
		height: 300upx;
		padding-left: 20upx;
	}
	.rihhhher{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
	}
	.sdfjdjgrrt{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		z-index: 10;
	}
	.kjjhxertxer{
		width: 60upx;
	}
</style>
