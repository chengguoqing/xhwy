<template>
	<view class="">
	<view class="mt20 bgff dsfdsrtze" v-for="sd in listdata">
		<view class="row">
			<view class="col dian fz32" @tap="yijserrt">
				{{sd.activitySubject}}
			</view>
			<view class="pr">
				<button class="sdfdsrtt" open-type="share"></button>
				<image class="ml10 cttxeert cz" :src="imgurl+'fenxiang.png'" mode="widthFix" @tap.stop="fx"></image>
			</view>
		</view>
		<view class="fz24 z6 dianer mt20" @tap="yijserrt">
			{{sd.activityDesc}}
		</view>
		<view class="jkhhsdr mt20">
			<view class="" v-for="(sf,idx) in sd.activityImgList" @tap.stop="fangdase(sf.imgUrl)" v-if="idx<3">

				<image :src="sf.imgUrl" mode="aspectFill" class="sdfsdrtyd w100"></image>
			</view>
		</view>
		<view class="mt20 row">
<!-- 			<view class="">
				<image v-if="dinas" @tap.stop="diansnsd(1)" :src="imgurl+'hzhsda.png'" mode="widthFix" class="ikxeert cz"></image>
				<image v-else @tap.stop="diansnsd(2)" :src="imgurl+'yidian.png'" mode="widthFix" class="ikxeert cz"></image>
				<text class="fz32 z3 cz ml5">6</text>
			</view> -->
			<view class=" " @tap.stop="pinglld">
				<image :src="imgurl+'hzhsdb.png'" mode="widthFix" class="ikxeert cz"></image>
				<text class="fz32 z3 cz ml5">{{sd.commentNum}}</text>
			</view>
			<view class="col tr">
				<view class="sfdsdttx" :class="hggklse(sd.activityEndTime).code==-1?'act':''">
					{{hggklse(sd.activityEndTime).text}} 
				</view>
				<navigator class="f_b" v-if="isbian" :url="'/pages/user/cjhd?tys=2&id='+sd.id">
					<image :src="imgurl+'bianji.png'" class="jhjjderrt cz" mode="widthFix"></image>
				</navigator>
			</view>
		</view>
		<view class="" v-if="ispl&&sd.activityCommentList.length>0">
			<view class="fz28 btm pd pt20 mt20">
				评论
			</view>
			<pllist :datalist="sd.activityCommentList"></pllist>
		</view>
	</view>
	
	</view>
</template>
<script>
	import pllist from "@/components/pllist.vue"
	export default {
		props: {
			listdata:{
				type:Array,
				default: []
			},
			ispl: { // 是否显示评论列表
				type: Boolean,
				default: false
			},
			isbian: { // 是否显示编辑按钮
				type: Boolean,
				default: false
			},
			isxq: { // 是否为详情
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				dinas: true
			}
		},
		components: {
			pllist
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		methods: {
			fx() {

			},
			// 点赞按钮触发
			diansnsd(dx) {
				if (dx == 1) {
					this.dinas = false
				} else {
					this.dinas = true
				}
			},
			// 评论按钮触发
			pinglld () {
				this.$emit("pinglun")
			},
			// 列表点击事件
			yijserrt(){
				if(!this.isxq) {
					uni.navigateTo({
						url:'/pages/hd/xq'
					})
				}
			},
			// 图片点击放大
			fangdase (url){
				uni.previewImage({
					urls:[url]
				})
			},
			hggklse (datae){
				let hhjher = {}
				let dfjhea = new Date(datae)
				dfjhea= dfjhea.getTime()
				let dfjheb = new Date()
				dfjheb= dfjheb.getTime()
				if (dfjheb>dfjhea){
					hhjher.code=-1
					hhjher.text="已结束"
				}
				if (dfjheb<dfjhea){
					hhjher.code=0
					hhjher.text="进行中"
				}
				return hhjher
			}
			
		},
		mounted() {}
	}
</script>
<style scoped>
	.dsfdsrtze {
		border-radius: 8upx;
		padding: 20upx;
		position: relative;
		z-index: 1;
	}

	.cttxeert {
		width: 138upx;
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

	.ikxeert {
		width: 48upx;
		height: 48upx;
	}


	.sdfdsrtt {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 100;
	}

	.jhjjderrt {
		width: 130upx;
		margin-left: 20upx;
	}
</style>
