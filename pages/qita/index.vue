<template>
	<view class="pt40">
		<view class="cen">
			<image src="../../static/img/ffgfa.png" class="kjjhhnxert cz"></image>
			<view class="fz30 z6 mt10">
				外星球TaxkiPilanet
			</view>
		</view>
		<uni-list class="mt40 ghyyusert">
			<uni-list-item :title="kjhx.ChangeLanguage" thumb="../../static/img/ffgfb.png" @tap="yuyans"></uni-list-item>
			<uni-list-item :title="kjhx.SuggestionAndRequests"  thumb="../../static/img/yiians.png" @tap="dfdg=true"></uni-list-item>
			<uni-list-item :title="kjhx.UploadFile"  thumb="../../static/img/ffgfd.png"></uni-list-item>
		</uni-list>
		<view class="hhghgxert" v-if="dfdg">
			<view class="kjhxertyx pd">
				<view class="kjhjxderert bgff pd pt30 ">
					<textarea value=""  class="fz30 z3 fdrtyuser w100 pt20" :placeholder="kjhx.TypeContentInHere" v-model="fasohgheer" />
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
	</view>
</template>
<script>
	export default {
		data() {
			return {
				fasohgheer:'',
				dfdg:false
			}
		},
		components: {},
		methods: {
			yuyans () {
				uni.showActionSheet({
					itemList:['中文','ئۇيغۇرچە'      ,'English'],
					itemColor:"#FFD33E",
					success: (a) => {
						this.$store.commit('setlanser',a.tapIndex)
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
				await this.kkjsdddv("https://oybab.net/Wechat/Advice", "Message-Advice", this.fasohgheer)
				this.dfdg = false
				this.fasohgheer = ''
			}
		},
		computed:{
			kjhx(){
				return this.$store.state.lanser
			}
		},
		onShow() {
			var dxcr = document.getElementsByClassName("uni-actionsheet__action")
			   dxcr[0].children[0].innerText =`${this.kjhx.Cancel}`
			
		},
		mounted() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.Other
			})
		}
	}
</script>
<style scoped>
	.kjjhhnxert{
		width: 430upx;
		height: 430upx;
	}
	.ghyyusert{
		border-top: 10upx solid #EFEFEF;
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
