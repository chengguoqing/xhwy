<template>
	<view class="btm pt20 pd">
		<view class=" dfgdftyxewrt">
			<view class="cf fz32 pt20 cen">
				{{kjhx.Sound}}
			</view>
			<view class="parentse cen mt50 pd">
				<view class="jjhser">
					<view class="fz28 cf">
						{{kjhx.Music}}
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix" @tap='kkjsdddv("vod/server/sendmessage", "Control-Sound-Audio_Volume", "-")'></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix" @tap='kkjsdddv("vod/server/sendmessage", "Control-Sound-Audio_Volume","+" )'></image>
					</view>
				</view>
				<view class="jjhser">
					<view class="fz28 cf">
						{{kjhx.Mic}}
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix" @tap='kkjsdddv("vod/server/sendmessage", "Control-Sound-Microphone_Volume", "+")'></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix" @tap='kkjsdddv("vod/server/sendmessage", "Control-Sound-Microphone_Volume", "-")'></image>
					</view>
				</view>
				<view class="jjhser">
					<view class="fz28 cf">
						{{kjhx.Effect}}
					</view>
					<view class="jhbxert">
						<image src="../../static/img/fgfga.png" class="w100" mode="widthFix" @tap='kkjsdddv("vod/server/sendmessage", "Control-Sound-Effect_Volume", "+")'></image>
						<image src="../../static/img/fgfgb.png" class="w100" mode="widthFix" @tap='kkjsdddv("vod/server/sendmessage", "Control-Sound-Effect_Volume", "-")'></image>
					</view>
				</view>
			</view>
		</view>
		<view class="mt40">
			<view class="fz30 z3">
				气氛
			</view>
			<view class="row cen mt40">
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Mode-Whistle", null)'>
					<image src="../../static/img/fgfgc.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.MoodWhistle}}
					</view>
				</view>
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Mode-Appluse", null)'>
					<image src="../../static/img/fgfgd.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.MoodApplaudShort}}
					</view>
				</view>
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Mode-Mock", null)'>
					<image src="../../static/img/fgfge.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.MoodApplaudLong}}
					</view>
				</view>
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Mode-Smile", null)'>
					<image src="../../static/img/fgfgf.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.MoodSmile}}
					</view>
				</view>
			</view>


			<view class="row cen mt60">
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Control-Repeat", null)'>
					<image src="../../static/img/fgfgg.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.Replay}}
					</view>
				</view>
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Control-SongMode", null)'>
					<image src="../../static/img/fgfgh.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.SongMode}}
					</view>
				</view>
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Control-Next", null)'>
					<image src="../../static/img/fgfgi.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.NexSong}}
					</view>
				</view>
				<view class="col" @tap='kkjsdddv("vod/server/sendmessage", "Control-Pause", null)'>
					<image src="../../static/img/fgfgj.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.Pause}}
					</view>
				</view>
			</view>


			<view class="row cen mt60">
				<view class="col" @tap="ljhad">
					<image src="../../static/img/fgfgk.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.Bluetooth}}
					</view>
				</view>


				<view class="col" @tap="dfdg=true">
					<image src="../../static/img/sdfdsfa.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.SendMessage}}
					</view>
				</view>
				<view class="col" @tap="skkdkdfer">
					<image src="../../static/img/sdfdsfb.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.UploadFile}}
					</view>
				</view>
				<!-- <view class="col" >
					<image src="../../static/img/sdfdsfc.png" class="kkjxeert"></image>
					<view class="z6 fz28">
						{{kjhx.UploadImage}}
					</view>
				</view> -->
			</view>
		</view>
		<view class="hhghgxert" v-if="dfdg">
			<view class="kjhxertyx pd">
				<view class="kjhjxderert bgff pd pt30 ">
					<textarea value="" class="fz30 z3 fdrtyuser w100 pt20" :placeholder="kjhx.TypeContentInHere" v-model="fasohgheer" />
					<view class="row fz32 z9 cen fdgtyy7sze">
					<view class="col"  @tap="dfdg=false">
						{{kjhx.Close}}
					</view>
					<view class="col ye" @tap="fasongder">
						{{kjhx.Send}}
					</view>
				</view>
			</view>
		</view>
	</view>
	
	  <view ref="input" class="input">  
	
	        </view> 
	</view>
</template>
<script>
	export default {
		data() {
			return {
				dfdg:false,
				fasohgheer:''
			}
		},
		components: {
			
		},
		computed:{
			kjhx(){
				return this.$store.state.lanser
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.Control
			})
		},
		onShow(){
			var dxcr = document.getElementsByClassName("uni-actionsheet__action")
			   dxcr[0].children[0].innerText =`${this.kjhx.Cancel}`
		},
		methods: {
			jkhjhbnxeer(e){
				console.log(e)
			},
			// 发送图片
			fasongimg(){
				uni.chooseImage({
				    success: async (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						await this.post('vod/Server/UploadFile','Image-Upload',null,3,tempFilePaths[0])
						uni.showToast({
							title:this.$store.state.lanser.SuccessDescription
						})
					}
				})
			},
			ljhad(){
				uni.showActionSheet({
					itemList:[this.$store.state.lanser.EnableBluetooth,this.$store.state.lanser.DisableBluetooth],
					itemColor:"#FFD33E",
					success: (a) => {
						// 开启蓝牙
						if (a.tapIndex == 0) {
							this.kkjsdddv("vod/server/sendmessage", "Control-Bluetooth", "1")
						}else if (a.tapIndex == 1) { // 关闭蓝牙
							this.kkjsdddv("vod/server/sendmessage", "Control-Bluetooth", "0")
						}
					}
				})
			},
			skkdkdfer(){
					uni.showActionSheet({
						itemList:[this.$store.state.lanser.UploadFile,this.$store.state.lanser.UploadImage],
						itemColor:"#FFD33E",
						success: (e) => {
							if (e.tapIndex == 0){
								this.kkjhhnss()
							}
							if (e.tapIndex == 1){
								this.fasongimg()
							}
						}
					})
			},
			async kkjsdddv(a,b,c){
				let sdeer = await this.post(a,b,c)
			},
			// 发送内容
			async fasongder(){
				if (!this.fasohgheer){
					uni.showToast({
						icon:"none",
						title:'请输入发送的内容'
					})
					 return
				}
				await this.kkjsdddv("vod/server/sendmessage", "Message-Scroll", this.fasohgheer)
				this.dfdg = false
				this.fasohgheer = ''
			},
			kkjhhnss (){
				uni.chooseVideo({
				    success: async (res) => {
				        const tempFilePaths = res.tempFilePath;
				        uni.showLoading({
				        	title:'图片上传中'
				        })
						await this.post('vod/Server/UploadFile','File-Upload',null,3,tempFilePaths)
					}
				})
			}
		},
		mounted() {
		}
	}
</script>
<style scoped>
	.dfgdftyxewrt{
		border-radius: 8upx;
		background: linear-gradient(to right,#FFA23C, #FFCF3C);
		height: 260upx;
	}
	.parentse {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20upx;
		grid-row-gap: 0px;
	}
	.jhbxert{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 16upx;
		grid-row-gap: 0px;
		margin-top: 20upx;
	}
	.kkjxeert{
		width: 96upx;
		height: 96upx;
		
	}
	.kjhxertyx{
		width: 100%;
		height: 376upx;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		
	}
	.fdrtyuser{
		height: 242upx;
		border: 1px solid #D8D8D8;
		border-radius: 8upx;
	}
	.fdgtyy7sze{
		line-height: 100upx;
	}
	.kjhjxderert{
		border-radius: 8upx;
	}
</style>
