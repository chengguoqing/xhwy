<template>
	<view class="pt40">
		<view class="cen">
			<image src="../../static/img/ffgfa.png" class="kjjhhnxert cz"></image>
			<view class="fz30 z6 mt10">
				外星球TaxkiPilanet
			</view>
		</view>
		<uni-list class="mt40 ghyyusert">
			<uni-list-item :title="$store.state.lanser.ChangeLanguage" thumb="../../static/img/ffgfb.png" @tap="yuyans"></uni-list-item>
			<uni-list-item :title="$store.state.lanser.SendMessage"  thumb="../../static/img/ffgfc.png" @tap="dfdg=true"></uni-list-item>
			<uni-list-item :title="$store.state.lanser.UploadFile"  thumb="../../static/img/ffgfd.png"></uni-list-item>
		</uni-list>
		<view class="hhghgxert" v-if="dfdg">
			<view class="kjhxertyx pd">
				<view class="kjhjxderert bgff pd pt30 ">
					<textarea value=""  class="fz30 z3 fdrtyuser w100 pt20" placeholder="在此输入内容" />
					<view class="row fz32 z9 cen fdgtyy7sze">
						<view class="col"  @tap="dfdg=false">
							{{$store.state.lanser.Close}}
						</view>
						<view class="col ye" @tap="dfdg=false">
							{{$store.state.lanser.SendMessage}}
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
				dfdg:false
			}
		},
		components: {},
		methods: {
			yuyans () {
				uni.showActionSheet({
					itemList:['中文','English','ئۇيغۇرچە'     ],
					itemColor:"#FFD33E",
					success: (a) => {
						this.$store.commit('setlanser',a.tapIndex)
					}
				})
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.Other
			})
		},
		mounted() {
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
