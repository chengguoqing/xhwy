<template>
	<view class="pd bgff pt40 btm pm40">
		<view class="">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">姓名</text>
			</view>
			<input type="text" value="" placeholder="请输入你的真实姓名" class="fz30 userinput" />
		</view>
		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">所属学校</text>
			</view>
			<input type="text" value="" placeholder="请输入所属学校" class="fz30 userinput" />
		</view>
		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">所属班级</text>
			</view>
			<input type="text" value="" placeholder="请输入您班级名称，例：三年级 42班" class="fz30 userinput" />
		</view>

		<view class="fz30 mt30">
			<text class="red cz">*</text>
			<text class="ml10">活动详情</text>
			<textarea value="" placeholder="请输入活动具体内容" class="w100 fz30 userinput ab" />
			</view>
		

<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text><text class="ml10">上传图片</text>
			</view>
			<view class="mt20 row" v-if="tupoojs.length<=0">
				<view class="jjhghsedert pr" @tap="upimgsd">
					<image :src="imgurl+'upicon.png'" class="kjnxertrt cz" ></image>
				</view>
				<view class="col pl20 z9 fz28">
					您可以上传6张图片，1个视频
				</view>
			</view>
			
			<view class="mt20" v-else>
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
				xuixois:'',
				xuixoisb:'',
				tupoojs:[]
			}
		},
		components: {},
		methods: {
			// 上传图片按钮触发
			// 上传图片按钮触发
			upimgsd() {
							  uni.chooseImage({
							  	count:1,
								success: (a) => {
									this.tupoojs.push(a.tempFilePaths[0])
								}
							  })
			},
			clossert(idx){
							  uni.showModal({
							  	title:"确认删除该图片吗？",
								success: (e) => {
									if (e.confirm) {
										this.tupoojs.splice(idx,1)
									}
								}
							  })
			},
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		mounted() {}
	}
</script>
<style scoped>

</style>
