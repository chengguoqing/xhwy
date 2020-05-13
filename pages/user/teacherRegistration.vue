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
				<text class="ml10">主教课程</text>
			</view>
			<input type="text" value="" placeholder="请输入你主要教的课程" class="fz30 userinput" />
		</view>
		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">班级名称</text>
			</view>
			<input type="text" value="" placeholder="请输入您教授的班级名称，例：三年级 42班" class="fz30 userinput" />
		</view>

		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text><text class="ml10">所属学校</text>
			</view>
			<view class="mt20 row">
				<view class="jjhghsedert pr" @tap="upimgsd">
					<image :src="imgurl+'close.png'" class="cloasert" @tap.stop="xuixois=''" v-if="xuixois"></image>
					<image :src="imgurl+'upicon.png'" class="kjnxertrt cz" v-if="!xuixois"></image>
					<image :src="xuixois" class="w100 h100 " v-else-if="xuixois"></image>
				</view>
				<view class="col pl20 z9 fz28">
					上传一张学校证明资料或者牌匾照片。 要求清晰的包含所属市、区。
				</view>
			</view>
		</view>

<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text><text class="ml10">教师证号</text>
			</view>
			<view class="mt20 row">
				<view class="jjhghsedert pr" @tap="upimgsdb">
					<image :src="imgurl+'close.png'" class="cloasert" @tap.stop="xuixoisb=''" v-if="xuixoisb"></image>
					<image :src="imgurl+'upicon.png'" class="kjnxertrt cz" v-if="!xuixoisb"></image>
					<image :src="xuixoisb" class="w100 h100 " v-else-if="xuixoisb"></image>
				</view>
				<view class="col pl20 z9 fz28">
					上传一张自己的教师证，经后台审核后， 系统教师角色生效
				</view>
			</view>
		</view>
		
		
		
		<view class="mt70">
			<view class="kjhnxeertx row">
				<view class="col dfrtxeertr">
					提交
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
				xuixoisb:''
			}
		},
		components: {},
		methods: {
			// 上传图片按钮触发
			upimgsd() {
				uni.chooseImage({
					count: 1,
					success: (a) => {
						this.xuixois=a.tempFilePaths[0]
					}
				})
			},upimgsdb() {
				uni.chooseImage({
					count: 1,
					success: (a) => {
						this.xuixoisb=a.tempFilePaths[0]
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
